import * as React from 'react';
import HeroComponent from '~components/common/HeroComponent';
import Navbar from '~components/common/Navbar';
import { PAGE_TITLE } from '~constants/common';
import JourneySection from '~components/details/JourneySection';
import AcquisitionSection from '~components/details/AcquisitionSection';
import CurrentProjectsSection from '~components/details/CurrentProjectsSection';
import OverallImpactSection from '~components/details/OverallImpactSection';
import KnowMoreSection from '~components/details/KnowMoreSection';
import Footer from '~components/common/Footer';
import { IDetailsPageProps } from './type';

const Details: React.FC<IDetailsPageProps> = (
  props
) => {
  React.useEffect(() => {
    document.title = PAGE_TITLE.REDJ;
  }, []);

  const { config, customStyling = false } = props;

  return (
    <>
      <Navbar
        selectedValue="portfolio"
        customClass="sticky"
      />
      <HeroComponent
        className={'py-[92px]'}
        title={config.title}
        imageSrc={config.imageSrc}
      />
      {config.JOURNEY_CONFIG && (
        <JourneySection
          config={config.JOURNEY_CONFIG}
        />
      )}
      {config.ACQUISITION_CONFIG && (
        <AcquisitionSection
          config={config.ACQUISITION_CONFIG}
          customWrapperClass={
            customStyling ? 'bg-secondary200' : ''
          }
          customTitleClass={
            customStyling
              ? '!text-primary1000'
              : ''
          }
          customSubtitleClass={
            customStyling
              ? '!text-neutral1000'
              : ''
          }
        />
      )}
      {config.CURRENT_PROJECTS_CONFIG && (
        <CurrentProjectsSection
          config={config.CURRENT_PROJECTS_CONFIG}
        />
      )}
      {config.OVERALL_IMPACT && (
        <OverallImpactSection
          config={config.OVERALL_IMPACT}
        />
      )}
      {config.KNOW_MORE_SECTION && (
        <KnowMoreSection
          config={config.KNOW_MORE_SECTION}
        />
      )}
      <Footer />
    </>
  );
};

export default Details;
