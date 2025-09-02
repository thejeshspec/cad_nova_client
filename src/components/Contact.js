import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone Numbers",
      details: ["+91 9344466049", "+91 9943193913"],
      description: "Call us for immediate assistance"
    },
    {
      icon: "📧",
      title: "Email Address",
      details: ["cadnovaofficial@gmail.com"],
      description: "Send us your project details"
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "We're here to help during business hours"
    },
    {
      icon: "🌍",
      title: "Service Areas",
      details: ["Global Remote Services", "On-site Consultations Available"],
      description: "Serving clients worldwide"
    }
  ];

  const services = [
    "Reverse Engineering",
    "Engineering Design Service",
    "New Product Development (NPD)",
    "Benchmarking (STL to CAD)",
    "3D Scanning",
    "Inspection & Quality Control",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact our experts for a free consultation and personalized quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-blue-600 font-medium mb-1">
                        {info.title === "Email Address" ? (
                          <a href={`mailto:${detail}`} className="hover:underline">{detail}</a>
                        ) : info.title === "Phone Numbers" ? (
                          <a href={`tel:${detail}`} className="hover:underline">{detail}</a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">Quick Quote</h4>
                <p className="text-blue-100 text-sm mb-4">Get an instant estimate for your project</p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Quote
                </button>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">Schedule Call</h4>
                <p className="text-purple-100 text-sm mb-4">Book a consultation with our experts</p>
                <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 text-center text-gray-600 text-sm">
                <p>We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">What file formats do you accept?</h4>
              <p className="text-gray-600">We work with all major CAD formats including STEP, IGES, STL, OBJ, and native files from SolidWorks, AutoCAD, and more.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">How long does a typical project take?</h4>
              <p className="text-gray-600">Project timelines vary based on complexity, but most projects are completed within 3-7 business days.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Do you provide revisions?</h4>
              <p className="text-gray-600">Yes, we include up to 3 rounds of revisions in our standard service to ensure your complete satisfaction.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Is my data secure?</h4>
              <p className="text-gray-600">Absolutely. We maintain strict confidentiality and can sign NDAs to protect your intellectual property.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
