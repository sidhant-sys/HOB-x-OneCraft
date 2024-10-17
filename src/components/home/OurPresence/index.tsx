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

  const onInvestCategoryClick = (index) => {
    setInvestmentCategoryIndex(index);
  };

  return (
    <div className="flex w-[full] h-[810px] bg-[#fff]">
      <div className="py-[117px] px-[108px] flex flex-col">
        <div className="flex flex-col gap-[12px] mb-[166px]">
          <div className="text-[16px] font-[400] leading-[24px] text-neutral600">
            {HOME_CONFIG.PRESENCE.NAME}
          </div>
          <div className="text-[36px] font-[400] leading-[43.2px] font-['Marcellus'] text-primary1000 w-[70%]">
            {HOME_CONFIG.PRESENCE.TITLE}
          </div>
        </div>
        <div className="flex flex-row gap-[80px]">
          <div className="flex flex-col">
            {HOME_CONFIG.PRESENCE.CATEGORIES.map(
              (category, index) => {
                return (
                  <div
                    className="px-[30px] py-[25px] border-b-[1px] border-neutral300 cursor-pointer hover:bg-secondary200"
                    onClick={() =>
                      onInvestCategoryClick(index)
                    }
                  >
                    <div className="text-[24px] font-[400] leading-[30.09px] font-['Marcellus'] text-primary11000">
                      {category.name}
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="flex flex-col">
            <div className="text-[18px] leading-[27px] font-[400] text-neutral1000 w-[60%] z-[9] mb-[22px]">
              {
                HOME_CONFIG.PRESENCE.CATEGORIES[
                  investmentCategoryIndex
                ].description
              }
            </div>
            <Button
              variant="secondary"
              size="large"
              theme="dark"
              onClick={() => {
                navigateTo(
                  HOME_CONFIG.PRESENCE.CATEGORIES[
                    investmentCategoryIndex
                  ].link
                );
              }}
            >
              Know more
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute w-[50%] left-[50%]">
        <ImageComponent
          src={HOME_CONFIG.PRESENCE.MAP_IMAGE_SRC}
          width="w-full"
          height="h-[810px]"
        ></ImageComponent>
      </div>
    </div>
  );
};

export default OurPresence;
