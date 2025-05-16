import React from 'react';

function ActiveContent({ activeItem }) {
  if (!activeItem) {
    return (
      <div className="mt-8 bg-white rounded-lg shadow-md p-6 text-center animate-fade-in">
        <p className="text-textSecondary italic">Select a featured item for details.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-primary mb-3">{activeItem.title}</h2>
      {/* Removed the description paragraph */}
    </div>
  );
}

export default ActiveContent;