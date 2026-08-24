import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getPublishedProjects } from "@/lib/projects/queries";
import { getPublishedJourney } from "@/lib/journey/queries";

export const revalidate = 60;

export default async function Home() {
  const projects = await getPublishedProjects();
  const journey = await getPublishedJourney();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <ExperienceSection
          experiences={journey.experiences}
          certifications={journey.certifications}
          stats={journey.stats}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
