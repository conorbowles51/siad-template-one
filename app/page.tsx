import IntroSection from "@/components/intro-section";
import LandingSection from "@/components/landing-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <IntroSection />
      <ServicesSection />
    </main>
  );
}
