import React from 'react';

function ThumbnailItem({ thumbnail, onClick, isActive }) {
  return (
    <div
      className={`w-16 sm:w-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden shadow-sm transition-shadow duration-300 ${
        isActive ? 'border-2 border-primary shadow-md' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <img
        src={thumbnail.imageUrl || 'https://via.placeholder.com/100'}
        alt={thumbnail.alt || 'Thumbnail'}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
}

export default ThumbnailItem;