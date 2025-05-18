// src/components/ThumbnailItem.js
import React from 'react';

function ThumbnailItem({ thumbnail, onClick, isActive, isRounded }) {
  const roundedClasses = isRounded ? 'rounded-full' : 'rounded-md';

  return (
    <div
      className={`w-32 h-20 flex-shrink-0 cursor-pointer overflow-hidden shadow-md ${roundedClasses} ${
        isActive ? 'border-2 border-blue-500' : 'hover:shadow-lg'
      } transition-shadow duration-300`}
      onClick={onClick}
    >
      <img
        src={thumbnail.imageUrl}
        alt={thumbnail.alt || 'Thumbnail'}
        className="w-full h-full object-cover"
      />
      {/* You might remove or style the text overlay */}
    </div>
  );
}

export default ThumbnailItem;