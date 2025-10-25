import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Industry News',
      links: [
        "America's Struggling Farmers Face Even More Uncertainty",
        'Growing connections: The challenges and opportunities of achieving ubiquitous 5G mobile connectivity in the UK'
      ]
    },
    {
      title: 'APWireless In The News',
      links: [
        'EQT and PSP complete acquisition of Radius Global Infrastructure',
        'Recent company updates and press releases'
      ]
    },
    {
      title: 'Recent Blog Posts',
      links: [
        'The History of Transatlantic Telegraph Cables: Pioneering the Global Communication Revolution',
        'From Switchboards to the Cloud: The Evolution of Telephone Exchanges'
      ]
    }
  ];

  const legalLinks = [
    'Privacy Policy',
    'Cookie Policy', 
    'Terms and Conditions of Use',
    'California Privacy Notice'
  ];

  return (
    <footer className="bg-dark-900 text-white">
      {/* Main footer content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-300 hover:text-white text-sm leading-relaxed transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Certification badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-red-600 rounded-full p-4">
              <div className="text-center">
                <div className="text-xs font-bold mb-1">MOST LOVED</div>
                <div className="text-xs">WORKPLACE</div>
                <div className="text-lg font-bold">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025, APWireless Infrastructure Partners, LLC
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link, index) => (
                <a key={index} href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;