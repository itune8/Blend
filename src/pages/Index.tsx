import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventsCarousel from "@/components/EventsCarousel";
import SocialProof from "@/components/SocialProof";
import AnalyticsSection from "@/components/AnalyticsSection";
import GrowthSection from "@/components/GrowthSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="page-shell bg-background">
      <Navigation />
      <HeroSection />
      <ValueSection />
      <FeaturesSection />
      <EventsCarousel />
      <SocialProof />
      <AnalyticsSection />
      <GrowthSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;