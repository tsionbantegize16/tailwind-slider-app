// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ListItemCarousel from './components/ListItemCarousel';
import ListThumbnailCarousel from './components/ListThumbnailCarousel';
import SliderControls from './components/SliderControls';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([
    { id: 1, title: 'Modern Design', description: 'Explore contemporary design trends.' },
    { id: 2, title: 'Creative Ideas', description: 'Discover innovative and inspiring concepts.' },
    { id: 3, title: 'Unique Solutions', description: 'Presenting tailored solutions for your needs.' },
    { id: 4, title: 'Stylish Elements', description: 'Showcasing elegant and fashionable components.' },
    { id: 5, title: 'Inspiring Visions', description: 'Sharing creative visions for the future.' },
  ]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Header />
      <div className="relative container mx-auto px-4 py-12">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <ListItemCarousel currentIndex={currentIndex} items={items} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-8">
            <div className="text-sm text-gray-300 uppercase tracking-widest mb-2">Showcase</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{items[currentIndex]?.title}</h2>
            <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">{items[currentIndex]?.description}</p>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex space-x-2">
            <SliderControls onNext={nextSlide} onPrev={prevSlide} />
          </div>
        </div>
        <div className="mt-8 overflow-x-auto">
          <ListThumbnailCarousel
            activeIndex={currentIndex}
            onItemClick={handleThumbnailClick}
            thumbnails={items.map((item, index) => ({
              id: item.id,
              imageUrl: `https://source.unsplash.com/random/400x250?abstract&sig=${index}`,
              alt: `Thumbnail ${item.title}`,
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;