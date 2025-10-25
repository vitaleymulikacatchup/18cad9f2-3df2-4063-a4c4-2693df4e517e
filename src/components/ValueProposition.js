import React from 'react';
import { ArrowRight } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            THE VALUE OF CELL SITE LEASES: A DEEP DIVE WITH APWIRELESS
          </h2>
          
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-4">
                <img 
                  src="/images/person1.jpg" 
                  alt="Expert 1" 
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
                <img 
                  src="/images/person2.jpg" 
                  alt="Expert 2" 
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              DOWNLOAD OUR GUIDE
            </h3>
            
            <button className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Get the Guide
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;