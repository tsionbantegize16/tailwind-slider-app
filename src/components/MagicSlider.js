// src/components/MagicSlider.js
import React from 'react';

function MagicSlider({ activeItem }) {
  if (!activeItem) {
    return (
      <div className="relative h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center text-gray-600">
          <p className="italic">Loading content...</p>
        </div>
      </div>
    );
  }

  const { backgroundImage, title, subtitle, description, buttonText } = activeItem;

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <h2 className="text-3xl font-semibold text-green-400 mb-6">{subtitle}</h2>
        <p className="text-lg mb-8">{description}</p>
        {buttonText && (
          <button className="bg-white text-green-500 font-semibold py-3 px-6 rounded-full hover:bg-green-100 transition-colors duration-300">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default MagicSlider;