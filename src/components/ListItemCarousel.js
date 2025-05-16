import React from 'react';
import ListItem from './ListItem';

function ListItemCarousel({ currentIndex, items }) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div
        className="flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ListItemCarousel;