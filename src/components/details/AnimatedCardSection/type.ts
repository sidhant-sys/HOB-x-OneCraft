export interface ICardProps {
  year: string;
  title: string;
  subtitle: string;
  imgSrc: string;
}

export interface IAnimatedCardComponentProps {
  config: ICardProps[];
  inViewport: boolean;
  className?: string;
}
