import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const roles: readonly string[] = [
    'Tech Lead & Onsite Coordinator',
    'Senior Software Engineer',
    'Full-Stack Developer',
    'React & TypeScript Expert',
    'Team Performance Coach'
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden opacity-15">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute -top-[20%] font-mono text-2xl text-success opacity-30 animate-fall"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '8s'
              }}
            >
              {'{'} ...{'}'}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-[2] max-w-[1200px] p-8">
        <div className="max-w-[900px]">
          <p className="font-mono text-lg text-success mb-4 animate-fade-in-up">
            Hi, my name is
          </p>
          <h1 className="text-6xl md:text-5xl sm:text-4xl font-extrabold mb-4 animate-fade-in-up [animation-delay:0.2s] [animation-fill-mode:backwards] leading-tight">
            <span className="bg-gradient-to-r from-success via-primary to-accent bg-clip-text text-transparent">
              Milind
            </span>
          </h1>
          <h2 className="text-5xl md:text-4xl sm:text-2xl font-bold text-text-secondary mb-8 animate-fade-in-up [animation-delay:0.4s] [animation-fill-mode:backwards] min-h-[4rem] sm:min-h-[3rem] flex items-center gap-2">
            <span className="inline-block">{displayText}</span>
            <span className="text-success animate-blink">|</span>
          </h2>
          <p className="text-xl md:text-base leading-relaxed text-text-muted mb-12 max-w-[700px] animate-fade-in-up [animation-delay:0.6s] [animation-fill-mode:backwards]">
            Tech Lead and Full-Stack Engineer driving team performance and technical excellence.
            Specialized in building scalable applications while mentoring distributed teams to deliver exceptional results.
          </p>

          {/* Career Highlights */}
          <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 md:grid-cols-1 md:gap-4 mb-12 animate-fade-in-up [animation-delay:0.8s] [animation-fill-mode:backwards]">
            <div className="text-center p-6 md:p-4 bg-primary/10 rounded-xl border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <span className="block text-4xl md:text-3xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-2">
                40%
              </span>
              <span className="block text-sm text-text-secondary font-medium">Core Web Vitals Boost</span>
            </div>
            <div className="text-center p-6 md:p-4 bg-primary/10 rounded-xl border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <span className="block text-4xl md:text-3xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-2">
                300+
              </span>
              <span className="block text-sm text-text-secondary font-medium">Microservices Supported</span>
            </div>
            <div className="text-center p-6 md:p-4 bg-primary/10 rounded-xl border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <span className="block text-4xl md:text-3xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-2">
                30%
              </span>
              <span className="block text-sm text-text-secondary font-medium">Search Performance Gain</span>
            </div>
            <div className="text-center p-6 md:p-4 bg-primary/10 rounded-xl border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <span className="block text-4xl md:text-3xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-2">
                11+
              </span>
              <span className="block text-sm text-text-secondary font-medium">Years of Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-6 md:flex-col animate-fade-in-up [animation-delay:1s] [animation-fill-mode:backwards]">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button
              className="group relative px-8 py-4 bg-transparent border-2 border-success text-success font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-dark-darker"
              onClick={scrollToExperience}
            >
              <span className="absolute inset-0 bg-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
