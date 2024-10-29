import * as React from 'react';
import { IJourneySectionProps } from './type';
import StackedCardComponent from '~components/common/StackCardComponent';

const JourneySection: React.FC<
  IJourneySectionProps
> = (props) => {
  const { config } = props;

  return (
    <section className="pl-[108px] h-[450px] flex flex-row align-items-center justify-center gap-[170px] mb-[160px]">
      <div className="flex flex-col gap-[20px] h-full justify-center min-w-[550px] max-w-[550px]">
        <div className="text-[36px] leading-[43.2px] font-[400] font-['Marcellus'] text-primary1000">
          {config.JOURNEY_TITLE}
        </div>
        <div className="text-[18px] leading-[27px] font-[400] text-neutral1000">
          {config.JOURNEY_SUBTITLE}
        </div>
      </div>
      <StackedCardComponent
        config={config.JOURNEY_CARDS}
      />
    </section>
  );
};

export default JourneySection;
