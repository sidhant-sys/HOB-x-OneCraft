import * as React from 'react';
import { IHeroComponentProps } from './type';
import ImageComponent from '../Image';

const HeroComponent: React.FC<
  IHeroComponentProps
> = (props) => {
  const {
    className = '',
    title,
    imageSrc
  } = props;
  return (
    <div
      className={`${className} relative h-[570px] flex`}
    >
      <div className="relative z-10 w-3/6 h-full flex">
        <div className="bg-white bg-opacity-75 rounded-lg pl-[108px] pt-[4%]">
          <div className="text-[60px] leading-[72px] font-['Marcellus'] text-primary1000">
            {title}
          </div>
        </div>
      </div>
      <ImageComponent
        className="absolute bottom-0 left-[40%] object-contain"
        src={imageSrc}
        height="h-[570px]"
        width="w-[60%]"
      />
    </div>
  );
};

export default HeroComponent;
