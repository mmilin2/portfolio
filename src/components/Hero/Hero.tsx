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
              className="group relative px-8 py-4 bg-dark-light border border-success/50 text-success font-semibold rounded-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(100,255,218,0.25)] active:translate-y-[2px] active:shadow-[0_2px_8px_rgba(100,255,218,0.2)]"
              onClick={scrollToExperience}
              style={{ boxShadow: '0 4px 14px rgba(100,255,218,0.15)' }}
            >
              <span className="flex items-center gap-3">
                View My Work
                <span className="relative w-5 h-5">
                  {/* Eye icon - visible by default */}
                  <svg
                    className="absolute inset-0 w-5 h-5 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:scale-75"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {/* Rocket icon - visible on hover */}
                  <svg
                    className="absolute inset-0 w-5 h-5 transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[-45deg]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
