import { execSync } from 'node:child_process';
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'docs');

// Clean docs directory
if (existsSync(DOCS)) rmSync(DOCS, { recursive: true });
mkdirSync(DOCS, { recursive: true });

// Build with Nitro static preset
console.log('Building static site...');
execSync('NITRO_PRESET=static pnpm build', { cwd: ROOT, stdio: 'inherit' });

// Copy built assets from .output/public/ to docs/
const PUBLIC = join(ROOT, '.output', 'public');
if (existsSync(PUBLIC)) {
  cpSync(PUBLIC, DOCS, { recursive: true });
}

// The Nitro static preset doesn't produce index.html for SPA routes.
// We need to render the page ourselves. Let's try the node-server preset instead.
console.log('Switching to node-server preset for SSR rendering...');
execSync('rm -rf .output dist docs', { cwd: ROOT });
execSync('NITRO_PRESET=node-server pnpm build', {
  cwd: ROOT,
  stdio: 'inherit',
});

// Now start the server and fetch the page
const { spawn } = await import('node:child_process');
const serverProcess = spawn(
  'node',
  [join(ROOT, '.output', 'server', 'index.mjs')],
  {
    cwd: ROOT,
    stdio: 'pipe',
  }
);

// Wait for server to start
await new Promise((resolve) => setTimeout(resolve, 4000));

let html = '';
try {
  const response = await fetch('http://localhost:3000/');
  html = await response.text();
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
