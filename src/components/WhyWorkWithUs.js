import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyWorkWithUs = () => {
  const benefits = [
    'Extensive Professional Experience',
    'Comprehensive Market Analysis',
    'Competitive Lease Terms',
    'Global Network & Local Expertise',
    '24/7 Customer Support',
    'Proven Track Record of Success'
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Video Testimonials
          </h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            WHY WORK WITH US? We have:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Are you interested in our services?
            </h4>
            <p className="text-gray-600 mb-6">
              Get in touch with our team to learn how we can help optimize your wireless infrastructure investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;