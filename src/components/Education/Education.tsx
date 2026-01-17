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
    <section id="education" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark-darker">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          <span className="text-success font-mono text-lg sm:text-xl">04.</span>
          <h2 className="text-text-primary text-2xl sm:text-3xl font-bold m-0 whitespace-nowrap">Education</h2>
          <div className="h-[1px] bg-dark-light flex-1 ml-2 sm:ml-4 hidden xs:block"></div>
        </div>

        {/* Education Cards */}
        <div className="relative space-y-6 sm:space-y-8 lg:space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-dark-light rounded-lg p-4 sm:p-6 lg:p-8 border border-dark-light transition-all duration-300 hover:border-success/30 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] hover:-translate-y-1">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-[0_0_20px_rgba(100,255,218,0.3)] mx-auto sm:mx-0">
                  <span>{edu.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                    <h3 className="text-text-primary text-base sm:text-lg lg:text-xl font-semibold m-0 leading-tight">{edu.degree}</h3>
                    <span className="text-success text-xs sm:text-sm font-mono whitespace-nowrap">{edu.period}</span>
                  </div>
                  <h4 className="text-text-secondary text-sm sm:text-base lg:text-lg font-medium m-0">{edu.school}</h4>
                  <p className="text-text-muted text-xs sm:text-sm m-0">{edu.location}</p>
                  <ul className="space-y-1.5 sm:space-y-2 list-none m-0 p-0">
                    {edu.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-text-secondary text-xs sm:text-sm leading-relaxed pl-5 sm:pl-6 relative text-left"
                      >
                        <span className="absolute left-0 top-0 text-success text-sm sm:text-base">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector Line */}
              {index < education.length - 1 && (
                <div className="hidden sm:block absolute left-7 sm:left-8 lg:left-10 top-full w-0.5 h-6 sm:h-8 lg:h-12 bg-gradient-to-b from-success to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
