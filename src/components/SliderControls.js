import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

function SliderControls({ onNext, onPrev }) {
  return (
    <div className="flex justify-center mt-8 space-x-4">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300"
        onClick={onPrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="mr-2" /> Previous
      </button>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300"
        onClick={onNext}
      >
        Next <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
      </button>
    </div>
  );
}

export default SliderControls;