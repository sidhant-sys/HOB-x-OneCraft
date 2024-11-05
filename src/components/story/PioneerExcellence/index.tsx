import React, { FC } from 'react';
import Button from '~components/common/Button';
import ImageComponent from '~components/common/Image';
import { STORY_CONFIG } from '~constants/story';

const PioneerExcellence: FC = () => {
  return (
    <div className="px-[108px] py-[110px] flex flex-col bg-primary1100">
      <div className="flex flex-row mb-[40px]">
        <div className="flex items-start w-[50%]">
          <div className='text-[36px] font-[400] leading-[43.2px] text-secondary400 font-["Marcellus"]'>
            {
              STORY_CONFIG.PIONEER_EXCELLENCE
                .title
            }
          </div>
        </div>
        <div className="flex items-start w-[50%]">
          <div className="text-[18px] font-[400] leading-[27px] text-primary100">
            {
              STORY_CONFIG.PIONEER_EXCELLENCE
                .subtite
            }
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-[40px]">
        {STORY_CONFIG.PIONEER_EXCELLENCE.cards.map(
          (card, index) => {
            return (
              <div
                className="flex flex-col basis-[calc(33.33%-40px)]  items-center min-w-[381px] max-w-[calc(33.33%-40px)] p-[40px] rounded-[12px] text-center"
                style={{
                  background:
                    'rgba(222, 203, 147, 0.15)'
                }}
              >
                <ImageComponent
                  src={card.imageSrc}
                  width="w-[120px]"
                  height="h-[120px]"
                  className="mb-[40px]"
                />
                <div className="text-[24px] font-[400] leading-[28.8px] text-secondary500 font-['Marcellus'] mb-[12px]">
                  {card.title}
                </div>
                <div className="text-[18px] font-[400] leading-[27px] text-primary100 mb-[40px]">
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
