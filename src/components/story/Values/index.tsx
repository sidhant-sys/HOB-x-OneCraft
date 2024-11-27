import React from 'react';
import { FC } from 'react';
import { HeaderSeparator } from '~assets/icons';
import { STORY_CONFIG } from '~constants/story';

import './style.css';

const Values: FC = () => {
  return (
    <div className="px-[16px] py-[40px] md:px-[108px] md:py-[110px] bg-primary1100 flex flex-col items-center justify-center">
      <div className="h-[43px] flex items-center w-full gap-x-[10px] justify-center align-middle mb-[40px]">
        <HeaderSeparator />
        <div className='text-[24px] md:text-[36px] font-[400] leading-[29px] md:leading-[43.2px] text-secondary500 font-["Marcellus"]'>
          {STORY_CONFIG.VALUES.title}
        </div>
        <HeaderSeparator />
      </div>
      <div className="flex flex-col md:flex-row gap-x-[22px] gap-y-[20px] md:gap-x-[22px]">
        {STORY_CONFIG.VALUES.list.map(
          (value, index) => {
            return (
              <div
                className="h-[auto] md:h-[324px] min-w-[100%] md:min-w-[290px] md:w-[290px] py-[20px] md:py-[30px] flex flex-col rounded-[12px] bg-[linear-gradient(180deg,_rgba(120,_110,_79,_0)_0%,_rgba(222,_203,_147,_0.1)_100%)]"
                key={`${value.letter}-${index}`}
              >
                <div
                  className={`text-[120px] md:text-[180px] font-[400] leading-[0.67] text-secondary500 font-sherif gradient-text pl-[8px]`}
                >
                  {value.letter}
                </div>
                <div className="flex flex-col pl-[10px] md:pl-[20px] gap-y-[10px] md:gap-y-[20px]">
                  <div className="text-[20px] md:text-[24px] font-[400] leading-[24px] md:leading-[28.8px] text-secondary500 font-[Marcellus]">
                    {value.title}
                  </div>
                  <div className="text-[14px] md:text-[16px] font-[400] leading-[20px] md:leading-[24px] text-primary100">
                    {value.subtitle}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Values;
