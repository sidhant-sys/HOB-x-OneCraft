import React from 'react';
import { FC } from 'react';
import images from '~assets/image';
import ImageComponent from '~components/common/Image';
import { STORY_CONFIG } from '~constants/story';

const Legacy: FC = () => {
  return (
    <div className="flex px-[60px] pt-[60px] relative w-full">
      <ImageComponent
        src={images.LegacyImage}
        width="w-full"
        height="h-full"
      />
      <div className="absolute flex items-center flex-col justify-center text-center top-[110px] w-[90%]">
        <div className='text-[36px] font-[400] leading-[43.2px] text-primary1000 font-["Marcellus"] mb-[20px]'>
          {STORY_CONFIG.LEGACY.title}
        </div>
        <div className="text-[18px] font-[400] leading-[27px] text-neutral1000 w-[588px]">
          {STORY_CONFIG.LEGACY.subtitle}
        </div>
      </div>
    </div>
  );
};

export default Legacy;
