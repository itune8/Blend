import { Button } from "@/components/ui/button";
import { QrCode, BarChart3, MessageSquare, Users } from "lucide-react";

const ForOrganizers = () => {
  const features = [
    {
      icon: Users,
      title: "Smart RSVP",
      description: "Intelligent waitlists and automated confirmations"
    },
    {
      icon: QrCode,
      title: "QR Check-in",
      description: "Seamless check-in experience for attendees"
    },
    {
      icon: MessageSquare,
      title: "Post-event Chat",
      description: "Keep your community engaged after the event"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Track growth and engagement insights"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Your Dashboard.{" "}
            <span className="bg-gradient-to-r from-primary to-warm-sunset bg-clip-text text-transparent">
              Your Community.
            </span>{" "}
            Your Growth.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empower your events with tools designed for Lebanon's most passionate organizers. 
            Build community, not just attendance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300 group">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-primary to-warm-sunset rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Everything you need to grow
              </h3>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Streamlined Management</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Focus on creating amazing experiences, not admin work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Community Building</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Turn one-time attendees into loyal community members</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Growth Insights</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Data-driven insights to scale your impact</p>
                  </div>
                </div>
              </div>
              <Button 
                variant="cta" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full font-semibold"
              >
                Request Organizer Access
              </Button>
            </div>

            {/* Dashboard Preview */}
            <div className="bg-gradient-to-br from-muted to-background rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-soft mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Event Analytics</h4>
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary rounded-md sm:rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary">156</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Total RSVPs</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-warm-sunset">89%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Show Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-soft">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Community Growth</h4>
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-warm-sunset rounded-md sm:rounded-lg flex items-center justify-center">
                    <Users className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-warm-sunset mb-1 sm:mb-2">+24%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Repeat attendees this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForOrganizers;