import React from 'react';
import { FC } from 'react';
import images from '~assets/image';
import { STORY_CONFIG } from '~constants/story';

const Vision: FC = () => {
  return (
    <section
      className={
        'px-[16px] py-[40px] md:px-[108px] md:py-[160px] flex flex-col md:flex-row items-center justify-between'
      }
    >
      <div className="flex flex-col w-full md:w-[597px]">
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

      {/* Image with smaller size and comes directly below title on mobile */}
      <div className="h-[250px] w-[250px] md:h-[430px] md:w-[620px] mt-[20px] md:mt-0">
        <img
          src={images.VisionImage}
          alt="Vision"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Vision;
