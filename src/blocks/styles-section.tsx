// Styles Section — 4 character style tabs: Characters, Detailed, Block Chars, Minimal
// Each tab shows a different ASCII art style image
// Matching imagetoascii.app exactly

const STYLES = [
  {
    id: 'characters',
    label: 'Characters',
    description:
      'Classic ASCII art — characters mapped to brightness with a configurable ramp @#S08Xx+=-;:,.',
    image: '/images/hero/after-green.png',
    alt: 'Photo turned into ASCII art in the Characters style',
  },
  {
    id: 'detailed',
    label: 'Detailed',
    description:
      'A dense character set for fine gradients and smooth shading. Best for photos and detailed portraits.',
    image: '/images/hero/after-detailed.png',
    alt: 'Photo turned into ASCII art in the Detailed style',
  },
  {
    id: 'blocks',
    label: 'Block Chars',
    description:
      'Half and full block glyphs for a bold, pixel-block feel. High contrast, punchy, graphic.',
    image: '/images/hero/after-blocks.png',
    alt: 'Photo turned into ASCII art in the Block Chars style',
  },
  {
    id: 'minimal',
    label: 'Minimal',
    description:
      'A handful of characters for a clean, high-contrast look. Reads clearly at any size.',
    image: '/images/hero/after-minimal.png',
    alt: 'Photo turned into ASCII art in the Minimal style',
  },
];

export function StylesSection() {
  return (
    <section
      id="styles"
      className="ia-section ia-styles"
      style={{
        padding: '96px 0 0',
        color: '#33ff33',
        fontFamily:
          'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1470px',
          padding: '0 24px',
        }}
      >
        {/* Section header */}
        <div className="text-center" style={{ marginBottom: '36px' }}>
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
            ❯ styles_
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
            Image to ASCII, four character styles
          </h2>
          <p
            style={{
              fontSize: '15.2px',
              lineHeight: '20px',
              color: 'rgba(255, 255, 255, 0.55)',
              margin: '0 auto',
              maxWidth: '560px',
            }}
          >
            Turn your image into ASCII art in four built-in character styles —
            tune the detail, invert and color, then export.
          </p>
        </div>

        {/* Tab buttons */}
        <div
          className="mx-auto flex justify-center gap-2"
          style={{
            marginBottom: '24px',
            backgroundColor: '#0a0a0e',
            padding: '4px',
            borderRadius: '10px',
            width: 'fit-content',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            style={{
              fontSize: '13.6px',
              fontWeight: 500,
              color: '#ffffff',
              backgroundColor: '#1a1a1e',
              padding: '8px 18px',
              borderRadius: '7px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              cursor: 'pointer',
              transition: '0.15s',
              fontFamily:
                'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
            }}
          >
            Characters
          </button>
          {['Detailed', 'Block Chars', 'Minimal'].map((label) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected="false"
              style={{
                fontSize: '13.6px',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'transparent',
                padding: '8px 18px',
                borderRadius: '7px',
                border: '1px solid transparent',
                cursor: 'pointer',
                transition: '0.15s',
                fontFamily:
                  'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Style preview image */}
        <div className="ia-style-media mx-auto" style={{ maxWidth: '720px' }}>
          <img
            src="/images/hero/after-green.png"
            alt="Photo turned into ASCII art in the Characters style"
            className="block w-full"
            style={{
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          />
        </div>

        {/* Style description */}
        <p
          className="mx-auto text-center"
          style={{
            maxWidth: '480px',
            marginTop: '20px',
            fontSize: '14px',
            lineHeight: '22px',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          Classic ASCII art — characters mapped to brightness with a
          configurable ramp @#S08Xx+=-;:,.
        </p>
      </div>
    </section>
  );
}
