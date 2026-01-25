import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Practice from './components/Practice';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <nav className="flex justify-between items-center px-6 md:px-[10%] py-4 md:py-6 bg-bg/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/5">
        <div className="logo text-secondary font-serif text-xl md:text-2xl font-bold tracking-widest">ADVOCACY</div>

        {/* Desktop Links */}
        <div className="hidden md:flex nav-links gap-8">
          <a href="#home" className="hover:text-secondary transition-colors">Home</a>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#practice" className="hover:text-secondary transition-colors">Practice</a>
          <a href="#why" className="hover:text-secondary transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:block btn btn-outline relative group overflow-hidden" style={{ padding: '8px 24px', borderWidth: '1px', borderColor: 'var(--color-secondary)' }}>
            <span className="relative z-10 transition-colors duration-300">Consult Now</span>
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-secondary transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </a>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-secondary p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-bg/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif hover:text-secondary transition-colors">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif hover:text-secondary transition-colors">About</a>
          <a href="#practice" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif hover:text-secondary transition-colors">Practice</a>
          <a href="#why" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif hover:text-secondary transition-colors">Why Us</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif hover:text-secondary transition-colors">Contact</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn btn-outline relative group overflow-hidden mt-4" style={{ padding: '12px 32px', border: '1px solid var(--color-secondary)' }}>
            <span className="relative z-10">Consult Now</span>
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-secondary transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Practice />
        <WhyChoose />
        <Contact />
      </main>

      <footer className="py-12 px-6 md:px-[10%] bg-[#0a0a0a] border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-secondary font-serif text-xl font-bold tracking-widest mb-4">ADVOCACY</h3>
            <p className="text-text-muted text-sm max-w-xs">&copy; {new Date().getFullYear()} Prabhat Khandelwal Law Chambers. All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <div className="flex gap-8">
              <a href="#" className="text-text-muted hover:text-secondary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-text-muted hover:text-secondary transition-colors text-sm">Terms of Service</a>
            </div>
            <a href="#contact" className="btn btn-outline relative group overflow-hidden text-xs py-2 px-6 border-secondary/30">
              <span className="relative z-10">Direct Consultation</span>
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-secondary transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
