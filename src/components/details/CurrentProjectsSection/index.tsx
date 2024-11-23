import * as React from 'react';
import { ICurrentProjectsSectionProps } from './type';
import ImageComponent from '~components/common/Image';

const CurrentProjectsSection: React.FC<
  ICurrentProjectsSectionProps
> = (props) => {
  const { config } = props;
  return (
    <section className="p-[48px] md:p-[108px] flex flex-col">
      <div className="flex flex-col md:flex-row mb-[38px] justify-between">
        <div className="text-[28px] md:text-[36px] leading-[34px] md:leading-[43.2px] font-[400] font-['Marcellus'] text-primary1000 w-full md:w-[35%]">
          {config.TITLE}
        </div>
        <div className="mt-[20px] md:mt-0 ml-auto w-full md:w-[48%] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] font-[400] text-neutral1000">
          {config.SUBTITLE}
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-[16px] md:gap-[20px]">
        {config.CARDS.map((card, index) => (
          <div
            key={index}
            className="flex flex-col basis-[100%] md:basis-[calc(25%-20px)] min-w-[100%] md:min-w-[291px] max-w-full md:max-w-[calc(25%-20px)] h-[100%] rounded-[12px]"
          >
            <ImageComponent
              src={card.imageSrc}
              width="w-full"
              height="h-[242px] md:h-[268px]"
            />
            <div className="flex flex-col gap-[12px] p-[16px] md:p-[20px] bg-secondary300 min-h-[134px] rounded-bl-[12px] rounded-br-[12px]">
              <span className="text-[20px] md:text-[24px] font-[400] leading-[28.8px] font-['Marcellus'] text-neutral1000">
                {card.title}
              </span>
              <div className="text-[14px] md:text-[16px] font-[400] leading-[24px] text-neutral600">
                {card.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentProjectsSection;
