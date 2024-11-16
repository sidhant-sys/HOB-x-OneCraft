import React, { useRef, useState } from 'react';
import { IJourneySectionProps } from './type';
import AnimatedCardSection from '../AnimatedCardSection';
import { useEffect } from 'react';

const JourneySection: React.FC<
  IJourneySectionProps
> = (props) => {
  const [inViewport, setInViewport] =
    useState(false);
  const sectionRef = useRef(null);

  const { config } = props;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle the state when the component enters/exits the viewport
        setInViewport(entry.isIntersecting);
      },
      {
        threshold: 1 // Trigger when 10% of the element is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="pl-[108px] mb-[160px]">
      <div
        className="flex flex-row align-items-center justify-center gap-[170px] h-[450px]"
        ref={sectionRef}
      >
        <div className="flex flex-col gap-[20px] h-full justify-center min-w-[550px] max-w-[550px]">
          <div className="text-[36px] leading-[43.2px] font-[400] font-['Marcellus'] text-primary1000">
            {config.title}
          </div>
          <div className="text-[18px] leading-[27px] font-[400] text-neutral1000">
            {config.prefixText}
            {config.highlightedText && (
              <span className="text-secondary800">
                {config.highlightedText}
              </span>
            )}
            {config.suffixText}
          </div>
        </div>
        <AnimatedCardSection
          config={config.JOURNEY_CARDS}
          inViewport={inViewport}
        />
      </div>
    </section>
  );
};

export default JourneySection;
