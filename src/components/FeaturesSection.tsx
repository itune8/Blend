import type { CSSProperties, RefObject } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LayoutGrid, MonitorSmartphone, BarChart3, ShieldCheck, Users, Bell, Sparkles } from "lucide-react";

const features = [
  {
    title: "Event discovery feed",
    description: "A modern feed that adapts to your interests and location.",
    icon: LayoutGrid,
  },
  {
    title: "Organizer dashboard",
    description: "Plan, publish, and manage everything from one control center.",
    icon: MonitorSmartphone,
  },
  {
    title: "Analytics & insights",
    description: "Understand attendance, growth, and engagement at a glance.",
    icon: BarChart3,
  },
  {
    title: "Secure payments",
    description: "Fast, compliant checkout for tickets and add-ons.",
    icon: ShieldCheck,
  },
  {
    title: "Dynamic community modules",
    description: "Messaging, groups, and loyalty for a thriving community.",
    icon: Users,
  },
  {
    title: "AI-powered curation",
    description: "Personalized picks keep every attendee engaged.",
    icon: Sparkles,
  },
  {
    title: "Automated reminders",
    description: "Timely nudges and updates to reduce no-shows.",
    icon: Bell,
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const vectors = [
    { x: -140, y: -160 },
    { x: 0, y: -190 },
    { x: 140, y: -160 },
    { x: -140, y: 20 },
    { x: 140, y: 40 },
    { x: 160, y: 120 },
    { x: 0, y: 160 },
  ];

  return (
    <section className="bg-[#0c1322] py-16 sm:py-20" id="features">
      <div className="section-shell">
        <div
          className={`flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between reveal ${isVisible ? "reveal-visible" : ""}`}
          ref={ref as RefObject<HTMLDivElement>}
        >
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Platform features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Built for discovery, hosting, and growth.
            </h2>
          </div>
          <p className="text-white/70 max-w-xl text-base lg:text-lg">
            From discovery to payments, Blend keeps organizers and attendees in sync with seamless experiences across every touchpoint.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-14 feature-stage">
          <div className="feature-phone" aria-hidden>
            <div className="feature-phone-glow" />
            <div className="feature-phone-body">
              <div className="feature-phone-screen">
                <div className="feature-chip chip-one" />
                <div className="feature-chip chip-two" />
                <div className="feature-chip chip-three" />
              </div>
              <div className="feature-phone-notch" />
            </div>
          </div>

          <div className="feature-grid relative z-10">
            {features.map((feature, index) => {
              const vec = vectors[index % vectors.length];
              return (
                <div
                  key={feature.title}
                  className={`interactive-card hover-glow bg-white/5 text-white rounded-2xl border border-white/10 p-6 shadow-soft feature-fly-loop feature-rotate-glow feature-sweep ${isVisible ? "feature-fly-loop-active" : ""}`}
                  style={{
                    "--fly-from-x": `${vec.x}px`,
                    "--fly-from-y": `${vec.y}px`,
                    "--fly-loop-delay": `${index * 320}ms`,
                    "--glow-delay": `${index}s`,
                    "--sweep-delay": `${index * 1000}ms`,
                  } as CSSProperties}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-warm-sunset/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
