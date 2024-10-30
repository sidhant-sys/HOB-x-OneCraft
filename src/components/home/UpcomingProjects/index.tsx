import React from 'react';
import ImageComponent from '~components/common/Image';
import { HOME_CONFIG } from '~constants/common';
const UpcomingProjects: React.FC = () => {
  return (
    <section className="px-[108px] py-[110px] bg-secondary200">
      <div className="flex flex-col gap-[12px] mb-[60px] items-center">
        <div className="text-[16px] font-[400] leading-[24px] text-neutral600">
          {HOME_CONFIG.UPCOMING_PROJECTS.NAME}
        </div>
        <div className="text-[36px] font-[400] leading-[43.2px] font-['Marcellus'] text-primary1000">
          {HOME_CONFIG.UPCOMING_PROJECTS.TITLE}
        </div>
      </div>
      <div className="flex flex-row gap-[20px] h-[366px] w-full">
        {HOME_CONFIG.UPCOMING_PROJECTS.PROJECTS.map(
          (card, index) => {
            return (
              <div
                className="flex flex-1 flex-col rounded-[12px] min-w-[291px] min-h-[268px] h-[268px]"
                key={index}
              >
                <ImageComponent
                  src={card.imageSrc}
                  width="w-full"
                  height="h-full"
                  className="object-cover"
                />

                <div className="p-[20px] text-[24px] font-[400] leading-[28.8px] font-['Marcellus'] text-neutral1000 bg-secondary300 rounded-bl-[12px] rounded-br-[12px]">
                  {card.address}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default UpcomingProjects;
