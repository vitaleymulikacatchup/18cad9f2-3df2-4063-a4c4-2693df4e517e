import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = [
    { name: 'Who We Are', href: '#' },
    { name: 'Property Owners', href: '#' },
    { name: 'MNOs & TowerCos', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Our Sites', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Resource Center', href: '#' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/apwireless-logo.png" 
              alt="APWireless" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-600 font-medium">
              APW Connect
            </button>
            <button className="btn-primary">
              Contact Us
              <ChevronDown className="w-4 h-4" />
            </button>
            <img 
              src="/images/us-flag.png" 
              alt="US" 
              className="w-6 h-4 rounded"
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t">
                <button className="text-gray-700 hover:text-primary-600 font-medium mb-2 block">
                  APW Connect
                </button>
                <button className="btn-primary w-full justify-center">
                  Contact Us
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;