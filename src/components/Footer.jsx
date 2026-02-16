import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Dashboard', href: '#dashboard' },
      { name: 'Innovation', href: '#innovation' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Founder Story', href: '#founder' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Eurocode Guides', href: '#guides' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Support', href: '#support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR Compliance', href: '#gdpr' },
    ],
  };

  return (
    <footer className="bg-[var(--color-primary-900)] text-white pt-16 pb-8 relative">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute top-0 right-8 transform -translate-y-1/2 bg-[var(--color-primary-700)] hover:bg-[var(--color-primary-600)] text-white p-3 rounded-full shadow-lg transition-all group"
      >
        <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[var(--color-primary-500)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <span className="font-bold text-xl">StructAI</span>
            </div>
            <p className="text-[var(--color-primary-200)] mb-4 text-sm">
              AI-driven structural design optimisation for UK SMEs. Eurocode-compliant. Carbon-focused.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-[var(--color-primary-800)] rounded-lg flex items-center justify-center hover:bg-[var(--color-primary-700)] transition-colors">
                <FiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--color-primary-800)] rounded-lg flex items-center justify-center hover:bg-[var(--color-primary-700)] transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--color-primary-800)] rounded-lg flex items-center justify-center hover:bg-[var(--color-primary-700)] transition-colors">
                <FiGithub />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--color-primary-300)] hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--color-primary-300)] hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--color-primary-300)] hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--color-primary-300)] hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid md:grid-cols-3 gap-4 py-6 border-t border-[var(--color-primary-800)] border-b border-[var(--color-primary-800)] mb-6">
          {/* <div className="flex items-center space-x-3">
            <FiMapPin className="text-[var(--color-primary-400)] text-xl" />
            <span className="text-[var(--color-primary-200)] text-sm">12103/First Street, London, UK</span>
          </div> */}
          <div className="flex items-center space-x-3">
            <FiPhone className="text-[var(--color-primary-400)] text-xl" />
            <span className="text-[var(--color-primary-200)] text-sm">+44 7777 240590</span>
          </div>
          <div className="flex items-center space-x-3">
            <FiMail className="text-[var(--color-primary-400)] text-xl" />
            <span className="text-[var(--color-primary-200)] text-sm">info@structai.com</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-primary-400)]">
          <p>© 2026 StructAI. Eurocode compliance guaranteed. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

        {/* Company Registration */}
        <div className="mt-6 text-xs text-[var(--color-primary-600)] text-center">
          <p>Company registration pending. Endorsed by ENVESTORS. Innovator Founder Visa compliant.</p>
          <p className="mt-1">Full-time dedication from January 14th, 2026.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;