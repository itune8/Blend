import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Small IntersectionObserver hook to reveal elements when they enter the viewport.
 */
export const useScrollReveal = (
  { threshold = 0.2, rootMargin = "0px 0px -10% 0px", triggerOnce = true }: ScrollRevealOptions = {}
) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return;

    // Prevent double triggering
    if (hasTriggeredRef.current && triggerOnce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add safety check to prevent false triggers at page bottom
          if (entry.isIntersecting && entry.intersectionRatio >= (threshold * 0.9)) {
            if (!hasTriggeredRef.current) {
              setIsVisible(true);
              hasTriggeredRef.current = true;
              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            }
          } else if (!triggerOnce && !entry.isIntersecting) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible } as const;
};
