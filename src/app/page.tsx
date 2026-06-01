import AboutSection from "@/components/features/home/AboutSection";
import CertificateSection from "@/components/features/home/CertificateSection";
import ContactSection from "@/components/features/home/ContactSection";
import EducationSection from "@/components/features/home/EducationSection";
import ExperienceSection from "@/components/features/home/ExperienceSection";

import ProjectSection from "@/components/features/home/ProjectSection";
import SkillsSection from "@/components/features/home/SkillsSection";
import VolunteerSection from "@/components/features/home/VolunteerSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <CertificateSection />
      <VolunteerSection />
      <ContactSection />
      
    </main>
    
  );
}