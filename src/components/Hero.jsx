import React from 'react';
import lawyerImage from '../assets/prabhat.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-bg pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Typography */}
        <div className="space-y-6 animate">
          <div className="space-y-2">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm">Government Appointed Public Prosecutor
              SDJM Court, Balasore
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight">
              Prabhat <br />
              <span className="text-secondary">Khandelwal</span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl text-text-muted font-light tracking-wide">
            Advocate  <span className="text-secondary mx-2">|</span>Legal Professional
          </h2>
          <p className="max-w-md text-text-muted text-lg leading-relaxed">
            Committed to the principles of law and justice with unwavering integrity.
            Bringing over two decades of professional experience in legal practice.

          </p>
          <div className="flex gap-6 pt-4">
            <a href="#contact" className="btn px-8 py-4 text-lg">Immediate Consultation</a>
            <a href="#practice" className="btn btn-outline px-8 py-4 text-lg">Case Expertise</a>
          </div>
        </div>

        {/* Right Side: Image with Animation */}
        <div className="relative flex justify-center items-center">
          {/* Subtle background glow */}
          <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

          <div className="relative animate-float">
            {/* Image Frame */}
            <div className="border-2 border-secondary/30 p-4 rounded-2xl backdrop-blur-sm">
              <img
                src={lawyerImage}
                alt="Prabhat Khandelwal - Criminal Lawyer"
                className="w-full max-w-[450px] rounded-xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Accent Elements */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-xs uppercase tracking-tighter font-semibold">Years of Justice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
