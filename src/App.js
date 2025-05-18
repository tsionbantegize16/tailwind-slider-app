// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import ListThumbnailCarousel from './components/ListThumbnailCarousel';
import SliderControls from './components/SliderControls';
import MagicSlider from './components/MagicSlider'; // Import the new component
import crowImage from './assets/crow.jpg';
import heronImage from './assets/heron.jpeg';
import owl1Image from './assets/owl1.jpg';
import parrot2Image from './assets/parrot2.jpg';
import cherryBlossom from './assets/eagle1.jpg'; // Example background

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = useRef(null);
  const slides = [
    {
      id: 1,
      backgroundImage: cherryBlossom,
      title: 'MAGIC SLIDER',
      subtitle: 'FLOWER',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'SEE MORE',
    },
    {
      id: 2,
      backgroundImage: crowImage,
      title: 'WILDLIFE SLIDER',
      subtitle: 'CROW',
      description: 'Explore the intelligent world of crows. Learn about their behavior and habitats.',
      buttonText: 'DISCOVER',
    },
    {
      id: 3,
      backgroundImage: heronImage,
      title: 'NATURE SLIDER',
      subtitle: 'HERON',
      description: 'Witness the graceful flight and patient hunting of the elegant heron.',
      buttonText: 'OBSERVE',
    },
    {
      id: 4,
      backgroundImage: owl1Image,
      title: 'NIGHT SLIDER',
      subtitle: 'OWL',
      description: 'Discover the mysterious and wise presence of the nocturnal owl.',
      buttonText: 'UNCOVER',
    },
    {
      id: 5,
      backgroundImage: parrot2Image,
      title: 'TROPICAL SLIDER',
      subtitle: 'PARROT',
      description: 'Immerse yourself in the vibrant colors and sounds of the tropical parrot.',
      buttonText: 'EXPERIENCE',
    },
  ];
  const thumbnails = slides.map(slide => ({ id: slide.id, imageUrl: slide.backgroundImage, alt: slide.subtitle }));
  const activeSlide = slides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
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
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Header />
      <MagicSlider activeItem={activeSlide} /> {/* Use the new MagicSlider component */}
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        <SliderControls onPrev={prevSlide} onNext={nextSlide} />
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-300'} focus:outline-none`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <ListThumbnailCarousel
          activeIndex={currentIndex}
          onItemClick={handleThumbnailClick}
          thumbnails={thumbnails}
        />
      </div>
      {/* You might repurpose or remove ActiveContent */}
    </div>
  );
}

export default App;