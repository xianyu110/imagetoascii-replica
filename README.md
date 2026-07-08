# Image to ASCII — Replica

Pixel-perfect clone of [imagetoascii.app](https://imagetoascii.app/), built with TanStack Start + shadcn/ui. Phosphor-green CRT terminal aesthetic on near-black background.

## Overview

A single-page marketing site that replicates the full imagetoascii.app landing page — header, before/after comparison slider, tool converter UI, use-case cards, how-it-works documentation, FAQ accordion, and final CTA — all with the original phosphor-green CRT terminal design system.

## Tech Stack

- **Framework:** TanStack Start (Vite 8 + React 19 + TypeScript)
- **UI:** shadcn/ui v4 + Tailwind CSS 4
- **Original scaffold:** ShipAny TanStack (headless SaaS engine)
- **Build:** `pnpm build` ✓

## Sections Built

| #   | Section          | Description                                                           |
| --- | ---------------- | --------------------------------------------------------------------- |
| 1   | **Header**       | Sticky topbar with logo, nav links, amber CTA, mobile burger          |
| 2   | **Hero**         | Before/after image comparison slider with draggable grip + H1 heading |
| 3   | **Tool Section** | Upload/AI tabs, drop zone, character style controls                   |
| 4   | **Ask AI**       | Terminal-style prompt showing AI image generation feature             |
| 5   | **Styles**       | 4 character style tabs (Characters, Detailed, Block Chars, Minimal)   |
| 6   | **Use Cases**    | 6 horizontally-scrollable cards (Social, Wallpapers, Posters, etc.)   |
| 7   | **How It Works** | Long-form documentation with inline code samples                      |
| 8   | **FAQ**          | 6 disclosure accordion items with terminal `$ ` prompt prefix         |
| 9   | **Final CTA**    | ASCII art overlay panel with gradient mask + amber button             |
| 10  | **Footer**       | Tree-style terminal nav (├─ └─) with `Built with ❤️ MaynorAI` badge   |

## Design System

| Token         | Value                                     |
| ------------- | ----------------------------------------- |
| Background    | `#0a0a0c` (near-black)                    |
| Phosphor text | `#33ff33` (bright green)                  |
| Amber CTA     | `#ff9d00`                                 |
| Text glow     | `0 0 6px rgba(51, 255, 51, 0.55)`         |
| Display font  | GeistPixel-Square (self-hosted)           |
| Brand font    | Pixelify Sans                             |
| Body font     | ui-monospace, SF Mono, Menlo, Monaco      |
| CRT overlay   | Fixed repeating-linear-gradient scanlines |
| Panel bg      | `#0f0f13`, `#0a0a0c`                      |

## Getting Started

```bash
pnpm install
cp .env.example .env.development   # fill in required values
pnpm db:push
pnpm dev                            # http://localhost:3000
```

## Build

```bash
pnpm build    # ✓ passes cleanly
```

## Credits

Reverse-engineered from [imagetoascii.app](https://imagetoascii.app/) using the ShipAny TanStack scaffold with `/clone-website` skill.

Built with ❤️ MaynorAI
