import * as React from 'react';
import { IImageProps } from './type';

const ImageComponent: React.FC<IImageProps> = ({
  src,
  height,
  width,
  className
}) => {
  return (
    <img
      src={src}
      alt="Dynamic"
      className={`${height} ${width} ${className}`} // Use Tailwind classes
    />
  );
};

export default ImageComponent;
