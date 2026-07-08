import { execSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'docs');
const BASE_PATH = '/imagetoascii-replica';
const SSR_PORT = '4179';
const BUILD_ENV = {
  ...process.env,
  NODE_ENV: 'production',
  TSS_ROUTER_BASEPATH: BASE_PATH,
  VITE_BASE_PATH: BASE_PATH,
  VITE_STATIC_EXPORT: 'true',
};

function withGithubPagesBase(html) {
  let fixed = html;

  fixed = fixed.replace(
    new RegExp(`=(['"])\\/(?!${BASE_PATH.slice(1)}(?:\\/|['"]))`, 'g'),
    `=$1${BASE_PATH}/`
  );

  for (const dir of ['assets', 'images', 'fonts', 'seo', 'imgs']) {
    fixed = fixed.replaceAll(`"/${dir}/`, `"${BASE_PATH}/${dir}/`);
    fixed = fixed.replaceAll(`'/${dir}/`, `'${BASE_PATH}/${dir}/`);
  }

  for (const file of ['favicon.svg', 'logo.svg']) {
    fixed = fixed.replaceAll(`"/${file}"`, `"${BASE_PATH}/${file}"`);
    fixed = fixed.replaceAll(`'/${file}'`, `'${BASE_PATH}/${file}'`);
  }

  return fixed;
}

function withGithubPagesCssBase(css) {
  return css.replace(
    /url\(\s*(['"]?)\/(assets|images|fonts|seo|imgs)\//g,
    `url($1${BASE_PATH}/$2/`
  );
}

function rewriteCssAssetUrls() {
  const assetsDir = join(DOCS, 'assets');
  if (!existsSync(assetsDir)) return;

  for (const file of readdirSync(assetsDir)) {
    if (!file.endsWith('.css')) continue;

    const path = join(assetsDir, file);
    const css = readFileSync(path, 'utf8');
    writeFileSync(path, withGithubPagesCssBase(css));
  }
}

console.log('Building GitHub Pages static export...');
execSync('rm -rf .output dist docs', { cwd: ROOT });
mkdirSync(DOCS, { recursive: true });

execSync('NITRO_PRESET=node-server pnpm build', {
  cwd: ROOT,
  stdio: 'inherit',
  env: { ...BUILD_ENV, NITRO_PRESET: 'node-server' },
});

const CLIENT = join(ROOT, 'dist', 'client');
if (existsSync(CLIENT)) {
  cpSync(CLIENT, DOCS, { recursive: true });
  rewriteCssAssetUrls();
}

// Now start the server and fetch the page
const { spawn } = await import('node:child_process');
const serverProcess = spawn('node', [join(ROOT, 'ssr-server.mjs')], {
  cwd: ROOT,
  stdio: 'pipe',
  env: { ...BUILD_ENV, PORT: SSR_PORT },
});

// Wait for server to start
await new Promise((resolve) => setTimeout(resolve, 4000));

let html = '';
try {
  const response = await fetch(`http://localhost:${SSR_PORT}${BASE_PATH}/`);
  html = withGithubPagesBase(await response.text());
  if (
    !html.includes('Image to ASCII') ||
    !html.includes('Drop an image here')
  ) {
    throw new Error('SSR output did not contain the Image to ASCII page');
  }
  console.log('✓ Page fetched successfully');
} catch (err) {
  console.error('Failed to fetch page:', err);
  process.exit(1);
} finally {
  serverProcess.kill();
}

// Write index.html and copy assets
writeFileSync(join(DOCS, 'index.html'), html);
writeFileSync(join(DOCS, '.nojekyll'), '');
console.log('✓ index.html saved to docs/');

// Copy public assets
const STATIC = join(ROOT, 'public');
for (const item of ['images', 'fonts', 'seo', 'favicon.svg', 'logo.svg']) {
  const src = join(STATIC, item);
  const dst = join(DOCS, item);
  if (existsSync(src)) {
    if (!existsSync(dst)) {
      cpSync(src, dst, { recursive: true });
    }
    console.log(`✓ ${item} copied`);
  }
}

console.log('\n✓ Static site ready at docs/');
