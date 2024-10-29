import React from 'react';
import { FC } from 'react';
import images from '~assets/image';
import { STORY_CONFIG } from '~constants/story';

const Vision: FC = () => {
  return (
    <div
      className={
        'px-[108px] py-[160px] flex flex-row items-center justify-between'
      }
    >
      <div className="flex flex-col w-[597px]">
        <div className='text-[36px] font-[400] leading-[43.2px] text-primary1000 font-["Marcellus"] mb-[20px]'>
          {STORY_CONFIG.VISION.title}
        </div>
        <div className="text-[18px] font-[400] leading-[27px] text-neutral1000">
          <span className="text-[20px] font-[400] leading-[30px] text-secondary800">
            {
              STORY_CONFIG.VISION.subtitle
                .highlightedText
            }
          </span>
          {
            STORY_CONFIG.VISION.subtitle
              .suffixText
          }
          <br />
          <br />
          {STORY_CONFIG.VISION.subtitle.extraText}
        </div>
      </div>
      <div className="h-[430px] w-[430px]">
        <img
          src={images.VisionImage}
          alt="Vision"
          width={430}
        />
      </div>
    </div>
  );
};

export default Vision;
