import type { RefObject } from "react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_IMAGE = "/lovable-uploads/e4e71431-c9e3-44d2-a10b-57c20b67e0b1.png";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setOffset(Math.min(y * 0.35, 180));
        rafRef.current = null;
      });
    };

    let lastMouseUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseUpdate < 33) return;
      lastMouseUpdate = now;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setMouseOffset({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
      style={{ ["--hero-img" as string]: `url(${HERO_IMAGE})` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center parallax-layer kenburns"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          transform: `translateY(-${offset}px) scale(1.05)`,
        }}
      />
      <div className="hero-logo-spotlight" aria-hidden />
      <div
        className="absolute inset-0 hero-overlay hero-animated-overlay"
        style={{ transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)` }}
      />
      <div className="absolute inset-0 hero-noise" aria-hidden />

      <div className="relative z-10 section-shell w-full py-24 lg:py-32">
        <div
          ref={ref as RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center reveal ${isVisible ? "reveal-visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs sm:text-sm backdrop-blur-md border border-white/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Intelligent platform for discovering and hosting events
          </div>

          <div className="relative inline-block mb-4 lg:mb-6">
            <span className="headline-outline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hidden sm:block">
              Real People. Real Experiences. Real Blends.
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-title-hover">
              <span className="headline-from-image hidden sm:inline">Real People. Real Experiences.</span>
              <span className="sm:hidden text-white">Real People. Real Experiences.</span>
              <span className="text-primary block sm:inline"> Real Blends.</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto mb-8 lg:mb-12 leading-relaxed hero-tagline px-4">
            Lebanon's most vibrant events in one place. From movement to meaning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto interactive-button cta-pulse text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold bg-white text-gray-900 hover:bg-white"
              onClick={() => window.open("https://event.blendapp.ae/event/create", "_blank")}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto interactive-button cta-pulse text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-white/60 text-white hover:text-gray-900 hover:bg-white"
              asChild
            >
              <a href="https://event.blendapp.ae" className="flex items-center justify-center">
                Explore Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-white/80 px-4">
            {["Curated discovery", "Organizer-ready", "Community-first"].map((label) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-md">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
