import React from 'react';
import { SkillCategory, Certification } from './types';

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'Angular', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Redux', level: 85 },
        { name: 'NextJS', level: 80 },
        { name: 'Sass/Less', level: 90 }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'C# / .NET', level: 85 },
        { name: 'Node.js', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'Spring Boot', level: 75 }
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git / Bitbucket', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Webpack', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'Sitecore CMS', level: 85 },
        { name: 'Storybook', level: 90 },
        { name: 'Jest / Enzyme', level: 85 }
      ]
    },
    {
      category: 'Databases',
      icon: '💾',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Event Store', level: 75 },
        { name: 'Oracle', level: 70 },
        { name: 'SQL', level: 85 }
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      name: 'Sitecore Experience Solution 10 Developer',
      issuer: 'Sitecore',
      date: 'July 2022',
      icon: '🏆'
    }
  ];

  return (
    <section id="skills" className="py-24 px-8 bg-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-success font-mono text-xl">03.</span>
          <h2 className="text-text-primary text-3xl font-bold m-0 whitespace-nowrap">Skills & Expertise</h2>
          <div className="h-[1px] bg-dark-light flex-1 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-dark-light rounded-lg p-6 border border-dark-light transition-all duration-300 hover:border-success/30 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-text-primary text-xl font-semibold m-0">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary text-sm font-medium">{skill.name}</span>
                      <span className="text-success text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-darker rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-success rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-text-primary text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-dark-light rounded-lg p-6 border border-success/30 flex items-start gap-4 transition-all duration-300 hover:border-success hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] hover:-translate-y-1"
              >
                <span className="text-4xl">{cert.icon}</span>
                <div className="flex-1">
                  <h4 className="text-text-primary text-base font-semibold mb-2 m-0">{cert.name}</h4>
                  <p className="text-text-secondary text-sm mb-1 m-0">{cert.issuer}</p>
                  <p className="text-text-muted text-xs font-mono m-0">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-text-primary text-2xl font-semibold mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Responsive Web Design
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Performance Optimization
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              CI/CD Pipelines
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Microservices Architecture
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Agile/Scrum
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              UI/UX Design
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              SEO Optimization
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Cross-Browser Compatibility
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Code Review
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Team Leadership
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Test-Driven Development
            </span>
            <span className="px-4 py-2 bg-dark-light text-text-secondary text-sm rounded-full border border-dark-light transition-all duration-300 hover:border-success hover:text-success hover:shadow-[0_0_15px_rgba(100,255,218,0.15)]">
              Server-Side Rendering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
