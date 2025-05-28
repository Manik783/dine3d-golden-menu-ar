
export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Dishes",
      description: "Select the menu items you want to showcase in 3D and AR. We'll handle the rest."
    },
    {
      number: "02", 
      title: "We 3D Model & AR Map Them",
      description: "Our expert team creates photorealistic 3D models and AR experiences for each dish."
    },
    {
      number: "03",
      title: "You Launch & Impress",
      description: "Deploy your new interactive menu and watch customer engagement soar."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Getting started with Dine3D is simple. We handle the technical complexity while you focus on your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gold-gradient z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
