import React from 'react';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-darker border-t border-primary/20 py-6 sm:py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Credits */}
          <div className="text-center sm:text-left order-2 sm:order-1">
            <p className="text-text-secondary text-sm sm:text-[0.9375rem] mb-0.5 sm:mb-1 font-medium">
              Designed & Built by Milind
            </p>
            <p className="text-text-muted text-xs sm:text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <div className="order-1 sm:order-2">
            <button
              onClick={scrollToTop}
              className="text-text-secondary text-sm sm:text-[0.9375rem] font-medium transition-colors duration-300 hover:text-success bg-transparent border-none cursor-pointer flex items-center gap-2"
            >
              Back to Top
              <span className="text-success">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
