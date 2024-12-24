import React, { useEffect } from 'react';
import images from '~assets/image';
import videoSrc from '~assets/videos/home-hero.mp4';

interface CarouselProps {
  imagesList?: string[];
}

const Carousel: React.FC<CarouselProps> = ({
  imagesList = []
}) => {
  const [isMobile, setIsMobile] =
    React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.visualViewport
        ? window.visualViewport.width
        : document.documentElement.clientWidth;
      setIsMobile(width < 768); // Update based on mobile size (768px is a common mobile breakpoint)
    };

    // Initial check
    handleResize();

    // Add event listener to handle resize
    window.addEventListener(
      'resize',
      handleResize
    );

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[700px] md:h-[400px] lg:h-[900px] overflow-hidden">
      {/* Overlay with Text */}
      {isMobile ? (
        <div className="absolute bottom-0 right-0 left-0 top-0 w-full h-full flex items-center justify-center md:justify-start md:pl-[108px] z-10">
          <div className="text-secondary400 w-[90%] sm:w-[75%] md:w-[60%] font-['Marcellus']">
            <h1
              style={{
                textShadow:
                  '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}
              className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[60px] font-[400] leading-tight md:leading-[72px] lg:leading-[72px] text-center md:text-right"
            >
              Building Legacy <br /> Investing in
              Excellence
            </h1>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-0 right-0 left-[30%] top-[30%] w-full h-full flex pl-[108px] items-center z-10">
          <div className="text-secondary400 w-[90%] sm:w-[75%] md:w-[60%] font-['Marcellus']">
            <h1
              style={{
                textShadow:
                  '2px 2px 4px rgba(0, 0, 0, 0.5)',
                textAlign: 'right'
              }}
              className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[60px] font-[400] leading-tight md:leading-[72px] lg:leading-[72px]"
            >
              Building Legacy <br></br>Investing
              in Excellence
            </h1>
          </div>
        </div>
      )}

      {/* Gradient Overlay */}
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

      {/* Background Video */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster={images.heroCarouselPoster}
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
          Your browser does not support the video
          tag.
        </video>
      </div>
    </div>
  );
};

export default Carousel;
