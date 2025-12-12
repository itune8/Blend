# Updated Components Summary

Date: 11 December 2025

## Overview
Animated and visual polish passes across the hero, features, analytics, and marquee interactions.

## Changes by Area

| Area | Files | Key changes | Location on page |
| :--- | :---- | :---------- | :--------------- |
| Hero headline & CTAs | `src/components/HeroSection.tsx`, `src/index.css` | Image-filled headline, new “Real People. Real Experiences. Real Blends.” copy, CTA pulse sheen | Hero (top) |
| Feature stacks | `src/components/FeaturesSection.tsx`, `src/index.css` | Phone launch loop, rotating glow ring, staggered sheen sweep per card | “What Blend Does” grid |
| Analytics / Impact | `src/components/AnalyticsSection.tsx`, `src/index.css`, `src/pages/Index.tsx` | New analytics block with testimonial, endless chat marquee, glowing KPI pills; added to layout | Impact section (below social proof) |
| Events carousel | `src/components/EventsCarousel.tsx`, `src/index.css` | Continuous marquee autoplay with hover pause | Featured events slider |
| Global styles | `src/index.css` | Hero text fill, CTA pulse, feature glows/sweeps, analytics bubbles/pills, gradient blobs | Shared styling across new effects |

## Notes
- Hovering feature cards and chat bubbles adds lift/glow for interactivity.
- Feature card glows and sheen are staggered so each card is highlighted once per cycle.
- Chat marquee pauses on hover; KPI tiles glow and animate into view on scroll.
