import React from 'react';
import { EducationData } from './types';

const Education: React.FC = () => {
  const education: EducationData[] = [
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
    <section id="education" className="py-24 px-8 bg-dark-darker">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-success font-mono text-xl">04.</span>
          <h2 className="text-text-primary text-3xl font-bold m-0 whitespace-nowrap">Education</h2>
          <div className="h-[1px] bg-dark-light flex-1 ml-4"></div>
        </div>

        <div className="relative space-y-8 md:space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-6 bg-dark-light rounded-lg p-8 border border-dark-light transition-all duration-300 hover:border-success/30 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] hover:-translate-y-1">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(100,255,218,0.3)]">
                  <span>{edu.icon}</span>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-text-primary text-xl font-semibold m-0">{edu.degree}</h3>
                    <span className="text-success text-sm font-mono whitespace-nowrap">{edu.period}</span>
                  </div>
                  <h4 className="text-text-secondary text-lg font-medium m-0">{edu.school}</h4>
                  <p className="text-text-muted text-sm m-0">{edu.location}</p>
                  <ul className="space-y-2 list-none m-0 p-0">
                    {edu.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-text-secondary text-sm leading-relaxed pl-6 relative"
                      >
                        <span className="absolute left-0 top-0 text-success text-base">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < education.length - 1 && (
                <div className="absolute left-10 top-full w-0.5 h-8 md:h-12 bg-gradient-to-b from-success to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
