import React from 'react';
import { ArrowRight } from 'lucide-react';

const DataControl = () => {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            GAIN CONTROL WITH A LEASE BUYOUT
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Take control of your wireless infrastructure investments with our comprehensive lease buyout solutions. Get immediate capital while maintaining long-term value.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Percentage of Landlords</h3>
            
            {/* Chart representation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="w-full h-32 bg-gray-300 rounded mb-2"></div>
                <span className="text-sm text-gray-600">Category 1</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-primary-400 rounded mb-2"></div>
                <span className="text-sm text-gray-600">Category 2</span>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-green-400 rounded mb-2"></div>
                <span className="text-sm text-gray-600">Category 3</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-yellow-400 rounded mb-2"></div>
                <span className="text-sm text-gray-600">Category 4</span>
              </div>
            </div>
            
            <button className="btn-primary">
              Learn More About Buyouts
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataControl;