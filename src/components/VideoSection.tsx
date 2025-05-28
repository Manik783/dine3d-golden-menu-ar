
export const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            See Dine3D in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how our AR technology transforms the dining experience with immersive 3D food visualization.
          </p>
        </div>
        
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.dribbble.com/userupload/15754279/file/original-0b96af87813fea9cb3f7a9582acd7a35.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          
          {/* Floating AR indicator */}
          <div className="absolute bottom-6 right-6 bg-gold-gradient text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            AR Experience
          </div>
        </div>
      </div>
    </section>
  );
};
