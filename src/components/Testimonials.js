import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Lisa Pearson',
      title: 'Property Owner',
      content: 'APWireless made the entire process seamless. Their expertise in lease negotiations resulted in terms that exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Fred Stark',
      title: 'Real Estate Developer',
      content: 'Working with APWireless has been exceptional. Their global reach and local expertise make them the perfect partner for our projects.',
      rating: 5
    },
    {
      name: 'Ray Pardo',
      title: 'Land Owner',
      content: 'The team at APWireless is professional, knowledgeable, and truly cares about delivering results. Highly recommended.',
      rating: 5
    },
    {
      name: 'Heather Hayworth',
      title: 'Property Manager',
      content: 'APWireless transformed our approach to wireless infrastructure. Their innovative solutions and support have been invaluable.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="btn-primary">
            View More Testimonials
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;