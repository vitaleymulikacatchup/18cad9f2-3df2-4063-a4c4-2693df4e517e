import React from 'react';

const FAQ = () => {
  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">What is APWireless doing around?</h3>
              <p className="text-gray-300 mb-6">
                APWireless is a global leader in wireless infrastructure, specializing in cell tower leasing, site acquisition, and network optimization across 27+ countries worldwide.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Let us tell you how we can help you</h3>
              <p className="text-gray-300">
                Our expert team provides comprehensive solutions for property owners and mobile network operators, ensuring optimal coverage and revenue generation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Are we right for you?</h3>
              <p className="text-gray-300 mb-6">
                Whether you're a property owner looking to monetize your land or an MNO seeking reliable infrastructure partners, we have the expertise and global reach to meet your needs.
              </p>
              
              <h3 className="text-xl font-bold mb-4">How can we help you get the best lease terms?</h3>
              <p className="text-gray-300">
                Our experienced negotiation team and deep market knowledge ensure you receive competitive lease terms that maximize value while maintaining long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;