// Final CTA Section — large panel with ASCII art overlay + heading + CTA
// Matching imagetoascii.app final section exactly

export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="ia-section ia-final"
      style={{
        padding: '80px 0',
        color: '#33ff33',
        fontFamily:
          'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1080px',
          padding: '0 24px',
          position: 'relative',
        }}
      >
        {/* ASCII art panel */}
        <div
          className="ia-final-panel relative overflow-hidden rounded-xl"
          style={{
            backgroundColor: '#0a0a0e',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '48px',
            minHeight: '400px',
          }}
        >
          {/* ASCII art background image */}
          <img
            src="/images/hero/after-green.png"
            alt="ASCII art example"
            className="absolute inset-0 object-cover"
            style={{
              width: '50%',
              height: '100%',
              left: 'auto',
              right: 0,
              zIndex: 1,
              opacity: 0.9,
            }}
          />

          {/* Gradient mask */}
          <div
            className="ia-final-mask absolute inset-0"
            style={{
              zIndex: 2,
              background:
                'linear-gradient(90deg, rgba(4,4,6,0.95) 0%, rgba(4,4,6,0.85) 30%, rgba(4,4,6,0.4) 60%, rgba(4,4,6,0) 100%)',
            }}
          />

          {/* Content */}
          <div className="relative z-[3]" style={{ maxWidth: '50%' }}>
            <p
              style={{
                fontSize: '11.52px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.18em',
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
                marginBottom: '16px',
                fontFamily: 'ui-monospace, Menlo, monospace',
              }}
            >
              ❯ create-art_
            </p>

            <h2
              style={{
                fontSize: '41.6px',
                fontWeight: 700,
                lineHeight: '45.76px',
                color: '#33ff33',
                textShadow: '0 0 6px rgba(51, 255, 51, 0.55)',
                margin: '0 0 16px',
              }}
            >
              Drop an image, get ASCII art.
            </h2>

            <p
              style={{
                fontSize: '15.2px',
                lineHeight: '22px',
                color: 'rgba(255, 255, 255, 0.55)',
                marginBottom: '28px',
              }}
            >
              Every slider, every style, every effect updates the preview
              instantly, export at up to 4× resolution. Free forever.
            </p>

            <a
              href="#tool"
              className="inline-flex items-center"
              style={{
                fontFamily:
                  '"GeistPixel-Square", ui-monospace, "SF Mono", Menlo, monospace',
                fontSize: '16px',
                padding: '10px 24px',
                backgroundColor: '#ff9d00',
                color: '#0a0a0c',
                boxShadow: 'rgba(255, 157, 0, 0.3) 0 0 8px 0',
                transition: 'background 0.15s, box-shadow 0.15s',
                textDecoration: 'none',
              }}
            >
              Try it out now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
