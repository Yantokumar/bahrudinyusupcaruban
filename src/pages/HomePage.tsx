import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturedBuild } from '../components/sections/FeaturedBuild';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { TechStackSection } from '../components/sections/TechStackSection';
import { OutsideTheIdeSection } from '../components/sections/OutsideTheIdeSection';
import { ContactSection } from '../components/sections/ContactSection';
import { MotionSection } from '../components/ui/MotionSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-4">
      <MotionSection delay={0.05}>
        <HeroSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <FeaturedBuild />
      </MotionSection>

      <MotionSection delay={0.1}>
        <ProjectsSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <ExperienceSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <TechStackSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <OutsideTheIdeSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <ContactSection />
      </MotionSection>
    </div>
  );
};
