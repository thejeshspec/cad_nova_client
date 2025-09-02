import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    "Reverse Engineering",
    "Engineering Design Service",
    "New Product Development",
    "3D Scanning",
    "Inspection & Quality Control"
  ];

  const quickLinks = [
    { name: "About Us", action: () => scrollToSection('about') },
    { name: "Our Services", action: () => scrollToSection('services') },
    { name: "Contact Us", action: () => scrollToSection('contact') },
    { name: "Get Quote", action: () => scrollToSection('contact') }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">CN</span>
              </div>
              <span className="text-xl font-bold">CAD Nova Technologies</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of precision engineering solutions, specializing in reverse engineering, 
              CAD services, and 3D scanning technologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <a href="mailto:cadnovaofficial@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  cadnovaofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <div className="text-gray-400">
                  <a href="tel:+919344466049" className="hover:text-white transition-colors block">+91 9344466049</a>
                  <a href="tel:+919943193913" className="hover:text-white transition-colors block">+91 9943193913</a>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-medium text-white">Monday - Friday</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Saturday</p>
                <p>9:00 AM - 2:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-sm">📘</span>
                </button>
                <button className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-sm">🐦</span>
                </button>
                <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <span className="text-sm">💼</span>
                </button>
                <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <span className="text-sm">📺</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest news and updates about CAD technologies and our services.</p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 CAD Nova Technologies. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>Precision in Every Pixel | Engineering Excellence | Transforming Ideas into Reality</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
