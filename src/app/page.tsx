import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { ContactSection } from '@/components/contact-section';
import { Particles } from '@/components/particles';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative">
      <Particles className="absolute inset-0 -z-10" />
      <Header />
      <main className="container mx-auto px-4 md:px-6">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
