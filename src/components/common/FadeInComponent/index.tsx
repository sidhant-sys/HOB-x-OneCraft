import React, { FC } from 'react';
import { useInView } from '~hooks/useInView';

const FadeInSection: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`opacity-0 transform transition-all duration-300 ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'translate-y-5'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
