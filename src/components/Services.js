import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Reverse Engineering",
      description: "Convert physical products into precise digital 3D models for modification and documentation.",
      details: "Our advanced scanning technology captures every detail of your existing products, creating accurate CAD models that can be modified, improved, or reproduced.",
      icon: "🔄",
      features: ["3D Scanning", "CAD Modeling", "Documentation", "Quality Analysis"],
      bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Engineering Design Service",
      description: "End-to-end support in creating, validating, and enhancing mechanical designs tailored to your needs.",
      details: "From concept sketches to production-ready designs, our team provides comprehensive engineering solutions using industry-standard software and methodologies.",
      icon: "⚙️",
      features: ["Concept Design", "3D Modeling", "Simulation", "Prototyping"],
      bgImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "New Product Development (NPD)",
      description: "From concept to production-ready models, we bring your innovative ideas to life with accuracy.",
      details: "Complete product development lifecycle support including market research, design optimization, testing, and manufacturing preparation.",
      icon: "💡",
      features: ["Market Research", "Design Innovation", "Testing", "Manufacturing Support"],
      bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Benchmarking (STL to CAD)",
      description: "Compare and improve product features by converting STL files to editable CAD formats.",
      details: "Transform mesh files into parametric CAD models, enabling design modifications and competitive analysis for better product development.",
      icon: "📊",
      features: ["STL Conversion", "Parametric Modeling", "Feature Analysis", "Design Optimization"],
      bgImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "3D Scanning",
      description: "High-resolution scanning of real-world objects for reverse engineering and prototyping.",
      details: "State-of-the-art 3D scanning technology captures precise measurements and surface details for accurate digital representations.",
      icon: "📷",
      features: ["High-Resolution Scanning", "Point Cloud Processing", "Mesh Generation", "Quality Control"],
      bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Inspection & Quality Control",
      description: "Ensure dimensional accuracy and quality with advanced scanning and inspection tools.",
      details: "Comprehensive quality assurance using precision measurement tools and advanced inspection techniques to meet industry standards.",
      icon: "🔍",
      features: ["Dimensional Analysis", "Surface Inspection", "Tolerance Verification", "Quality Reports"],
      bgImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive CAD solutions designed to transform your ideas into reality with precision and innovation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2" 
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              ></div>
              
              {/* Content */}
              <div className="relative p-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-sm text-gray-500 mb-6">{service.details}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Get in touch with our experts for a free consultation and quote
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
