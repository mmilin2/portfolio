import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <strong>Senior Software Engineer</strong> based in the Greater Seattle Area, passionate about
              creating exceptional digital experiences that combine beautiful design with robust functionality.
            </p>
            <p>
              With over <strong>8 years of experience</strong>, I specialize in UI development using{' '}
              <strong>React, TypeScript, and modern web technologies</strong>. My journey in software engineering
              has taken me from developing automation frameworks to leading UI teams and architecting scalable
              web applications.
            </p>
            <p>
              At Specialty Program Group, I currently lead UI development initiatives, where I've achieved
              remarkable results including:
            </p>
            <ul className="achievements-list">
              <li>Improved core web vitals by 35-40% through strategic performance optimization</li>
              <li>Reduced deployment artifact size by 20% through enhanced code reusability</li>
              <li>Increased website search performance by 30% with custom GraphQL modules</li>
              <li>Led development of component libraries and UI testing frameworks</li>
            </ul>
            <p>
              I hold a <strong>Master's degree in Computer Science</strong> from the University of Illinois at Chicago
              and am a <strong>certified Sitecore Experience Solution 10 Developer</strong>. I thrive in collaborative
              environments where I can contribute to both technical excellence and team growth.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or optimizing build processes to make developers' lives easier.
            </p>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-overlay"></div>
              <div className="profile-placeholder">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="90" fill="#667eea" opacity="0.1"/>
                  <circle cx="100" cy="75" r="30" fill="#667eea"/>
                  <path d="M 50 150 Q 100 130 150 150 L 150 200 L 50 200 Z" fill="#667eea"/>
                </svg>
              </div>
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">📍</span>
                <span>Greater Seattle Area, WA</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <span>MS in Computer Science</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏆</span>
                <span>Sitecore Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
