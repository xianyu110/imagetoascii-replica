import { existsSync, readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';

import handler from './dist/server/server.js';

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';
const BASE_PATH = process.env.VITE_BASE_PATH || '';

const PUBLIC_DIR = new URL('./dist/client/', import.meta.url).pathname;
const STATIC_EXTENSIONS = new Set([
  '.js',
  '.css',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.webp',
  '.ico',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot',
  '.webm',
  '.mp4',
]);

// MIME types for static files
const MIME_TYPES = {
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = createServer(async (req, res) => {
  const url = new URL(
    req.url || '/',
    `http://${req.headers.host || 'localhost'}`
  );
  const path = url.pathname;

  const cleanPath =
    BASE_PATH && path.startsWith(BASE_PATH)
      ? path.slice(BASE_PATH.length) || '/'
      : path;

  // Serve static assets from dist/client/
  const ext = extname(cleanPath).toLowerCase();
  if (STATIC_EXTENSIONS.has(ext)) {
    const filePath = join(PUBLIC_DIR, cleanPath);
    if (existsSync(filePath)) {
      const content = readFileSync(filePath);
      const mime = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      res.end(content);
      return;
    }
  }

  // For everything else, let the SSR handler render
  try {
    // Build a proper Request object for the handler
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host || 'localhost';
    const requestUrl = `${protocol}://${host}${req.url}`;
    const request = new Request(requestUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    });

    const response = await handler.fetch(request);
    const html = await response.text();

    res.writeHead(response.status, {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Length': Buffer.byteLength(html),
    });
    res.end(html);
  } catch (err) {
    console.error('SSR error:', err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
