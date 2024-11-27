import React, { FC } from 'react';
import { useInView } from '~hooks/useInView';

const FadeInSection: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { ref, inView } = useInView();

  return <div>{children}</div>;
};

export default FadeInSection;
