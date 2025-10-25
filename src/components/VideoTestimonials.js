import React from 'react';
import { ArrowRight } from 'lucide-react';

const VideoTestimonials = () => {
  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            VIDEO TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-700 transition-colors">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-700 transition-colors">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn-primary bg-white text-navy-900 hover:bg-gray-100">
            View More Videos
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;