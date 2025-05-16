import React, { useRef, useEffect } from 'react';
import ThumbnailItem from './ThumbnailItem';

function ListThumbnailCarousel({ activeIndex, onItemClick, thumbnails }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = (activeIndex * (70 + 8)) - 35; // Adjusted scroll
    }
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden mt-6">
      <div
        ref={carouselRef}
        className="flex space-x-2 md:space-x-3 overflow-x-auto scroll-smooth py-2"
      >
        {thumbnails.map((thumbnail, index) => (
          <ThumbnailItem
            key={thumbnail.id}
            thumbnail={thumbnail}
            onClick={() => onItemClick(index)}
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default ListThumbnailCarousel;