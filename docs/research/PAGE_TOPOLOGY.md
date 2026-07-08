# Page Topology — imagetoascii.app

## Overview

Single-page marketing site for an "Image to ASCII" converter tool. Phosphor-green CRT terminal aesthetic on near-black background. All text is monospaced with green phosphor glow.

## Visual Order (top to bottom)

1. **Header (ia-topbar)** — sticky, backdrop-blur, 64px. Logo + nav + amber CTA button + mobile burger
2. **Hero (ia-hero)** — Before/After image comparison slider + H1 heading + subtitle + CTA
3. **Tool Section (tool)** — The actual converter tool. Tabs (Upload/AI), drop zone, control sliders, result preview
4. **Ask AI Section (ia-ask)** — Terminal-style prompt section showing AI generation feature
5. **Styles Section (ia-styles)** — 4 character style tabs (Characters, Detailed, Block Chars, Minimal) with image previews
6. **Use Cases Section (ia-cases)** — 6 cards in horizontal scroll (Social, Wallpapers, Posters, Merch, READMEs, Album)
7. **How It Works Section (ia-section)** — Long-form content with code examples in green on black
8. **FAQ Section (ia-faq)** — 6 disclosure/accordion items
9. **Final CTA Section (ia-final)** — Large panel with ASCII art overlay + heading + CTA button
10. **Footer (ia-foot)** — Brand + description + nav links + copyright

## Layers & Overlays

- **CRT scanline overlay (.ia-crt):** fixed, z-9998, repeating gradient scanlines over entire page
- **Header:** sticky, z-100, backdrop-blur(10px), bg rgba(4,4,6,0.78)
- **Hero compare slider:** relative positioned with absolute overlays for before/after + drag grip

## Interaction Models

- **Header:** sticky, always visible. Background transitions on scroll (opacity/blur change). Static for now.
- **Hero Compare:** scroll-driven (drag slider compares before/after images)
- **Tool Section:** click-driven (tab switches between Upload and AI generation modes)
- **Styles Section:** click-driven (tabs switch between 4 character styles with image changes)
- **Use Cases:** scroll-driven (horizontal scroll container)
- **FAQ:** click-driven (accordion expand/collapse)
- **Final CTA:** static

## Color Palette

- Background: #0a0a0c (near black)
- Text (phosphor): #33ff33 (bright green)
- Panel: #0f0f13, #0a0a0c
- Amber/CTA: #ff9d00
- Cyan hairlines: rgba(0,255,255,0.15)
- Muted text: rgba(255,255,255,0.50-0.62)
- Glow: 0 0 6px rgba(51,255,255,0.55)

## Fonts

- Display (headings): GeistPixel-Square (self-hosted woff2/ttf)
- Brand: Pixelify Sans
- Body/mono: ui-monospace, SF Mono, Menlo, Monaco, Courier New
