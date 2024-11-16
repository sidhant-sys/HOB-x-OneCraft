import React, {
  useEffect,
  useState
} from 'react';
import { ICardProps } from '../type';
import ImageComponent from '~components/common/Image';

const Card = ({
  card,
  index,
  totalCards,
  iteration,
  startAnimation
}: {
  card: ICardProps;
  index: number;
  totalCards: number;
  iteration: number;
  startAnimation: boolean;
}) => {
  const { year, title, subtitle, imgSrc } = card;

  return (
    <>
      <div className="py-[30px] px-[20px] flex flex-col gap-[12px] bg-secondary300 min-h-[250px] rounded-t-[12px]">
        <div className="w-[88px] h-[41px] py-[6px] px-[12px] bg-primary1000">
          <div className="text-[24px] leading-[28.8px] font-[400] text-primary100 font-['Marcellus']">
            {year}
          </div>
        </div>
        {title && (
          <div className="text-[24px] leading-[28.8px] font-[400] text-primary1000 font-['Marcellus']">
            {title}
          </div>
        )}
        <div className="text-[16px] leading-[24px] font-[400] text-neutral1000">
          {subtitle}
        </div>
      </div>
      <ImageComponent
        src={imgSrc}
        width="w-[360px]"
        height="h-[200px]"
      />
    </>
  );
};

export default Card;
