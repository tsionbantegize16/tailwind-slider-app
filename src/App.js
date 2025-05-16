import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ListItemCarousel from './components/ListItemCarousel';
import ListThumbnailCarousel from './components/ListThumbnailCarousel';
import SliderControls from './components/SliderControls';
import ActiveContent from './components/ActiveContent';
import RunningElement from './components/RunningElement';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, title: 'Modern Kitchen Design', description: 'Explore our latest contemporary kitchen styles.' },
    { id: 2, title: 'Minimalist Living Room', description: 'Discover the beauty of simplicity in your living space.' },
    { id: 3, title: 'Cozy Bedroom Retreat', description: 'Create your personal sanctuary with our cozy bedroom ideas.' },
    { id: 4, title: 'Functional Home Office', description: 'Design a productive and stylish home office setup.' },
    { id: 5, title: 'Elegant Bathroom Ideas', description: 'Transform your bathroom into a spa-like experience.' },
    { id: 6, title: 'Outdoor Patio Inspiration', description: 'Extend your living space with our inspiring patio designs.' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-run every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-neutral min-h-screen font-sans text-textPrimary">
      <Header />
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="shadow-lg rounded-xl overflow-hidden">
          <ListItemCarousel currentIndex={currentIndex} items={items} />
        </div>
        <ListThumbnailCarousel
          activeIndex={currentIndex}
          onItemClick={handleThumbnailClick}
          thumbnails={items.map((item, index) => ({
            id: item.id,
            imageUrl: `https://via.placeholder.com/150/${index % 5 === 0 ? '4285F4' : index % 5 === 1 ? 'DB4437' : index % 5 === 2 ? 'F4B400' : index % 5 === 3 ? '0F9D58' : '9E9E9E'}/FFFFFF?Text=Thumb${index + 1}`,
            alt: `Thumbnail ${item.id}`,
          }))}
        />
        <SliderControls onNext={nextSlide} onPrev={prevSlide} />
        <ActiveContent activeItem={items[currentIndex]} />
        <div className="mt-8 flex justify-end">
          <RunningElement isActive={true} />
        </div>
      </div>
    </div>
  );
}

export default App;