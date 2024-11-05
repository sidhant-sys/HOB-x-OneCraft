import * as React from 'react';
import ImageComponent from '~components/common/Image';
import { IOverallImpactSectionProps } from './type';

const OverallImpactSection: React.FC<
  IOverallImpactSectionProps
> = (props) => {
  const { config } = props;
  return (
    <section className="px-[108px] py-[70px] flex flex-row bg-primary1100 items-center justify-center">
      <ImageComponent
        src={config.imgSrc}
        width="w-[498px]"
        height="h-[498px]"
      />
      <div className="ml-[124px] flex flex-col gap-[40px]">
        <div className="text-[36px] font-[400] leading-[43.2px] text-secondary500 font-['Marcellus']">
          {config.title}
        </div>
        <div className="text-[22px] font-[400] leading-[33px] text-primary100">
          {config.description.prefixText}
          {config.description.highlightedText && (
            <span className="text-[24px] font-[700] leading-[36px] bg-primary700">
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
