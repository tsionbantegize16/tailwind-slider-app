import React from 'react';

function ListItem({ item }) {
  return (
    <div className="w-full flex-shrink-0 p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={`https://source.unsplash.com/random/1200x600?${item.title.split(' ').join('+')}`}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-textPrimary mb-3">{item.title}</h3>
          <p className="text-textSecondary text-sm leading-relaxed">{item.description}</p>
          <button className="mt-4 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;