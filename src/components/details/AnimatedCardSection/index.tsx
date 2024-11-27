import React from 'react';
import { IAnimatedCardComponentProps } from './type';
import Card from './Card';

const AnimatedCardSection: React.FC<
  IAnimatedCardComponentProps
> = (props) => {
  const eachCardWithPlusGapSize = -378;

  const generateTiltAngles = (n: number) => {
    const result = [];

    for (let i = 0; i < n; i++) {
      const row = new Array(4).fill(0);
      for (let j = 0; j <= i; j++) {
        row[j] = -4 * (i - j); // Decrement values by -4 in steps
      }
      result.push(row);
    }

    return result;
  };

  const {
    config,
    className,
    iteration,
    startAnimation
  } = props;
  const totalCards = config.length;

  const tiltAngles =
    generateTiltAngles(totalCards);

  const cards = Array.from(
    { length: totalCards },
    (_, index) => ({
      year: config[index].year,
      title: config[index].title,
      subtitle: config[index].subtitle,
      imgSrc: config[index].imgSrc
    })
  );

  const getTransformClass = (
    index: number,
    iterationNumber: number = iteration
  ) => {
    let translateValue = 0;
    if (!startAnimation) return 0;

    switch (iterationNumber) {
      case 1:
        return index !== 0
          ? eachCardWithPlusGapSize
          : 0;
      case 2:
        if (index === 1) {
          translateValue = getTransformClass(
            index,
            1
          );
        }
        if (index === 2) {
          translateValue =
            getTransformClass(index, 1) +
            eachCardWithPlusGapSize;
        }
        if (index === 3) {
          translateValue =
            getTransformClass(index, 1) +
            eachCardWithPlusGapSize;
        }
        if (index === 4) {
          translateValue =
            getTransformClass(index, 1) +
            eachCardWithPlusGapSize;
        }
        return index !== 0 ? translateValue : 0;
      case 3:
        if (index === 1) {
          translateValue = getTransformClass(
            index,
            2
          );
        }
        if (index === 2) {
          translateValue = getTransformClass(
            index,
            2
          );
        }
        if (index === 3) {
          translateValue =
            getTransformClass(index, 2) +
            eachCardWithPlusGapSize;
        }
        if (index === 4) {
          translateValue =
            getTransformClass(index, 2) +
            eachCardWithPlusGapSize;
        }
        return index !== 0 ? translateValue : 0;
      case 4:
        if (index === 1) {
          translateValue = getTransformClass(
            index,
            3
          );
        }
        if (index === 2) {
          translateValue = getTransformClass(
            index,
            3
          );
        }
        if (index === 3) {
          translateValue = getTransformClass(
            index,
            3
          );
        }
        if (index === 4) {
          translateValue =
            getTransformClass(index, 3) +
            eachCardWithPlusGapSize;
        }
        return index !== 0 ? translateValue : 0;
      default:
        return 0;
    }
  };

  return (
    <div
      className={`flex flex-row min-h-[450px] overflow-hidden pl-[48px] gap-x-[18px] pb-[32px] pt-[32px] ${className} `}
    >
      {cards.map((card, index) => (
        <div
          className={`flex flex-col min-w-[360px] max-w-[360px] min-h-[450px] rounded-[12px] relative`}
          style={{
            transform:
              index >= 1
                ? `translateX(${getTransformClass(
                    index
                  )}px) rotate(${
                    tiltAngles[iteration][index]
                  }deg)`
                : `rotate(${tiltAngles[iteration][index]}deg)`,
            transitionDuration:
              iteration >= 1 ? '1000ms' : '0ms',
            boxShadow:
              '0px 4px 12px 0px rgba(10, 74, 51, 0.24)'
          }}
        >
          <Card
            key={index}
            card={card}
            index={index}
            totalCards={cards.length}
            iteration={iteration}
            startAnimation={startAnimation}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedCardSection;
