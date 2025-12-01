import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import FeaturesSection from "./components/FeaturesSection";
import DetailSection from "./components/DetailSection";
import BenefitsSection from "./components/BenefitsSection";
import StepsSection from "./components/StepsSection";
import CaseStudySection from "./components/CaseStudySection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <DetailSection />
        <BenefitsSection />
        <StepsSection />
        <CaseStudySection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
