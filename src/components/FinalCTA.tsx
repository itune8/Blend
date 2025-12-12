import type { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.25 });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0c1322] to-[#0a0f1a]" id="cta">
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={`section-shell text-center reveal ${isVisible ? "reveal-visible" : ""}`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Rocket className="w-3.5 h-3.5" />
          Be part of the movement
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 max-w-2xl mx-auto">
          Create your event today
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-6">
          Real-world events with intelligent tools for discovery, hosting, and community.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base px-6 py-3 rounded-full font-semibold bg-primary text-white hover:bg-primary/90"
            onClick={() => window.open("https://event.blendapp.ae/event/create", "_blank")}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-base px-6 py-3 rounded-full font-semibold border-white/30 text-white hover:bg-white/10"
            onClick={() => window.open("https://event.blendapp.ae", "_blank")}
          >
            Explore Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;