import { ArrowRight, Users, Calendar, MessageCircle } from "lucide-react";

const WhatIsBlend = () => {
  const features = [
    {
      icon: Calendar,
      title: "RSVP",
      description: "Discover and reserve your spot at curated local experiences"
    },
    {
      icon: Users,
      title: "Check-In",
      description: "Easy QR code check-in creates instant connections"
    },
    {
      icon: MessageCircle,
      title: "Group Loop",
      description: "Continue the conversation and build lasting community"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            What is{" "}
            <span className="bg-gradient-to-r from-primary to-warm-sunset bg-clip-text text-transparent">
              Blend
            </span>
            ?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than event discovery. Blend creates meaningful connections through 
            curated experiences that bring people together in real life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 sm:w-10 h-8 sm:h-10 text-primary" />
                </div>
                {index < features.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 sm:top-10 -right-8 xl:-right-12 w-6 xl:w-8 h-6 xl:h-8 text-primary/40" />
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-soft hover:shadow-warm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                How it works
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Discover Events</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Browse curated experiences in your area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">RSVP & Attend</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Reserve your spot and show up for real connections</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Stay Connected</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Join group chats and personalized spaces</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-warm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center order-1 lg:order-2">
              <div className="w-24 sm:w-32 h-24 sm:h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-12 sm:w-16 h-12 sm:h-16 text-primary" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Community Powered</h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Local organizers create authentic experiences that build lasting connections
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBlend;