import React from 'react';

const Stats = () => {
  const stats = [
    { number: '0', label: 'Countries Served', suffix: '+' },
    { number: '0', label: 'Active Sites', suffix: '+' },
    { number: '0', label: 'Years Experience', suffix: '+' },
    { number: '0', label: 'Satisfied Clients', suffix: '+' }
  ];

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.number}<span className="text-primary-400">{stat.suffix}</span>
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;