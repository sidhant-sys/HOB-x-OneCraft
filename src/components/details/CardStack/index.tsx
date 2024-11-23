import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import './styles.css';

const CardStack = () => {
  const [currentIndex, setCurrentIndex] =
    useState(0);
  const [scrollDelta, setScrollDelta] =
    useState(0);
  const SCROLL_THRESHOLD = 150; // Threshold for scroll detection
  const cardsRef = useRef([]);

  const cards = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5'
  ];

  useEffect(() => {
    const handleWheel = (event) => {
      setScrollDelta(
        (prevDelta) => prevDelta + event.deltaY
      );
    };

    // Add event listener for scroll (wheel event)
    document.addEventListener(
      'wheel',
      handleWheel
    );

    // Logic to handle scroll-based card stacking/unstacking
    if (
      scrollDelta > SCROLL_THRESHOLD &&
      currentIndex < cards.length - 1
    ) {
      // Scroll down: Show the next card
      setCurrentIndex(
        (prevIndex) => prevIndex + 1
      );
      setScrollDelta(0); // Reset scroll delta after action
    } else if (
      scrollDelta < -SCROLL_THRESHOLD &&
      currentIndex > 0
    ) {
      // Scroll up: Hide the current card
      setCurrentIndex(
        (prevIndex) => prevIndex - 1
      );
      setScrollDelta(0); // Reset scroll delta after action
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener(
        'wheel',
        handleWheel
      );
    };
  }, [scrollDelta, currentIndex]); // Dependency array ensures it runs when `scrollDelta` or `currentIndex` changes

  // Update card styles dynamically using refs
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (index < currentIndex) {
        card.style.transform =
          'translateX(calc(100% + 20px)) scale(0.9) rotate(5deg)'; // Cards below the current one are off-screen
        card.style.opacity = '0.5';
        card.style.zIndex = 0;
        card.style.boxShadow =
          '0 4px 10px rgba(0, 0, 0, 0.1)';
      } else if (index === currentIndex) {
        card.style.transform =
          'translateX(0) scale(1) rotate(0deg)'; // Current card is centered
        card.style.opacity = '1';
        card.style.zIndex = 1;
        card.style.boxShadow =
          '0 8px 15px rgba(0, 0, 0, 0.3)';
      } else {
        card.style.transform =
          'translateX(100%) scale(0.9) rotate(-5deg)'; // Cards ahead are off-screen
        card.style.opacity = '0.5';
        card.style.zIndex = 0;
        card.style.boxShadow =
          '0 4px 10px rgba(0, 0, 0, 0.1)';
      }
    });
  }, [currentIndex]);

  return (
    <div className="stack-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          ref={(el) =>
            (cardsRef.current[index] = el)
          }
        >
          <div className="card-content">
            {card}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStack;
