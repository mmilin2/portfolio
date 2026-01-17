import React from 'react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      type: 'email',
      label: 'Email',
      value: 'milind.fnu.791@gmail.com',
      href: 'mailto:milind.fnu.791@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 sm:w-8 sm:h-8 text-success">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '(312) 874-9671',
      href: 'tel:+13128749671',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 sm:w-8 sm:h-8 text-success">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      )
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Greater Seattle Area, WA',
      href: null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 sm:w-8 sm:h-8 text-success">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mmilin2',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/milind-fnu',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          <span className="text-success font-mono text-lg sm:text-xl">05.</span>
          <h2 className="text-text-primary text-2xl sm:text-3xl font-bold m-0 whitespace-nowrap">Get In Touch</h2>
          <div className="h-[1px] bg-dark-light flex-1 ml-2 sm:ml-4 hidden xs:block"></div>
        </div>

        <div className="max-w-[900px] mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Intro */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-text-primary text-xl sm:text-2xl font-semibold">Let's Connect</h3>
            <p className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
              I'm currently open to new opportunities and interesting projects. Whether you have a question,
              want to discuss a potential collaboration, or just want to say hi, I'd love to hear from you!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => {
              const CardWrapper = method.href ? 'a' : 'div';
              const cardProps = method.href ? { href: method.href } : {};

              return (
                <CardWrapper
                  key={index}
                  {...cardProps}
                  className="bg-dark-light rounded-lg p-4 sm:p-6 border border-dark-light transition-all duration-300 hover:border-success hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] hover:-translate-y-2 flex flex-col items-center gap-3 sm:gap-4 text-center no-underline group cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-dark flex items-center justify-center border-2 border-success/30 transition-all duration-300 group-hover:border-success group-hover:bg-success/10">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-text-primary text-base sm:text-lg font-semibold mb-1 sm:mb-2 m-0">{method.label}</h4>
                    <p className="text-text-secondary text-xs sm:text-sm m-0 break-all">{method.value}</p>
                  </div>
                </CardWrapper>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h4 className="text-text-primary text-lg sm:text-xl font-semibold">Find me on</h4>
            <div className="flex justify-center gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-light flex items-center justify-center text-text-muted border border-dark-light transition-all duration-300 hover:text-success hover:border-success hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center space-y-3 sm:space-y-4">
            <a
              href="mailto:milind.fnu.791@gmail.com"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-success text-success text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:bg-success hover:text-dark hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] hover:-translate-y-1 no-underline"
            >
              Send Me an Email
            </a>
            <p className="text-text-muted text-xs sm:text-sm">I typically respond within 24-48 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
