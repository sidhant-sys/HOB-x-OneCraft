import React from 'react';
import { FC } from 'react';
import { HeaderSeparator } from '~assets/icons';
import { STORY_CONFIG } from '~constants/story';

import './style.css';

const Values: FC = () => {
  return (
    <div className="px-[108px] py-[110px] bg-primary1100 flex flex-col items-start justify-center">
      <div className="h-[43px] flex items-center w-full gap-x-[10px] justify-center align-middle mb-[40px]">
        <HeaderSeparator />
        <div className='text-[36px] font-[400] leading-[43.2px] text-secondary500 font-["Marcellus"]'>
          {STORY_CONFIG.VALUES.title}
        </div>
        <HeaderSeparator />
      </div>
      <div className="flex flex-row gap-x-[22px]">
        {STORY_CONFIG.VALUES.list.map(
          (value, index) => {
            return (
              <div
                className="h-[324px] min-w-[290px] width-[290px] py-[30px] flex flex-col rounded-[12px]"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(120, 110, 79, 0) 0%, rgba(222, 203, 147, 0.1) 100%)'
                }}
                key={`${value.letter}-${index}`}
              >
                <div
                  className={`text-[180px] font-[400] leading-[0.67] text-secondary500 font-sherif gradient-text pl-[8px]`}
                >
                  {value.letter}
                </div>
                <div className="flex flex-col pl-[20px] gap-y-[20px]">
                  <div className="text-[24px] font-[400] leading-[28.8px] text-secondary500 font-[Marcellus]">
                    {value.title}
                  </div>
                  <div className="text-[16px] font-[400] leading-[24px] text-primary100">
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
