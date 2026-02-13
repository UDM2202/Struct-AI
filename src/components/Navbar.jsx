import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of your fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-soft py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#0A2F44] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">SA</span>
          </div>
          <span className="font-bold text-xl text-[#04131b]">Struct-AI</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[#4b5563] hover:text-[#0A2F44] font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#signup" 
            onClick={(e) => {
              e.preventDefault();
              alert('Sign up modal would open here');
            }} 
            className="bg-[#0A2F44] text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-[#082636] transition-all shadow-soft"
          >
            Sign Up Free
          </a>
          <a 
            href="#login" 
            onClick={(e) => {
              e.preventDefault();
              alert('Login modal would open here');
            }} 
            className="text-[#4b5563] hover:text-[#0A2F44] font-medium"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#374151]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-[#e5e7eb] shadow-lg animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#374151] hover:text-[#0A2F44] font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-2 border-t border-[#e5e7eb]">
              <a 
                href="#signup" 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Sign up modal would open here');
                  setIsOpen(false);
                }} 
                className="bg-[#0A2F44] text-white font-semibold py-3 px-6 rounded-lg text-center hover:bg-[#082636]"
              >
                Sign Up Free
              </a>
              <a 
                href="#login" 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Login modal would open here');
                  setIsOpen(false);
                }} 
                className="text-[#4b5563] hover:text-[#0A2F44] font-medium text-center py-2"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;