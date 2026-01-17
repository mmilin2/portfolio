import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-8 bg-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-success font-mono text-xl">01.</span>
          <h2 className="text-text-primary text-3xl font-bold m-0 whitespace-nowrap">About Me</h2>
          <div className="h-[1px] bg-dark-light flex-1 ml-4"></div>
        </div>

        <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 items-start">
          <div className="space-y-4">
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm a <strong className="text-text-primary">Senior Software Engineer</strong> based in the Greater Seattle Area, passionate about
              creating exceptional digital experiences that combine beautiful design with robust functionality.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              With over <strong className="text-text-primary">8 years of experience</strong>, I specialize in UI development using{' '}
              <strong className="text-text-primary">React, TypeScript, and modern web technologies</strong>. My journey in software engineering
              has taken me from developing automation frameworks to leading UI teams and architecting scalable
              web applications.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              At Specialty Program Group, I currently lead UI development initiatives, where I've achieved
              remarkable results including:
            </p>
            <ul className="space-y-3 list-none m-0 p-0">
              <li className="text-text-secondary text-base leading-relaxed pl-7 relative">
                <span className="absolute left-0 top-0 text-success text-lg">▹</span>
                Improved core web vitals by 35-40% through strategic performance optimization
              </li>
              <li className="text-text-secondary text-base leading-relaxed pl-7 relative">
                <span className="absolute left-0 top-0 text-success text-lg">▹</span>
                Reduced deployment artifact size by 20% through enhanced code reusability
              </li>
              <li className="text-text-secondary text-base leading-relaxed pl-7 relative">
                <span className="absolute left-0 top-0 text-success text-lg">▹</span>
                Increased website search performance by 30% with custom GraphQL modules
              </li>
              <li className="text-text-secondary text-base leading-relaxed pl-7 relative">
                <span className="absolute left-0 top-0 text-success text-lg">▹</span>
                Led development of component libraries and UI testing frameworks
              </li>
            </ul>
            <p className="text-text-secondary text-lg leading-relaxed">
              I hold a <strong className="text-text-primary">Master's degree in Computer Science</strong> from the University of Illinois at Chicago
              and am a <strong className="text-text-primary">certified Sitecore Experience Solution 10 Developer</strong>. I thrive in collaborative
              environments where I can contribute to both technical excellence and team growth.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative max-w-[350px] mx-auto">
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
            <div className="bg-dark-light rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 text-text-secondary transition-colors duration-300 hover:text-success">
                <span className="text-2xl">📍</span>
                <span className="text-base">Greater Seattle Area, WA</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary transition-colors duration-300 hover:text-success">
                <span className="text-2xl">🎓</span>
                <span className="text-base">MS in Computer Science</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary transition-colors duration-300 hover:text-success">
                <span className="text-2xl">🏆</span>
                <span className="text-base">Sitecore Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
