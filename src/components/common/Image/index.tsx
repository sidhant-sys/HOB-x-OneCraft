import * as React from 'react';
import { IImageProps } from './type';

const ImageComponent: React.FC<IImageProps> = ({
  src,
  height,
  width,
  className,
  style
}) => {
  return (
    <img
      src={src}
      alt="Dynamic"
      className={`${height} ${width} ${className}`} // Use Tailwind classes
      style={style}
    />
  );
};

export default ImageComponent;
