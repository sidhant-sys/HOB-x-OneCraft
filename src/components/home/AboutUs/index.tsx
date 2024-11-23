import React from 'react';
import { HOME_CONFIG } from '~constants/common';

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col px-6 py-10 sm:px-10 sm:py-12 lg:px-[108px] lg:py-[110px] bg-secondary200">
      {/* Section Header */}
      <div className="text-[14px] sm:text-[16px] font-[400] leading-[16px] text-neutral600 mb-2 sm:mb-4">
        {HOME_CONFIG.ABOUT_US.NAME}
      </div>
      <div className="text-[24px] sm:text-[30px] md:text-[36px] font-[400] leading-[32px] sm:leading-[38px] md:leading-[43.2px] font-['Marcellus'] text-primary1000 mb-6 sm:mb-8">
        {HOME_CONFIG.ABOUT_US.TITLE}
      </div>

      {/* Description Content */}
      <div className="flex flex-col gap-y-6 sm:flex-row sm:justify-between sm:gap-x-8 lg:gap-x-[64px]">
        <div className="text-[16px] sm:text-[18px] font-[400] leading-[24px] sm:leading-[27px] flex-1 text-neutral1000">
          {HOME_CONFIG.ABOUT_US.DESCRIPTION1}
        </div>
        <div className="text-[16px] sm:text-[18px] font-[400] leading-[24px] sm:leading-[27px] flex-1 text-neutral1000">
          {HOME_CONFIG.ABOUT_US.DESCRIPTION2}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
