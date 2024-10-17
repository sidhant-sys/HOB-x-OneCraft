import { ICardProps } from '~components/common/StackCardComponent/type';

export interface IJourneySectionProps {
  config: {
    JOURNEY_TITLE: string;
    JOURNEY_SUBTITLE: string;
    JOURNEY_CARDS: ICardProps[];
  };
}
