import React from 'react';
import { Globe } from 'lucide-react';

const Locations = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR LOCATIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With operations spanning across 27 countries, we provide local expertise with global reach
          </p>
        </div>

        {/* World Map */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-navy-900 rounded-2xl p-8 md:p-12">
            <div className="relative">
              {/* Simplified world map representation */}
              <div className="w-full h-96 bg-navy-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                <Globe className="w-32 h-32 text-primary-400 opacity-20" />
                
                {/* Location dots */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Global Presence</h3>
                    <p className="text-primary-200">Operating in 27+ countries worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;