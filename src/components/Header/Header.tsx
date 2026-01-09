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
      className={`fixed top-0 left-0 right-0 z-[1000] backdrop-blur-md transition-all duration-300 shadow-md ${
        isScrolled ? 'bg-dark/95 shadow-lg' : 'bg-dark/85'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center">
        <div
          className="cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
          onClick={() => scrollToSection('home')}
        >
          <span className="font-mono text-2xl font-semibold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
            &lt;Milind /&gt;
          </span>
        </div>

        <button
          className={`hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001] ${
            isMobileMenuOpen ? 'open' : ''
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-[3px] bg-success rounded transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-x-[7px] translate-y-[7px]' : ''
          }`}></span>
          <span className={`w-7 h-[3px] bg-success rounded transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-7 h-[3px] bg-success rounded transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 translate-x-[7px] -translate-y-[7px]' : ''
          }`}></span>
        </button>

        <nav className={`flex gap-8 items-center max-md:fixed max-md:top-0 max-md:w-[70%] max-md:max-w-[300px] max-md:h-screen max-md:bg-dark max-md:flex-col max-md:items-start max-md:pt-24 max-md:px-8 max-md:pb-8 max-md:gap-8 max-md:transition-[right] max-md:duration-300 max-md:shadow-[-5px_0_25px_rgba(0,0,0,0.3)] ${
          isMobileMenuOpen ? 'max-md:right-0' : 'max-md:-right-full'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`relative bg-transparent border-none text-text-secondary text-base font-medium cursor-pointer transition-all duration-300 py-2 font-sans max-md:text-lg max-md:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-success after:to-primary after:transition-[width] after:duration-300 hover:text-success ${
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
      </div>
    </header>
  );
};

export default Header;
