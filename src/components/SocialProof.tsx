import type { RefObject } from "react";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Blend helped us sell out community nights in 48 hours—without ad spend.",
    name: "Luna Wellness Collective",
    role: "Organizer, Beirut",
  },
  {
    quote: "Smart recommendations keep our attendees coming back week after week.",
    name: "North Star Events",
    role: "Cultural Experiences",
  },
  {
    quote: "Payments, check-ins, and community all in one place. It just works.",
    name: "Pulse Movement",
    role: "Fitness & Outdoors",
  },
];

const logoStrip = [
  "Cedar Studio",
  "Atlas Labs",
  "Nightwave",
  "Harbor House",
  "Shift Collective",
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [active, setActive] = useState(0);
  const hasTestimonials = testimonials.length > 0;
  const current = hasTestimonials ? testimonials[active % testimonials.length] : null;

  useEffect(() => {
    if (!hasTestimonials) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [hasTestimonials]);

  return (
    <section className="bg-gradient-to-b from-[#0b111d] via-[#0c1322] to-[#0b111d] py-16 sm:py-20" id="social-proof">
      <div className="section-shell">
        <div
          className={`reveal ${isVisible ? "reveal-visible" : ""} flex flex-col gap-3 mb-10`}
          ref={ref as RefObject<HTMLDivElement>}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Social Proof</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Trusted by the teams shaping your city’s experiences.
          </h2>
        </div>

        <div className="glass-panel border border-white/10 rounded-3xl shadow-soft p-6 sm:p-10 mb-8 text-white">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex gap-1 text-warm-gold">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-warm-gold text-warm-gold" />
              ))}
            </div>
            <div className="flex-1">
              <p className="text-xl sm:text-2xl font-semibold leading-relaxed mb-3 transition-all duration-500">
                {current?.quote ?? "Blend helps organizers grow with effortless discovery and community."}
              </p>
              <p className="text-white/70 text-sm sm:text-base">
                {current ? `${current.name} · ${current.role}` : "Verified organizers"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setActive(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === active ? "w-8 bg-primary" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-sm sm:text-base text-white/75">
          {logoStrip.map((logo) => (
            <div
              key={logo}
              className="interactive-card hover-glow border border-white/10 rounded-2xl px-4 py-3 bg-white/5 text-center"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
