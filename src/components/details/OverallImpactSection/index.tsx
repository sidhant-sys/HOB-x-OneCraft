import * as React from 'react';
import ImageComponent from '~components/common/Image';
import { IOverallImpactSectionProps } from './type';

const OverallImpactSection: React.FC<
  IOverallImpactSectionProps
> = (props) => {
  const { config } = props;
  return (
    <section className="px-[16px] md:px-[48px] lg:px-[108px] py-[40px] md:py-[70px] flex flex-col md:flex-row bg-primary1100 items-center justify-center">
      <ImageComponent
        src={config.imgSrc}
        width="w-full md:w-[498px]"
        height="h-[300px] md:h-[498px]"
        className="object-contain"
      />
      <div className="mt-[20px] md:mt-0 ml-0 md:ml-[124px] flex flex-col gap-[24px] md:gap-[40px] text-center md:text-left">
        <div className="text-[28px] md:text-[36px] font-[400] leading-[34px] md:leading-[43.2px] text-secondary500 font-['Marcellus']">
          {config.title}
        </div>
        <div className="text-[18px] md:text-[22px] font-[400] leading-[28px] md:leading-[33px] text-primary100">
          {config.description.prefixText}
          {config.description.highlightedText && (
            <span className="text-[20px] md:text-[24px] font-[700] leading-[36px] bg-primary700">
              {config.description.highlightedText}
            </span>
          )}
          {config.description.suffixText}
        </div>
      </div>
    </section>
  );
};

export default OverallImpactSection;
