// src/components/ListItemCarousel.js
import React from 'react';
import ListItem from './ListItem';

function ListItemCarousel({ currentIndex, items }) {
  return (
    <div className="relative overflow-hidden h-96">
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.isArray(items) && items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ListItemCarousel;