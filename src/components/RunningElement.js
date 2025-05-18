// src/components/RunningElement.js
import React from 'react';

function RunningElement({ isActive }) {
  return (
    <div
      className={`bg-accent text-textPrimary py-2 px-4 rounded-full inline-block shadow-sm ${
        isActive ? 'animate-pulse-accent' : 'opacity-75'
      } transition-opacity duration-300`}
    >
      <span className="font-semibold">{isActive ? 'Now Showing' : 'Idle'}</span>
    </div>
  );
}

export default RunningElement;