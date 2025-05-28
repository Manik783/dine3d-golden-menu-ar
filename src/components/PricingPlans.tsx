import { Button } from '@/components/ui/button';

export const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small restaurants getting started with AR menus",
      features: [
        "Up to 20 menu items in 3D",
        "Basic AR functionality",
        "Mobile app integration",
        "Email support",
        "Monthly menu updates"
      ]
    },
    {
      name: "Pro",
      price: "$299",
      period: "/month",
      description: "Ideal for growing restaurants with extensive menus",
      features: [
        "Up to 100 menu items in 3D",
        "Advanced AR features",
        "Custom branding",
        "Analytics dashboard",
        "Priority support",
        "Weekly menu updates",
        "Social media integration"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "$599",
      period: "/month",
      description: "For restaurant chains and premium establishments",
      features: [
        "Unlimited menu items",
        "White-label solution",
        "Advanced analytics",
        "API access",
        "24/7 dedicated support",
        "Real-time menu updates",
        "Custom AR experiences",
        "Multi-location management"
      ]
    }
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
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gold-gradient rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gold-gradient hover:opacity-90 text-black'
                    : 'bg-transparent border border-yellow-400 text-yellow-400 hover:bg-gold-gradient hover:text-black'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
