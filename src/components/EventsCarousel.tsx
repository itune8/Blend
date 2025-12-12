import { useEffect, useMemo, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { RefObject } from "react";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";

const events = [
  {
    title: "Sunset Rooftop Flow",
    location: "Gemmayze, Beirut",
    date: "Fri • 6:30 PM",
    price: "$18",
    tag: "Wellness",
  },
  {
    title: "Night Market Sessions",
    location: "Mar Mikhael",
    date: "Sat • 8:00 PM",
    price: "Free",
    tag: "Culture",
  },
  {
    title: "Trail & Brunch",
    location: "Chouf Reserve",
    date: "Sun • 7:00 AM",
    price: "$22",
    tag: "Outdoors",
  },
  {
    title: "Indie Soundscapes",
    location: "Hamra",
    date: "Thu • 9:00 PM",
    price: "$12",
    tag: "Music",
  },
  {
    title: "Community Coffee Lab",
    location: "Sursock",
    date: "Wed • 5:30 PM",
    price: "$8",
    tag: "Social",
  },
];

const EventsCarousel = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const cardWidth = 336; // px estimate for card + gap
  const scrollSpeed = 38; // px per second for marquee feel
  const baseEvents = useMemo(() => events, []);
  const loopedEvents = useMemo(() => [...baseEvents, ...baseEvents], [baseEvents]);

  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Disable auto-scroll on mobile for better performance
    if (isMobile) return;

    let rafId: number;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      if (!isPaused) {
        setOffset((prev) => {
          const next = prev - (scrollSpeed * delta) / 1000;
          const resetPoint = -cardWidth * baseEvents.length;
          return next <= resetPoint ? 0 : next;
        });
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, baseEvents.length, cardWidth, scrollSpeed, isMobile]);

  return (
    <section className="bg-[#0b111d] py-14 sm:py-18" id="events-carousel">
      <div className="section-shell">
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 reveal ${isVisible ? "reveal-visible" : ""}`}
          ref={ref as RefObject<HTMLDivElement>}
        >
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">Featured events</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Explore what’s live this week</h3>
          </div>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>Auto-plays every few seconds • Hover to pause</span>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => !isMobile && setIsPaused(true)}
          onMouseLeave={() => !isMobile && setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="carousel-track"
            style={{
              transform: isMobile ? 'translateX(0)' : `translateX(${offset}px)`,
              transition: "none",
            }}
          >
            {loopedEvents.map((event, idx) => (
              <article key={`${event.title}-${idx}`} className="carousel-card text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">{event.tag}</span>
                  <span className="text-sm text-white/70 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-white/90 flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-primary" />
                    {event.price}
                  </span>
                  <span className="text-white/60">Swipe or hover</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
