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
      if (window.scrollY >= 400) {
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
    const [startAnimation, setStartAnimation] =
      useState(false);

    useEffect(() => {
      let timer: any;
      if (inViewport) {
        timer = setTimeout(() => {
          setStartAnimation(true);
        }, index * 1000); // Delay the animation for each card by index * 1000ms
      }
      return () => clearTimeout(timer);
    }, [index]);

    return (
      <motion.div
        style={styles.card}
        initial={{ x: 0, y: 0 }} // Initial position in row
        animate={{
          // Move card to top-left (x and y) when the animation starts
          x: startAnimation
            ? -(360 * index + 18 * index)
            : 0,
          zIndex: startAnimation ? index + 1 : 0 // Stack from right to left
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-[30px] px-[20px] flex flex-col gap-[12px] bg-secondary300 min-h-[250px] rounded-[12px]">
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
