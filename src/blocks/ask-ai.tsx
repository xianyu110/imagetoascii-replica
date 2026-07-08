// Ask AI section — "Feeling fatigue? Ask AI"
// Terminal-style prompt showing AI generation capability

export function AskAISection() {
  return (
    <section
      id="ask-ai"
      className="ia-section ia-ask"
      style={{
        padding: '60px 0',
        fontFamily:
          'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
        color: '#33ff33',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1080px',
          padding: '0 24px',
        }}
      >
        {/* Section header */}
        <div className="text-center" style={{ marginBottom: '32px' }}>
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
            ❯ ask-ai_
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
            Feeling fatigue? Ask AI
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
            No source photo on hand? Switch the tool at the top to Generate with
            AI, describe the image you want, and it creates one and converts it
            straight to ASCII art.
          </p>
        </div>

        {/* ASCII art preview image */}
        <div className="ia-ask-art mx-auto" style={{ maxWidth: '640px' }}>
          <img
            src="/images/hero/after-green.png"
            alt="ASCII art portrait generated from an AI image"
            className="block w-full"
            style={{
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
