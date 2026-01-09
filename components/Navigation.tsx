import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full px-6 py-6 absolute top-0 left-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <a 
          href="https://timcampbellcalm.com" 
          className="text-white/90 hover:text-white text-sm tracking-wide font-medium transition-colors duration-300"
        >
          Tim Campbell Calm
        </a>
      </div>
    </nav>
  );
};