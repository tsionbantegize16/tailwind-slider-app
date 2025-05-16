// src/components/ListItem.js
import React from 'react';

function ListItem({ item }) {
  return (
    <div className="w-full flex-shrink-0 h-full">
      <img
        src={`https://source.unsplash.com/random/1200x600?abstract&sig=${item.id}`}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ListItem;