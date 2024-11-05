import { ICardProps } from '~components/common/StackCardComponent/type';

export interface IJourneySectionProps {
  config: {
    title: string;
    prefixText: string;
    highlightedText: string;
    suffixText: string;
    JOURNEY_CARDS: ICardProps[];
  };
}
