import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { WhyDine3D } from '@/components/WhyDine3D';
import { WebARSection } from '@/components/WebARSection';
import { PricingPlans } from '@/components/PricingPlans';
import { FAQ } from '@/components/FAQ';
import { CTAFooter } from '@/components/CTAFooter';
import { NewSectionPlaceholder } from '@/components/NewSectionPlaceholder';
import { BenefitsSection } from '@/components/BenefitsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhyDine3D />
      <WebARSection />

    
      <BenefitsSection />
      
      
      <NewSectionPlaceholder />
      <PricingPlans />
      <FAQ />
      <CTAFooter />
    </div>
  );
};

export default Index;
