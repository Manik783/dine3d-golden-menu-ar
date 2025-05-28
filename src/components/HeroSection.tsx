
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-gradient rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-gradient rounded-full opacity-5 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gold-gradient bg-clip-text text-transparent animate-fade-in">
          Turn Menus Into
          <br />
          <span className="bg-gold-gradient bg-clip-text text-transparent">Immersive Experiences</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Engage diners with 3D & AR food menus that sell more and wow every time.
        </p>
        
        {/* CTA Button */}
        <Button 
          className="bg-gold-gradient hover:opacity-90 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 animate-fade-in delay-500"
        >
          Book a Free Demo
        </Button>
        
        {/* iPhone mockup with your menu image */}
        <div className="mt-16 relative animate-fade-in delay-700">
          <div className="relative mx-auto w-80 h-[600px] md:w-96 md:h-[700px]">
            {/* iPhone frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* iPhone screen */}
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                
                {/* Menu image */}
                <img 
                  src="/lovable-uploads/02c809ce-a66d-4826-a240-1fde02c0a983.png" 
                  alt="Dine3D AR Menu Interface"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay to show it's interactive */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* AR indicator */}
                <div className="absolute bottom-6 right-6 bg-gold-gradient text-black px-3 py-1 rounded-full text-sm font-semibold">
                  AR Ready
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold-gradient rounded-full opacity-20 animate-bounce delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gold-gradient rounded-full opacity-20 animate-bounce delay-1500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
