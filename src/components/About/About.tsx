import React from 'react';

const About: React.FC = () => {
  const highlights = [
    'Improved core web vitals by 35-40% through strategic performance optimization',
    'Reduced deployment artifact size by 20% through enhanced code reusability',
    'Increased website search performance by 30% with custom GraphQL modules',
    'Led development of component libraries and UI testing frameworks'
  ];

  const quickFacts = [
    { emoji: '📍', text: 'Greater Seattle Area, WA' },
    { emoji: '🎓', text: 'MS in Computer Science' },
    { emoji: '🏆', text: 'Sitecore Certified' }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          <span className="text-success font-mono text-lg sm:text-xl">01.</span>
          <h2 className="text-text-primary text-2xl sm:text-3xl font-bold m-0 whitespace-nowrap">About Me</h2>
          <div className="h-[1px] bg-dark-light flex-1 ml-2 sm:ml-4 hidden xs:block"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-4 order-2 lg:order-1">
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              I'm a <strong className="text-text-primary">Senior Software Engineer</strong> based in the Greater Seattle Area, passionate about
              creating exceptional digital experiences that combine beautiful design with robust functionality.
            </p>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              With over <strong className="text-text-primary">11 years of experience</strong>, I specialize in UI development using{' '}
              <strong className="text-text-primary">React, TypeScript, and modern web technologies</strong>. My journey in software engineering
              has taken me from developing automation frameworks to leading UI teams and architecting scalable
              web applications.
            </p>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Currently at Costco Travel, I lead distributed engineering teams where I've achieved
              remarkable results including:
            </p>
            <ul className="space-y-2 sm:space-y-3 list-none m-0 p-0">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-text-secondary text-sm sm:text-base leading-relaxed pl-6 sm:pl-7 relative">
                  <span className="absolute left-0 top-0 text-success text-base sm:text-lg">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              I hold a <strong className="text-text-primary">Master's degree in Computer Science</strong> from the University of Illinois at Chicago
              and am a <strong className="text-text-primary">certified Sitecore Experience Solution 10 Developer</strong>. I thrive in collaborative
              environments where I can contribute to both technical excellence and team growth.
            </p>
          </div>

          {/* Image and Quick Facts */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {/* Profile Image */}
            <div className="relative max-w-[280px] sm:max-w-[350px] mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-success rounded opacity-20 blur-xl"></div>
              <div className="relative rounded-lg overflow-hidden border-2 border-success/30 transition-transform duration-300 hover:-translate-y-2 group">
                <div className="absolute inset-0 bg-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={process.env.PUBLIC_URL + '/profile.jpg'}
                  alt="Milind - Tech Lead & Senior Software Engineer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-dark-light rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 max-w-[280px] sm:max-w-[350px] mx-auto">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-center gap-3 text-text-secondary transition-colors duration-300 hover:text-success">
                  <span className="text-xl sm:text-2xl">{fact.emoji}</span>
                  <span className="text-sm sm:text-base">{fact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
