import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import PainSection from "@/components/landing/painsection";
import HowItWorks from "@/components/landing/howitworks";
import SystemShowcase from "@/components/landing/systemshowcase";
import MethodSection from "@/components/landing/methodsection";
import PricingSection from "@/components/landing/pricingsection";
import FeaturesSection from "@/components/landing/featuressection";
import FinalCTA from "@/components/landing/finalcta";
import FAQSection from "@/components/landing/faqsection";
import Footer from "@/components/landing/footer";

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
