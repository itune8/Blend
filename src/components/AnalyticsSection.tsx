import type { RefObject } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Star, Sparkles } from "lucide-react";

const metrics = [
  { value: "95%", label: "Organizer satisfaction", glow: "teal" },
  { value: "2.3x", label: "Average repeat attendance", glow: "sunset" },
  { value: "48h", label: "Average event sell-out time", glow: "gold" },
];

const chat = [
  { author: "S", text: "Amazing session today! When's the next one?" },
  { author: "M", text: "Loved the sunset view! Same time next week?" },
  { author: "", text: "Thursday 6 PM. Just posted on Blend 🧘", highlight: true },
  { author: "A", text: "Count me in! Bringing a friend too 👫" },
  { author: "D", text: "This community is everything! ✨" },
];

const AnalyticsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.18 });

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0b111d] via-[#0c1322] to-[#0b111d] overflow-hidden" id="analytics">
      <div className="section-shell relative z-10">
        <div
          ref={ref as RefObject<HTMLDivElement>}
          className={`reveal ${isVisible ? "reveal-visible" : ""} flex flex-col gap-3 text-center mb-10`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Trusted by Lebanon's Best
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            See how organizers are building thriving communities with Blend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <div
            className={`glass-panel border border-white/10 rounded-3xl p-6 sm:p-8 shadow-soft metric-card ${isVisible ? "metric-card-visible" : ""}`}
            style={{ transitionDelay: "80ms" }}
          >
            <div className="flex items-center gap-2 text-warm-gold mb-4">
              <Star className="w-5 h-5 fill-warm-gold text-warm-gold" />
              <Star className="w-5 h-5 fill-warm-gold text-warm-gold" />
              <Star className="w-5 h-5 fill-warm-gold text-warm-gold" />
              <Star className="w-5 h-5 fill-warm-gold text-warm-gold" />
              <Star className="w-5 h-5 fill-warm-gold text-warm-gold" />
            </div>
            <p className="text-xl sm:text-2xl text-white font-semibold leading-relaxed mb-4">
              "We filled 25 mats with no Instagram ad spend. Just Blend."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-warm-sunset/50 flex items-center justify-center text-white font-bold text-sm">
                LY
              </div>
              <div>
                <p className="text-white font-semibold">Luna Yoga Studio</p>
                <p className="text-white/60 text-sm">Wellness Organizer, Beirut</p>
              </div>
            </div>
          </div>

          <div
            className={`glass-panel border border-white/10 rounded-3xl p-6 sm:p-8 shadow-soft metric-card ${isVisible ? "metric-card-visible" : ""}`}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <MessageCircle className="w-5 h-5" />
              <p className="font-semibold text-white">Post-Event Chat</p>
            </div>
            <div className="chat-marquee" aria-label="Live community chat">
              <div className="chat-marquee-track">
                {[...chat, ...chat].map((line, idx) => (
                  <div
                    key={`${line.text}-${idx}`}
                    className={`flex items-start gap-2 chat-row ${line.highlight ? "justify-end" : "justify-start"}`}
                  >
                    {!line.highlight && (
                      <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-xs font-semibold">
                        {line.author || "•"}
                      </div>
                    )}
                    <div
                      className={`metric-bubble chat-bubble ${line.highlight ? "metric-bubble-highlight" : ""}`}
                    >
                      {line.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm mt-5">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Active community keeps growing</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`rounded-2xl border border-white/10 bg-white/5 p-5 text-center metric-pill metric-${metric.glow} ${isVisible ? "metric-card-visible" : ""}`}
              style={{ transitionDelay: `${240 + idx * 80}ms` }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-white metric-number">{metric.value}</p>
              <p className="text-white/70 mt-2 text-sm sm:text-base">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden>
        <div className="gradient-blob blob-one" />
        <div className="gradient-blob blob-two" />
      </div>
    </section>
  );
};

export default AnalyticsSection;
