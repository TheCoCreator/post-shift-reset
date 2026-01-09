import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ResetCard } from './components/ResetCard';

// Reusable component for the "Scroll-Triggered Breath Animation"
// Triggers a slow fade-in + move-up transition when the element enters the viewport.
const BreathReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// New Component: Value Props (The "Why")
const ValueProps: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl mx-auto px-4 mt-8 mb-4">
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-white font-medium tracking-wide">The Parking Lot Pause</h3>
      <p className="text-white/50 text-sm leading-relaxed">
        Stop the adrenaline loop before you turn the ignition. A distinct boundary between "Nurse" and "You."
      </p>
    </div>
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-white font-medium tracking-wide">Nervous System Reset</h3>
      <p className="text-white/50 text-sm leading-relaxed">
        Use physiological sighs and grounded focus to signal safety to your body after a high-alert shift.
      </p>
    </div>
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
      <h3 className="text-white font-medium tracking-wide">Arrive Home Present</h3>
      <p className="text-white/50 text-sm leading-relaxed">
        Walk through your front door ready to connect, rest, and be present for the life you work so hard for.
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] bg-gradient-to-b from-[#1a1a1a] to-[#064e3b] text-white flex flex-col relative overflow-x-hidden">
      
      <Navigation />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-24 md:py-32 w-full max-w-7xl mx-auto z-10">
        
        <div className="w-full flex flex-col items-center gap-16 md:gap-20">
          
          {/* Narrative Section with Breath Animation */}
          <BreathReveal>
            <section className="text-center space-y-8 w-full max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white/95 drop-shadow-lg">
                The weight of the shift doesn't have to follow you <span className="text-emerald-200/90 font-normal border-b border-emerald-500/30 pb-1">home.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
                A 10-minute guided audio protocol specifically designed to transition the healthcare nervous system from <span className="text-white font-normal">clinical vigilance</span> to <span className="text-white font-normal">personal peace</span>.
              </p>
            </section>
          </BreathReveal>

          {/* Value Stack / Benefits Section - The "Hook" */}
          <BreathReveal delay={200}>
             <ValueProps />
          </BreathReveal>

          {/* Functional Reset Zone with Breath Animation (delayed) */}
          <BreathReveal delay={400}>
            <section className="w-full max-w-3xl mx-auto flex flex-col items-center">
              <ResetCard />
            </section>
          </BreathReveal>

        </div>
      </main>

      <Footer />
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
    </div>
  );
};

export default App;