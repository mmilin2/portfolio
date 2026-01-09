import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const roles: readonly string[] = [
    'Senior Software Engineer',
    'UI Development Specialist',
    'Full-Stack Developer',
    'React & TypeScript Expert',
    'Performance Optimizer'
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
            Crafting exceptional user experiences with React, TypeScript, and modern web technologies.
            Specialized in building scalable, performant applications that make a difference.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:grid-cols-1 md:gap-4 mb-12 animate-fade-in-up [animation-delay:0.8s] [animation-fill-mode:backwards]">
            <div className="text-center p-6 md:p-4 bg-primary/10 rounded-xl border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <span className="block text-4xl md:text-3xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-2">
                8+
              </span>
              <span className="block text-sm text-text-secondary font-medium">Years Experience</span>
            </div>
            <div className="text-center p-6 md:p-4 bg-primary/10 rounded-xl border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <span className="block text-4xl md:text-3xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-2">
                35-40%
              </span>
              <span className="block text-sm text-text-secondary font-medium">Performance Boost</span>
            </div>
            <div className="text-center p-6 md:p-4 bg-primary/10 rounded-xl border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)]">
              <span className="block text-4xl md:text-3xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-2">
                300+
              </span>
              <span className="block text-sm text-text-secondary font-medium">Microservices</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-6 md:flex-col animate-fade-in-up [animation-delay:1s] [animation-fill-mode:backwards]">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button className="btn btn-secondary" onClick={scrollToExperience}>
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up [animation-delay:1.2s] [animation-fill-mode:backwards] md:hidden">
        <div className="w-6 h-10 border-2 border-text-muted rounded-xl relative animate-bounce-slow">
          <div className="w-[3px] h-2 bg-success rounded absolute top-2 left-1/2 -translate-x-1/2 animate-[scroll_2s_infinite]"></div>
        </div>
        <p className="text-xs text-text-muted uppercase tracking-[2px]">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
