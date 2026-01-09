import React, { useEffect, useRef } from 'react';

export const ResetCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect handles the injection of the third-party script
    // strictly within the bounds of this component's DOM.
    if (containerRef.current) {
      // Check if we've already injected the script to avoid duplication
      const existingScript = containerRef.current.querySelector('script[data-uid="67a7f064bf"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.async = true;
        script.dataset.uid = '67a7f064bf';
        script.src = 'https://thecalmanchor.kit.com/67a7f064bf/index.js';
        
        // Append the script to the specific container
        containerRef.current.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-10">
        
        {/* Subtle decorative elements for the glass effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center space-y-8">
          
          {/* Visual Indicator of the Reset Zone */}
          <div className="text-center space-y-3">
            <h3 className="text-white/90 text-lg font-medium tracking-wide">
              Get the Audio Guide
            </h3>
            <div className="h-0.5 w-12 bg-emerald-500/50 mx-auto rounded-full" />
            <p className="text-white/50 text-sm max-w-[260px] mx-auto leading-relaxed pt-2">
              Enter your email to receive the 10-minute Post-Shift Reset instantly.
            </p>
          </div>

          {/* Script Container */}
          <div className="w-full">
             {/* 
                We remove the placeholder text to keep it clean.
                We increase min-height to prevent layout shift when the form loads. 
             */}
            <div ref={containerRef} className="w-full min-h-[250px] flex justify-center items-center">
              {/* Script injection happens here */}
            </div>
          </div>

          <div className="space-y-1 text-center">
            <p className="text-white/30 text-[10px] uppercase tracking-widest">
              Private • Secure • Spam-Free
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};