import React from 'react';
// import {
//   FaChevronLeft,
//   FaChevronRight
// } from 'react-icons/fa';
// import ImageComponent from '../Image';
import videoSrc from '~assets/videos/home-hero.mp4';

interface CarouselProps {
  imagesList?: string[];
}

const Carousel: React.FC<CarouselProps> = ({
  imagesList = []
}) => {
  // const [currentIndex, setCurrentIndex] =
  //   useState(0);
  // const [isHovered, setIsHovered] =
  //   useState(false);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex(
  //       (currentIndex + 1) % imagesList.length
  //     );
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, [
  //   currentIndex,
  //   isHovered,
  //   imagesList.length
  // ]);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const handleLeftClick = () => {
  //   setCurrentIndex(
  //     (currentIndex - 1 + imagesList.length) %
  //       imagesList.length
  //   );
  // };

  // const handleRightClick = () => {
  //   setCurrentIndex(
  //     (currentIndex + 1) % imagesList.length
  //   );
  // };

  return (
    <div
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className="relative w-full h-[900px] overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10"
        style={{
          boxShadow:
            '0px 4px 4px 0px rgba(0, 0, 0, 1)'
        }}
      >
        <div
          className="text-[80px] font-[400] leading-[96px] font-['Marcellus'] text-secondary400 w-[60%] text-center"
          style={{
            textShadow:
              '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          Building Legacy, Investing in Excellence
        </div>
      </div>
      <div
        className="absolute inset-0" // Cover the entire area
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.3) -11.67%, #000000 100%)',
          zIndex: 5,
          width: '100%',
          height: '100%',
          opacity: '50%'
        }}
      />
      <div className="relative w-full h-full overflow-hidden">
        {/* {imagesList.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            height="h-full"
            width="w-full"
            className={`absolute top-0 left-0 object-cover transition-opacity duration-[1200ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
              index === currentIndex
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          />
        ))} */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
          Your browser does not support the video
          tag.
        </video>
      </div>
      {/* {true && (
        <div className="absolute top-0 left-0 w-full h-full items-center z-10">
          <div className="flex  w-full h-full justify-between px-[24px] items-center z-10">
            <button
              className="flex align-middle items-center justify-center text-neutral600 text-2xl cursor-pointer rounded-full bg-neutral200 p-[4px] h-[24px] w-[24px]"
              onClick={handleLeftClick}
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              className="flex align-middle items-center justify-center text-neutral600 text-2xl cursor-pointer rounded-full bg-neutral200 p-[4px] h-[24px] w-[24px]"
              onClick={handleRightClick}
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Carousel;
