import * as React from 'react';
import Button from '~components/common/Button';
import ImageComponent from '~components/common/Image';
import { navigateTo } from '~utils/common';
import { IKnowMoreSectionProps } from './type';

const KnowMoreSection: React.FC<
  IKnowMoreSectionProps
> = (props) => {
  const { config } = props;
  return (
    <section className="px-[16px] md:px-[48px] lg:px-[108px] py-[40px] md:py-[100px] flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
      {config.map((ite, index) => {
        return (
          <div
            className="flex flex-col md:flex-row px-[20px] md:px-[40px] py-[20px] md:py-[30px] bg-secondary300 rounded-[12px] w-full md:w-[50%]"
            key={index}
          >
            {/* Text Content */}
            <div className="flex flex-col gap-[30px] w-full md:w-[60%]">
              <div className="text-[28px] md:text-[36px] font-[400] leading-[34px] md:leading-[43.2px] text-primary1000 font-['Marcellus']">
                {ite.title}
              </div>
              <Button
                size="large"
                variant="secondary"
                theme="dark"
                onClick={() =>
                  navigateTo(ite.link)
                }
                iconId={'RIGHT_ARROW'}
                className="mt-auto"
              >
                Know More
              </Button>
            </div>

            {/* Image */}
            <div className="flex ml-auto items-center justify-center mt-[20px] md:mt-0 hidden md:block">
              <ImageComponent
                src={ite.imageSrc}
                width="w-[60px] md:w-[120px]"
                height="h-[60px] md:h-[120px]"
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default KnowMoreSection;
