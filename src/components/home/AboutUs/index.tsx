import React from 'react';
import { HOME_CONFIG } from '~constants/common';

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col px-[108px] py-[110px] bg-secondary200">
      <div className="text-[16px] font-[400] leading-[16px] text-neutral600 mb-[8px]">
        {HOME_CONFIG.ABOUT_US.NAME}
      </div>
      <div className="text-[36px] font-[400] leading-[43.2px] font-['Marcellus'] text-neutral600 mb-[8px] mb-[28px]">
        {HOME_CONFIG.ABOUT_US.TITLE}
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-[18px] font-[400] leading-[27px] w-[50%]">
          {HOME_CONFIG.ABOUT_US.DESCRIPTION1}
        </div>
        <div className="text-[18px] font-[400] leading-[27px] w-[50%]">
          {HOME_CONFIG.ABOUT_US.DESCRIPTION2}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
