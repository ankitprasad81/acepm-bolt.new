import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', hasDropdown: true },
    { label: 'Services', hasDropdown: false },
    { label: 'About', hasDropdown: false },
    { label: 'Resources', hasDropdown: true },
    { label: 'Contact', hasDropdown: false },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center space-x-1 text-slate-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-slate-700 hover:text-purple-600 font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-purple-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-purple-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="block w-full text-left text-slate-700 hover:text-purple-600 font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-purple-100 space-y-3">
                <button className="block w-full text-left text-slate-700 hover:text-purple-600 font-medium py-2 transition-colors duration-200">
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;