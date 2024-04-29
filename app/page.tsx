import FAQSection from "@/components/faq-section";
import IntroSection from "@/components/intro-section";
import LandingSection from "@/components/landing-section";
import QuoteSection from "@/components/quote-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <IntroSection />
      <ServicesSection />
      <TestimonialsSection /> 
    </main>
  );
}
