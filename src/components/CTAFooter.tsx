import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const CTAFooter = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
          Ready to Upgrade Your Menu?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join the future of dining. Transform your restaurant's menu into an immersive experience that drives sales and delights customers.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email"
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400"
          />
          <Button className="bg-gold-gradient hover:opacity-90 text-black font-bold px-8 py-2 rounded-md transition-all duration-300 whitespace-nowrap">
            Get Started
          </Button>
        </div>
        
        <Button 
          size="lg"
          className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-gold-gradient hover:text-black font-bold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Book a Free Demo
        </Button>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">Dine3D</h3>
              <p>© 2024 Dine3D. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent transition-colors">Terms of Service</a>
              <a href="#" className="hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
