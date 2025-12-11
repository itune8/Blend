import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Brain, 
  Target, 
  BarChart3, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  Star,
  Shield,
  Mail,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const EarlyAccess = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <img 
            src="/lovable-uploads/Untitled design-2.png" 
            alt="Blend Lebanon" 
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm font-semibold">
            Organizer Dashboard Preview
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to Your{" "}
            <span className="text-primary">Command Center</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            This is what running your events on autopilot looks like. 
            Let AI handle the chaos while you focus on what matters.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Pay $100 – Lifetime Access
          </Button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Events Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See everything that matters at a glance. No more guessing, no more chaos.
            </p>
          </div>
          
          {/* Dashboard Mockup */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-white">Pilates @ The Terrace</h3>
                  <p className="text-gray-400">Tomorrow, 7:00 PM</p>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  85% Full
                </Badge>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      RSVP List
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-2">42/50</div>
                    <p className="text-gray-400 text-sm">+12 in last 2 hours</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Attendance Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                    <p className="text-gray-400 text-sm">↑ 8% vs last event</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      Engagement Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">9.2</div>
                    <p className="text-gray-400 text-sm">Excellent rating</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Activity */}
              <div className="bg-gray-800/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Real-time Updates
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Sarah M. just RSVPed</span>
                    <span className="text-gray-500">2 min ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">AI predicted 3 no-shows</span>
                    <span className="text-gray-500">15 min ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Engagement reminder sent</span>
                    <span className="text-gray-500">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Intelligence Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Let AI Show You What Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop guessing. Start knowing. Our AI analyzes patterns you can't see.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Predicted Attendance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Know who's actually coming 2 days before your event. No more empty mats.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Who's Most Engaged</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Identify your superfans and VIP members automatically. Build stronger communities.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Re-engagement Timing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Know exactly when to follow up with past attendees for maximum response rates.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Retention Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Discover which events create loyal attendees and which ones don't work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "We finally understood who was coming back and why. 
              Our retention went from 30% to 78% in just two months."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">MR</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Maya Rahal</div>
                <div className="text-gray-600">Founder, Mindful Movement Beirut</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Run Smarter Events?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join the first 50 organizers who will shape the future of events in Lebanon.
          </p>
          
          <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">$100</div>
              <div className="text-gray-600">Lifetime Access</div>
              <Badge className="mt-3 bg-primary/10 text-primary border-primary/20">
                Limited to 50 Organizers
              </Badge>
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-6"
            >
              Pay $100 – Lifetime Access
            </Button>
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Lifetime dashboard access</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Priority feature input</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Homepage spotlight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-white">7-Day Money Back</h3>
                <p className="text-gray-400 text-sm">Not happy? Get a full refund, no questions asked.</p>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-white">First 50 Only</h3>
                <p className="text-gray-400 text-sm">Exclusive access for founding organizers.</p>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-white">Direct Support</h3>
                <p className="text-gray-400 text-sm">
                  <a href="mailto:support@blendapp.ae" className="text-primary hover:underline">
                    support@blendapp.ae
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;