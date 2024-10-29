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
      className={`bg-primary1100 p-[108px] flex flex-col ${customWrapperClass}`}
    >
      <div className="flex flex-row justify-between mb-[38px]">
        <div
          className={`text-[36px] leading-[43.2px] font-[400] font-['Marcellus'] text-secondary400 w-[35%] ${customTitleClass}`}
        >
          {config.TITLE}
        </div>
        <div
          className={`ml-auto w-[48%] text-[18px] leading-[27px] font-[400] text-primary100 ${customSubtitleClass}`}
        >
          {config.SUBTITLE}
        </div>
      </div>
      <div className="flex flex-row  flex-wrap gap-[20px] min-h-[363px]">
        {config.CARDS.map((card, index) => (
          <div className="flex flex-col w-[291px] min-w-[291px] h-[100%] rounded-[12px]">
            <ImageComponent
              src={card.imageSrc}
              width="w-[291px]"
              height="h-[242px]"
            />
            <div className="p-[20px] bg-secondary300 min-h-[121px] rounded-bl-[12px] rounded-br-[12px]">
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
