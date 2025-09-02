import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">CN</span>
          </div>
          <span className="text-xl font-bold text-gray-800">CAD Nova Technologies</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </button>
          </li>
        </ul>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
