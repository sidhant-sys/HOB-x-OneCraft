export interface ICardProps {
  year: string;
  title: string;
  subtitle: string;
  imgSrc: string;
}

export interface IStackCardComponentProps {
  config: ICardProps[];
}
