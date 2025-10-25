import React from 'react';
import { Zap, Target, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Who We Are',
      description: 'We are the global leader in wireless infrastructure, providing comprehensive solutions for property owners and mobile network operators worldwide.'
    },
    {
      icon: Target,
      title: 'What We Do',
      description: 'We specialize in cell tower leasing, site acquisition, and wireless infrastructure management, connecting communities through reliable network solutions.'
    },
    {
      icon: Award,
      title: 'Benefits',
      description: 'Our clients benefit from our extensive global network, expert local knowledge, and commitment to delivering exceptional results in every market we serve.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;