import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const roles: readonly string[] = [
    'Senior Software Engineer',
    'UI Development Specialist',
    'Full-Stack Developer',
    'React & TypeScript Expert',
    'Performance Optimizer'
  ] as const;
  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = (): void => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="code-rain">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="code-line" style={{ left: `${i * 5}%`, animationDelay: `${i * 0.2}s` }}>
              {'{'}...{'}'}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">
            <span className="name-highlight">Milind</span>
          </h1>
          <h2 className="role-container">
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="tagline">
            Crafting exceptional user experiences with React, TypeScript, and modern web technologies.
            Specialized in building scalable, performant applications that make a difference.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">35-40%</span>
              <span className="stat-label">Performance Boost</span>
            </div>
            <div className="stat">
              <span className="stat-number">300+</span>
              <span className="stat-label">Microservices</span>
            </div>
          </div>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button className="btn btn-secondary" onClick={scrollToExperience}>
              View My Work
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
