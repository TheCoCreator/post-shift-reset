import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 text-center text-white/40 text-xs">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        <p>&copy; {new Date().getFullYear()} The Calm Network. All rights reserved.</p>
        <a 
          href="https://timcampbellcalm.com" 
          className="hover:text-white/80 transition-colors duration-300 border-b border-transparent hover:border-white/50 pb-0.5"
        >
          Return to Main Site
        </a>
      </div>
    </footer>
  );
};