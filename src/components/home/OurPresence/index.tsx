import React, { useState } from 'react';
import Button from '~components/common/Button';
import ImageComponent from '~components/common/Image';
import { HOME_CONFIG } from '~constants/common';
import { navigateTo } from '~utils/common';

const OurPresence: React.FC = () => {
  const [
    investmentCategoryIndex,
    setInvestmentCategoryIndex
  ] = useState(0);

  const onInvestCategoryClick = (
    index: number
  ) => {
    setInvestmentCategoryIndex(index);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[810px] bg-[#fff]">
      <div className="py-10 px-6 sm:py-[117px] sm:px-10 lg:px-[108px] flex flex-col">
        <div className="flex flex-col gap-3 sm:gap-[12px] mb-8 sm:mb-12 lg:mb-[166px]">
          <div className="text-[14px] sm:text-[16px] font-[400] leading-[20px] sm:leading-[24px] text-neutral600">
            {HOME_CONFIG.PRESENCE.NAME}
          </div>
          <div className="text-[24px] sm:text-[30px] lg:text-[36px] font-[400] leading-[30px] sm:leading-[38px] lg:leading-[43.2px] font-['Marcellus'] text-primary1000 w-full sm:w-[80%] lg:w-[70%]">
            {HOME_CONFIG.PRESENCE.TITLE} <br></br>
            {HOME_CONFIG.PRESENCE.SUBTITLE}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-[80px]">
          <div className="flex flex-col">
            {HOME_CONFIG.PRESENCE.CATEGORIES.map(
              (category, index) => {
                return (
                  <div
                    key={index}
                    className="px-4 py-3 sm:px-[30px] sm:py-[25px] border-b-[1px] border-neutral300 cursor-pointer hover:bg-secondary200"
                    onClick={() =>
                      onInvestCategoryClick(index)
                    }
                  >
                    <div className="text-[18px] sm:text-[24px] font-[400] leading-[26px] sm:leading-[30.09px] font-['Marcellus'] text-primary11000">
                      {category.name}
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] font-[400] text-neutral1000 w-full sm:w-[60%] z-[9] ">
              {
                HOME_CONFIG.PRESENCE.CATEGORIES[
                  investmentCategoryIndex
                ].description
              }
            </div>
            {/* Uncomment if the button is needed */}
            {/* <Button
          variant="secondary"
          size="large"
          theme="dark"
          onClick={() => {
            navigateTo(
              HOME_CONFIG.PRESENCE.CATEGORIES[investmentCategoryIndex].link
            );
          }}
        >
          Know more
        </Button> */}
          </div>
        </div>
      </div>
      {/* Image visible only on desktop */}
      <div className="hidden lg:block lg:absolute lg:w-[50%] lg:left-[50%]">
        <ImageComponent
          src={HOME_CONFIG.PRESENCE.MAP_IMAGE_SRC}
          width="w-full"
          height="h-[810px]"
        />
      </div>
    </div>
  );
};

export default OurPresence;
