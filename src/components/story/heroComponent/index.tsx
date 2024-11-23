import React, {
  useEffect,
  useState
} from 'react';
import { BrandGolden } from '~assets/icons';
import images from '~assets/image';
import ImageComponent from '~components/common/Image';
import { STORY_CONFIG } from '~constants/story';

const HeroComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth, 'inner');
      setIsMobile(window.innerWidth < 768); // Update based on mobile size (768px is a common mobile breakpoint)
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
    <div className="flex flex-col h-[450px] sm:h-[600px] lg:h-[750px] w-full relative">
      <ImageComponent
        src={images.StoryHeroImage}
        width="w-100p"
        height="h-100p"
        className="absolute top-0 left-0 w-full h-full flex"
      />
      <div
        className="absolute inset-0" // Cover the entire area
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.5) -19%, rgba(0, 0, 0, 0.8) 100%)',
          zIndex: 5,
          width: '100%',
          height: '100%'
        }}
      />
      <div className="absolute flex flex-col items-center justify-center h-full w-full z-10">
        <BrandGolden
          width={96}
          height={96}
          className="lg:w-[188px] lg:h-[188px]"
        />{' '}
        {/* Adjust BrandGolden size for mobile */}
        <div className="flex flex-col mt-[32px] items-center w-full px-4 sm:px-8">
          <div className="text-[48px] sm:text-[60px] font-[400] leading-[56px] sm:leading-[72px] text-secondary500 font-['Marcellus'] text-center">
            {STORY_CONFIG.HERO.title}
          </div>
          <div className="text-[48px] sm:text-[60px] font-[400] leading-[56px] sm:leading-[72px] text-secondary500 font-['Marcellus'] text-center">
            {STORY_CONFIG.HERO.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
