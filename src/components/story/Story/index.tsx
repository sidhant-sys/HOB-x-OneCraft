import React, { FC } from 'react';
import { HeaderSeparator } from '~assets/icons';
import { STORY_CONFIG } from '~constants/story';
import ImageComponent from '~components/common/Image';
import images from '~assets/image';

const StoryOfRessilience: FC = () => {
  return (
    <div className="px-[16px] py-[40px] md:px-[108px] md:py-[110px] flex flex-col">
      <div className="h-[43px] flex items-center w-full gap-x-[10px] justify-center align-middle mb-[40px] md:mb-[100px]">
        <HeaderSeparator fill={'#0a4a33'} />
        <div className='text-[24px] md:text-[36px] font-[400] leading-[29px] md:leading-[43.2px] text-primary1000 font-["Marcellus"]'>
          {STORY_CONFIG.STORY.title}
        </div>
        <HeaderSeparator fill={'#0a4a33'} />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col mb-[40px] md:mr-[116px] w-full items-end">
          <div className="flex flex-col w-full md:w-[394px] align-middle">
            <div className="w-full md:w-[394px] h-[200px] md:h-[280px] mb-[40px] md:mb-[120px]">
              <ImageComponent
                src={images.Resillience1}
                width="w-full"
                height="h-full"
              />
            </div>
            <div className="text-[16px] md:text-[20px] font-[400] leading-[24px] md:leading-[30px] text-neutral1000">
              {STORY_CONFIG.STORY.leftDesc}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-[40px] md:mb-0">
          <HeaderSeparator />
          <div className="h-[1px] md:h-[380px] w-full md:w-[1px] bg-secondary500"></div>
          <HeaderSeparator />
        </div>
        <div className="flex flex-col mb-[40px] md:ml-[116px] w-full">
          <div className="flex flex-col w-full md:w-[394px] align-middle">
            <div className="text-[16px] md:text-[20px] font-[400] leading-[24px] md:leading-[30px] text-neutral1000 mb-[40px] md:mb-[120px]">
              {STORY_CONFIG.STORY.rightDesc}
            </div>
            <div className="w-full md:w-[394px] h-[200px] md:h-[280px]">
              <ImageComponent
                src={images.Resillience2}
                width="w-full"
                height="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryOfRessilience;
