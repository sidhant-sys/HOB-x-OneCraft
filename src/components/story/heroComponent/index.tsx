import React from 'react';
import { BrandGolden } from '~assets/icons';
import ImageComponent from '~components/common/Image';
import { STORY_CONFIG } from '~constants/story';

const HeroComponent = () => {
  return (
    <div className="flex flex-col h-[750px] w-full p-relative">
      <ImageComponent
        src="./src/assets/images/home/heroCarousel/1.png"
        width="w-full"
        height="h-full"
      />
      <div className="absolute flex flex-col items-center justify-center h-full w-full">
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
