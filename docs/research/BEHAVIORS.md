# Behaviors — imagetoascii.app

## Header (ia-topbar)

- **Interaction model:** static (sticky position only)
- **Sticky behavior:** position: sticky, top: 0, z-index: 100
- **Background:** rgba(4, 4, 6, 0.78) with backdrop-filter: blur(10px)
- **Transition:** background 0.2s, backdrop-filter 0.2s
- **Mobile:** Burger button appears, nav links hidden. Burger bars animate to X on open.

## Hero Compare Slider

- **Interaction model:** scroll-driven (drag slider to compare before/after)
- **Mechanism:** User drags the grip left/right. Before side is clipped by the divider line position.
- **Components:** Two overlaid images (before.jpg, after-green.png), a vertical divider line (2px, cyan tint), a draggable pill-shaped grip (55x56px, #1a1a1c bg, pill border-radius)
- **Tags:** "Before" (left), "After" (right), positioned absolutely
- **Veils:** Gradient overlays (linear-gradient transparent→black at 87%) on bottom of both sides

## Hero Text Rotator

- **Interaction model:** time-driven (auto-rotating text in the H1)
- **Text cycles through:** "ASCII art", "text art", "block characters"
- **Container:** .ia-rotator, inline-flex, white-space: nowrap
- **Display font:** GeistPixel-Square

## Tool Section Tabs

- **Interaction model:** click-driven
- **Two states:** "Upload image" (active: white bg, black text) and "Generate with AI" (inactive: transparent, muted text)
- **Active tab:** bg white, color black, border-radius 7px
- **Inactive tab:** bg transparent, color rgba(255,255,255,0.6)
- **Container:** bg #0a0a0e, border-radius 10px, 1px solid rgba(255,255,255,0.1), padding 4px
- **Transition:** 0.15s

## Drop Zone

- **bg:** #08080c, border: 1px dashed rgba(255,255,255,0.2), border-radius 14px
- **Hover state:** border color brightens, cursor pointer
- **Transition:** 0.15s

## Styles Section Tabs

- **Interaction model:** click-driven
- **4 tabs:** Characters, Detailed, Block Chars, Minima
- **Active state:** bg #1a1a1e, color white, border: 1px solid rgba(255,255,255,0.12)
- **Inactive state:** bg transparent, color rgba(255,255,255,0.5)
- **Image changes:** Each tab shows different after-\*.png image
- **Transition:** 0.15s

## Use Cases Section

- **Interaction model:** scroll-driven (horizontal scroll container)
- **6 cards** in a horizontal scrollable container
- **Each card:** flex layout, bg #0a0a0c, border 1px solid rgba(87,255,143,0.08-0.45), padding 28px
- **Card contains:** Two absolutely positioned images (monochrome + color variant), h3 heading, p description
- **Border varies per card** (some have stronger phosphor border than others)

## FAQ Section

- **Interaction model:** click-driven (details/summary accordion)
- **6 accordion items** using HTML <details> elements
- **Each item:** "$ " prompt prefix + question text
- **Expanded state:** Answer text revealed below
- **Border:** border-top: 1px solid rgba(255,255,255,0.06)

## Final CTA Section

- **Interaction model:** static
- **Layout:** Panel with ASCII art image (absolute positioned in background), gradient mask overlay, content on top
- **Mask:** linear-gradient from left (opaque) to right (transparent)
- **CTA:** Amber button "Try it out now"

## Footer

- **Interaction model:** static
- **3-column layout:** Brand/description | pages/ nav | start/ nav
- **Nav links:** tree-style prefix (├─, └─)
- **Copyright:** Green text
