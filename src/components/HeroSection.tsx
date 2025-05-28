
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full opacity-5 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent animate-fade-in">
          Turn Menus Into
          <br />
          <span className="text-yellow-400">Immersive Experiences</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Engage diners with 3D & AR food menus that sell more and wow every time.
        </p>
        
        {/* CTA Button */}
        <Button 
          className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 animate-fade-in delay-500"
        >
          Book a Free Demo
        </Button>
        
        {/* Visual mockup */}
        <div className="mt-16 relative animate-fade-in delay-700">
          <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
            {/* 3D food mockup placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-2xl backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full opacity-80 animate-pulse"></div>
                <p className="text-yellow-400 font-semibold">AR Food Preview</p>
                <p className="text-gray-400 text-sm">Interactive 3D Model</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-500/20 rounded-full animate-bounce delay-1500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
