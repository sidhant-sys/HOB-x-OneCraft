import React from 'react';
import { FC } from 'react';
import images from '~assets/image';
import ImageComponent from '~components/common/Image';
import { STORY_CONFIG } from '~constants/story';

const Legacy: FC = () => {
  return (
    <div className="flex px-[16px] pt-[40px] md:px-[60px] md:pt-[60px] relative w-full h-[300px]">
      <div className="absolute bottom-0 top-0 left-0 right-0">
        <ImageComponent
          src={images.LegacyImage}
          width="w-full"
          height="h-full"
        />
      </div>
      <div
        className="absolute flex items-center flex-col justify-center text-center top-[0px] h-full"
        style={{ width: 'calc(100% - 120px)' }}
      >
        <div className='text-[24px] md:text-[36px] font-[400] leading-[30px] md:leading-[43.2px] text-primary1000 font-["Marcellus"] mb-[16px] md:mb-[20px] max-w-[90%]'>
          {STORY_CONFIG.LEGACY.title}
        </div>
        <div className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[27px] text-neutral1000 px-[8px] md:px-0 max-w-[588px] overflow-wrap break-word">
          {STORY_CONFIG.LEGACY.subtitle}
        </div>
      </div>
    </div>
  );
};

export default Legacy;
