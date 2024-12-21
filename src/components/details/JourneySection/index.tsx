import React, {
  useCallback,
  useRef,
  useState
} from 'react';
import { IJourneySectionProps } from './type';
import AnimatedCardSection from '../AnimatedCardSection';
import { useEffect } from 'react';

const JourneySection: React.FC<
  IJourneySectionProps
> = (props) => {
  const [isMobileChecked, setIsMobileChecked] =
    useState(false);
  const [startAnimation, setStartAnimation] =
    useState(false);
  const [iteration, setIteration] = useState(
    startAnimation ? 1 : 0
  );
  const [inViewport, setInViewport] =
    useState(false);
  const [isMobile, setIsMobile] = useState<
    boolean | undefined
  >(undefined);
  const [scrollDelta, setScrollDelta] =
    useState(0);

  const sectionRef = useRef(null);

  const { config, shortenCardHeight = false } =
    props;
  const cardsLength = config.JOURNEY_CARDS.length;

  useEffect(() => {
    if (inViewport) {
      setStartAnimation(true);
    }
  }, [inViewport]);

  useEffect(() => {
    if (!isMobileChecked) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          iteration < cardsLength - 1
        ) {
          // Section is in view, activate the wheel event handler
          setInViewport(true);
          document.body.style.overflow = 'hidden'; // Prevent page scroll immediately
        } else {
          // Section is out of view, reset the scroll handling
          setInViewport(false);
          document.body.style.overflow = 'auto'; // Allow page scroll when section is out of view
        }
      },
      {
        threshold: 1 // Trigger when 100% of the element is in view
      }
    );

    if (sectionRef.current && !isMobile) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      if (sectionRef.current && !isMobile) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [iteration, isMobileChecked]);

  useEffect(() => {
    if (isMobile !== undefined) {
      setIsMobileChecked(true); // Only set observer after isMobile is determined
    }
  }, [isMobile]);

  // Update isMobile state based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.visualViewport
        ? window.visualViewport.width
        : document.documentElement.clientWidth;
      const isMobile = width < 768;
      setIsMobile(isMobile); // Update based on mobile size (768px is a common mobile breakpoint)
    };

    // Initial check
    handleResize();

    // Add event listener to handle resize
    window.addEventListener(
      'resize',
      handleResize
    );

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, []);

  // Handle scroll event and trigger iteration based on the scroll distance
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      // Only respond to downward scroll (event.deltaY > 0)
      if (
        event.deltaY > 0 &&
        iteration < cardsLength - 1
      ) {
        // Accumulate the scroll delta to track how much the user has scrolled
        setScrollDelta(
          (prevDelta) => prevDelta + event.deltaY
        );

        // Trigger iteration when scroll exceeds a threshold
        if (Math.abs(scrollDelta) > 150) {
          setIteration(iteration + 1);
          setScrollDelta(0); // Reset scroll delta after updating iteration
        }
      }

      // Prevent default scroll behavior (page scrolling)
      if (
        !isMobile &&
        iteration < cardsLength - 1
      ) {
        event.preventDefault();
      }
    },
    [scrollDelta]
  );

  useEffect(() => {
    // Attach event listener to the document when section is in view
    if (!isMobile) {
      if (
        inViewport &&
        iteration < cardsLength - 1
      ) {
        document.addEventListener(
          'wheel',
          handleWheel,
          { passive: false }
        );
      } else {
        document.removeEventListener(
          'wheel',
          handleWheel
        );
      }
    }

    // Cleanup the event listener when the section goes out of view
    return () => {
      document.removeEventListener(
        'wheel',
        handleWheel
      );
    };
  }, [
    handleWheel,
    inViewport,
    iteration,
    isMobile
  ]);

  if (isMobile) {
    // Mobile and Tablet Implementation
    return (
      <section className="pl-[16px] md:pl-[48px] lg:pl-[108px] mb-[80px] md:mb-[120px] lg:mb-[160px]">
        <div className="flex flex-col gap-[20px] justify-center min-h-[auto]">
          {/* Text Content */}
          <div className="flex flex-col gap-[16px] w-full text-center">
            <div className="text-[28px] leading-[34px] font-[400] font-['Marcellus'] text-primary1000">
              {config.title}
            </div>
            <div className="text-[16px] leading-[24px] font-[400] text-neutral1000">
              {config.prefixText}
              {config.highlightedText && (
                <span className="text-secondary800">
                  {config.highlightedText}
                </span>
              )}
              {config.suffixText}
            </div>
          </div>

          {/* AnimatedCardSection is not rendered on Mobile */}
        </div>
      </section>
    );
  }

  // Desktop Implementation (unchanged from the original)
  return (
    <section
      className="pl-[108px] mb-[160px] journey-section"
      ref={sectionRef}
    >
      <div className="flex flex-row items-center justify-center gap-[170px] min-h-[450px]">
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
          iteration={iteration}
          startAnimation={startAnimation}
          shortenCardHeight={shortenCardHeight}
        />
      </div>
    </section>
  );
};

export default JourneySection;
