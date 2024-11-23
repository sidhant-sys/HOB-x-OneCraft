import React from 'react';
import Button from '~components/common/Button';
import ImageComponent from '~components/common/Image';
import { HOME_CONFIG } from '~constants/common';
import { navigateTo } from '~utils/common';

const OurWork: React.FC = () => {
  return (
    <section className="flex flex-col px-[16px] py-[40px] bg-primary1100 md:px-[48px] lg:px-[108px] lg:py-[110px]">
      <div className="flex flex-col gap-[8px]">
        <div className="text-[14px] font-[400] leading-[16px] text-neutral300 md:text-[16px]">
          {HOME_CONFIG.OUR_WORK.NAME}
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="text-[28px] font-[400] leading-[34px] text-secondary500 font-['Marcellus'] md:text-[36px] md:leading-[43.2px] md:w-[40%]">
            {HOME_CONFIG.OUR_WORK.TITLE}
          </div>
          <div className="mt-[16px] md:mt-0 md:ml-auto text-[16px] font-[400] leading-[24px] text-primary100 md:text-[18px] md:leading-[27px] md:w-[50%]">
            {HOME_CONFIG.OUR_WORK.DESCRIPTION}
          </div>
        </div>

        {/* Responsive Layout for Cards */}
        <div className="flex flex-col gap-[16px] mt-[32px] md:flex-row md:gap-[20px] lg:mt-[52px]">
          {HOME_CONFIG.OUR_WORK.WORK_CARD.map(
            (card, index) => (
              <div
                key={index}
                className={`flex flex-1 flex-col px-[8px] py-[16px] md:py-[32px] min-w-[275px] md:h-[410px] items-center rounded-[12px] group cursor-pointer`}
                style={{
                  background:
                    'linear-gradient(180deg, rgba(120, 110, 79, 0) 0%, rgba(222, 203, 147, 0.15) 100%)'
                }}
              >
                <ImageComponent
                  src={card.imageSrc}
                  width="w-[80px] md:w-[100px]"
                  height="h-[80px] md:h-[100px]"
                />
                <div className="flex flex-1 flex-col h-auto md:h-[188px] relative overflow-hidden items-center">
                  <span className="flex flex-row text-[60px] md:text-[100px] font-[400] leading-[70px] md:leading-[137.1px] text-neutral300 font-sherif mb-[10px] md:mb-[15px] transition-transform duration-500 transform group-hover:opacity-100 group-hover:translate-y-[-200px]">
                    {card.value}
                    <span className="flex items-end mb-[10px] md:mb-[15px] text-[36px] md:text-[60px] font-[400] leading-[48px] md:leading-[82.26px]">
                      M
                    </span>
                  </span>
                  <div className="text-[18px] md:text-[24px] leading-[24px] md:leading-[30.09px] font-[400] text-secondary500 text-center mb-[10px] md:mb-[20px] transition-transform duration-500 transform group-hover:translate-y-[-100px]">
                    {card.title}
                  </div>
                  <span className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20.83px] font-[400] text-primary100 text-center transition-transform duration-500 transform group-hover:translate-y-[-100px]">
                    {card.subtitle.prefixText}{' '}
                    <br />
                    {card.subtitle.suffixText}
                  </span>

                  {/* Button Implementation */}
                  <Button
                    variant="secondary"
                    size="small"
                    theme="light"
                    className={`mt-[16px] ${
                      index < 3
                        ? 'opacity-100 translate-y-0 md:opacity-0 md:translate-y-[50px] group-hover:opacity-100 group-hover:translate-y-[-100px]'
                        : 'opacity-0 translate-y-[50px] group-hover:opacity-100 group-hover:translate-y-[-100px]'
                    } transition-transform duration-500 transform`}
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
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
