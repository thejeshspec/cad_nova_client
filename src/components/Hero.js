import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%), 
                           url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-white text-center px-8 max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Precision in Every <span className="text-yellow-400">Pixel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transforming Ideas into Reality through Advanced CAD Solutions
          </p>
          <div className="text-lg md:text-xl mb-12 space-y-2">
            <p className="font-semibold">🔧 Reverse Engineering | 💻 CAD Services | 📐 3D Scanning</p>
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400" className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-200">Quick turnaround times without compromising quality</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Precision Focus</h3>
            <p className="text-gray-200">Accurate measurements and detailed engineering solutions</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-200">Experienced professionals with cutting-edge technology</p>
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="600">
          <a 
            href="#services" 
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Services
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
