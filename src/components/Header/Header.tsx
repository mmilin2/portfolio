import React, { useState, useEffect } from 'react';
import { HeaderProps, NavItem } from './types';

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 shadow-lg' : 'bg-dark/85 shadow-md'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
          onClick={() => scrollToSection('home')}
        >
          <span className="font-mono text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
            &lt;Milind /&gt;
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`w-6 h-[2px] bg-success rounded transition-all duration-300 origin-center ${
            isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
          }`}></span>
          <span className={`w-6 h-[2px] bg-success rounded transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0 scale-0' : ''
          }`}></span>
          <span className={`w-6 h-[2px] bg-success rounded transition-all duration-300 origin-center ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
          }`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`relative bg-transparent border-none text-text-secondary text-sm lg:text-base font-medium cursor-pointer transition-all duration-300 py-2 font-sans after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-success after:to-primary after:transition-[width] after:duration-300 hover:text-success ${
                activeSection === item.id
                  ? 'text-success after:w-full'
                  : 'after:w-0 hover:after:w-full'
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-dark/80 backdrop-blur-sm z-[999] md:hidden transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Navigation Menu */}
        <nav
          className={`fixed top-0 right-0 w-[75%] max-w-[300px] h-screen bg-dark-darker z-[1000] flex flex-col pt-20 px-6 pb-8 gap-2 transition-transform duration-300 ease-out md:hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navItems.map((item, index) => (
            <button
              key={item.id}
              className={`bg-transparent border-none text-left text-base sm:text-lg font-medium cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg font-sans hover:bg-dark-light/50 hover:text-success ${
                activeSection === item.id
                  ? 'text-success bg-dark-light/30'
                  : 'text-text-secondary'
              }`}
              onClick={() => scrollToSection(item.id)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-success font-mono text-sm mr-2">0{index + 1}.</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
