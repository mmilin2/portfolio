import React, { useState } from 'react';
import { ExperienceData } from './types';

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState<number>(0);

  const experiences: ExperienceData[] = [
    {
      company: 'Specialty Program Group',
      title: 'Senior Software Engineer (UI Lead)',
      location: 'Chicago, IL',
      period: 'March 2022 - Present',
      highlights: [
        'Developed and maintained top-of-funnel websites using Sitecore, React, Redux, TypeScript, HTML, CSS, and C#',
        'Full ownership of UI products including component library setup using NextJS, Webpack, Sitecore JSS, NPM, and Storybook',
        'Improved core web vitals by 35-40% focusing on LCP and Cumulative Layout Shift optimization',
        'Reduced deployed artifact size by 20% through enhanced code reusability',
        'Increased website search performance by 30% with custom GraphQL and C# modules',
        'Created service health dashboards using Angular, ExpressJS, NodeJS, and MongoDB',
        'Implemented custom event and page traffic tracking with Google Tag Manager',
        'Contributed to backend service architecture using C#, .NET, Kubernetes, Argo, and Docker',
        'Developed custom CI/CD pipeline using BitBucket hooks, Jenkins, and Docker'
      ],
      tech: ['React', 'TypeScript', 'Sitecore', 'NextJS', 'GraphQL', 'C#', 'Docker', 'Kubernetes']
    },
    {
      company: 'Insureon',
      title: 'Software Engineer',
      location: 'Chicago, IL',
      period: 'Aug 2017 - March 2022',
      highlights: [
        'Full-stack developer using AngularJS/Angular 2, C#, Event Store, and Groovy for B2B Agency Management System',
        'Led team to create SaaS products suite using React and Redux',
        'Developed and hosted UI component library in React and Storybook on private npm registry',
        'Implemented UI testing framework using Storybook, Selenium, and C#',
        'Contributed to backend architecture supporting 300+ microservices using C#, .NET, and Event Store',
        'Full ownership of admin dashboard for personnel permissions and leave management using Angular 8',
        'Developed service health dashboards for monitoring microservices deployment',
        'Collaborated with product owners and architects for critical front-end decisions'
      ],
      tech: ['React', 'Redux', 'Angular', 'C#', 'Event Store', 'Storybook', 'Selenium', 'Microservices']
    },
    {
      company: 'Amadeus North America',
      title: 'Software Engineer Intern',
      location: 'Waltham, MA',
      period: 'May 2016 - August 2016',
      highlights: [
        'Developed automated data processing pipeline for QA using Java, Java Mail, JAX-RS, and Apache libraries',
        'Designed and developed UI using HTML, JavaScript, CSS, SaaS, and jQuery',
        'Reduced daily manual effort by approximately 4 hours',
        'Integrated application into existing testing framework for local deployment',
        'Set up deployment and scheduling with cron job on Unix server',
        'Created REST API endpoint for company-wide service usage'
      ],
      tech: ['Java', 'JAX-RS', 'JavaScript', 'RESTful APIs', 'jQuery', 'Unix']
    },
    {
      company: 'Amadeus Software Labs',
      title: 'Software Engineer',
      location: 'Bangalore, India',
      period: 'June 2013 - June 2015',
      highlights: [
        'Developed and maintained automation framework using Java and Selenium',
        'Written UI workflow test scripts using Groovy, JavaScript, PowerShell, and Selenium',
        'Created single-page application for employee time tracking with mobile-first design',
        'Reduced daily manual effort by 2 hours through automated reporting workflow',
        'Developed custom application integrating HP ALM APIs with Jenkins for automated test suite generation',
        'Designed social platform for employees to increase group bookings and reduce corporate travel costs',
        'Developed and maintained RESTful APIs integrating front-end with back-end services'
      ],
      tech: ['Java', 'Selenium', 'JavaScript', 'Python', 'PHP', 'RESTful APIs', 'Jenkins']
    }
  ];

  return (
    <section id="experience" className="py-24 px-8 bg-dark-darker">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-success font-mono text-xl">02.</span>
          <h2 className="text-text-primary text-3xl font-bold m-0 whitespace-nowrap">Experience</h2>
          <div className="h-[1px] bg-dark-light flex-1 ml-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible md:min-w-[200px] border-b-2 md:border-b-0 md:border-l-2 border-dark-light">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`px-6 py-3 text-left bg-transparent border-none cursor-pointer font-mono text-sm transition-all duration-300 whitespace-nowrap md:border-l-2 border-b-2 md:border-b-0 ${
                  activeJob === index
                    ? 'text-success bg-dark-light/30 md:border-l-success border-b-success'
                    : 'text-text-muted hover:text-success hover:bg-dark-light/20 md:border-l-transparent border-b-transparent'
                }`}
                onClick={() => setActiveJob(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="flex-1 min-h-[400px]">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-text-primary text-2xl font-semibold m-0">
                  {experiences[activeJob].title}
                  <span className="text-success"> @ {experiences[activeJob].company}</span>
                </h3>
                <p className="text-text-muted text-sm font-mono m-0">{experiences[activeJob].period}</p>
                <p className="text-text-secondary text-sm m-0">{experiences[activeJob].location}</p>
              </div>

              <ul className="space-y-4 pl-5">
                {experiences[activeJob].highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-text-secondary text-base leading-relaxed relative before:content-['▹'] before:absolute before:-left-5 before:text-success before:text-xl before:leading-3"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                {experiences[activeJob].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-dark-light text-success text-xs font-mono rounded border border-success/30 transition-all duration-300 hover:bg-success/10 hover:border-success"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
