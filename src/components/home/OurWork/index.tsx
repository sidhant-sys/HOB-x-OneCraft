import React from 'react';
import { RightArrow } from '~assets/icons';
import Button from '~components/common/Button';
import ImageComponent from '~components/common/Image';
import { HOME_CONFIG } from '~constants/common';
import { navigateTo } from '~utils/common';

const OurWork: React.FC = () => {
  return (
    <section className="flex flex-col px-[108px] py-[110px] bg-primary1100">
      <div className="flex flex-col gap-[8px]">
        <div className="text-[16px] font-[400] leading-[16px] text-neutral300">
          {HOME_CONFIG.OUR_WORK.NAME}
        </div>
        <div className="flex flex-row">
          <div className="text-[36px] font-[400] leading-[43.2px] text-secondary500 font-['Marcellus'] w-[40%]">
            {HOME_CONFIG.OUR_WORK.TITLE}
          </div>
          <div className="ml-auto text-[18px] font-[400] leading-[27px] text-primary100 w-[50%]">
            {HOME_CONFIG.OUR_WORK.DESCRIPTION}
          </div>
        </div>
        <div className="flex flex-row gap-[20px] mt-[52px] w-full">
          {HOME_CONFIG.OUR_WORK.WORK_CARD.map(
            (card, index) => {
              return (
                <div
                  className="flex flex-1 flex-col px-[8px] py-[32px] min-w-[395px] h-[410px] items-center rounded-[12px] group cursor-pointer"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(120, 110, 79, 0) 0%, rgba(222, 203, 147, 0.15) 100%)'
                  }}
                >
                  <ImageComponent
                    src={card.imageSrc}
                    width="w-[100px]"
                    height="h-[100px]"
                  />
                  <div className="flex flex-1 flex-col h-[188px]  relative overflow-hidden items-center">
                    <span className="flex flex-row text-[100px] font-[400] leading-[137.1px] text-neutral300 font-sherif mb-[15px] transition-transform duration-500 transform group-hover:opacity-100 group-hover:translate-y-[-200px]">
                      {card.value}
                      <span className="flex items-end mb-[15px] text-[60px] font-[400] leading-[82.26px]">
                        M
                      </span>
                    </span>
                    <div className="text-[24px] leading-[30.09px] font-[400] text-secondary500 text-center mb-[20px] transition-transform duration-500 transform group-hover:translate-y-[-100px]">
                      {card.title}
                    </div>
                    <span className="text-[16px] leading-[20.83px] font-[400] text-primary100 text-center transition-transform duration-500 transform group-hover:translate-y-[-100px]">
                      {card.subtitle.prefixText}{' '}
                      <br></br>
                      {card.subtitle.suffixText}
                    </span>
                    <Button
                      variant="secondary"
                      size="small"
                      theme="light"
                      className="mt-[16px] opacity-0 translate-y-[50px] group-hover:opacity-100 transition-transform duration-500 transform group-hover:translate-y-[-100px]"
                      onClick={() =>
                        navigateTo(card.link)
                      }
                      iconId={'RIGHT_ARROW'}
                      iconFillColor="#d3b471"
                    >
                      Know More
                    </Button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
