import { Star, MessageCircle } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-20 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-warm-sunset bg-clip-text text-transparent">
              Lebanon's Best
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how organizers are building thriving communities with Blend
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-soft hover:shadow-warm transition-all duration-300">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-warm-gold text-warm-gold" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-6 sm:mb-8 leading-relaxed">
              "We filled 25 mats with no Instagram ad spend. Just Blend."
            </blockquote>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-warm-sunset rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-base">LY</span>
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm sm:text-base">Luna Yoga Studio</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Wellness Organizer, Beirut</div>
              </div>
            </div>
          </div>

          {/* WhatsApp Chat Preview */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Post-Event Chat</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4 max-h-64 sm:max-h-80 overflow-hidden">
              {/* Chat Messages */}
              <div className="flex gap-2 sm:gap-3">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">S</div>
                <div className="bg-muted rounded-xl sm:rounded-2xl rounded-tl-sm p-2 sm:p-3 max-w-[200px] sm:max-w-xs">
                  <p className="text-xs sm:text-sm">Amazing session today! When's the next one?</p>
                </div>
              </div>
              
              <div className="flex gap-2 sm:gap-3">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-warm-sunset rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">M</div>
                <div className="bg-muted rounded-xl sm:rounded-2xl rounded-tl-sm p-2 sm:p-3 max-w-[200px] sm:max-w-xs">
                  <p className="text-xs sm:text-sm">Loved the sunset view! Same time next week?</p>
                </div>
              </div>
              
              <div className="flex gap-2 sm:gap-3 justify-end">
                <div className="bg-primary rounded-xl sm:rounded-2xl rounded-tr-sm p-2 sm:p-3 max-w-[200px] sm:max-w-xs">
                  <p className="text-xs sm:text-sm text-white">Thursday 6 PM! Just posted on Blend 🧘‍♀️</p>
                </div>
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-warm-gold rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">L</div>
              </div>
              
              <div className="flex gap-2 sm:gap-3">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-deep-teal rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">A</div>
                <div className="bg-muted rounded-xl sm:rounded-2xl rounded-tl-sm p-2 sm:p-3 max-w-[200px] sm:max-w-xs">
                  <p className="text-xs sm:text-sm">Count me in! Bringing a friend too 👫</p>
                </div>
              </div>
              
              <div className="flex gap-2 sm:gap-3">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-warm-sunset rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">D</div>
                <div className="bg-muted rounded-xl sm:rounded-2xl rounded-tl-sm p-2 sm:p-3 max-w-[200px] sm:max-w-xs">
                  <p className="text-xs sm:text-sm">This community is everything! ✨</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
              <p className="text-center text-muted-foreground text-xs sm:text-sm">
                Active community keeps growing 📈
              </p>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">95%</div>
            <div className="text-muted-foreground text-sm sm:text-base">Organizer satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-warm-sunset mb-1 sm:mb-2">2.3x</div>
            <div className="text-muted-foreground text-sm sm:text-base">Average repeat attendance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-warm-gold mb-1 sm:mb-2">48h</div>
            <div className="text-muted-foreground text-sm sm:text-base">Average event sell-out time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;