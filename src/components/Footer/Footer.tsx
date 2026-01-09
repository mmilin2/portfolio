import React from 'react';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-dark-darker border-t border-primary/20 py-8">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-4 max-md:flex-col max-md:text-center">
          <div className="text-center max-md:order-2">
            <p className="text-text-secondary text-[0.9375rem] mb-1 font-medium">
              Designed & Built by Milind
            </p>
            <p className="text-text-muted text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 max-md:order-1">
            <a
              href="#home"
              className="text-text-secondary no-underline text-[0.9375rem] font-medium transition-colors duration-300 hover:text-success"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
