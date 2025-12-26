# Task Checklist - "The Digital Blueprint 2.0" (TypeScript)

- [ ] **Phase 0: Setup & Documentation**
    - [ ] Copy `implementation_plan.md` and `task.md` to `docs/` in project
    - [ ] **Install TypeScript**: `npm install -D typescript @types/node @types/react @types/react-dom`
    - [ ] Initialize `tsconfig.json` (if needed) or let Next.js handle it
    - [ ] Install dependencies (Lenis, framer-motion, clsx, tailwind-merge)
    - [ ] Configure Tailwind CSS (Colors, Fonts, Keyframes)
    - [ ] Create Global Styles (Noise texture, Scroll behavior)

- [ ] **Phase 1: Design System & Core UI**
    - [ ] Implement `src/app/components/ui/Cursor.tsx`
    - [ ] Implement `src/app/components/ui/HudLayer.tsx`
    - [ ] Implement `src/app/components/layout/Navbar.tsx`

- [ ] **Phase 2: Page Sections**
    - [ ] **Hero Section** (`src/app/components/sections/Hero.tsx`)
    - [ ] **Strategist Perks** (`src/app/components/sections/Perks.tsx`)
    - [ ] **Projects Section** (`src/app/components/sections/Projects.tsx`)
    - [ ] **Education & CTA** (`src/app/components/sections/EducationCTA.tsx`)

- [ ] **Phase 3: Integration & Polish**
    - [ ] Rename `src/app/page.js` to `src/app/page.tsx` and refactor
    - [ ] Rename `src/app/layout.js` to `src/app/layout.tsx` and refactor
    - [ ] Create `src/app/components/layout/Footer.tsx`
    - [ ] Verify Mobile Responsiveness
    - [ ] Run Type Check (`tsc --noEmit`)
