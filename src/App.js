import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ListItemCarousel from './components/ListItemCarousel';
import ListThumbnailCarousel from './components/ListThumbnailCarousel';
import SliderControls from './components/SliderControls';
import ActiveContent from './components/ActiveContent';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, title: 'Innovative Solutions', description: 'Discover our cutting-edge approaches to modern challenges.' },
    { id: 2, title: 'Strategic Partnerships', description: 'Building strong collaborations for mutual growth and success.' },
    { id: 3, title: 'Sustainable Practices', description: 'Committed to environmentally responsible operations and solutions.' },
    { id: 4, title: 'Customer-Centric Approach', description: 'Prioritizing client needs and delivering exceptional experiences.' },
    { id: 5, title: 'Data-Driven Insights', description: 'Leveraging analytics to inform decisions and drive innovation.' },
    { id: 6, title: 'Global Market Reach', description: 'Expanding our influence and serving clients worldwide.' },
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
        <div className="shadow-xl rounded-xl overflow-hidden">
          <ListItemCarousel currentIndex={currentIndex} items={items} />
        </div>
        <ListThumbnailCarousel
          activeIndex={currentIndex}
          onItemClick={handleThumbnailClick}
          thumbnails={items.map((item, index) => ({
            id: item.id,
            imageUrl: `https://via.placeholder.com/120/${index % 5 === 0 ? '283593' : index % 5 === 1 ? '43A047' : index % 5 === 2 ? 'F9A825' : index % 5 === 3 ? '1E88E5' : '757575'}/FFFFFF?Text=Item${index + 1}`,
            alt: `Thumbnail ${item.id}`,
          }))}
        />
        <SliderControls onNext={nextSlide} onPrev={prevSlide} />
        <ActiveContent activeItem={items[currentIndex]} />
      </div>
    </div>
  );
}

export default App;