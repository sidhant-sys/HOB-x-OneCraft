import React from 'react';
import { FC } from 'react';
import Footer from '~components/common/Footer';
import Navbar from '~components/common/Navbar/Navbar';
import HeroComponent from '~components/story/heroComponent';
import Legacy from '~components/story/Legacy';
import PioneerExcellence from '~components/story/PioneerExcellence';
import StoryOfRessilience from '~components/story/Story';
import Values from '~components/story/Values';
import Vision from '~components/story/Vision';

const Story: FC = () => {
  return (
    <>
      <Navbar
        selectedValue="story"
        customClass="sticky"
      />
      <HeroComponent />
      <Vision />
      <Values />
      <StoryOfRessilience />
      <PioneerExcellence />
      <Legacy />
      <Footer />
    </>
  );
};

export default Story;
