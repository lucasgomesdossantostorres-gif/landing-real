import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import PainSection from "@/components/landing/painsection";
import HowItWorks from "@/components/landing/howitworks";
import SystemShowcase from "@/components/landing/systemshowcase";
import MethodSection from "@/components/landing/methodsection";
import FeaturesSection from "@/components/landing/featuressection";
import FAQSection from "@/components/landing/faqsection";
import FinalCTA from "@/components/landing/finalcta";
import Footer from "@/components/landing/footer";
import PricingSection from "@/components/landing/pricingsection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Header />

      <main className="pt-[76px] lg:pt-[88px]">
        <Hero />
        <PainSection />
        <HowItWorks />
        <SystemShowcase />
        <MethodSection />
        <PricingSection />
        <FeaturesSection />
        <FinalCTA />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
