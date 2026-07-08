import { t as i, n as r } from './header-EHVYXHlC.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';

var a = e();
function o() {
  return (0, a.jsx)(`section`, {
    id: `ask-ai`,
    className: `ia-section ia-ask`,
    style: {
      padding: `60px 0`,
      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
      color: `#33ff33`,
    },
    children: (0, a.jsxs)(`div`, {
      className: `mx-auto`,
      style: { maxWidth: `1080px`, padding: `0 24px` },
      children: [
        (0, a.jsxs)(`div`, {
          className: `text-center`,
          style: { marginBottom: `32px` },
          children: [
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `11.52px`,
                fontWeight: 400,
                lineHeight: `20px`,
                letterSpacing: `0.18em`,
                color: `rgba(255, 255, 255, 0.5)`,
                textTransform: `uppercase`,
                margin: `0.72em 0`,
                fontFamily: `ui-monospace, Menlo, monospace`,
              },
              children: `❯ ask-ai_`,
            }),
            (0, a.jsx)(`h2`, {
              style: {
                fontSize: `41.6px`,
                fontWeight: 700,
                lineHeight: `45.76px`,
                color: `#33ff33`,
                textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
                margin: `8px 0 6px`,
              },
              children: `Don't have a photo? Ask AI`,
            }),
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `15.2px`,
                lineHeight: `20px`,
                color: `rgba(255, 255, 255, 0.55)`,
                margin: `0 auto`,
                maxWidth: `560px`,
              },
              children: `No source photo on hand? Switch the tool at the top to Generate with AI, describe the image you want, and it creates one and converts it straight to ASCII art.`,
            }),
          ],
        }),
        (0, a.jsx)(`div`, {
          className: `ia-ask-art mx-auto`,
          style: { maxWidth: `640px` },
          children: (0, a.jsx)(`img`, {
            src: `/images/hero/after-green.png`,
            alt: `ASCII art portrait generated from an AI image`,
            className: `block w-full`,
            style: {
              borderRadius: `14px`,
              border: `1px solid rgba(255, 255, 255, 0.08)`,
            },
          }),
        }),
      ],
    }),
  });
}
var s = [
  {
    question: `What is Image to ASCII?`,
    answer: `Image to ASCII is a free online tool that turns any image into text-based ASCII art. Upload a photo or generate one with AI, pick a character style, and the converter swaps each small region of the picture for a character that matches its brightness. The result is a picture drawn entirely out of text — export it as a PNG or copy it as plain text.`,
  },
  {
    question: `How do I convert an image to ASCII art?`,
    answer: `Open the tool at the top of this page, upload a JPG, PNG, or WebP by dragging it onto the drop zone or clicking to browse. The image to ASCII converter processes it instantly in your browser. Adjust the character style, detail slider, and color toggle until you like it, then export as a PNG or copy the text.`,
  },
  {
    question: `Can I generate an image with AI instead of uploading one?`,
    answer: `Yes — switch the Image source tab at the top of the tool to "Generate with AI", describe the image you want, and the AI creates one and converts it to ASCII art automatically. This is handy when you do not have the right photo on hand.`,
  },
  {
    question: `Is it free? Do I need to sign up?`,
    answer: `The converter is completely free. There is no signup, no watermark, and no export limit. Everything runs in your browser, so there is no server cost to cover.`,
  },
  {
    question: `Do my images get uploaded to a server?`,
    answer: `No. The conversion runs entirely on your device using an HTML5 canvas. Your photo never goes anywhere. Only the optional AI image generation sends a short text prompt to the image model — and even then, your prompt is not stored.`,
  },
  {
    question: `What can I export, and can I use it commercially?`,
    answer: `You can export your ASCII art as a high-resolution PNG (up to 4× the preview resolution) or copy it as plain text straight to your clipboard. You own whatever you create — including for commercial use.`,
  },
];
function c() {
  return (0, a.jsx)(`section`, {
    id: `faq`,
    className: `ia-section ia-faq`,
    style: {
      padding: `120px 0 100px`,
      color: `#33ff33`,
      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
    },
    children: (0, a.jsxs)(`div`, {
      className: `mx-auto`,
      style: { maxWidth: `780px`, padding: `0 24px` },
      children: [
        (0, a.jsxs)(`div`, {
          className: `text-center`,
          style: { marginBottom: `48px` },
          children: [
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `11.52px`,
                fontWeight: 400,
                lineHeight: `20px`,
                letterSpacing: `0.18em`,
                color: `rgba(255, 255, 255, 0.5)`,
                textTransform: `uppercase`,
                margin: `0.72em 0`,
                fontFamily: `ui-monospace, Menlo, monospace`,
              },
              children: `❯ faqs_`,
            }),
            (0, a.jsx)(`h2`, {
              style: {
                fontSize: `41.6px`,
                fontWeight: 700,
                lineHeight: `45.76px`,
                color: `#33ff33`,
                textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
                margin: `8px 0 6px`,
              },
              children: `The questions we get asked`,
            }),
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `15.2px`,
                lineHeight: `20px`,
                color: `rgba(255, 255, 255, 0.55)`,
                margin: `0 auto`,
                maxWidth: `560px`,
              },
              children: `Quick answers about Image to ASCII — what it does, how it works, privacy, and pricing.`,
            }),
          ],
        }),
        (0, a.jsx)(`div`, {
          children: s.map((e, t) =>
            (0, a.jsxs)(
              `details`,
              {
                className: `group cursor-pointer`,
                style: {
                  borderTop:
                    t === 0 ? `1px solid rgba(255, 255, 255, 0.06)` : `none`,
                  borderBottom: `1px solid rgba(255, 255, 255, 0.06)`,
                  padding: `16px 0`,
                },
                children: [
                  (0, a.jsxs)(`summary`, {
                    className: `flex items-center justify-between`,
                    style: {
                      listStyle: `none`,
                      color: `#33ff33`,
                      fontSize: `16px`,
                      lineHeight: `24px`,
                      fontWeight: 500,
                      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
                    },
                    children: [
                      (0, a.jsxs)(`span`, {
                        children: [
                          (0, a.jsx)(`span`, {
                            style: {
                              color: `rgba(255, 255, 255, 0.42)`,
                              marginRight: `8px`,
                            },
                            children: `$`,
                          }),
                          e.question,
                        ],
                      }),
                      (0, a.jsx)(`svg`, {
                        width: `12`,
                        height: `12`,
                        viewBox: `0 0 12 12`,
                        className: `transition-transform duration-200 group-open:rotate-45`,
                        style: { flexShrink: 0, marginLeft: `12px` },
                        children: (0, a.jsx)(`path`, {
                          d: `M6 1v10M1 6h10`,
                          stroke: `#33ff33`,
                          strokeWidth: `1.5`,
                          strokeLinecap: `round`,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(`div`, {
                    style: {
                      marginTop: `12px`,
                      fontSize: `15px`,
                      lineHeight: `22px`,
                      color: `rgba(255, 255, 255, 0.62)`,
                      paddingLeft: `20px`,
                    },
                    children: e.answer,
                  }),
                ],
              },
              t
            )
          ),
        }),
      ],
    }),
  });
}
function l() {
  return (0, a.jsx)(`section`, {
    id: `final-cta`,
    className: `ia-section ia-final`,
    style: {
      padding: `80px 0`,
      color: `#33ff33`,
      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
    },
    children: (0, a.jsx)(`div`, {
      className: `mx-auto`,
      style: { maxWidth: `1080px`, padding: `0 24px`, position: `relative` },
      children: (0, a.jsxs)(`div`, {
        className: `ia-final-panel relative overflow-hidden rounded-xl`,
        style: {
          backgroundColor: `#0a0a0e`,
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          padding: `48px`,
          minHeight: `400px`,
        },
        children: [
          (0, a.jsx)(`img`, {
            src: `/images/hero/after-green.png`,
            alt: `ASCII art example`,
            className: `absolute inset-0 object-cover`,
            style: {
              width: `50%`,
              height: `100%`,
              left: `auto`,
              right: 0,
              zIndex: 1,
              opacity: 0.9,
            },
          }),
          (0, a.jsx)(`div`, {
            className: `ia-final-mask absolute inset-0`,
            style: {
              zIndex: 2,
              background: `linear-gradient(90deg, rgba(4,4,6,0.95) 0%, rgba(4,4,6,0.85) 30%, rgba(4,4,6,0.4) 60%, rgba(4,4,6,0) 100%)`,
            },
          }),
          (0, a.jsxs)(`div`, {
            className: `relative z-[3]`,
            style: { maxWidth: `50%` },
            children: [
              (0, a.jsx)(`p`, {
                style: {
                  fontSize: `11.52px`,
                  fontWeight: 400,
                  lineHeight: `20px`,
                  letterSpacing: `0.18em`,
                  color: `rgba(255, 255, 255, 0.5)`,
                  textTransform: `uppercase`,
                  marginBottom: `16px`,
                  fontFamily: `ui-monospace, Menlo, monospace`,
                },
                children: `❯ create-art_`,
              }),
              (0, a.jsx)(`h2`, {
                style: {
                  fontSize: `41.6px`,
                  fontWeight: 700,
                  lineHeight: `45.76px`,
                  color: `#33ff33`,
                  textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
                  margin: `0 0 16px`,
                },
                children: `Drop an image, get ASCII art.`,
              }),
              (0, a.jsx)(`p`, {
                style: {
                  fontSize: `15.2px`,
                  lineHeight: `22px`,
                  color: `rgba(255, 255, 255, 0.55)`,
                  marginBottom: `28px`,
                },
                children: `Every slider, every style, every effect updates the preview instantly. Export at up to 4× resolution. Free forever.`,
              }),
              (0, a.jsx)(`a`, {
                href: `#tool`,
                className: `inline-flex items-center`,
                style: {
                  fontFamily: `"GeistPixel-Square", ui-monospace, "SF Mono", Menlo, monospace`,
                  fontSize: `16px`,
                  padding: `10px 24px`,
                  backgroundColor: `#ff9d00`,
                  color: `#0a0a0c`,
                  boxShadow: `rgba(255, 157, 0, 0.3) 0 0 8px 0`,
                  transition: `background 0.15s, box-shadow 0.15s`,
                  textDecoration: `none`,
                },
                children: `Try it out now`,
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var u = t(n(), 1);
function d() {
  let e = (0, u.useRef)(null),
    [t, n] = (0, u.useState)(50),
    r = (0, u.useRef)(!1),
    i = (0, u.useCallback)((t) => {
      if (!e.current) return;
      let r = e.current.getBoundingClientRect();
      n((Math.max(0, Math.min(t - r.left, r.width)) / r.width) * 100);
    }, []);
  return (0, a.jsxs)(`section`, {
    id: `top`,
    className: `relative z-[6] mx-auto w-full`,
    style: {
      maxWidth: `1728px`,
      padding: `0 129px`,
      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
    },
    children: [
      (0, a.jsx)(`div`, {
        className: `relative w-full`,
        children: (0, a.jsxs)(`div`, {
          ref: e,
          className: `relative overflow-hidden`,
          style: { backgroundColor: `#000000`, aspectRatio: `1182 / 541` },
          onMouseMove: (e) => {
            r.current && i(e.clientX);
          },
          onMouseUp: () => {
            r.current = !1;
          },
          onMouseLeave: () => {
            r.current = !1;
          },
          onTouchMove: (e) => {
            e.touches.length > 0 && i(e.touches[0].clientX);
          },
          onTouchEnd: () => {
            r.current = !1;
          },
          children: [
            (0, a.jsxs)(`div`, {
              className: `absolute inset-0`,
              style: { clipPath: `inset(0 ${100 - t}% 0 0)` },
              children: [
                (0, a.jsx)(`img`, {
                  src: `/images/hero/before.jpg`,
                  alt: `Original photo before converting to ASCII art`,
                  className: `block h-full w-full object-cover`,
                }),
                (0, a.jsx)(`div`, {
                  className: `absolute right-0 bottom-0 left-0`,
                  style: {
                    height: `183px`,
                    background: `linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 86.99%)`,
                  },
                }),
                (0, a.jsx)(`span`, {
                  className: `absolute top-[47px] left-[47px]`,
                  style: {
                    fontSize: `16px`,
                    letterSpacing: `0.04em`,
                    color: `#33ff33`,
                    fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
                    textShadow: `0 0 6px rgba(51,255,51,0.55)`,
                  },
                  children: `Before`,
                }),
              ],
            }),
            (0, a.jsxs)(`div`, {
              className: `absolute inset-0`,
              style: { clipPath: `inset(0 0 0 ${t}%)` },
              children: [
                (0, a.jsx)(`img`, {
                  src: `/images/hero/after-green.png`,
                  alt: `Photo converted to ASCII art with the image to ASCII tool`,
                  className: `block h-full w-full object-cover`,
                }),
                (0, a.jsx)(`div`, {
                  className: `absolute right-0 bottom-0 left-0`,
                  style: {
                    height: `183px`,
                    background: `linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 86.99%)`,
                  },
                }),
                (0, a.jsx)(`span`, {
                  className: `absolute top-[47px] right-[47px] text-right`,
                  style: {
                    fontSize: `16px`,
                    letterSpacing: `0.04em`,
                    color: `#33ff33`,
                    fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
                    textShadow: `0 0 6px rgba(51,255,51,0.55)`,
                  },
                  children: `After`,
                }),
              ],
            }),
            (0, a.jsx)(`div`, {
              className: `absolute top-0 h-full w-[2px]`,
              style: {
                left: `${t}%`,
                backgroundColor: `rgba(0, 255, 255, 0.08)`,
                transform: `translateX(-1px)`,
                zIndex: 5,
              },
            }),
            (0, a.jsx)(`div`, {
              className: `absolute top-1/2 z-[6] flex items-center justify-center`,
              style: {
                left: `${t}%`,
                transform: `translate(-50%, -50%)`,
                width: `55px`,
                height: `56px`,
                backgroundColor: `#1a1a1c`,
                borderRadius: `999px`,
                border: `1px solid rgba(255, 255, 255, 0.08)`,
                boxShadow: `rgba(0, 0, 0, 0.5) 0px 4px 20px 0px`,
                cursor: `grab`,
                transition: `transform 0.15s`,
              },
              onMouseDown: () => {
                r.current = !0;
              },
              onTouchStart: () => {
                r.current = !0;
              },
              children: (0, a.jsxs)(`div`, {
                className: `flex items-center gap-px`,
                children: [
                  (0, a.jsx)(`svg`, {
                    width: `15`,
                    height: `16`,
                    viewBox: `0 0 15 16`,
                    fill: `none`,
                    children: (0, a.jsx)(`path`, {
                      d: `M11 1L4 8L11 15`,
                      stroke: `#33ff33`,
                      strokeWidth: `1.5`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                    }),
                  }),
                  (0, a.jsx)(`svg`, {
                    width: `15`,
                    height: `16`,
                    viewBox: `0 0 15 16`,
                    fill: `none`,
                    children: (0, a.jsx)(`path`, {
                      d: `M4 1L11 8L4 15`,
                      stroke: `#33ff33`,
                      strokeWidth: `1.5`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      (0, a.jsxs)(`div`, {
        className: `relative z-[7] flow-root`,
        style: { backgroundColor: `#0a0a0c`, paddingBottom: `56px` },
        children: [
          (0, a.jsxs)(`div`, {
            className: `grid items-start`,
            style: {
              padding: `0 47px`,
              marginTop: `41px`,
              gridTemplateColumns: `1fr auto 169px`,
              gap: `48px`,
            },
            children: [
              (0, a.jsxs)(`h1`, {
                style: {
                  fontFamily: `"GeistPixel-Square", ui-monospace, "SF Mono", Menlo, monospace`,
                  fontSize: `51.84px`,
                  fontWeight: 400,
                  lineHeight: `1.18`,
                  letterSpacing: `-0.01em`,
                  color: `#33ff33`,
                  textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
                  margin: 0,
                },
                children: [
                  `Turn any picture into`,
                  (0, a.jsx)(`br`, {}),
                  `ASCII art, text art,`,
                  (0, a.jsx)(`br`, {}),
                  `and block characters`,
                ],
              }),
              (0, a.jsx)(`div`, {
                className: `col-start-3 flex gap-2`,
                style: { paddingTop: `8px` },
                children: (0, a.jsx)(`a`, {
                  href: `#tool`,
                  className: `flex h-[45px] w-[169px] items-center justify-center no-underline`,
                  style: {
                    fontFamily: `"GeistPixel-Square", ui-monospace, "SF Mono", Menlo, monospace`,
                    fontSize: `16px`,
                    backgroundColor: `#ff9d00`,
                    color: `#0a0a0c`,
                    boxShadow: `rgba(255, 157, 0, 0.3) 0 0 8px 0`,
                    transition: `background 0.15s, box-shadow 0.15s`,
                  },
                  children: `Open tool`,
                }),
              }),
            ],
          }),
          (0, a.jsx)(`p`, {
            style: {
              padding: `0 47px`,
              marginTop: `24px`,
              maxWidth: `674px`,
              fontSize: `16px`,
              lineHeight: `22px`,
              color: `rgba(51, 255, 51, 0.8)`,
            },
            children: `Turn any photo into ASCII art right on your device, or describe one and let AI create it — no signup, nothing uploaded.`,
          }),
        ],
      }),
    ],
  });
}
function f() {
  return (0, a.jsx)(`section`, {
    id: `how-it-works`,
    className: `ia-section`,
    style: {
      padding: `96px 0 48px`,
      color: `#33ff33`,
      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
    },
    children: (0, a.jsxs)(`div`, {
      className: `mx-auto`,
      style: { maxWidth: `780px`, padding: `0 24px` },
      children: [
        (0, a.jsxs)(`div`, {
          className: `text-center`,
          style: { marginBottom: `48px` },
          children: [
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `11.52px`,
                fontWeight: 400,
                lineHeight: `20px`,
                letterSpacing: `0.18em`,
                color: `rgba(255, 255, 255, 0.5)`,
                textTransform: `uppercase`,
                margin: `0.72em 0`,
                fontFamily: `ui-monospace, Menlo, monospace`,
              },
              children: `❯ how-it-works_`,
            }),
            (0, a.jsx)(`h2`, {
              style: {
                fontSize: `41.6px`,
                fontWeight: 700,
                lineHeight: `45.76px`,
                color: `#33ff33`,
                textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
                margin: `8px 0 6px`,
              },
              children: `How the image to ASCII converter works`,
            }),
          ],
        }),
        (0, a.jsxs)(`p`, {
          style: {
            fontSize: `16px`,
            lineHeight: `26px`,
            color: `rgba(255, 255, 255, 0.7)`,
            marginBottom: `32px`,
          },
          children: [
            `ASCII art is a picture made entirely out of text characters. The image to ASCII converter on this page looks at your photo one small cell at a time, measures how bright each cell is, and swaps it for a character from a ramp that runs from dark to light — a solid`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `@`,
            }),
            ` `,
            `stands in for the darkest areas, and a light`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `.`,
            }),
            ` `,
            `or a blank space for the brightest. Line those characters up in a grid and the original picture reappears, drawn entirely in type. Because every step runs in your browser on an HTML5 canvas, the conversion is instant and your photo never leaves your device.`,
          ],
        }),
        (0, a.jsx)(p, {
          title: `Upload a photo or generate one with AI`,
          children: `There are two ways to feed the tool. The first is to upload your own picture — drag a JPG, PNG, or WebP onto the drop zone, or click to browse, and it converts the moment it loads. The second is to describe an image in words and let AI create it for you: the prompt goes to an image model, the picture comes back, and it gets turned into ASCII art automatically. AI generation is handy when you do not have a source photo on hand and want a clean, high-contrast subject that reads well as text.`,
        }),
        (0, a.jsxs)(p, {
          title: `Character styles and controls`,
          children: [
            `Not every conversion should look the same, so the tool ships four character styles.`,
            ` `,
            (0, a.jsx)(`strong`, {
              style: { color: `rgba(255,255,255,0.85)` },
              children: `Characters`,
            }),
            ` `,
            `is the classic look, mapping brightness to a configurable ramp such as`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `@#S08Xx+=-;:,.`,
            }),
            ` `,
            (0, a.jsx)(`strong`, {
              style: { color: `rgba(255,255,255,0.85)` },
              children: `Detailed`,
            }),
            ` `,
            `uses a much larger set of glyphs for fine gradients and smooth shading.`,
            ` `,
            (0, a.jsx)(`strong`, {
              style: { color: `rgba(255,255,255,0.85)` },
              children: `Block Chars`,
            }),
            ` `,
            `swaps in half and full block glyphs for a bold, dense, pixel-block feel, and`,
            ` `,
            (0, a.jsx)(`strong`, {
              style: { color: `rgba(255,255,255,0.85)` },
              children: `Minimal`,
            }),
            ` `,
            `keeps only a handful of characters for a clean, high-contrast result. On top of the style you can push the detail slider to change how many characters make up the grid, flip the mapping with Invert, and turn Color on or off to either sample the original colors or render crisp monochrome text art.`,
          ],
        }),
        (0, a.jsx)(p, {
          title: `Getting the best image to ASCII results`,
          children: `A few habits make a big difference. High-contrast images with one clear subject convert best — a face, an animal, a logo, or a bold silhouette reads more clearly than a busy, low-contrast scene. Simple backgrounds help too — empty space becomes blank characters and lets the subject stand out. If your first ASCII art looks muddy, raise the detail, try the Detailed character set, or toggle Invert, because dark-on-light and light-on-dark photos each favor a different setting. When you are happy, download the result as a PNG image or copy it as plain text to paste anywhere.`,
        }),
        (0, a.jsx)(p, {
          title: `Where people use ASCII art`,
          children: `Text art has a life far beyond the terminal. People drop ASCII renders into GitHub READMEs and code comments, use them as retro website hero backgrounds and 404 pages, post them on social media for a distinctive on-brand look, print them as posters and zines, and set them as desktop or phone wallpapers. Since the output of the converter is just characters — or a PNG of them — it fits anywhere text or an image can go: a post, a chat message, a slide, or a sticker.`,
        }),
        (0, a.jsxs)(p, {
          title: `What characters make good ASCII art`,
          children: [
            `The characters in ASCII art are chosen for their visual weight — how much ink each one puts on the page. A dense symbol like`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `@`,
            }),
            `,`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `#`,
            }),
            ` `,
            `or a block glyph reads as a dark area, while a thin character like`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `.`,
            }),
            `,`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `:`,
            }),
            `,`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `;`,
            }),
            ` `,
            `or a blank space reads as a light one. Arrange them from dark to light and you have a grayscale ramp that any brightness value can map onto. The classic ramp is`,
            ` `,
            (0, a.jsx)(`code`, {
              style: {
                color: `#33ff33`,
                backgroundColor: `rgba(51,255,51,0.08)`,
                padding: `1px 6px`,
                borderRadius: `4px`,
                fontSize: `14px`,
              },
              children: `@#S08Xx+=-;:,.`,
            }),
            ` `,
            `but you can type your own set of characters into the image to ASCII tool and watch the output change in real time: a longer ramp gives smoother gradients, and a shorter one gives a punchier, more graphic look.`,
          ],
        }),
        (0, a.jsx)(p, {
          title: `Image to ASCII art vs pixel art`,
          children: `Image to ASCII art and pixel art both simplify a picture into a grid, but they use different building blocks. ASCII art fills each cell with a text character chosen by brightness, so the result reads like printed type and can be copied as plain text. Pixel art fills each cell with a solid block of colour, so it reads like an 8-bit video game and only works as an image. This converter focuses on the text-character approach, which is why every image to ASCII result can be exported as a PNG or copied straight into a README, a chat or a code comment.`,
        }),
        (0, a.jsx)(p, {
          title: `Free, private and no signup`,
          children: `The converter is completely free. There is no signup, no watermark, and no export limit. The ASCII conversion itself runs entirely on your own device, so your photo is never sent to a server. Only the optional AI image generation talks to the network, and even then only your short text prompt is sent. Open the tool at the top of the page, drop in an image or describe one, and you will have shareable ASCII art in seconds.`,
        }),
      ],
    }),
  });
}
function p({ title: e, children: t }) {
  return (0, a.jsxs)(`div`, {
    style: { marginBottom: `28px` },
    children: [
      (0, a.jsx)(`h3`, {
        style: {
          fontSize: `22px`,
          fontWeight: 700,
          lineHeight: `30px`,
          color: `rgba(255, 255, 255, 0.9)`,
          textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
          margin: `0 0 10px`,
        },
        children: e,
      }),
      (0, a.jsx)(`p`, {
        style: {
          fontSize: `15px`,
          lineHeight: `24px`,
          color: `rgba(255, 255, 255, 0.65)`,
          margin: 0,
        },
        children: t,
      }),
    ],
  });
}
function m() {
  return (0, a.jsx)(`section`, {
    id: `styles`,
    className: `ia-section ia-styles`,
    style: {
      padding: `96px 0 0`,
      color: `#33ff33`,
      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
    },
    children: (0, a.jsxs)(`div`, {
      className: `mx-auto`,
      style: { maxWidth: `1470px`, padding: `0 24px` },
      children: [
        (0, a.jsxs)(`div`, {
          className: `text-center`,
          style: { marginBottom: `36px` },
          children: [
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `11.52px`,
                fontWeight: 400,
                lineHeight: `20px`,
                letterSpacing: `0.18em`,
                color: `rgba(255, 255, 255, 0.5)`,
                textTransform: `uppercase`,
                margin: `0.72em 0`,
                fontFamily: `ui-monospace, Menlo, monospace`,
              },
              children: `❯ styles_`,
            }),
            (0, a.jsx)(`h2`, {
              style: {
                fontSize: `41.6px`,
                fontWeight: 700,
                lineHeight: `45.76px`,
                color: `#33ff33`,
                textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
                margin: `8px 0 6px`,
              },
              children: `Image to ASCII — four character styles to choose from`,
            }),
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `15.2px`,
                lineHeight: `20px`,
                color: `rgba(255, 255, 255, 0.55)`,
                margin: `0 auto`,
                maxWidth: `560px`,
              },
              children: `Pick from four built-in character styles, then fine-tune the detail, invert the mapping, or toggle color before you export.`,
            }),
          ],
        }),
        (0, a.jsxs)(`div`, {
          className: `mx-auto flex justify-center gap-2`,
          style: {
            marginBottom: `24px`,
            backgroundColor: `#0a0a0e`,
            padding: `4px`,
            borderRadius: `10px`,
            width: `fit-content`,
            border: `1px solid rgba(255, 255, 255, 0.1)`,
          },
          role: `tablist`,
          children: [
            (0, a.jsx)(`button`, {
              type: `button`,
              role: `tab`,
              'aria-selected': `true`,
              style: {
                fontSize: `13.6px`,
                fontWeight: 500,
                color: `#ffffff`,
                backgroundColor: `#1a1a1e`,
                padding: `8px 18px`,
                borderRadius: `7px`,
                border: `1px solid rgba(255, 255, 255, 0.12)`,
                cursor: `pointer`,
                transition: `0.15s`,
                fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
              },
              children: `Characters`,
            }),
            [`Detailed`, `Block Chars`, `Minimal`].map((e) =>
              (0, a.jsx)(
                `button`,
                {
                  type: `button`,
                  role: `tab`,
                  'aria-selected': `false`,
                  style: {
                    fontSize: `13.6px`,
                    fontWeight: 500,
                    color: `rgba(255, 255, 255, 0.5)`,
                    backgroundColor: `transparent`,
                    padding: `8px 18px`,
                    borderRadius: `7px`,
                    border: `1px solid transparent`,
                    cursor: `pointer`,
                    transition: `0.15s`,
                    fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
                  },
                  children: e,
                },
                e
              )
            ),
          ],
        }),
        (0, a.jsx)(`div`, {
          className: `ia-style-media mx-auto`,
          style: { maxWidth: `720px` },
          children: (0, a.jsx)(`img`, {
            src: `/images/hero/after-green.png`,
            alt: `Photo turned into ASCII art in the Characters style`,
            className: `block w-full`,
            style: {
              borderRadius: `14px`,
              border: `1px solid rgba(255, 255, 255, 0.08)`,
            },
          }),
        }),
        (0, a.jsx)(`p`, {
          className: `mx-auto text-center`,
          style: {
            maxWidth: `480px`,
            marginTop: `20px`,
            fontSize: `14px`,
            lineHeight: `22px`,
            color: `rgba(255, 255, 255, 0.6)`,
          },
          children: `Classic ASCII art — characters mapped to brightness with a configurable ramp @#S08Xx+=-;:,.`,
        }),
      ],
    }),
  });
}
function h() {
  return (0, a.jsx)(`section`, {
    id: `tool`,
    style: {
      padding: `64px 0 40px`,
      width: `100%`,
      background: `transparent`,
      color: `#33ff33`,
      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
    },
    children: (0, a.jsxs)(`div`, {
      className: `mx-auto`,
      style: { maxWidth: `1080px`, padding: `0 24px` },
      children: [
        (0, a.jsxs)(`div`, {
          className: `text-center`,
          style: { marginBottom: `28px` },
          children: [
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `11.52px`,
                fontWeight: 400,
                lineHeight: `20px`,
                letterSpacing: `0.18em`,
                color: `rgba(255, 255, 255, 0.5)`,
                textTransform: `uppercase`,
                margin: `0.72em 0`,
                fontFamily: `ui-monospace, Menlo, monospace`,
              },
              children: `/ IMAGE TO ASCII`,
            }),
            (0, a.jsx)(`h2`, {
              id: `tool-title`,
              style: {
                fontSize: `41.6px`,
                fontWeight: 700,
                lineHeight: `45.76px`,
                color: `#33ff33`,
                textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
                margin: `8px 0 6px`,
                fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
              },
              children: `Image to ASCII — turn any image into ASCII art`,
            }),
            (0, a.jsx)(`p`, {
              style: {
                fontSize: `15.2px`,
                lineHeight: `20px`,
                color: `rgba(255, 255, 255, 0.55)`,
                margin: `0 auto`,
                maxWidth: `560px`,
              },
              children: `Upload a photo, or describe one and let AI create it — then the tool turns it into text art right in your browser. Free, no signup.`,
            }),
          ],
        }),
        (0, a.jsxs)(`div`, {
          className: `mx-auto flex gap-1.5`,
          style: {
            marginTop: `22px`,
            marginBottom: `16px`,
            width: `fit-content`,
            backgroundColor: `#0a0a0e`,
            padding: `4px`,
            borderRadius: `10px`,
            border: `1px solid rgba(255, 255, 255, 0.1)`,
          },
          role: `tablist`,
          children: [
            (0, a.jsx)(`button`, {
              type: `button`,
              role: `tab`,
              'aria-selected': `true`,
              className: `tool__mode--active`,
              style: {
                fontSize: `14.4px`,
                fontWeight: 500,
                color: `#000000`,
                backgroundColor: `#ffffff`,
                padding: `8px 18px`,
                borderRadius: `7px`,
                border: `none`,
                cursor: `pointer`,
                transition: `0.15s`,
                fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
              },
              children: `Upload image`,
            }),
            (0, a.jsx)(`button`, {
              type: `button`,
              role: `tab`,
              'aria-selected': `false`,
              style: {
                fontSize: `14.4px`,
                fontWeight: 500,
                color: `rgba(255, 255, 255, 0.6)`,
                backgroundColor: `transparent`,
                padding: `8px 18px`,
                borderRadius: `7px`,
                border: `none`,
                cursor: `pointer`,
                transition: `0.15s`,
                fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
              },
              children: `Generate with AI`,
            }),
          ],
        }),
        (0, a.jsx)(`div`, {
          className: `mx-auto`,
          style: { maxWidth: `640px` },
          children: (0, a.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center`,
            style: {
              backgroundColor: `#08080c`,
              padding: `40px 20px`,
              borderRadius: `14px`,
              border: `1px dashed rgba(255, 255, 255, 0.2)`,
              cursor: `pointer`,
              transition: `0.15s`,
              textAlign: `center`,
            },
            children: [
              (0, a.jsxs)(`svg`, {
                width: `34`,
                height: `34`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.5`,
                style: {
                  color: `rgba(255, 255, 255, 0.55)`,
                  opacity: 0.85,
                  marginBottom: `12px`,
                },
                children: [
                  (0, a.jsx)(`path`, {
                    d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,
                  }),
                  (0, a.jsx)(`polyline`, { points: `17 8 12 3 7 8` }),
                  (0, a.jsx)(`line`, { x1: `12`, y1: `3`, x2: `12`, y2: `15` }),
                ],
              }),
              (0, a.jsx)(`span`, {
                style: {
                  fontSize: `16.32px`,
                  fontWeight: 600,
                  color: `#ffffff`,
                  display: `block`,
                },
                children: `Drop an image here`,
              }),
              (0, a.jsx)(`span`, {
                style: {
                  fontSize: `13.12px`,
                  fontWeight: 400,
                  color: `rgba(255, 255, 255, 0.45)`,
                  display: `block`,
                  marginTop: `3px`,
                },
                children: `or click to browse — JPG, PNG, WebP`,
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
var g = [
  {
    slug: `social.ascii`,
    title: `Social & avatars`,
    description: `Turn a photo into an ASCII portrait for your X, Discord, or Reddit profile — a post that actually stops the scroll. Copy it as plain text or save a crisp PNG.`,
    imageA: `/images/usecases/websites-a.webp`,
    imageB: `/images/usecases/websites-b.webp`,
    altA: `ASCII art portrait used as a social media avatar`,
    altB: `Colorful ASCII art portrait for a social profile`,
    borderAlpha: 0.306,
  },
  {
    slug: `wallpapers.ascii`,
    title: `Wallpapers & lock screens`,
    description: `Turn your pictures into a one-of-a-kind desktop or phone wallpaper. Pick a style, push the detail, and download a high-resolution PNG — no sign-up, no watermark.`,
    imageA: `/images/usecases/wallpapers-a.webp`,
    imageB: `/images/usecases/wallpapers-b.webp`,
    altA: `ASCII art wallpaper for desktop and phone`,
    altB: `Colorful ASCII art wallpaper example`,
    borderAlpha: 0.455,
  },
  {
    slug: `posters.ascii`,
    title: `Posters & prints`,
    description: `Blow an ASCII render up into a poster, sticker, or zine page. The high-contrast character grid stays razor-sharp all the way to large-format print.`,
    imageA: `/images/usecases/posters-a.webp`,
    imageB: `/images/usecases/posters-b.webp`,
    altA: `ASCII art poster print example`,
    altB: `Colorful ASCII art poster example`,
    borderAlpha: 0.08,
  },
  {
    slug: `stickers.ascii`,
    title: `Merch & apparel`,
    description: `Print an ASCII render on a tee, tote, or mug. The character grid holds up crisp at any size, from a small badge to a full back print.`,
    imageA: `/images/usecases/stickers-a.webp`,
    imageB: `/images/usecases/stickers-b.webp`,
    altA: `ASCII art printed on merch and apparel`,
    altB: `Colorful ASCII art for a t-shirt print`,
    borderAlpha: 0.08,
  },
  {
    slug: `readmes.ascii`,
    title: `READMEs & terminals`,
    description: `Drop an ASCII banner into a GitHub README, a CLI splash screen, or your dotfiles. Copy the raw text and paste it straight in — no image hosting needed.`,
    imageA: `/images/usecases/readmes-a.webp`,
    imageB: `/images/usecases/readmes-b.webp`,
    altA: `ASCII art banner for a GitHub README`,
    altB: `Colorful ASCII art terminal banner`,
    borderAlpha: 0.08,
  },
  {
    slug: `covers.ascii`,
    title: `Album & cover art`,
    description: `Turn a photo into cover art for a playlist, mixtape, or zine. Bold, textural, and unmistakably yours — exported at full resolution.`,
    imageA: `/images/usecases/covers-a.webp`,
    imageB: `/images/usecases/covers-b.webp`,
    altA: `ASCII art album cover`,
    altB: `Colorful ASCII art cover art`,
    borderAlpha: 0.08,
  },
];
function _() {
  return (0, a.jsxs)(`section`, {
    id: `usecases`,
    className: `ia-section ia-cases`,
    style: {
      padding: `120px 0 80px`,
      color: `#33ff33`,
      fontFamily: `ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace`,
    },
    children: [
      (0, a.jsxs)(`div`, {
        className: `mx-auto text-center`,
        style: { maxWidth: `1470px`, padding: `0 24px`, marginBottom: `48px` },
        children: [
          (0, a.jsx)(`p`, {
            style: {
              fontSize: `11.52px`,
              fontWeight: 400,
              lineHeight: `20px`,
              letterSpacing: `0.18em`,
              color: `rgba(255, 255, 255, 0.5)`,
              textTransform: `uppercase`,
              margin: `0.72em 0`,
              fontFamily: `ui-monospace, Menlo, monospace`,
            },
            children: `❯ usecases_`,
          }),
          (0, a.jsx)(`h2`, {
            style: {
              fontSize: `41.6px`,
              fontWeight: 700,
              lineHeight: `45.76px`,
              color: `#33ff33`,
              textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
              margin: `8px 0 6px`,
            },
            children: `Where you can use ASCII art`,
          }),
        ],
      }),
      (0, a.jsx)(`div`, {
        className: `flex gap-0 overflow-x-auto`,
        style: {
          scrollSnapType: `x mandatory`,
          WebkitOverflowScrolling: `touch`,
          paddingLeft: `max(129px, calc((100vw - 1470px) / 2))`,
          paddingRight: `129px`,
          msOverflowStyle: `none`,
          scrollbarWidth: `none`,
        },
        children: g.map((e) => (0, a.jsx)(v, { ...e }, e.slug)),
      }),
    ],
  });
}
function v({
  slug: e,
  title: t,
  description: n,
  imageA: r,
  imageB: i,
  altA: o,
  altB: s,
  borderAlpha: c,
}) {
  return (0, a.jsxs)(`div`, {
    className: `ia-case flex-shrink-0`,
    style: {
      marginRight: `28px`,
      width: `calc((1470px - 28px * 5) / 3)`,
      minWidth: `350px`,
      backgroundColor: `#0a0a0c`,
      border: `1px solid rgba(87, 255, 143, ${c})`,
      padding: `28px`,
      display: `flex`,
      flexDirection: `column`,
      scrollSnapAlign: `start`,
    },
    children: [
      (0, a.jsx)(`p`, {
        style: {
          fontSize: `11.52px`,
          lineHeight: `20px`,
          letterSpacing: `0.18em`,
          color: `rgba(255, 255, 255, 0.42)`,
          textTransform: `uppercase`,
          fontFamily: `ui-monospace, Menlo, monospace`,
          marginBottom: `20px`,
        },
        children: e,
      }),
      (0, a.jsxs)(`div`, {
        className: `ia-case-media relative mb-6`,
        style: {
          aspectRatio: `960 / 648`,
          backgroundColor: `#08080c`,
          overflow: `hidden`,
          borderRadius: `8px`,
        },
        children: [
          (0, a.jsx)(`img`, {
            src: r,
            alt: o,
            className: `absolute inset-0 h-full w-full object-cover`,
            style: { zIndex: 1 },
          }),
          (0, a.jsx)(`img`, {
            src: i,
            alt: s,
            className: `absolute inset-0 h-full w-full object-cover`,
            style: { zIndex: 2, opacity: 0 },
            onMouseEnter: (e) => {
              e.currentTarget.style.opacity = `1`;
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.opacity = `0`;
            },
          }),
        ],
      }),
      (0, a.jsx)(`h3`, {
        style: {
          fontSize: `32px`,
          fontWeight: 700,
          color: `#33ff33`,
          textShadow: `0 0 6px rgba(51, 255, 51, 0.55)`,
          margin: `0 0 12px`,
        },
        children: t,
      }),
      (0, a.jsx)(`p`, {
        style: {
          fontSize: `15px`,
          lineHeight: `22px`,
          color: `rgba(51, 255, 51, 0.7)`,
          margin: 0,
        },
        children: n,
      }),
    ],
  });
}
function y() {
  return (0, a.jsxs)(`div`, {
    className: `flex min-h-screen flex-col bg-[#0a0a0c] text-[#33ff33]`,
    children: [
      (0, a.jsx)(i, {}),
      (0, a.jsxs)(`main`, {
        children: [
          (0, a.jsx)(d, {}),
          (0, a.jsx)(h, {}),
          (0, a.jsx)(o, {}),
          (0, a.jsx)(m, {}),
          (0, a.jsx)(_, {}),
          (0, a.jsx)(f, {}),
          (0, a.jsx)(c, {}),
          (0, a.jsx)(l, {}),
        ],
      }),
      (0, a.jsx)(r, {}),
    ],
  });
}
export { y as component };
