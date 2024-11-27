import React, { FC } from 'react';
import Button from '~components/common/Button';
import ImageComponent from '~components/common/Image';
import { STORY_CONFIG } from '~constants/story';

const PioneerExcellence: FC = () => {
  return (
    <div className="px-[16px] py-[40px] md:px-[108px] md:py-[110px] flex flex-col bg-primary1100">
      <div className="flex flex-col md:flex-row mb-[40px]">
        <div className="flex items-start w-full md:w-[50%]">
          <div className='text-[24px] md:text-[36px] font-[400] leading-[28.8px] md:leading-[43.2px] text-secondary400 font-["Marcellus"]'>
            {
              STORY_CONFIG.PIONEER_EXCELLENCE
                .title
            }
          </div>
        </div>
        <div className="flex items-start w-full md:w-[50%]">
          <div className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[27px] text-primary100">
            {
              STORY_CONFIG.PIONEER_EXCELLENCE
                .subtitle
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-[40px] md:gap-x-[40px]">
        {STORY_CONFIG.PIONEER_EXCELLENCE.cards.map(
          (card, index) => {
            return (
              <div
                key={index}
                className="flex flex-col mb-[40px] md:mb-0 basis-[100%] md:basis-[calc(33.33%-40px)] items-center min-w-[100%] md:min-w-[381px] max-w-[100%] md:max-w-[calc(33.33%-40px)] p-[20px] md:p-[40px] rounded-[12px] text-center"
                style={{
                  background:
                    'rgba(222, 203, 147, 0.15)'
                }}
              >
                <ImageComponent
                  src={card.imageSrc}
                  width="w-[80px] md:w-[120px]"
                  height="h-[80px] md:h-[120px]"
                  className="mb-[20px] md:mb-[40px]"
                />
                <div className="text-[20px] md:text-[24px] font-[400] leading-[24px] md:leading-[28.8px] text-secondary500 font-['Marcellus'] mb-[12px]">
                  {card.title}
                </div>
                <div className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[27px] text-primary100 mb-[40px] min-h-[80px]">
                  {card.subtitle}
                </div>
                <Button
                  size="medium"
                  theme="light"
                  variant="secondary"
                  iconId={'RIGHT_ARROW'}
                  iconFillColor="#d3b471"
                >
                  Know More
                </Button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default PioneerExcellence;
