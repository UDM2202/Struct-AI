import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#how-it-works');
  const [isClicking, setIsClicking] = useState(false);
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Don't update active link while clicking (prevents blinking)
      if (isClicking) return;
      
      const sections = [
        { id: 'how-it-works', link: '#how-it-works' },
        { id: 'dashboard', link: '#dashboard' },
        { id: 'innovation', link: '#innovation' },
        { id: 'pricing', link: '#pricing' }
      ];
      
      const scrollPosition = window.scrollY + 120;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section.link);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, [isClicking]);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    
    // Set clicking state to true to prevent scroll interference
    setIsClicking(true);
    
    // Immediately update active link
    setActiveLink(href);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
    
    // Re-enable scroll-based active link after animation completes
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      setIsClicking(false);
    }, 800); 
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
          <span className="font-bold text-xl text-[#04131b]">StructAl</span>
        </a>

{/* Desktop Navigation */}
<div className="hidden md:flex items-center">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      onClick={(e) => handleLinkClick(e, link.href)}
      className={`relative px-4 py-2 mx-1 font-medium transition-colors duration-200 ${
        activeLink === link.href 
          ? 'text-white' 
          : 'text-[#4b5563] hover:text-[#0A2F44]'
      }`}
      style={{
        position: 'relative',
        zIndex: 10
      }}
    >
      {link.name}
      {activeLink === link.href && (
        <span 
          className="absolute inset-0 bg-[#0A2F44] rounded-lg"
          style={{
            zIndex: -1,
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            width: '100%',
            height: '100%'
          }}
        />
      )}
    </a>
  ))}
  
  {/* Sign Up Button */}
  <a 
    href="#signup" 
    onClick={(e) => {
      e.preventDefault();
      alert('Sign up modal would open here');
    }} 
    className="ml-4 bg-[#0A2F44] text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-[#082636] transition-all shadow-soft"
    style={{ zIndex: 10 }}
  >
    Sign Up Free
  </a>
  
  {/* Login Link */}
  <a 
    href="#login" 
    onClick={(e) => {
      e.preventDefault();
      alert('Login modal would open here');
    }} 
    className="ml-2 text-[#4b5563] hover:text-[#0A2F44] font-medium px-4 py-2"
    style={{ zIndex: 10 }}
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-[#e5e7eb] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeLink === link.href 
                    ? 'bg-[#0A2F44] text-white' 
                    : 'text-[#374151] hover:bg-[#e6f0f5]'
                }`}
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