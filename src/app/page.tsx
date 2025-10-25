import { Header } from "@components/header";
import { AboutSection } from "./(AboutSection)";
import { HeroSection } from "./(HeroSection)";
import { ExperienceSection } from "./(ExperienceSection)";
import { CertificatesSection } from "./(CertificatesSection)";
import { ContactSection } from "./(ContactSection)";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}
