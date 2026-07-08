import type { ReactNode } from 'react';

// Use Cases Section — 6 cards in a horizontal scroll container
// Matching imagetoascii.app exactly

interface UseCase {
  slug: string;
  title: string;
  description: string;
  imageA: string;
  imageB: string;
  altA: string;
  altB: string;
  borderAlpha: number;
}

const USE_CASES: UseCase[] = [
  {
    slug: 'social.ascii',
    title: 'Social & avatars',
    description:
      'Turn a photo into an ASCII portrait for your X, Discord, or Reddit profile — a post that actually stops the scroll. Copy it as plain text or save a crisp PNG.',
    imageA: '/images/usecases/websites-a.webp',
    imageB: '/images/usecases/websites-b.webp',
    altA: 'ASCII art portrait used as a social media avatar',
    altB: 'Colorful ASCII art portrait for a social profile',
    borderAlpha: 0.306,
  },
  {
    slug: 'wallpapers.ascii',
    title: 'Wallpapers & lock screens',
    description:
      'Turn your pictures into a one-of-a-kind desktop or phone wallpaper. Pick a style, push the detail, and download a high-resolution PNG — no sign-up, no watermark.',
    imageA: '/images/usecases/wallpapers-a.webp',
    imageB: '/images/usecases/wallpapers-b.webp',
    altA: 'ASCII art wallpaper for desktop and phone',
    altB: 'Colorful ASCII art wallpaper example',
    borderAlpha: 0.455,
  },
  {
    slug: 'posters.ascii',
    title: 'Posters & prints',
    description:
      'Blow an ASCII render up into a poster, sticker, or zine page. The high-contrast character grid stays razor-sharp all the way to large-format print.',
    imageA: '/images/usecases/posters-a.webp',
    imageB: '/images/usecases/posters-b.webp',
    altA: 'ASCII art poster print example',
    altB: 'Colorful ASCII art poster example',
    borderAlpha: 0.08,
  },
  {
    slug: 'stickers.ascii',
    title: 'Merch & apparel',
    description:
      'Print an ASCII render on a tee, tote, or mug. The character grid holds up crisp at any size, from a small badge to a full back print.',
    imageA: '/images/usecases/stickers-a.webp',
    imageB: '/images/usecases/stickers-b.webp',
    altA: 'ASCII art printed on merch and apparel',
    altB: 'Colorful ASCII art for a t-shirt print',
    borderAlpha: 0.08,
  },
  {
    slug: 'readmes.ascii',
    title: 'READMEs & terminals',
    description:
      'Drop an ASCII banner into a GitHub README, a CLI splash screen, or your dotfiles. Copy the raw text and paste it straight in — no image hosting needed.',
    imageA: '/images/usecases/readmes-a.webp',
    imageB: '/images/usecases/readmes-b.webp',
    altA: 'ASCII art banner for a GitHub README',
    altB: 'Colorful ASCII art terminal banner',
    borderAlpha: 0.08,
  },
  {
    slug: 'covers.ascii',
    title: 'Album & cover art',
    description:
      'Turn a photo into cover art for a playlist, mixtape, or zine. Bold, textural, and unmistakably yours — exported at full resolution.',
    imageA: '/images/usecases/covers-a.webp',
    imageB: '/images/usecases/covers-b.webp',
    altA: 'ASCII art album cover',
    altB: 'Colorful ASCII art cover art',
    borderAlpha: 0.08,
  },
];

export function UseCasesSection() {
  return (
    <section
      id="usecases"
      className="ia-section ia-cases"
      style={{
        padding: '120px 0 80px',
        color: '#33ff33',
        fontFamily:
          'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
      }}
    >
      {/* Section header */}
      <div
        className="mx-auto text-center"
        style={{
          maxWidth: '1470px',
          padding: '0 24px',
          marginBottom: '48px',
        }}
      >
        <p
          style={{
            fontSize: '11.52px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.18em',
            color: 'rgba(255, 255, 255, 0.5)',
            textTransform: 'uppercase',
            margin: '0.72em 0',
            fontFamily: 'ui-monospace, Menlo, monospace',
          }}
        >
          ❯ usecases_
        </p>
        <h2
          style={{
            fontSize: '41.6px',
            fontWeight: 700,
            lineHeight: '45.76px',
            color: '#33ff33',
            textShadow: '0 0 6px rgba(51, 255, 51, 0.55)',
            margin: '8px 0 6px',
          }}
        >
          Where you can use ASCII art
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        className="flex gap-0 overflow-x-auto"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: 'max(129px, calc((100vw - 1470px) / 2))',
          paddingRight: '129px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {USE_CASES.map((useCase) => (
          <UseCaseCard key={useCase.slug} {...useCase} />
        ))}
      </div>
    </section>
  );
}

function UseCaseCard({
  slug,
  title,
  description,
  imageA,
  imageB,
  altA,
  altB,
  borderAlpha,
}: UseCase) {
  return (
    <div
      className="ia-case flex-shrink-0"
      style={{
        marginRight: '28px',
        width: 'calc((1470px - 28px * 5) / 3)',
        minWidth: '350px',
        backgroundColor: '#0a0a0c',
        border: `1px solid rgba(87, 255, 143, ${borderAlpha})`,
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        scrollSnapAlign: 'start',
      }}
    >
      {/* Slug label */}
      <p
        style={{
          fontSize: '11.52px',
          lineHeight: '20px',
          letterSpacing: '0.18em',
          color: 'rgba(255, 255, 255, 0.42)',
          textTransform: 'uppercase',
          fontFamily: 'ui-monospace, Menlo, monospace',
          marginBottom: '20px',
        }}
      >
        {slug}
      </p>

      {/* Image container — two overlapping images */}
      <div
        className="ia-case-media relative mb-6"
        style={{
          aspectRatio: '960 / 648',
          backgroundColor: '#08080c',
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <img
          src={imageA}
          alt={altA}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 1 }}
        />
        <img
          src={imageB}
          alt={altB}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 2, opacity: 0 }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = '0';
          }}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#33ff33',
          textShadow: '0 0 6px rgba(51, 255, 51, 0.55)',
          margin: '0 0 12px',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '15px',
          lineHeight: '22px',
          color: 'rgba(51, 255, 51, 0.7)',
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}
