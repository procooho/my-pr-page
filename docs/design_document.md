THE DIGITAL BLUEPRINT 2.0 - MASTER DESIGN DOCUMENT
Project: Portfolio Website for Soomin Park

Theme: "Tactile Technical Interface" (High-Precision Engineering)

1. EXECUTIVE SUMMARY
Project Vision
Create a portfolio that functions less like a brochure and more like a piece of high-end engineering software. The site positions Soomin Park as a "Strategist" by demonstrating precision, system-level thinking, and architectural control.

Core Concept: "The HUD Interface"
The user isn't just scrolling a webpage; they are looking through a "Heads-Up Display" (HUD) at a technical schematic. The interface feels tactile, precise, and alive with data.

Key Differentiators (Upgraded)
Strategic Mindset: Content focuses on problem-solving over syntax.

Immersive "Spark" Identity: The "Soomin Park = SPARK" branding is woven into the physics of the site.

Tactile UI: 3D tilts, mechanical snaps, and custom cursors make interactions feel physical.

Operational Reliability: The design reflects the user's logistics background through structure and order.

2. DESIGN PHILOSOPHY
Aesthetic Direction: "Tactile Blueprint"
Concept: A fusion of VS Code Dark Mode, CAD Software, and Sci-Fi Industrial UI. Texture: The site is not "flat." It has a subtle film grain (noise) texture to simulate matte metal or high-ISO screens, preventing the "cheap" feeling of flat CSS colors.

Emotional Tone:

Precision: Everything aligns to the pixel.

Industrial: It feels heavy and grounded (cables, steel, dark grey).

Active: The system is "Online" (pulsing lights, data streams).

3. VISUAL DESIGN SYSTEM
The "HUD" Layer (New Global Element)
A fixed layer (pointer-events-none, z-index: 50) sits on top of the entire website to create the "Software Interface" feel.

Corner Brackets: Small yellow 『 』 markers fixed to the four corners of the viewport.

Live Coordinates: A monospace counter (e.g., Y: 0450px) in the bottom right fixed corner that updates real-time as the user scrolls.

Noise Overlay: A 3% opacity static/noise texture over the whole screen to unify the elements.

Color Palette
Canvas: Deep Matte Charcoal (#1A1A1A)

Structure: Pure Black (#000000)

Action/Spark: Safety Yellow (#FFD700)

System Status: Signal Green (#00FF41) (New: Used for "Online" indicators)

Metadata: Mid-Grey (#666666)

Typography System (Upgraded)
Headings: Chakra Petch (700 weight) – Industrial/Sci-Fi.

Body: Inter (400 weight) – Clean readability.

Metadata (New): JetBrains Mono or Fira Code – Used for technical labels (e.g., ROLE: LEAD, EST. 2024, VER: 1.0).

The Precision Cursor (New)
Default: A thin, white, precision crosshair + (removes the standard arrow).

Hover (Clickable): The crosshair rotates 45° to an x or snaps into a small yellow circle ⨁.

Text Hover: Changes to a minimal I-beam.

4. SITE STRUCTURE & NAVIGATION
Navigation: "The Frosted Command Bar"
Position: Fixed top center. Style:

Glassmorphism: backdrop-filter: blur(12px) with a semi-transparent black background. This blurs the grid lines passing underneath it.

Border: Thin border-white/10.

Layout:

Left: [Home] [About]

Center: SP Monogram + Status Light.

The Status Light: A 3px green LED dot pulsing next to the logo, signifying "System Online."

Right: [Projects] [Contact] [Links ▼]

Dropdown Menu (Links):

Download Resume (PDF)

Download Cover Letter (PDF)

LinkedIn / GitHub

5. SECTION BREAKDOWN
SECTION 1: HERO - "The Ignition"
Visual:

Background: 3D Video of heavy cables.

Parallax Upgrade: The cable video layer moves slightly opposite to the mouse cursor (Mouse Parallax), giving the scene 3D depth.

Animation Sequence:

The Approach: Cables swing in. "S" and "P" letters rest on the tips.

The Contact: Cables touch. Bright Yellow Spark explodes.

The Expansion: "oomin" types out rapidly inside the yellow electric arc connecting S and P.

The Resolve: Electricity fades. "Soomin Park" remains.

Post-Effect (New): A faint "heat haze" (blur distortion) lingers around the text for 3 seconds, implying heat.

Content:

Headline: SOOMIN PARK

Tagline: "Turning brilliant ideas into engineered reality."

Sub-headline: "Software Developer | Strategist | Problem Solver"

SECTION 2: STRATEGIST PERKS - "System Diagnostics"
Concept Upgrade: Instead of a simple slide deck, this feels like running a diagnostic check on the system's capabilities.

The Connector (Data Stream):

The vertical line connecting sections is a Dashed Yellow Line.

Animation: The dashes move downward (marching ants effect), simulating a live data feed connecting the concepts.

The "Glitch" Reveal:

As you scroll and a section locks into place, the text doesn't just fade in. It "Glitches" in (distorts/chromatic aberration) for 0.1s before snapping sharp.

Slides:

Strategist: (Icon: Chess Piece) "Strategy First" – Pathfinding animation.

Technician: (Icon: Microchip) "Modern Stack Architecture" – Glowing brackets.

Operator: (Icon: Logistics Map) "Reliability & Execution" – Route tracking.

SECTION 3: PROJECTS - "Holographic Schematics"
Layout: Horizontal Carousel.

Card Design Upgrade (3D Tilt & X-Ray):

Base: Dark card with a "File Tab" at the top.

3D Interaction: The card uses transform: perspective(1000px) rotateX(...) rotateY(...) to tilt toward the mouse cursor on hover.

"X-Ray" Reveal:

Default: Shows the project screenshot clearly.

Hover: The screenshot desaturates (greyscale). A Yellow Grid/Schematic Overlay slides over the image, and the Tech Stack (previously hidden) is revealed brightly, as if scanning the architecture inside the code.

Project 1: Athlete Performance System (Capstone)

Label: ROLE: TECH LEAD (Monospace)

Tech: Next.js, AI Integration, RBAC.

Story: Led technical architecture for enterprise athlete testing.

Project 2: WoW Guild Manager

Label: MODE: SOLO DEV (Monospace)

Tech: Blizzard API, OAuth 2.0.

Story: Real-time roster tracking with secure authentication.

Project 3: Sopoong Restaurant

Label: TYPE: COMMERCIAL (Monospace)

Tech: SEO, Cloudinary, CRUD.

Story: Live business site with custom CMS.

SECTION 4: EDUCATION & CTA - "The Sign-Off"
Design: Split layout.

Education:

NAIT: Digital Media & IT.

Metric: "GPA: 4.0/4.0" (Displayed in a Monospace "counter" style).

Progress Bar: Yellow bar fills to 100% on scroll.

CTA (Call to Action):

Headline: "Ready to Execute?"

Primary Button: [ Download Resume ] (Solid Yellow, Black Text).

Hover: The arrow icon inside the button creates a "Launch" animation (flies up and right).

Secondary Button: [ View Cover Letter ] (Wireframe).

SECTION 5: FOOTER - "The Title Block" (New)
Concept: Redesigned to look like the bottom right corner of an architectural blueprint.

Layout:

A bordered box at the bottom of the page.

Grid Content:

DRAWN BY: SOOMIN PARK

DATE: 2025

SCALE: 1:1

SHEET: 01/01

Copyright: © 2025 Soomin Park. Built with Next.js + Strategy.

6. ANIMATION PHYSICS
General: easeOutCirc (Fast, mechanical snap). Scroll: Smooth momentum scrolling (using Lenis or similar). Hover: Instant response (0s delay) for borders, 0.3s smooth dampening for 3D tilts.

7. ASSET LIST (Updated)
Video: 3D Cable Render (Heavy, Matte Black, Yellow Spark).

Texture: noise.png (Transparent static noise for grain effect).

Icons: Wireframe SVG icons (Chess, Chip, Map) – Yellow stroke.

Fonts:

Chakra Petch (Headings)

Inter (Body)

JetBrains Mono (Metadata/HUD)

PDFs: Resume & Cover Letter.

8. TECHNICAL IMPLEMENTATION NOTES
HUD Layer: Ensure pointer-events: none is set on the container holding the corner brackets and noise texture so it doesn't block clicks.

Performance: The "X-Ray" effect on cards should use CSS opacity and transform, not JavaScript, to maintain 60fps.

Mobile: Disable the "Precision Cursor" and "3D Tilt" on touch devices. Fall back to standard scrolling and static cards.
