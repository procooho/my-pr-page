import Hero from '@/app/components/sections/Hero';
import Perks from '@/app/components/sections/Perks';
import Projects from '@/app/components/sections/Projects';
import Experiments from '@/app/components/sections/Experiments';
import EducationCTA from '@/app/components/sections/EducationCTA';
import Footer from '@/app/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen relative z-10">
            <Hero />
            <Perks />
            <Projects />
            <Experiments />
            <EducationCTA />
            <Footer />
        </main>
    );
}
