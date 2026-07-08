import { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

import { t as Link } from './navigation-Ca-dY7zl.js';
import { b as envConfigs } from './schema-DUwBz_C6.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/components/built-with-shipany.tsx
function getHostname(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}
function BuiltWithShipAny({ className }) {
  return /* @__PURE__ */ jsxs('a', {
    href: `https://shipany.ai/?utm_source=${encodeURIComponent(getHostname(envConfigs.app_url))}`,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: cn(
      'inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-3.5 py-1.5 text-sm font-medium text-neutral-100 transition-colors hover:border-neutral-500 hover:bg-neutral-800',
      className
    ),
    children: [
      /* @__PURE__ */ jsx('span', { children: 'Built with' }),
      /* @__PURE__ */ jsx('span', {
        'aria-hidden': true,
        className: 'text-red-500',
        children: '❤️',
      }),
      /* @__PURE__ */ jsx('span', { children: 'MaynorAI' }),
    ],
  });
}
//#endregion
//#region src/blocks/footer.tsx
function Footer() {
  const year = /* @__PURE__ */ new Date().getFullYear();
  return /* @__PURE__ */ jsx('footer', {
    className: 'ia-foot',
    style: {
      fontFamily:
        'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
      padding: '64px 0 32px',
      color: '#33ff33',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    },
    children: /* @__PURE__ */ jsxs('div', {
      className: 'mx-auto',
      style: {
        maxWidth: '1080px',
        padding: '0 24px',
      },
      children: [
        /* @__PURE__ */ jsxs('div', {
          className: 'mb-12 grid grid-cols-1 gap-8 md:grid-cols-3',
          children: [
            /* @__PURE__ */ jsxs('div', {
              children: [
                /* @__PURE__ */ jsxs(Link, {
                  to: '/',
                  className:
                    'ia-foot-brand ia-brand mb-3 flex items-center no-underline',
                  style: { color: '#33ff33' },
                  children: [
                    /* @__PURE__ */ jsx('img', {
                      src: '/images/brand/logo.png',
                      alt: '',
                      width: 28,
                      height: 28,
                      style: {
                        borderRadius: '7px',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: 'rgba(0,0,0,0.4) 0 0 0 1px',
                        marginRight: '9px',
                      },
                    }),
                    /* @__PURE__ */ jsx('span', {
                      style: {
                        fontFamily:
                          '"Pixelify Sans", ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
                        fontSize: '17.6px',
                        fontWeight: 600,
                        color: '#ffffff',
                        textShadow: '0 0 6px rgba(51,255,51,0.55)',
                        whiteSpace: 'nowrap',
                      },
                      children: 'Image to ASCII',
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx('p', {
                  style: {
                    fontSize: '14px',
                    lineHeight: '22px',
                    color: 'rgba(255, 255, 255, 0.55)',
                    margin: 0,
                  },
                  children:
                    'An in-browser image-to-ASCII converter. Drop in a photo or generate one with AI — it all runs on your device.',
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              children: [
                /* @__PURE__ */ jsx('h4', {
                  style: {
                    fontSize: '11.52px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    letterSpacing: '0.18em',
                    color: 'rgba(255, 255, 255, 0.42)',
                    textTransform: 'uppercase',
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    marginBottom: '12px',
                  },
                  children: 'pages/',
                }),
                /* @__PURE__ */ jsxs('ul', {
                  className: 'm-0 list-none space-y-1 p-0',
                  children: [
                    /* @__PURE__ */ jsxs('li', {
                      style: {
                        fontFamily: 'ui-monospace, Menlo, monospace',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.55)',
                      },
                      children: [
                        '├─',
                        ' ',
                        /* @__PURE__ */ jsx('a', {
                          href: '#top',
                          className:
                            'text-[#33ff33]/70 no-underline transition-colors hover:text-[#33ff33]',
                          children: 'home',
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs('li', {
                      style: {
                        fontFamily: 'ui-monospace, Menlo, monospace',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.55)',
                      },
                      children: [
                        '├─',
                        ' ',
                        /* @__PURE__ */ jsx('a', {
                          href: '#usecases',
                          className:
                            'text-[#33ff33]/70 no-underline transition-colors hover:text-[#33ff33]',
                          children: 'usecases',
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs('li', {
                      style: {
                        fontFamily: 'ui-monospace, Menlo, monospace',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.55)',
                      },
                      children: [
                        '└─',
                        ' ',
                        /* @__PURE__ */ jsx('a', {
                          href: '#faq',
                          className:
                            'text-[#33ff33]/70 no-underline transition-colors hover:text-[#33ff33]',
                          children: 'faqs',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              children: [
                /* @__PURE__ */ jsx('h4', {
                  style: {
                    fontSize: '11.52px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    letterSpacing: '0.18em',
                    color: 'rgba(255, 255, 255, 0.42)',
                    textTransform: 'uppercase',
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    marginBottom: '12px',
                  },
                  children: 'start/',
                }),
                /* @__PURE__ */ jsx('ul', {
                  className: 'm-0 list-none p-0',
                  children: /* @__PURE__ */ jsxs('li', {
                    style: {
                      fontFamily: 'ui-monospace, Menlo, monospace',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.55)',
                    },
                    children: [
                      '└─',
                      ' ',
                      /* @__PURE__ */ jsx('a', {
                        href: '#tool',
                        className:
                          'text-[#33ff33]/70 no-underline transition-colors hover:text-[#33ff33]',
                        children: '▸ open tool',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsxs('div', {
          className:
            'flex flex-col items-center justify-between gap-3 pt-5 sm:flex-row',
          style: { borderTop: '1px solid rgba(255, 255, 255, 0.06)' },
          children: [
            /* @__PURE__ */ jsx(BuiltWithShipAny, {}),
            /* @__PURE__ */ jsxs('span', {
              style: {
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.5)',
              },
              children: ['© ', year, ' Image to ASCII. All rights reserved.'],
            }),
          ],
        }),
      ],
    }),
  });
}
//#endregion
//#region src/components/site-header.tsx
function SiteHeader({ navLinks: _navLinks }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return /* @__PURE__ */ jsxs('header', {
    className: 'sticky top-0 z-[100] h-16 w-full',
    style: {
      backgroundColor: 'rgba(4, 4, 6, 0.78)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      transition: 'background 0.2s, backdrop-filter 0.2s',
      fontFamily:
        'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
      fontSize: '16px',
      lineHeight: '20px',
    },
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'mx-auto flex h-16 items-center justify-between gap-8',
        style: {
          maxWidth: '1728px',
          padding: '0 156px',
        },
        children: [
          /* @__PURE__ */ jsxs(Link, {
            to: '/',
            className: 'flex items-center no-underline',
            style: { color: '#33ff33' },
            children: [
              /* @__PURE__ */ jsx('img', {
                src: '/images/brand/logo.png',
                alt: '',
                width: 28,
                height: 28,
                style: {
                  borderRadius: '7px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: 'rgba(0,0,0,0.4) 0 0 0 1px',
                  marginRight: '9px',
                },
              }),
              /* @__PURE__ */ jsx('span', {
                style: {
                  fontFamily:
                    '"Pixelify Sans", ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
                  fontSize: '17.6px',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  color: '#ffffff',
                  textShadow: '0 0 6px rgba(51,255,51,0.55)',
                  whiteSpace: 'nowrap',
                },
                children: 'Image to ASCII',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('nav', {
            className:
              'absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-[14px] md:flex',
            children: [
              /* @__PURE__ */ jsx('a', {
                href: '#usecases',
                className:
                  'whitespace-nowrap text-[#33ff33]/85 no-underline transition-opacity duration-150 hover:text-[#33ff33]',
                children: 'usecases',
              }),
              /* @__PURE__ */ jsx('a', {
                href: '#faq',
                className:
                  'whitespace-nowrap text-[#33ff33]/85 no-underline transition-opacity duration-150 hover:text-[#33ff33]',
                children: 'faq',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('div', {
            className: 'hidden items-center gap-0.5 md:flex',
            children: [
              /* @__PURE__ */ jsx('span', {
                className: 'block h-7 w-[3px] bg-[#33ff33]',
              }),
              /* @__PURE__ */ jsx('a', {
                href: '#tool',
                className:
                  'flex h-7 items-center px-3 text-[13px] leading-[13px] whitespace-nowrap no-underline',
                style: {
                  fontFamily:
                    '"GeistPixel-Square", ui-monospace, "SF Mono", Menlo, monospace',
                  backgroundColor: '#ff9d00',
                  color: '#0a0a0c',
                  boxShadow: 'rgba(255, 157, 0, 0.3) 0 0 8px 0',
                  transition: 'background 0.15s, box-shadow 0.15s',
                },
                children: '▸ open tool',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('button', {
            type: 'button',
            className:
              'relative z-[250] ml-5 flex h-10 w-10 flex-col items-center justify-center gap-[5px] p-2 md:hidden',
            onClick: () => setMobileOpen(!mobileOpen),
            'aria-label': mobileOpen ? 'Close menu' : 'Open menu',
            'aria-expanded': mobileOpen,
            children: [
              /* @__PURE__ */ jsx('span', {
                className:
                  'inline-block h-[1.5px] w-[22px] bg-[#33ff33] transition-all duration-[0.22s]',
                style: mobileOpen
                  ? { transform: 'rotate(45deg) translate(3px, 3px)' }
                  : {},
              }),
              /* @__PURE__ */ jsx('span', {
                className:
                  'inline-block h-[1.5px] w-[22px] bg-[#33ff33] transition-all duration-[0.22s]',
                style: mobileOpen ? { opacity: 0 } : {},
              }),
              /* @__PURE__ */ jsx('span', {
                className:
                  'inline-block h-[1.5px] w-[22px] bg-[#33ff33] transition-all duration-[0.22s]',
                style: mobileOpen
                  ? { transform: 'rotate(-45deg) translate(3px, -3px)' }
                  : {},
              }),
            ],
          }),
        ],
      }),
      mobileOpen &&
        /* @__PURE__ */ jsx('div', {
          className: 'px-4 pt-2 pb-4 md:hidden',
          style: {
            backgroundColor: '#0a0a0c',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          },
          children: /* @__PURE__ */ jsxs('nav', {
            className: 'flex flex-col gap-2',
            children: [
              /* @__PURE__ */ jsx('a', {
                href: '#usecases',
                className:
                  'rounded-md px-3 py-2 text-sm text-[#33ff33]/85 no-underline',
                onClick: () => setMobileOpen(false),
                children: 'usecases',
              }),
              /* @__PURE__ */ jsx('a', {
                href: '#faq',
                className:
                  'rounded-md px-3 py-2 text-sm text-[#33ff33]/85 no-underline',
                onClick: () => setMobileOpen(false),
                children: 'faq',
              }),
              /* @__PURE__ */ jsx('a', {
                href: '#tool',
                className:
                  'rounded-md px-3 py-2 text-sm text-[#33ff33] no-underline',
                onClick: () => setMobileOpen(false),
                children: '▸ open tool',
              }),
            ],
          }),
        }),
    ],
  });
}
//#endregion
//#region src/blocks/header.tsx
function Header() {
  return /* @__PURE__ */ jsx(SiteHeader, {});
}
//#endregion
export { Footer as n, Header as t };
