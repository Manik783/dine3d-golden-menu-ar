
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { WhyDine3D } from '@/components/WhyDine3D';
import { HowItWorks } from '@/components/HowItWorks';
import { VideoSection } from '@/components/VideoSection';
import { PricingPlans } from '@/components/PricingPlans';
import { Testimonials } from '@/components/Testimonials';
import { CTAFooter } from '@/components/CTAFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhyDine3D />
      <HowItWorks />
      <VideoSection />
      <PricingPlans />
      <Testimonials />
      <CTAFooter />
    </div>
  );
};

export default Index;
