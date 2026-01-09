import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>Designed & Built by Milind</p>
            <p className="copyright">&copy; {currentYear} All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#home" className="footer-link">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
