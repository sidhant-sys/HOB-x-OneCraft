import * as React from 'react';
import { ICurrentProjectsSectionProps } from './type';
import ImageComponent from '~components/common/Image';

const CurrentProjectsSection: React.FC<
  ICurrentProjectsSectionProps
> = (props) => {
  const { config } = props;
  return (
    <section className="p-[108px] flex flex-col">
      <div className="flex flex-row mb-[38px] justify-between">
        <div className="text-[36px] leading-[43.2px] font-[400] font-['Marcellus'] text-primary1000 w-[35%]">
          {config.TITLE}
        </div>
        <div className="ml-auto w-[48%] text-[18px] leading-[27px] font-[400] text-neutral1000">
          {config.SUBTITLE}
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-[20px]">
        {config.CARDS.map((card, index) => (
          <div
            key={index}
            className="flex flex-col basis-[calc(25%-20px)] min-w-[291px] max-w-[calc(25%-20px)] h-[100%] rounded-[12px]"
          >
            <ImageComponent
              src={card.imageSrc}
              width="w-full"
              height="h-[268px]"
            />
            <div className="flex flex-col gap-[12px] p-[20px] bg-secondary300 min-h-[134px] rounded-bl-[12px] rounded-br-[12px]">
              <span className='text-[24px] font-[400] leading-[28.8px] font-["Marcellus"] text-neutral1000'>
                {card.title}
              </span>
              <div className="text-[16px] font-[400] leading-[24px] text-neutral600">
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
