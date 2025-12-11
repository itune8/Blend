import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "What Blend Does", href: "#value" },
  { title: "Features", href: "#features" },
  { title: "Social Proof", href: "#social-proof" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      setLastScrollY((prevY) => {
        if (scrollY > 140) {
          if (scrollY > prevY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
        return scrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBase = cn(
    "fixed left-0 right-0 z-50 transition-all duration-500 ease-out",
    isScrolled
      ? "bg-[#0b111d]/85 backdrop-blur-xl border-b border-white/10 shadow-glow"
      : "bg-transparent"
  );

  return (
    <nav className={cn(navBase, isVisible ? "top-0" : "-top-28")}> 
      <div className="section-shell">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <img
              src="/lovable-uploads/Untitled design-2.png"
              alt="Blend"
              className="h-20 sm:h-24 w-auto logo-pulse-glow"
              loading="eager"
              decoding="async"
            />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="interactive-button rounded-full px-5 py-2.5 border-white/30 text-white bg-white/5 hover:bg-white/15"
              onClick={() => window.open("https://event.blendapp.ae", "_blank")}
            >
              Explore Events
            </Button>
            <Button
              className="interactive-button rounded-full px-5 py-2.5 font-semibold bg-white text-gray-900 hover:bg-white/90 shadow-glow"
              onClick={() => window.open("https://apps.apple.com/in/app/blend-meet-join-groups/id6743412497", "_blank")}
            >
              <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download iOS
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-full w-12 h-12 text-white"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0b111d]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6 mb-4 text-white">
            <div className="flex flex-col gap-4 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-base font-semibold text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="interactive-button rounded-full px-5 py-3 border-white/20 text-white bg-white/5"
                onClick={() => {
                  window.open("https://event.blendapp.ae", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                Explore Events
              </Button>
              <Button
                className="interactive-button rounded-full px-5 py-3 font-semibold bg-white text-gray-900 hover:bg-white/90 shadow-glow"
                onClick={() => {
                  window.open("https://apps.apple.com/in/app/blend-meet-join-groups/id6743412497", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download iOS
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;