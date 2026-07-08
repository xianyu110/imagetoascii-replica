// Tool Section — the actual image-to-ASCII converter tool UI
// Drop zone, tabs (Upload / Generate with AI), controls, result preview
// Matching imagetoascii.app tool section exactly

export function ToolSection() {
  return (
    <section
      id="tool"
      style={{
        padding: '64px 0 40px',
        width: '100%',
        background: 'transparent',
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
        }}
      >
        {/* Section header */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
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
            / IMAGE TO ASCII
          </p>
          <h2
            id="tool-title"
            style={{
              fontSize: '41.6px',
              fontWeight: 700,
              lineHeight: '45.76px',
              color: '#33ff33',
              textShadow: '0 0 6px rgba(51, 255, 51, 0.55)',
              margin: '8px 0 6px',
              fontFamily:
                'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
            }}
          >
            Image to ASCII — turn any photo into ASCII art
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
            Upload a photo, or describe one and let AI create it — then convert
            it to text art right in your browser. Free, no signup.
          </p>
        </div>

        {/* Mode tabs */}
        <div
          className="mx-auto flex gap-1.5"
          style={{
            marginTop: '22px',
            marginBottom: '16px',
            width: 'fit-content',
            backgroundColor: '#0a0a0e',
            padding: '4px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            className="tool__mode--active"
            style={{
              fontSize: '14.4px',
              fontWeight: 500,
              color: '#000000',
              backgroundColor: '#ffffff',
              padding: '8px 18px',
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              transition: '0.15s',
              fontFamily:
                'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
            }}
          >
            Upload image
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            style={{
              fontSize: '14.4px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.6)',
              backgroundColor: 'transparent',
              padding: '8px 18px',
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              transition: '0.15s',
              fontFamily:
                'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
            }}
          >
            Generate with AI
          </button>
        </div>

        {/* Drop zone */}
        <div
          className="mx-auto"
          style={{
            maxWidth: '640px',
          }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#08080c',
              padding: '40px 20px',
              borderRadius: '14px',
              border: '1px dashed rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              transition: '0.15s',
              textAlign: 'center',
            }}
          >
            {/* Upload icon */}
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{
                color: 'rgba(255, 255, 255, 0.55)',
                opacity: 0.85,
                marginBottom: '12px',
              }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span
              style={{
                fontSize: '16.32px',
                fontWeight: 600,
                color: '#ffffff',
                display: 'block',
              }}
            >
              Drop an image here
            </span>
            <span
              style={{
                fontSize: '13.12px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.45)',
                display: 'block',
                marginTop: '3px',
              }}
            >
              or click to browse — JPG, PNG, WebP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
