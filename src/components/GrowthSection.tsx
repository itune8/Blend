import type { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { title: "Streamlined Management", description: "Focus on creating amazing experiences, not admin work" },
  { title: "Community Building", description: "Turn one-time attendees into loyal community members" },
  { title: "Growth Insights", description: "Data-driven insights to scale your impact" },
];

const GrowthSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0c1322]" id="growth">
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={`section-shell reveal ${isVisible ? "reveal-visible" : ""}`}
      >
        <div className="growth-card-container rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6">
                Everything you need to <span className="text-primary">grow</span>
              </h2>

              <div className="space-y-4 sm:space-y-5 mb-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 growth-feature-item">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0 growth-dot" />
                    <div>
                      <h3 className="font-semibold text-white text-base">{feature.title}</h3>
                      <p className="text-white/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-6 py-3 text-sm sm:text-base font-semibold bg-primary text-white hover:bg-primary/90"
                onClick={() => window.open("https://event.blendapp.ae/event/create", "_blank")}
              >
                Request Organizer Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right Side - Analytics Cards */}
            <div className="space-y-3 sm:space-y-4">
              <div className="growth-analytics-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white text-base">Event Analytics</h3>
                  <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="flex items-end gap-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-primary">156</p>
                    <p className="text-white/60 text-xs sm:text-sm">Total RSVPs</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-amber-400">89%</p>
                    <p className="text-white/60 text-xs sm:text-sm">Show Rate</p>
                  </div>
                </div>
              </div>

              <div className="growth-analytics-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white text-base">Community Growth</h3>
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                    <Users className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">+24%</p>
                  <p className="text-white/60 text-xs sm:text-sm">Repeat attendees this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
