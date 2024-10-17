export interface IAcquisitionSectionProps {
  config: {
    TITLE: string;
    SUBTITLE: string;
    CARDS: {
      imageSrc: string;
      highlightedText: string;
      text: string;
    }[];
  };
  customWrapperClass?: string;
  customTitleClass?: string;
  customSubtitleClass?: string;
}
