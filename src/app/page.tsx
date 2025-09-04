import { Header } from "@components/header";
import { AboutSection } from "./(AboutSection)";
import { HeroSection } from "./(HeroSection)";
import { ExperienceSection } from "./(ExperienceSection)";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
