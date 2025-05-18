// src/components/FullScreenSlider.js
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const sliderVariants = {
  initial: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.17, 0.67, 0.83, 0.67], // More natural ease
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: [0.32, 0, 0.67, 0], // Different exit ease
    },
  }),
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};

const backgroundMotionProps = {
  initial: { scale: 1 },
  animate: { scale: 1.05, transition: { duration: 1.2, ease: 'easeInOut' } }, // Subtle zoom
  exit: { scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

function FullScreenSlider({ items, currentIndex, onIndexChange, autoSlideInterval = 5000 }) {
  const currentItem = items[currentIndex];
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Add a mount state

  useEffect(() => {
    setIsMounted(true); // Set mount state after the initial render
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating && items.length > 0) {
        const nextIndex = (currentIndex + 1) % items.length;
        onIndexChange(nextIndex);
      }
    }, autoSlideInterval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentIndex, isAnimating, items.length, onIndexChange, autoSlideInterval]);

  // Preload images for smoother transitions (optional but good for UX)
  useEffect(() => {
    items.forEach(item => {
      new Image().src = item.imageUrl;
    });
  }, [items]);

  // Trigger background zoom animation
  useEffect(() => {
    if (isMounted && currentItem?.imageUrl && !isAnimating) {
      controls.start('animate');
    }
    return () => {
      if (isMounted) {
        controls.start('initial');
      }
    };
  }, [isMounted, currentItem?.imageUrl, controls, isAnimating]);

  // Memoize the current item for optimization
  const memoizedCurrentItem = useMemo(() => currentItem, [currentItem]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={0} onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={memoizedCurrentItem?.id}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${memoizedCurrentItem?.imageUrl})` }}
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={0} // Direction is handled by currentIndex change in parent
          onAnimationStart={() => setIsAnimating(true)}
        >
          <motion.div
            className="absolute inset-0 bg-black opacity-30 flex items-center justify-center"
            variants={backgroundMotionProps}
            animate={controls}
          >
            <motion.div
              className="text-center text-white px-8"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {memoizedCurrentItem?.subtitle && (
                <motion.div className="text-xl text-green-400 font-semibold mb-2">{memoizedCurrentItem.subtitle}</motion.div>
              )}
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-4">{memoizedCurrentItem?.title}</motion.h1>
              {memoizedCurrentItem?.description && (
                <motion.p className="text-lg text-gray-200 leading-relaxed max-w-xl mx-auto mb-6">
                  {memoizedCurrentItem.description}
                </motion.p>
              )}
              {memoizedCurrentItem?.buttonText && (
                <motion.a
                  href={memoizedCurrentItem.buttonLink || '#'}
                  className="inline-block bg-green-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md"
                  whileHover={{ scale: 1.07, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {memoizedCurrentItem.buttonText}
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default FullScreenSlider;