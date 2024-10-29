import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  ICardProps,
  IStackCardComponentProps
} from './type';
import { motion } from 'framer-motion';
import { styles } from './styles';
import ImageComponent from '../Image';

const StackedCardComponent: React.FC<
  IStackCardComponentProps
> = (props) => {
  const [inViewport, setInViewport] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY, 'scrollY');
      if (window.scrollY >= 600) {
        setInViewport(true);
      }
    };

    document.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {
      document.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  const { config } = props;

  const CardStack = () => {
    // Array of card items
    const totalCards = config.length;
    const cards = Array.from(
      { length: totalCards },
      (_, index) => ({
        year: config[index].year,
        title: config[index].title,
        subtitle: config[index].subtitle,
        imgSrc: config[index].imgSrc
      })
    );

    return (
      <div style={styles.container}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            totalCards={cards.length}
          />
        ))}
      </div>
    );
  };

  const Card = ({
    card,
    index,
    totalCards
  }: {
    card: ICardProps;
    index: number;
    totalCards: number;
  }) => {
    const { year, title, subtitle, imgSrc } =
      card;
    const [
      startAnimationIndex,
      setStartAnimationIndex
    ] = useState(-1);

    const [animatedIndices, setAnimatedIndices] =
      useState<number[]>([]);

    const [
      animationFinishedIndices,
      setAnimationFinishedIndices
    ] = useState<number[]>([0]);

    useEffect(() => {
      let timer: any;
      if (inViewport) {
        timer = setTimeout(() => {
          setStartAnimationIndex(index);
          setAnimatedIndices((prev) => [
            ...prev,
            index
          ]);
        }, index * 2000); // Delay the animation for each card by index * 1000ms
      }
      return () => clearTimeout(timer);
    }, [index, inViewport]);

    const calculateXPosition = () => {
      // Calculate how many cards have moved, affecting the current card's left position
      const shiftedCount = animatedIndices.filter(
        (i) => i < index
      ).length;
      return -(
        360 * (index - shiftedCount) +
        18 * (index - shiftedCount) -
        32 * index
      );
    };

    // const getTiltValue = (index) => {
    //   return index != 0 &&
    //     startAnimationIndex === index &&
    //     animationFinishedIndices.includes(index)
    //     ? 5 * index
    //     : 0;
    // };

    const handleAnimationComplete = (index) => {
      const modifiedAnimationFinishedIndices = [
        ...animationFinishedIndices,
        index
      ];
      setAnimationFinishedIndices(
        modifiedAnimationFinishedIndices
      );
    };

    return (
      <motion.div
        style={styles.card}
        initial={{ x: 0, y: 0 }} // Initial position in row
        animate={{
          // Move card to top-left (x and y) when the animation starts
          x:
            startAnimationIndex === index
              ? calculateXPosition()
              : 0,
          zIndex:
            startAnimationIndex === index
              ? index + 1
              : 0
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
        onAnimationComplete={() =>
          handleAnimationComplete(index)
        }
      >
        <div className="py-[30px] px-[20px] flex flex-col gap-[12px] bg-secondary300 min-h-[250px]">
          <div className="w-[88px] h-[41px] py-[6px] px-[12px] bg-primary1000">
            <div className="text-[24px] leading-[28.8px] font-[400] text-primary100 font-['Marcellus']">
              {year}
            </div>
          </div>
          {title && (
            <div className="text-[24px] leading-[28.8px] font-[400] text-primary1000 font-['Marcellus']">
              {title}
            </div>
          )}
          <div className="text-[16px] leading-[24px] font-[400] text-neutral1000">
            {subtitle}
          </div>
        </div>
        <ImageComponent
          src={imgSrc}
          width="w-[360px]"
          height="h-[200px]"
        />
      </motion.div>
    );
  };

  return <CardStack />;
};

export default StackedCardComponent;
