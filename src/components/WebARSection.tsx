import { Button } from '@/components/ui/button';

export const WebARSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side content */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-6">
            {/* Logo */}
            <img src="/logo.png" alt="Dine3D Logo" className="h-8 mr-3 outline-none border-none" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gold-gradient bg-clip-text text-transparent">
              WebAR for restaurant
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-md md:max-w-none mx-auto md:mx-0">
            AR menu in the browser without installing additional applications. By QR-code or link.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
            {/* QR Code */}
            <div className="w-48 h-48 border border-white p-2 rounded-lg flex items-center justify-center">
              <img src="/qrcode.png" alt="WebAR QR Code" className="w-full h-full object-contain" />
            </div>
            
            {/* Try Now Button */}
            <Button className="bg-gold-gradient hover:opacity-90 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300">
              Try Now
            </Button>
          </div>
        </div>
        
        {/* Right side video */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
             <video
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/landing_video.mp4" type="video/mp4" />
              <source src="/landing_video.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}; 