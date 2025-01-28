import ActionButton from "./ActionButton";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-8 lg:px-16">
      <div className="max-w-4xl text-center space-y-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-br from-[#4357A2] to-[#3a4c8f]">
          Building digital products, brands, and experience.
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          I help you solve your online visibility challenges and generate more sales by designing custom websites, 
          art direction dedicated to your brand and bespoke digital strategies.
        </p>
        <ActionButton 
          href="#start-project" 
          className="text-lg px-8 py-4 rounded-full hover:translate-y-[-2px] transition-all duration-200 bg-[#4357A2]"
        >
          Let's connect
        </ActionButton>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-[#4357A2] mb-10">My Achievements</h3>
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div className="achievement-item">
              <span className="block text-4xl font-bold text-[#4357A2]">260</span>
              <span className="text-gray-600">Happy Customers</span>
            </div>
            <div className="achievement-item">
              <span className="block text-4xl font-bold text-[#4357A2]">4</span>
              <span className="text-gray-600">Years Experience</span>
            </div>
            <div className="achievement-item">
              <span className="block text-4xl font-bold text-[#4357A2]">79</span>
              <span className="text-gray-600">E-Commerce Sites</span>
            </div>
            <div className="achievement-item">
              <span className="block text-4xl font-bold text-[#4357A2]">14</span>
              <span className="text-gray-600">Team Members</span>
            </div>
            <div className="achievement-item">
              <span className="block text-4xl font-bold text-[#4357A2]">120+</span>
              <span className="text-gray-600">Projects Completed</span>
            </div>
            <div className="achievement-item">
              <span className="block text-4xl font-bold text-[#4357A2]">98%</span>
              <span className="text-gray-600">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;