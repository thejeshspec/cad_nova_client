import React from 'react';

const About = () => {
  const stats = [
    { number: "20+", label: "Projects Completed", icon: "📊" },
    { number: "10+", label: "Happy Clients", icon: "😊" },
    { number: "1+", label: "Years Experience", icon: "🏆" },
    { number: "24/7", label: "Support Available", icon: "🕒" }
  ];

  const team = [
    {
      name: "Engineering Team",
      role: "CAD Specialists",
      description: "Expert engineers with extensive experience in mechanical design and 3D modeling",
      icon: "👨‍💼"
    },
    {
      name: "Quality Assurance",
      role: "Precision Experts",
      description: "Dedicated QA team ensuring every project meets the highest standards",
      icon: "🔍"
    },
    {
      name: "Technology Division",
      role: "Innovation Leaders",
      description: "Cutting-edge technology specialists keeping us at the forefront of CAD solutions",
      icon: "💻"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">CAD Nova</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              CAD Nova Technologies is a leading provider of precision engineering solutions, 
              specializing in reverse engineering, CAD services, and 3D scanning technologies.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded with a vision to bridge the gap between physical products and digital innovation, 
              we have been helping businesses transform their ideas into reality with unmatched precision 
              and quality. Our team of experienced engineers and cutting-edge technology ensures that 
              every project exceeds expectations.
            </p>
            
            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide innovative CAD solutions that empower businesses to bring their 
                    ideas to life with precision, efficiency, and excellence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the global leader in CAD technologies, setting new standards for 
                    precision engineering and digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left" className="relative">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">State-of-the-Art Technology</h3>
                <p className="text-blue-200">Advanced CAD workstations and 3D scanning equipment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20" data-aos="fade-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Our Achievements</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <div className="text-6xl mb-6">{member.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose CAD Nova?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Fast Turnaround</h4>
              <p className="text-gray-600 text-sm">Quick delivery without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Competitive Pricing</h4>
              <p className="text-gray-600 text-sm">Best value for professional CAD services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Precision Focus</h4>
              <p className="text-gray-600 text-sm">Accurate measurements and detailed work</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Always available to help with your projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
