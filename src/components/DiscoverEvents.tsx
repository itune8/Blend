import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const DiscoverEvents = () => {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              From Pilates to Parties.{" "}
              <span className="bg-gradient-to-r from-primary to-warm-sunset bg-clip-text text-transparent">
                Discover your next ritual.
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Whether you're seeking movement, meaning, or memorable nights out, 
              find your people and your passion in Lebanon's most vibrant community.
            </p>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-sm sm:text-base">Wellness & Movement</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-warm-sunset rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-sm sm:text-base">Cultural Experiences</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-warm-gold rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-sm sm:text-base">Nightlife & Social</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-sm sm:text-base">Adventure & Outdoors</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full font-semibold"
              asChild
            >
              <a href="https://event.blendapp.ae">Explore Events</a>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm">
              <img
                src="/lovable-uploads/62607210-40ed-402a-9636-a85ecbfb6885.png"
                alt="Pilates session on a wooden dock by the sea at sunset"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-sunset"></div>
              
              {/* App UI Preview Placeholder */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="font-bold text-foreground text-sm sm:text-base">Sunset Pilates</h3>
                    <span className="text-primary font-semibold text-sm sm:text-base">$15</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    Join us for a mindful pilates session as the sun sets over the Mediterranean
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white fill-white" />
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground">See preview</span>
                    </div>
                    <Button variant="hero" size="sm" className="rounded-full text-xs sm:text-sm px-3 sm:px-4" asChild>
                      <a href="https://event.blendapp.ae">RSVP</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverEvents;