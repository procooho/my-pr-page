import { Chakra_Petch, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Cursor from '@/app/components/ui/Cursor';
import HudLayer from '@/app/components/ui/HudLayer';
import Navbar from '@/app/components/layout/Navbar';
import SmoothScroll from '@/app/components/providers/SmoothScroll';

// Configure fonts
const chakra = Chakra_Petch({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-chakra',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const mono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

export const metadata = {
    title: 'Soomin Park | Strategist & Developer',
    description: 'Turning brilliant ideas into engineered reality.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${chakra.variable} ${inter.variable} ${mono.variable}`}>
            <body className="antialiased bg-[var(--color-canvas)] text-white overflow-x-hidden selection:bg-yellow-400 selection:text-black">
                <Cursor />
                <SmoothScroll>
                    <HudLayer />
                    <Navbar />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
