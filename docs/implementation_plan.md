# Implementation Plan - The Digital Blueprint 2.0

## Goal Description
Redesign Soomin Park's portfolio into a "Tactile Technical Interface" that functions like high-end engineering software. The site will feature a HUD-style interface, 3D interactions, and a "precision engineering" aesthetic.

## User Review Required
- **Assets**: I will need the 3D Cable video and specific assets (noise texture). I will use placeholders or generate them if possible/allowed (e.g., CSS noise). For the video, I might use a placeholder or CSS effect if a file isn't provided.
- **Fonts**: Will use `next/font/google` for Chakra Petch, Inter, and JetBrains Mono.

## Proposed Changes

### Dependencies
- **TypeScript**: `typescript`, `@types/node`, `@types/react`, `@types/react-dom`.
- Add `@studio-freight/lenis` (or just `lenis`) for smooth scrolling.
- Add `framer-motion` for complex animations (optional but recommended for things like the "Spark" and complex entry animations).
- `clsx` and `tailwind-merge` for class management.

### [Global] Design System
- **Fonts**: Setup in `src/app/layout.tsx`.
- **Tailwind Config**: Define colors (Deep Matte Charcoal, Signal Green, Safety Yellow), font families, and animation keyframes.
- **CSS**: Add `noise` texture utility.

### [Components] New Components
#### [NEW] `src/app/components/ui/Cursor.tsx`
- Custom cursor with crosshair/circle states.
- Logic to hide on mobile.

#### [NEW] `src/app/components/ui/HudLayer.tsx`
- Fixed overlay with corner brackets and live coordinates.

#### [NEW] `src/app/components/layout/Navbar.tsx`
- "Frosted Command Bar" with backdrop blur and status light.

#### [NEW] `src/app/components/sections/Hero.tsx`
- 3D parallax background, text animations.

#### [NEW] `src/app/components/sections/Perks.tsx`
- "System Diagnostics" layout with connector lines.

#### [NEW] `src/app/components/sections/Projects.tsx`
- 3D tilt cards using CSS `perspective`.

#### [NEW] `src/app/components/sections/EducationCTA.tsx`
- Split layout with progress bar.

#### [NEW] `src/app/components/layout/Footer.tsx`
- "Blueprint" style footer.

### [Pages]
#### [MODIFY] `src/app/page.tsx`
- Assemble the sections.
- Rename from `page.js` to `page.tsx`.

#### [MODIFY] `src/app/layout.tsx`
- Add global HUD, Cursor, and Smooth Scroll provider.
- Rename from `layout.js` to `layout.tsx`.

## Verification Plan
### Automated Tests
- Build check: `npm run build`
- Lint check: `npm run lint`

### Manual Verification
- Check responsive behavior (Mobile should disable some effects).
- Verify smooth scrolling.
- Verify 3D tilt performance (60fps target).
