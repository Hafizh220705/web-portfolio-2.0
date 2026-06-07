import AboutSection from "@/components/features/AboutSection";
import CertificateSection from "@/components/features/CertificateSection";
import ContactSection from "@/components/features/ContactSection";
import EducationSection from "@/components/features/EducationSection";
import ExperienceSection from "@/components/features/ExperienceSection";
import ProjectSection from "@/components/features/ProjectSection";
import SkillsSection from "@/components/features/SkillsSection";
import VolunteerSection from "@/components/features/VolunteerSection";

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