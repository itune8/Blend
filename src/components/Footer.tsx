const Footer = () => {
  return (
    <footer className="bg-[#0a101a] text-white py-12">
      <div className="section-shell grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Blend</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Your city’s events, organized in one intelligent platform.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/60">Explore</h4>
          <div className="flex flex-col gap-2 text-white/80 text-sm">
            <a href="#value" className="hover:text-white transition-colors">What Blend Does</a>
            <a href="#features" className="hover:text-white transition-colors">Platform Features</a>
            <a href="#social-proof" className="hover:text-white transition-colors">Social Proof</a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/60">Contact</h4>
          <div className="flex flex-col gap-2 text-white/80 text-sm">
            <a href="mailto:hello@blendapp.ae" className="hover:text-white transition-colors">hello@blendapp.ae</a>
            <a href="https://event.blendapp.ae" className="hover:text-white transition-colors">Explore events</a>
            <a href="https://event.blendapp.ae/event/create" className="hover:text-white transition-colors">Create an event</a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 text-white/60 text-xs flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Blend. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
