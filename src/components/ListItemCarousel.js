import React, { useRef, useEffect } from 'react';
import ListItem from './ListItem';

function ListItemCarousel({ currentIndex, items }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(0%)` }} // Initial style
      >
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ListItemCarousel;