import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science, Computer Science',
      school: 'University of Illinois at Chicago',
      location: 'Chicago, IL',
      period: 'August 2015 - May 2017',
      icon: '🎓',
      highlights: [
        'Advanced studies in software engineering and distributed systems',
        'Specialized in algorithms, data structures, and system design',
        'Research focus on web technologies and user interface development'
      ]
    },
    {
      degree: 'Bachelor of Technology, Information Technology',
      school: 'Guru Gobind Singh Indraprastha University',
      location: 'New Delhi, India',
      period: 'September 2009 - June 2013',
      icon: '📚',
      highlights: [
        'Foundation in computer science fundamentals',
        'Coursework in programming, databases, and software development',
        'Projects in web development and system programming'
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-icon">
                <span>{edu.icon}</span>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="period">{edu.period}</span>
                </div>
                <h4 className="school">{edu.school}</h4>
                <p className="location">{edu.location}</p>
                <ul className="highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              {index < education.length - 1 && <div className="timeline-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
