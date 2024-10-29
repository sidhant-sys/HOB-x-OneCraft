import React, { FC } from 'react';
import { HeaderSeparator } from '~assets/icons';
import { STORY_CONFIG } from '~constants/story';
import ImageComponent from '~components/common/Image';
import images from '~assets/image';

const StoryOfRessilience: FC = () => {
  return (
    <div className="px-[108px] py-[110px] flex flex-col">
      <div className="h-[43px] flex items-center w-full gap-x-[10px] justify-center align-middle mb-[100px]">
        <HeaderSeparator fill={'#0a4a33'} />
        <div className='text-[36px] font-[400] leading-[43.2px] text-primary1000 font-["Marcellus"]'>
          {STORY_CONFIG.STORY.title}
        </div>
        <HeaderSeparator fill={'#0a4a33'} />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-[394px]">
          <div className="w-[394px] h-[280px] mb-[120px]">
            <ImageComponent
              src={images.Resillience1}
              width="w-full"
              height="h-full"
            />
          </div>
          <div className="text-[20px] font-[400] leading-[30px] text-neutral1000">
            {STORY_CONFIG.STORY.leftDesc}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <HeaderSeparator />
          <div className="h-[380px] w-[1px] bg-secondary500"></div>
          <HeaderSeparator />
        </div>
        <div className="flex flex-col w-[394px]">
          <div className="text-[20px] font-[400] leading-[30px] text-neutral1000 mb-[120px]">
            {STORY_CONFIG.STORY.rightDesc}
          </div>
          <div className="w-[394px] h-[280px]">
            <ImageComponent
              src={images.Resillience2}
              width="w-full"
              height="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryOfRessilience;
