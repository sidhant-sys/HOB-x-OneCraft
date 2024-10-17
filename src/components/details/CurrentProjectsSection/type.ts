export interface ICurrentProjectsSectionProps {
  config: {
    TITLE: string;
    SUBTITLE: string;
    CARDS: {
      imageSrc: string;
      title: string;
      subtitle: string;
    }[];
  };
}
