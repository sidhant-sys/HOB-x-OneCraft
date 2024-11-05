import React from 'react';
import { BrandGolden } from '~assets/icons';
import images from '~assets/image';
import ImageComponent from '~components/common/Image';
import { STORY_CONFIG } from '~constants/story';

const HeroComponent = () => {
  return (
    <div className="flex flex-col h-[750px] w-full relative">
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
        <BrandGolden />
        <div
          className={
            'flex flex-col mt-[32px] items-center'
          }
        >
          <div className='text-[60px] font-[400] leading-[72px] text-secondary500 font-["Marcellus"]'>
            {STORY_CONFIG.HERO.title}
          </div>
          <div className='text-[60px] font-[400] leading-[72px] text-secondary500 font-["Marcellus"]'>
            {STORY_CONFIG.HERO.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
