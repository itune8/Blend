import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/e4e71431-c9e3-44d2-a10b-57c20b67e0b1.png)'
        }}
      >
        <div className="hero-logo-spotlight" aria-hidden />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Real People.{" "}
          <span className="text-primary">
            Real Experiences.
          </span>{" "}
          Real Blends.
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Lebanon's most vibrant events in one place. From movement to meaning.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            variant="cta"
            size="lg"
            onClick={() => window.open('https://apps.apple.com/in/app/blend-meet-join-groups/id6743412497', '_blank')}
            className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 h-auto rounded-full font-semibold"
          >
            <span className="hidden sm:inline">Download iOS App</span>
            <span className="sm:hidden">Download App</span>
          </Button>
          <Button
            variant="glass"
            size="lg"
            className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 h-auto rounded-full font-semibold"
            asChild
          >
            <a href="https://event.blendapp.ae">Discover Events</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;