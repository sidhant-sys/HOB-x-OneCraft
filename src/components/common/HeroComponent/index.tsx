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
      className={`${className} relative flex flex-col h-auto md:h-[822px] md:flex-row`}
    >
      {/* Content Section */}
      <div className="relative z-10 w-full h-auto md:w-3/6 md:h-full flex">
        <div className="rounded-lg px-[16px] pt-[40px] md:pl-[108px] md:pt-[126px]">
          <div className="text-[32px] leading-[40px] md:text-[60px] md:leading-[72px] font-['Marcellus'] text-primary1000">
            {title}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <ImageComponent
        className="mt-[24px] md:mt-0 md:absolute md:bottom-0 md:left-[40%] object-contain md:top-[92px]"
        src={imageSrc}
        height="h-[300px] md:h-[570px]"
        width="w-[100%] md:w-[60%]"
        style={{
          background:
            'linear-gradient(90deg, rgba(251, 249, 241, 0) 20%, #FBF9F1 100%)'
        }}
      />
    </div>
  );
};

export default HeroComponent;
