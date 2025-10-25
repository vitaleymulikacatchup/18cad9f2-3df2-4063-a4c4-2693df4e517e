import React from 'react';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Over two decades of experience in wireless infrastructure with thousands of successful projects completed worldwide.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of industry experts provides local knowledge and global expertise to ensure optimal outcomes for every project.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operating in 27+ countries, we offer unparalleled international coverage and cross-border infrastructure solutions.'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'Recognized as a leader in wireless infrastructure, setting industry standards for quality, reliability, and innovation.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;