import { Link } from '@/core/i18n/navigation';
import { BuiltWithShipAny } from '@/components/built-with-shipany';

// Footer matching imagetoascii.app exactly
// Terminal-style tree nav with green-on-black phosphor aesthetic

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="ia-foot"
      style={{
        fontFamily:
          'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
        padding: '64px 0 32px',
        color: '#33ff33',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1080px',
          padding: '0 24px',
        }}
      >
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand + description */}
          <div>
            <Link
              to="/"
              className="ia-foot-brand ia-brand mb-3 flex items-center no-underline"
              style={{ color: '#33ff33' }}
            >
              <img
                src="/images/brand/logo.png"
                alt=""
                width={28}
                height={28}
                style={{
                  borderRadius: '7px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: 'rgba(0,0,0,0.4) 0 0 0 1px',
                  marginRight: '9px',
                }}
              />
              <span
                style={{
                  fontFamily:
                    '"Pixelify Sans", ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
                  fontSize: '17.6px',
                  fontWeight: 600,
                  color: '#ffffff',
                  textShadow: '0 0 6px rgba(51,255,51,0.55)',
                  whiteSpace: 'nowrap',
                }}
              >
                Image to ASCII
              </span>
            </Link>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                color: 'rgba(255, 255, 255, 0.55)',
                margin: 0,
              }}
            >
              An in-browser image-to-ASCII converter. Drop in a photo or
              generate one with AI — it all runs on your device.
            </p>
          </div>

          {/* pages/ nav */}
          <div>
            <h4
              style={{
                fontSize: '11.52px',
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '0.18em',
                color: 'rgba(255, 255, 255, 0.42)',
                textTransform: 'uppercase',
                fontFamily: 'ui-monospace, Menlo, monospace',
                marginBottom: '12px',
              }}
            >
              pages/
            </h4>
            <ul className="m-0 list-none space-y-1 p-0">
              <li
                style={{
                  fontFamily: 'ui-monospace, Menlo, monospace',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.55)',
                }}
              >
                ├─{' '}
                <a
                  href="#top"
                  className="text-[#33ff33]/70 no-underline transition-colors hover:text-[#33ff33]"
                >
                  home
                </a>
              </li>
              <li
                style={{
                  fontFamily: 'ui-monospace, Menlo, monospace',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.55)',
                }}
              >
                ├─{' '}
                <a
                  href="#usecases"
                  className="text-[#33ff33]/70 no-underline transition-colors hover:text-[#33ff33]"
                >
                  usecases
                </a>
              </li>
              <li
                style={{
                  fontFamily: 'ui-monospace, Menlo, monospace',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.55)',
                }}
              >
                └─{' '}
                <a
                  href="#faq"
                  className="text-[#33ff33]/70 no-underline transition-colors hover:text-[#33ff33]"
                >
                  faqs
                </a>
              </li>
            </ul>
          </div>

          {/* start/ nav */}
          <div>
            <h4
              style={{
                fontSize: '11.52px',
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '0.18em',
                color: 'rgba(255, 255, 255, 0.42)',
                textTransform: 'uppercase',
                fontFamily: 'ui-monospace, Menlo, monospace',
                marginBottom: '12px',
              }}
            >
              start/
            </h4>
            <ul className="m-0 list-none p-0">
              <li
                style={{
                  fontFamily: 'ui-monospace, Menlo, monospace',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.55)',
                }}
              >
                └─{' '}
                <a
                  href="#tool"
                  className="text-[#33ff33]/70 no-underline transition-colors hover:text-[#33ff33]"
                >
                  ▸ open tool
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-3 pt-5 sm:flex-row"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
        >
          <BuiltWithShipAny />
          <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
            © {year} Image to ASCII. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
