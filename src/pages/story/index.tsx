import React from 'react';
import { FC } from 'react';
import FadeInSection from '~components/common/FadeInComponent';
import Footer from '~components/common/Footer';
import Navbar from '~components/common/Navbar';
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
      <FadeInSection>
        <HeroComponent />
      </FadeInSection>
      <FadeInSection>
        <Vision />
      </FadeInSection>
      <FadeInSection>
        <Values />
      </FadeInSection>
      <FadeInSection>
        <StoryOfRessilience />
      </FadeInSection>
      <FadeInSection>
        <PioneerExcellence />
      </FadeInSection>
      <FadeInSection>
        <Legacy />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default Story;
