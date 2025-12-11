import type { RefObject } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles, Compass, Users, Ticket } from "lucide-react";

const valuePoints = [
  {
    title: "Discover curated events around you",
    icon: Compass,
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Organizers get powerful event tools",
    icon: Sparkles,
    color: "from-warm-sunset/25 to-primary/5",
  },
  {
    title: "Smart recommendations based on your interests",
    icon: Users,
    color: "from-warm-gold/25 to-primary/5",
  },
  {
    title: "Seamless ticketing & community features",
    icon: Ticket,
    color: "from-deep-teal/25 to-primary/5",
  },
];

const ValueSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="bg-gradient-to-b from-[#0b111d] via-[#0c1322] to-[#0b111d] py-16 sm:py-20" id="value">
      <div className="section-shell">
        <div
          className={`max-w-2xl mb-10 reveal ${isVisible ? "reveal-visible" : ""}`}
          ref={ref as RefObject<HTMLDivElement>}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">What Blend Does</p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight">
            Everything you need to discover and manage unforgettable events.
          </h2>
        </div>

        <div className="card-grid">
          {valuePoints.map((item, index) => (
            <div
              key={item.title}
              className={`interactive-card hover-glow bg-white/5 text-white rounded-2xl border border-white/10 p-6 shadow-soft backdrop-blur-sm reveal ${
                isVisible ? "reveal-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg font-semibold leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
