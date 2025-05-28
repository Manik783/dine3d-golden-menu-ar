import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-gradient rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-gradient rounded-full opacity-5 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side content (Text and Buttons) */}
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gold-gradient bg-clip-text text-transparent">
            Turn Menus Into
            <br />
            <span className="bg-gold-gradient bg-clip-text text-transparent">Immersive Experiences</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl md:max-w-none mx-auto leading-relaxed animate-fade-in delay-300">
            Engage diners with 3D & AR food menus that sell more and wow every time.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-500">
            <Button 
              className="w-64 bg-gold-gradient text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90"
            >
              Book a Free Demo
            </Button>
            <a 
              href="https://frontend-nine-sigma-24.vercel.app/menu/3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="w-64 bg-gold-gradient text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90"
              >
                Try Live Demo
              </Button>
            </a>
          </div>
        </div>
        
        {/* Right side (Screenshot Image) */}
        <div className="mt-8 md:mt-0 relative animate-fade-in delay-700 flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
             <img 
            src="/lovable-uploads/a901ffad-c526-4054-823d-0f6b239a0e16.png" 
            alt="AR Menu Preview" 
            className="w-full h-auto object-cover"
          />
          </div>
        </div>
      </div>
    </section>
  );
};
