import React, {
  useState,
  useEffect
} from 'react';
import {
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import ImageComponent from '../Image';

interface CarouselProps {
  images?: string[];
}

const Carousel: React.FC<CarouselProps> = ({
  images = [
    '/src/assets/images/heroCarousel/1.png',
    '/src/assets/images/heroCarousel/2.png',
    '/src/assets/images/heroCarousel/3.png',
    '/src/assets/images/heroCarousel/4.png'
  ]
}) => {
  const [currentIndex, setCurrentIndex] =
    useState(0);
  const [isHovered, setIsHovered] =
    useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex(
          (currentIndex + 1) % images.length
        );
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, isHovered, images.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLeftClick = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) %
        images.length
    );
  };

  const handleRightClick = () => {
    setCurrentIndex(
      (currentIndex + 1) % images.length
    );
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[900px] overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10"
        style={{
          boxShadow:
            '0px 4px 4px 0px rgba(0, 0, 0, 1)'
        }}
      >
        <div className="text-[80px] font-[400] leading-[96px] font-['Marcellus'] text-secondary400 w-[60%] text-center">
          Building Legacy, Investing in Excellence
        </div>
      </div>
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            height="h-full"
            width="w-full"
            className={`absolute top-0 left-0 object-cover transition-opacity duration-500 ${
              index === currentIndex
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          />
        ))}
      </div>
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center z-10">
          <button
            className="text-neutral400 text-2xl cursor-pointer"
            onClick={handleLeftClick}
          >
            <FaChevronLeft />
          </button>
          <button
            className="text-neutral400 text-2xl cursor-pointer"
            onClick={handleRightClick}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
