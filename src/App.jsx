import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Practice from './components/Practice';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
      <nav>
        <div className="logo">ADVOCACY

</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#practice">Practice</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn btn-outline" style={{ padding: '8px 20px' }}>Consult Now</a>
      </nav>

      <main>
        <Hero />
        <About />
        <Practice />
        <WhyChoose />
        <Contact />
      </main>

      <footer style={{ padding: '40px 10%', background: '#0a0a0a', textAlign: 'center', borderTop: '1px solid #222' }}>
        <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Prabhat Khandelwal Law Chambers. All rights reserved.</p>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="#" style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-muted)' }}>Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
