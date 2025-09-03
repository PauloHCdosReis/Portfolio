import { Header } from "@components/header";
import { AboutSection } from "./(AboutSection)";
import { HeroSection } from "./(HeroSection)";

export default function Home() {
  return (
    <div className="min-h-svh h-svh max-h-svh scroll-smooth overflow-y-auto">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
