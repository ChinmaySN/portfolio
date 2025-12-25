import React from 'react';

// Minimal, decorative scroll indicator to hint "more below" without animation.
export const ScrollIndicator: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 z-30"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-2 text-slate-400">
        <span className="h-10 w-px rounded-full bg-slate-300/80" />
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      </div>
    </div>
  );
};
