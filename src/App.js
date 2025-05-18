// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import ListItemCarousel from './components/ListItemCarousel';
import ListThumbnailCarousel from './components/ListThumbnailCarousel';
import SliderControls from './components/SliderControls';
import ActiveContent from './components/ActiveContent';
import RunningElement from './components/RunningElement';
import crowImage from './assets/crow.jpg';
import heronImage from './assets/heron.jpeg';
import owl1Image from './assets/owl1.jpg';
import parrot2Image from './assets/parrot2.jpg';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = useRef(null);
  const items = [
    { id: 1, title: 'Majestic Crow', description: 'A symbol of mystery and intelligence.', image: crowImage },
    { id: 2, title: 'Elegant Heron', description: 'Graceful and patient hunter by the water.', image: heronImage },
    { id: 3, title: 'Wise Owl', description: 'The silent observer with piercing eyes.', image: owl1Image },
    { id: 4, title: 'Vibrant Parrot', description: 'A splash of color and sound in the canopy.', image: parrot2Image },
  ];
  const thumbnails = items.map(item => ({ id: item.id, imageUrl: item.image, alt: item.title }));
  const activeItem = items[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayInterval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    } else {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    }

    return () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans py-8">
      <Header />
      <div className="container mx-auto px-4">
        <div className="relative">
          <ListItemCarousel currentIndex={currentIndex} items={items} />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <SliderControls onPrev={prevSlide} onNext={nextSlide} />
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <RunningElement isActive={isAutoPlaying} />
          </div>
        </div>
        <ListThumbnailCarousel
          activeIndex={currentIndex}
          onItemClick={handleThumbnailClick}
          thumbnails={thumbnails}
        />
        <ActiveContent activeItem={activeItem} />
        <div className="mt-4 text-center">
          <button
            className={`px-4 py-2 rounded-md ${isAutoPlaying ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'} text-white`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? 'Stop Auto-Play' : 'Start Auto-Play'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;