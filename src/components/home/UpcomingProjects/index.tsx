import React from 'react';
import ImageComponent from '~components/common/Image';
import { HOME_CONFIG } from '~constants/common';
const UpcomingProjects: React.FC = () => {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12 lg:px-[108px] lg:py-[110px] bg-secondary200">
      {/* Section Title */}
      <div className="flex flex-col gap-3 sm:gap-[12px] mb-10 sm:mb-[60px] items-center text-center">
        <div className="text-[14px] sm:text-[16px] font-[400] leading-[20px] sm:leading-[24px] text-neutral600">
          {HOME_CONFIG.UPCOMING_PROJECTS.NAME}
        </div>
        <div className="text-[24px] sm:text-[30px] md:text-[36px] font-[400] leading-[30px] sm:leading-[38px] md:leading-[43.2px] font-['Marcellus'] text-primary1000">
          {HOME_CONFIG.UPCOMING_PROJECTS.TITLE}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-[20px] w-full">
        {HOME_CONFIG.UPCOMING_PROJECTS.PROJECTS.map(
          (card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[12px] min-w-[200px] sm:min-w-[291px] h-auto"
            >
              {/* Card Image */}
              <ImageComponent
                src={card.imageSrc}
                width="w-full"
                height="h-[200px] sm:h-[268px]"
                className="object-cover rounded-t-[12px]"
              />

              {/* Card Text */}
              <div className="p-4 sm:p-[20px] min-h-[98px] max-h-[98px]  bg-secondary300 rounded-bl-[12px] rounded-br-[12px] overflow-hidden">
                <div className="text-[18px] sm:text-[24px] font-[400] leading-[22px] sm:leading-[28.8px] font-['Marcellus'] text-neutral1000 line-clamp-2">
                  {card.address}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default UpcomingProjects;
