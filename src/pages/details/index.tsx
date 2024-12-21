import React, { useEffect } from 'react';
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
import { URL_PATHS } from '~constants/paths';

const Details: React.FC<IDetailsPageProps> = (
  props
) => {
  const {
    config,
    customStyling = false,
    pageName
  } = props;

  useEffect(() => {
    let title;
    if (pageName === URL_PATHS.REAL_ESTATE) {
      title = PAGE_TITLE.REDJ;
    } else if (pageName === URL_PATHS.OEIH) {
      title = PAGE_TITLE.OEIH;
    } else title = PAGE_TITLE.OFIE;
    document.title = title;
  }, [pageName]);

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
            shortenCardHeight={
              pageName === URL_PATHS.OEIH
            }
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
            shortenCardHeight={
              pageName === URL_PATHS.OFIE
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
