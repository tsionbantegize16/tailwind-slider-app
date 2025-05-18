// src/components/ListItem.js
import React from 'react';

function ListItem({ item }) {
  return (
    <div className="w-full flex-shrink-0 h-full">
      <img
        src={item.image} // Use the imported image from the item data
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ListItem;