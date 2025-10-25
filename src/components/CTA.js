import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact us today for a
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-400 mb-8">
            FREE LEASE EVALUATION
          </h3>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Phone className="w-8 h-8 text-primary-400" />
            <span className="text-3xl md:text-4xl font-bold">888 232 2740</span>
          </div>
          
          <button className="btn-primary text-lg px-8 py-4">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;