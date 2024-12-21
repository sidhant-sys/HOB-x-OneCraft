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
    customSubtitleClass = '',
    shortenCardHeight
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

      <div
        className="grid gap-[16px] md:gap-[20px] w-full"
        style={{
          gridTemplateColumns:
            'repeat(auto-fit, minmax(250px, 1fr))'
        }}
      >
        {config.CARDS.map((card, index) => (
          <div
            key={index}
            className="flex flex-col h-[100%] rounded-[12px]"
          >
            {/* Card Image */}
            <ImageComponent
              src={card.imageSrc}
              width="w-full"
              height="h-[242px]"
              className="rounded-tl-[12px] rounded-tr-[12px]"
            />
            {/* Card Text */}
            <div
              className={`p-[16px] md:p-[20px] bg-secondary300 ${
                shortenCardHeight
                  ? 'min-h-[67px]'
                  : 'min-h-[94px]'
              } rounded-bl-[12px] rounded-br-[12px] text-neutral1000`}
            >
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
