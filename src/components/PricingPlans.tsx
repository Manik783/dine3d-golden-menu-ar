import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

export const PricingPlans = () => {
  const plans = [
    {
      name: "Starter Plan",
     
      period: "", // Period not applicable with the new pricing structure
      description: "Perfect for small restaurants or single outlets looking to test the power of 3D menus.",
      features: [
        { text: "Up to 25 3D Menu Items", included: true },
        { text: "3D & AR Functionality (browser-based)", included: true },
        { text: "Real-Time Menu Updates", included: true },
        { text: "Email Support", included: true },
        { text: "Basic Analytics Dashboard", included: true },
        { text: "Custom Branding", included: false },
        { text: "Custom theme", included: false },
        { text: "Advanced Analytics Dashboard", included: false },
        { text: "Priority Support", included: false },
        { text: "Unlimited Menu Items", included: false },
        { text: "White-Label Solution", included: false },
        { text: "Multi-location Management", included: false },
      ]
    },
    {
      name: "Pro Plan",
     
      period: "", // Period not applicable
      description: "Ideal for mid-size or premium restaurants seeking branding and advanced analytics.",
      features: [
        { text: "Up to 50 3D Menu Items", included: true },
        { text: "Basic AR Functionality", included: true },
        { text: "Mobile App Integration", included: true },
        { text: "Real-Time Menu Updates", included: true },
        { text: "Email Support", included: true },
        { text: "Custom Branding", included: true },
        { text: "Custom theme", included: true },
        { text: "Advanced Analytics Dashboard", included: true },
        { text: "Priority Support", included: true },
        { text: "Unlimited Menu Items", included: false },
        { text: "White-Label Solution", included: false },
        { text: "Multi-location Management", included: false },
      ],
      popular: true
    },
    {
      name: "Enterprise Plan",
     
      period: "", // Period not applicable
      description: "Comprehensive AR + 3D solution tailored for restaurant chains and multi-location giants.",
      features: [
        { text: "Up to 100 3D Menu Items", included: true },
        { text: "Basic AR Functionality", included: true },
        { text: "Mobile App Integration", included: true },
        { text: "Real-Time Menu Updates", included: true },
        { text: "Email Support", included: true },
        { text: "Custom Branding", included: true },
        { text: "Custom theme", included: true }, // Assuming Enterprise includes custom theme as Pro does
        { text: "Advanced Analytics Dashboard", included: true },
        { text: "Priority Support", included: true },
        { text: "Unlimited Menu Items", included: true },
        { text: "White-Label Solution", included: true },
        { text: "Multi-location Management", included: true },
      ]
    }
  ];

  const addOns = [
    { feature: "Custom Integration with POS", price: "₹10,000" },
    { feature: "Payment Gateway Integration", price: "₹10,000" },
    { feature: "Waiterless Ordering (via QR)", price: "₹10,000" },
    { feature: "Additional Per dish 3d model", price: "₹2000" },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your restaurant. All plans include setup and training.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-black border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/20 scale-105' 
                  : 'border-gray-700 hover:border-yellow-400/40'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-gradient text-black px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span> {/* Reduced font size for new price structure */}
                  {/* <span className="text-gray-400">{plan.period}</span> */}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 text-left"> {/* Align features to the left */}
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}> {/* Dim excluded features */}
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full py-3 rounded-full font-bold transition-all duration-300 bg-gold-gradient hover:opacity-90 text-black"
              >
                {plan.name.includes('Enterprise') ? 'Book a Demo for Your Chain' : plan.name.includes('Pro') ? 'Upgrade Now for Full Branding Power' : 'Get Started Today'} {/* Dynamic Button Text */}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-8 bg-gold-gradient bg-clip-text text-transparent">Add-Ons</h3>
            <p className="text-xl text-gray-300 mb-8">Customize any plan with optional add-ons:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                {addOns.map((addon, index) => (
                    <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 text-left">
                        <p className="text-gray-300 font-semibold mb-2">{addon.feature}</p>
                        <p className="text-white text-xl font-bold">{addon.price}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};
