
import { TrendingUp, Clock, Users } from 'lucide-react';

export const WhyDine3D = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Visual Menus = More Sales",
      description: "Studies show visual menus increase order values by up to 30%. Let your food do the talking."
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Update your menu instantly. No more reprinting costs or outdated items confusing customers."
    },
    {
      icon: Users,
      title: "Engage Gen Z & Millennials",
      description: "Tech-savvy diners expect interactive experiences. Give them what they want and watch loyalty soar."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
            Why Dine3D?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your restaurant's dining experience with cutting-edge technology that drives results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
