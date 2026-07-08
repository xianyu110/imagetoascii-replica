// FAQ Section — accordion items with terminal "$ " prompt prefix
// Matching imagetoascii.app exactly

const FAQ_ITEMS = [
  {
    question: 'What is Image to ASCII?',
    answer:
      'Image to ASCII is a free online tool that turns any image into text-based ASCII art. Upload a photo or generate one with AI, pick a character style, and the converter swaps each small region of the picture for a character that matches its brightness. The result is a picture drawn entirely out of text — export it as a PNG or copy it as plain text.',
  },
  {
    question: 'How do I convert an image to ASCII art?',
    answer:
      'Open the tool at the top of this page, upload a JPG, PNG, or WebP by dragging it onto the drop zone or clicking to browse. The image to ASCII converter processes it instantly in your browser. Adjust the character style, detail slider, and color toggle until you like it, then export as a PNG or copy the text.',
  },
  {
    question: 'Can I generate an image with AI instead of uploading one?',
    answer:
      'Yes — switch the Image source tab at the top of the tool to "Generate with AI", describe the image you want, and the AI creates one and converts it to ASCII art automatically. This is handy when you do not have the right photo on hand.',
  },
  {
    question: 'Is it free? Do I need to sign up?',
    answer:
      'The converter is completely free. There is no signup, no watermark, and no export limit. Everything runs in your browser, so there is no server cost to cover.',
  },
  {
    question: 'Do my images get uploaded to a server?',
    answer:
      'No. The conversion runs entirely on your device using an HTML5 canvas. Your photo never goes anywhere. Only the optional AI image generation sends a short text prompt to the image model — and even then, your prompt is not stored.',
  },
  {
    question: 'What can I export, and can I use it commercially?',
    answer:
      'You can export your ASCII art as a high-resolution PNG (up to 4× the preview resolution) or copy it as plain text straight to your clipboard. You own whatever you create — including for commercial use.',
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="ia-section ia-faq"
      style={{
        padding: '120px 0 100px',
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
            ❯ faqs_
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
            The questions we get asked
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
            Quick answers about Image to ASCII — what it does, how it works,
            privacy, and pricing.
          </p>
        </div>

        {/* Accordion items */}
        <div>
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group cursor-pointer"
              style={{
                borderTop:
                  index === 0 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '16px 0',
              }}
            >
              <summary
                className="flex items-center justify-between"
                style={{
                  listStyle: 'none',
                  color: '#33ff33',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 500,
                  fontFamily:
                    'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
                }}
              >
                <span>
                  <span
                    style={{
                      color: 'rgba(255, 255, 255, 0.42)',
                      marginRight: '8px',
                    }}
                  >
                    $
                  </span>
                  {item.question}
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="transition-transform duration-200 group-open:rotate-45"
                  style={{ flexShrink: 0, marginLeft: '12px' }}
                >
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="#33ff33"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </summary>
              <div
                style={{
                  marginTop: '12px',
                  fontSize: '15px',
                  lineHeight: '22px',
                  color: 'rgba(255, 255, 255, 0.62)',
                  paddingLeft: '20px',
                }}
              >
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
