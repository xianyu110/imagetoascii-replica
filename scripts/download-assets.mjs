// Script to download all assets from imagetoascii.app
const ASSETS = [
  // Brand
  {
    url: 'https://imagetoascii.app/assets/brand/logo.png',
    dest: 'public/images/brand/logo.png',
  },
  {
    url: 'https://imagetoascii.app/assets/brand/favicon-32.png',
    dest: 'public/images/brand/favicon-32.png',
  },
  {
    url: 'https://imagetoascii.app/assets/brand/favicon-16.png',
    dest: 'public/images/brand/favicon-16.png',
  },
  {
    url: 'https://imagetoascii.app/assets/brand/apple-touch-icon.png',
    dest: 'public/images/brand/apple-touch-icon.png',
  },

  // Hero
  {
    url: 'https://imagetoascii.app/assets/hero/before.jpg',
    dest: 'public/images/hero/before.jpg',
  },
  {
    url: 'https://imagetoascii.app/assets/hero/after-green.png',
    dest: 'public/images/hero/after-green.png',
  },
  {
    url: 'https://imagetoascii.app/assets/hero/after-detailed.png',
    dest: 'public/images/hero/after-detailed.png',
  },
  {
    url: 'https://imagetoascii.app/assets/hero/after-blocks.png',
    dest: 'public/images/hero/after-blocks.png',
  },
  {
    url: 'https://imagetoascii.app/assets/hero/after-minimal.png',
    dest: 'public/images/hero/after-minimal.png',
  },

  // Use cases
  {
    url: 'https://imagetoascii.app/assets/usecases/websites-a.webp',
    dest: 'public/images/usecases/websites-a.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/websites-b.webp',
    dest: 'public/images/usecases/websites-b.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/wallpapers-a.webp',
    dest: 'public/images/usecases/wallpapers-a.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/wallpapers-b.webp',
    dest: 'public/images/usecases/wallpapers-b.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/posters-a.webp',
    dest: 'public/images/usecases/posters-a.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/posters-b.webp',
    dest: 'public/images/usecases/posters-b.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/stickers-a.webp',
    dest: 'public/images/usecases/stickers-a.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/stickers-b.webp',
    dest: 'public/images/usecases/stickers-b.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/readmes-a.webp',
    dest: 'public/images/usecases/readmes-a.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/readmes-b.webp',
    dest: 'public/images/usecases/readmes-b.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/covers-a.webp',
    dest: 'public/images/usecases/covers-a.webp',
  },
  {
    url: 'https://imagetoascii.app/assets/usecases/covers-b.webp',
    dest: 'public/images/usecases/covers-b.webp',
  },

  // Fonts
  {
    url: 'https://imagetoascii.app/landing-assets/fonts/GeistPixel-Square.woff2',
    dest: 'public/fonts/GeistPixel-Square.woff2',
  },
  {
    url: 'https://imagetoascii.app/landing-assets/fonts/GeistPixel-Square.ttf',
    dest: 'public/fonts/GeistPixel-Square.ttf',
  },

  // OG
  { url: 'https://imagetoascii.app/og.jpg', dest: 'public/seo/og.jpg' },
];

const fs = await import('fs');
const path = await import('path');
const https = await import('https');

async function downloadFile(url, destPath) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          https
            .get(res.headers.location, (res2) => {
              const chunks = [];
              res2.on('data', (chunk) => chunks.push(chunk));
              res2.on('end', () => {
                fs.writeFileSync(destPath, Buffer.concat(chunks));
                console.log(`✓ ${destPath}`);
                resolve();
              });
            })
            .on('error', reject);
          return;
        }
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          fs.writeFileSync(destPath, Buffer.concat(chunks));
          console.log(`✓ ${destPath}`);
          resolve();
        });
      })
      .on('error', (err) => {
        console.error(`✗ ${url}: ${err.message}`);
        resolve(); // continue on error
      });
  });
}

// Download in batches of 4 to be polite
const BATCH_SIZE = 4;
for (let i = 0; i < ASSETS.length; i += BATCH_SIZE) {
  const batch = ASSETS.slice(i, i + BATCH_SIZE);
  await Promise.all(batch.map((a) => downloadFile(a.url, a.dest)));
}

console.log('Done!');
