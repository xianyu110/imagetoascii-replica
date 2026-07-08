import { useState } from 'react';

import { Link } from '@/core/i18n/navigation';

// Phosphor-green CRT header matching imagetoascii.app exactly

export function SiteHeader({
  navLinks: _navLinks,
}: {
  navLinks?: Array<{ href: string; label: string; external?: boolean }>;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-[100] h-16 w-full"
      style={{
        backgroundColor: 'rgba(4, 4, 6, 0.78)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'background 0.2s, backdrop-filter 0.2s',
        fontFamily:
          'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
        fontSize: '16px',
        lineHeight: '20px',
      }}
    >
      <div
        className="mx-auto flex h-16 items-center justify-between gap-8"
        style={{ maxWidth: '1728px', padding: '0 156px' }}
      >
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center no-underline"
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
              letterSpacing: '0.01em',
              color: '#ffffff',
              textShadow: '0 0 6px rgba(51,255,51,0.55)',
              whiteSpace: 'nowrap',
            }}
          >
            Image to ASCII
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-[14px] md:flex">
          <a
            href="#usecases"
            className="whitespace-nowrap text-[#33ff33]/85 no-underline transition-opacity duration-150 hover:text-[#33ff33]"
          >
            usecases
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap text-[#33ff33]/85 no-underline transition-opacity duration-150 hover:text-[#33ff33]"
          >
            faq
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-0.5 md:flex">
          <span className="block h-7 w-[3px] bg-[#33ff33]" />
          <a
            href="#tool"
            className="flex h-7 items-center px-3 text-[13px] leading-[13px] whitespace-nowrap no-underline"
            style={{
              fontFamily:
                '"GeistPixel-Square", ui-monospace, "SF Mono", Menlo, monospace',
              backgroundColor: '#ff9d00',
              color: '#0a0a0c',
              boxShadow: 'rgba(255, 157, 0, 0.3) 0 0 8px 0',
              transition: 'background 0.15s, box-shadow 0.15s',
            }}
          >
            ▸ open tool
          </a>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="relative z-[250] ml-5 flex h-10 w-10 flex-col items-center justify-center gap-[5px] p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className="inline-block h-[1.5px] w-[22px] bg-[#33ff33] transition-all duration-[0.22s]"
            style={
              mobileOpen
                ? { transform: 'rotate(45deg) translate(3px, 3px)' }
                : {}
            }
          />
          <span
            className="inline-block h-[1.5px] w-[22px] bg-[#33ff33] transition-all duration-[0.22s]"
            style={mobileOpen ? { opacity: 0 } : {}}
          />
          <span
            className="inline-block h-[1.5px] w-[22px] bg-[#33ff33] transition-all duration-[0.22s]"
            style={
              mobileOpen
                ? { transform: 'rotate(-45deg) translate(3px, -3px)' }
                : {}
            }
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="px-4 pt-2 pb-4 md:hidden"
          style={{
            backgroundColor: '#0a0a0c',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <nav className="flex flex-col gap-2">
            <a
              href="#usecases"
              className="rounded-md px-3 py-2 text-sm text-[#33ff33]/85 no-underline"
              onClick={() => setMobileOpen(false)}
            >
              usecases
            </a>
            <a
              href="#faq"
              className="rounded-md px-3 py-2 text-sm text-[#33ff33]/85 no-underline"
              onClick={() => setMobileOpen(false)}
            >
              faq
            </a>
            <a
              href="#tool"
              className="rounded-md px-3 py-2 text-sm text-[#33ff33] no-underline"
              onClick={() => setMobileOpen(false)}
            >
              ▸ open tool
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
