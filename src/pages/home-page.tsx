import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { ExperienceSection } from '@/components/sections/experience';
import { HeroSection } from '@/components/sections/hero';
import { MetricsSection } from '@/components/sections/metrics';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
