// How It Works Section — long-form content explaining the ASCII converter
// Matching imagetoascii.app exactly

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="ia-section"
      style={{
        padding: '96px 0 48px',
        color: '#33ff33',
        fontFamily:
          'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '780px',
          padding: '0 24px',
        }}
      >
        {/* Section header */}
        <div className="text-center" style={{ marginBottom: '48px' }}>
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
            ❯ how-it-works_
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
            How the image to ASCII converter works
          </h2>
        </div>

        {/* Introduction */}
        <p
          style={{
            fontSize: '16px',
            lineHeight: '26px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '32px',
          }}
        >
          ASCII art is a picture made entirely out of text characters. The image
          to ASCII converter on this page looks at your photo one small cell at
          a time, measures how bright each cell is, and swaps it for a character
          from a ramp that runs from dense to sparse — a solid{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            @
          </code>{' '}
          stands in for the darkest areas and a light{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            .
          </code>{' '}
          or a blank space for the brightest. Line those characters up in a grid
          and the original picture reappears, drawn in nothing but type. Because
          every step runs in your browser on an HTML5 canvas, the image to ASCII
          conversion is instant and your photo never leaves your device.
        </p>

        <HowItWorksSubsection title="Upload a photo or generate one with AI">
          There are two ways to feed the image to ASCII tool. The first is to
          upload your own picture — drag a JPG, PNG or WebP onto the drop zone,
          or click to browse, and it is converted the moment it loads. The
          second is to describe an image in words and let AI create it for you:
          the prompt is sent to an image model, the picture comes back, and it
          is turned into ASCII art automatically. AI generation is handy when
          you do not have the right source photo on hand and just want a clean,
          high-contrast subject that reads well as text.
        </HowItWorksSubsection>

        <HowItWorksSubsection title="Character styles and controls">
          Not every image to ASCII conversion should look the same, so the tool
          ships four character styles.{' '}
          <strong style={{ color: 'rgba(255,255,255,0.85)' }}>
            Characters
          </strong>{' '}
          is the classic look, mapping brightness to a configurable ramp such as{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            @#S08Xx+=-;:,.
          </code>{' '}
          <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Detailed</strong>{' '}
          uses a much larger set of glyphs for fine gradients and smooth
          shading.{' '}
          <strong style={{ color: 'rgba(255,255,255,0.85)' }}>
            Block Chars
          </strong>{' '}
          swaps in half and full block glyphs for a bold, dense, pixel-block
          feel, and{' '}
          <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Minimal</strong>{' '}
          keeps only a handful of characters for a clean, high-contrast result.
          On top of the style you can push the detail slider to change how many
          characters make up the grid, flip the mapping with Invert, and turn
          Color on or off to either sample the original colours or render crisp
          monochrome text art.
        </HowItWorksSubsection>

        <HowItWorksSubsection title="Getting the best image to ASCII results">
          A few habits make a big difference. High-contrast images with one
          clear subject convert best — a face, an animal, a logo or a bold
          silhouette will always read more clearly than a busy, low-contrast
          scene. Simple backgrounds help too, since empty space becomes blank
          characters and lets the subject stand out. If your first ASCII art
          looks muddy, raise the detail, try the Detailed character set, or
          toggle Invert, because dark-on-light and light-on-dark photos each
          favour a different setting. When you are happy, download the result as
          a PNG image or copy it as plain text to paste anywhere.
        </HowItWorksSubsection>

        <HowItWorksSubsection title="Where people use ASCII art">
          Text art has a life far beyond the terminal. People drop ASCII renders
          into GitHub READMEs and code comments, use them as retro website hero
          backgrounds and 404 pages, post them on social media for a
          distinctive, on-brand look, print them as posters and zines, and set
          them as desktop or phone wallpapers. Because the output of the image
          to ASCII converter is just characters (or a PNG of them), it fits
          anywhere text or an image can go — a post, a chat message, a slide or
          a sticker.
        </HowItWorksSubsection>

        <HowItWorksSubsection title="What characters make good ASCII art">
          The characters that make up ASCII art are chosen for their visual
          weight — how much ink each one puts on the page. A dense character
          like{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            @
          </code>
          ,{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            #
          </code>{' '}
          or a block glyph reads as a dark tone, while a thin character like{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            .
          </code>
          ,{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            :
          </code>
          ,{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            ;
          </code>{' '}
          or a blank space reads as a light tone. Arrange them from dark to
          light and you have a grayscale ramp that any brightness value can map
          onto. The classic ramp is{' '}
          <code
            style={{
              color: '#33ff33',
              backgroundColor: 'rgba(51,255,51,0.08)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            @#S08Xx+=-;:,.
          </code>{' '}
          but you can type your own set of characters into the image to ASCII
          tool and watch the output change in real time: a longer ramp gives
          smoother gradients, and a shorter one gives a punchier, more graphic
          look.
        </HowItWorksSubsection>

        <HowItWorksSubsection title="Image to ASCII art vs pixel art">
          Image to ASCII art and pixel art both simplify a picture into a grid,
          but they use different building blocks. ASCII art fills each cell with
          a text character chosen by brightness, so the result reads like
          printed type and can be copied as plain text. Pixel art fills each
          cell with a solid block of colour, so it reads like an 8-bit video
          game and only works as an image. This converter focuses on the
          text-character approach, which is why every image to ASCII result can
          be exported as a PNG or copied straight into a README, a chat or a
          code comment.
        </HowItWorksSubsection>

        <HowItWorksSubsection title="Free, private and no signup">
          The image to ASCII converter is completely free. There is no signup,
          no watermark and no export limit, and the ASCII conversion itself runs
          entirely on your own device, so your uploaded photo is never sent to a
          server. Only the optional AI image generation talks to the network,
          and even then only your short text prompt is sent. Open the tool at
          the top of the page, drop in an image or describe one, and you have
          shareable ASCII art in seconds.
        </HowItWorksSubsection>
      </div>
    </section>
  );
}

function HowItWorksSubsection({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <h3
        style={{
          fontSize: '22px',
          fontWeight: 700,
          lineHeight: '30px',
          color: 'rgba(255, 255, 255, 0.9)',
          textShadow: '0 0 6px rgba(51, 255, 51, 0.55)',
          margin: '0 0 10px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '15px',
          lineHeight: '24px',
          color: 'rgba(255, 255, 255, 0.65)',
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
