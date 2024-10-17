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
    <section className="px-[108px] py-[100px] flex flex-row gap-[40px]">
      {config.map((ite, index) => {
        return (
          <div
            className="flex flex-row px-[40px] py-[30px] bg-secondary300 rounded-[12px]"
            key={index}
          >
            <div className="flex flex-col gap-[50px] w-[60%]">
              <div className="text-[36px] font-[400] leading-[43.2px] text-primary1000 font-['Marcellus']">
                {ite.title}
              </div>
              <Button
                size="large"
                variant="secondary"
                theme="dark"
                onClick={() =>
                  navigateTo(ite.link)
                }
              >
                Know more
              </Button>
            </div>
            <div className="flex ml-auto items-center justify-center">
              <ImageComponent
                src={ite.imageSrc}
                width="w-[120px]"
                height="h-[120px]"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default KnowMoreSection;
