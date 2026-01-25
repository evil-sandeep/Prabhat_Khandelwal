import React from 'react';
import lawyerImage from '../assets/prabhat.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-bg pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Typography */}
        <div className="space-y-6 animate text-center lg:text-left">
          <div className="space-y-4">
            <p className="text-secondary font-medium tracking-widest uppercase text-xs md:text-sm">
              Government Appointed Public Prosecutor <br className="md:hidden" />
              SDJM Court, Balasore
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-tight">
              Prabhat <br className="hidden md:block" />
              <span className="text-secondary">Khandelwal</span>
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-text-muted font-light tracking-wide">
            Advocate  <span className="text-secondary mx-2">|</span>Legal Professional
          </h2>
          <p className="max-w-md mx-auto lg:mx-0 text-text-muted text-base md:text-lg leading-relaxed">
            Committed to the principles of law and justice with unwavering integrity.
            Bringing over two decades of professional experience in legal practice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <a href="#contact" className="btn px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">Immediate Consultation</a>
            <a href="#practice" className="btn btn-outline px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">Case Expertise</a>
          </div>
        </div>

        {/* Right Side: Image with Animation */}
        <div className="relative flex justify-center items-center order-first lg:order-last">
          {/* Subtle background glow */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-secondary/10 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>

          <div className="relative animate-float max-w-[280px] md:max-w-[450px]">
            {/* Image Frame */}
            <div className="border-2 border-secondary/30 p-2 md:p-4 rounded-2xl backdrop-blur-sm">
              <img
                src={lawyerImage}
                alt="Prabhat Khandelwal - Criminal Lawyer"
                className="w-full rounded-xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Accent Elements */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-secondary text-primary p-3 md:p-6 rounded-lg shadow-xl">
              <p className="text-xl md:text-3xl font-bold">20+</p>
              <p className="text-[10px] md:text-xs uppercase tracking-tighter font-semibold">Years of Justice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
