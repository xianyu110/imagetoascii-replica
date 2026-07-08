// The server might need a different approach. Let me use background process
import { spawn, spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'docs');

// 1. Clean and rebuild
console.log('Building...');
rmSync(DOCS, { recursive: true, force: true });
const build = spawnSync('pnpm', ['build'], {
  cwd: ROOT,
  stdio: 'pipe',
  env: { ...process.env, NITRO_PRESET: 'node-server' },
});
if (build.status !== 0) {
  console.error(build.stderr.toString());
  process.exit(1);
}
console.log('Build done.');

// 2. Copy client assets + public assets to docs/
for (const dir of ['assets', 'images', 'fonts', 'seo']) {
  const src = join(ROOT, 'dist', 'client', dir);
  if (existsSync(src)) cpSync(src, join(DOCS, dir), { recursive: true });
}
for (const dir of ['images', 'fonts', 'seo']) {
  const src = join(ROOT, 'public', dir);
  if (existsSync(src)) cpSync(src, join(DOCS, dir), { recursive: true });
}
// Copy server assets for SSR
const serverAssets = join(ROOT, 'dist', 'server', 'assets');
if (existsSync(serverAssets))
  cpSync(serverAssets, join(DOCS, 'assets'), { recursive: true });
console.log('Assets copied.');

// 3. Start server, fetch page
console.log('Starting server...');
const server = spawnSync('node', [join(ROOT, 'dist', 'server', 'server.js')], {
  cwd: ROOT,
  stdio: 'pipe',
  timeout: 10000,
  env: { ...process.env, PORT: '3000' },
});

const serverProcess = spawn(
  'node',
  [join(ROOT, 'dist', 'server', 'server.js')],
  {
    cwd: ROOT,
    stdio: 'pipe',
    env: { ...process.env, PORT: '3000' },
  }
);

await new Promise((r) => setTimeout(r, 6000));

let html = '';
try {
  const res = await fetch('http://localhost:3000/');
  html = await res.text();
  console.log(`Fetched ${html.length} bytes`);
} catch (e) {
  console.error('Fetch failed:', e.message);
  process.exit(1);
}
serverProcess.kill('SIGTERM');

// 4. Fix paths for GitHub Pages subpath
html = html.replace(/=(['"])\//g, '=$1/imagetoascii-replica/');

writeFileSync(join(DOCS, 'index.html'), html);
writeFileSync(join(DOCS, '.nojekyll'), '');
console.log(`✓ docs/ ready — index.html ${(html.length / 1024).toFixed(0)} KB`);
