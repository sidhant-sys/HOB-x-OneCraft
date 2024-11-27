import * as React from 'react';
import { IAcquisitionSectionProps } from './type';
import ImageComponent from '~components/common/Image';

const AcquisitionSection: React.FC<
  IAcquisitionSectionProps
> = (props) => {
  const {
    config,
    customWrapperClass = '',
    customTitleClass = '',
    customSubtitleClass = ''
  } = props;
  return (
    <section
      className={`bg-primary1100 p-[48px] md:p-[108px] flex flex-col ${customWrapperClass}`}
    >
      <div className="flex flex-col md:flex-row justify-between mb-[38px]">
        <div
          className={`text-[28px] md:text-[36px] leading-[34px] md:leading-[43.2px] font-[400] font-['Marcellus'] text-secondary400 w-full md:w-[35%] ${customTitleClass}`}
        >
          {config.TITLE}
        </div>
        <div
          className={`mt-[20px] md:mt-0 ml-auto w-full md:w-[48%] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] font-[400] text-primary100 ${customSubtitleClass}`}
        >
          {config.SUBTITLE}
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-[16px] md:gap-[20px] min-h-[363px]">
        {config.CARDS.map((card, index) => (
          <div className="flex flex-col basis-[100%] md:basis-[calc(25%-20px)] min-w-[100%] md:min-w-[291px] max-w-full md:max-w-[calc(25%-20px)] h-[100%] rounded-[12px]">
            <ImageComponent
              src={card.imageSrc}
              width="w-full"
              height="h-[242px]"
              className="rounded-tl-[12px] rounded-tr-[12px]"
            />
            <div className="p-[16px] md:p-[20px] bg-secondary300 min-h-[121px] rounded-bl-[12px] rounded-br-[12px] text-neutral1000">
              <span className="text-secondary800">
                {card.highlightedText}
              </span>{' '}
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcquisitionSection;
