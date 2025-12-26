'use client';

import { ReactLenis as Lenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <Lenis root>
            {children}
        </Lenis>
    );
}
