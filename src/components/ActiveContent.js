import React from 'react';

function ActiveContent({ activeItem }) {
  if (!activeItem) {
    return (
      <div className="mt-8 bg-white rounded-lg shadow-md p-6 text-center animate-fade-in">
        <p className="text-textSecondary italic">Select a featured item to see more details.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary mb-4">{activeItem.title}</h2>
      <p className="text-textSecondary leading-relaxed">{activeItem.description}</p>
      {/* You can add more detailed information here */}
      <button className="mt-6 bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors">
        Explore More
      </button>
    </div>
  );
}

export default ActiveContent;