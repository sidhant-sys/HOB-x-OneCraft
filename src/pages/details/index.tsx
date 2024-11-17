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
import FadeInSection from '~components/common/FadeInComponent';

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
      <FadeInSection>
        <HeroComponent
          className={'py-[92px]'}
          title={config.title}
          imageSrc={config.imageSrc}
        />
      </FadeInSection>

      {config.JOURNEY_CONFIG && (
        <FadeInSection>
          <JourneySection
            config={config.JOURNEY_CONFIG}
          />
        </FadeInSection>
      )}
      {config.ACQUISITION_CONFIG && (
        <FadeInSection>
          <AcquisitionSection
            config={config.ACQUISITION_CONFIG}
            customWrapperClass={
              customStyling
                ? 'bg-secondary200'
                : ''
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
        </FadeInSection>
      )}
      {config.CURRENT_PROJECTS_CONFIG && (
        <FadeInSection>
          <CurrentProjectsSection
            config={
              config.CURRENT_PROJECTS_CONFIG
            }
          />
        </FadeInSection>
      )}
      {config.OVERALL_IMPACT && (
        <FadeInSection>
          <OverallImpactSection
            config={config.OVERALL_IMPACT}
          />
        </FadeInSection>
      )}
      {config.KNOW_MORE_SECTION && (
        <FadeInSection>
          <KnowMoreSection
            config={config.KNOW_MORE_SECTION}
          />
        </FadeInSection>
      )}
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default Details;
