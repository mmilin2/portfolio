import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

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
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3 className="certifications-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-details">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="additional-skills">
          <h3 className="additional-title">Additional Expertise</h3>
          <div className="tags-container">
            <span className="skill-tag">Responsive Web Design</span>
            <span className="skill-tag">Performance Optimization</span>
            <span className="skill-tag">CI/CD Pipelines</span>
            <span className="skill-tag">Microservices Architecture</span>
            <span className="skill-tag">Agile/Scrum</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">SEO Optimization</span>
            <span className="skill-tag">Cross-Browser Compatibility</span>
            <span className="skill-tag">Code Review</span>
            <span className="skill-tag">Team Leadership</span>
            <span className="skill-tag">Test-Driven Development</span>
            <span className="skill-tag">Server-Side Rendering</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
