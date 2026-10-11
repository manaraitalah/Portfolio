import AboutSection from "@/components/about-us/about-us-section";
import ContactSection from "@/components/contact-us/contact-us";
import ExperienceSection from "@/components/experience/experience-section";
import { Navbar } from "@/components/generic-components/navbar";
import { HeroSection } from "@/components/hero-section/hero-section";
import HowIWorkSection from "@/components/how-i-work/how-i-work";
import ProjectsSection from "@/components/projects/project-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-text-primary">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <HowIWorkSection />
      <ContactSection />
    </main>
  );
}
