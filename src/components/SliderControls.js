// src/components/SliderControls.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

function SliderControls({ onNext, onPrev }) {
  return (
    <div className="flex space-x-4">
      <button
        className="bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
        onClick={onPrev}
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
        onClick={onNext}
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default SliderControls;