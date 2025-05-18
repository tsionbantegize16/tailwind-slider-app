// src/components/ThumbnailItem.js
import React from 'react';

function ThumbnailItem({ thumbnail, onClick, isActive }) {
  return (
    <div
      className={`w-48 h-32 flex-shrink-0 cursor-pointer rounded-md overflow-hidden shadow-md ${
        isActive ? 'border-2 border-blue-500' : 'hover:shadow-lg'
      } transition-shadow duration-300`}
      onClick={onClick}
    >
      <img
        src={thumbnail.imageUrl} // Use the imported image URL from the thumbnail data
        alt={thumbnail.alt || 'Thumbnail'}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center text-sm">
        {thumbnail.alt} {/* Use the alt text as the thumbnail name */}
      </div>
    </div>
  );
}

export default ThumbnailItem;