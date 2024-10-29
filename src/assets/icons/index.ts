import Brand from './brand';
import CaretDown from './caretDown';
import CaretRight from './caretRight';
import BrandFooter from './brandFooter';
import Mail from './mail';
import RightArrow from './rightArrow';
import { SVGIconProps } from '~types/common';
import BrandGolden from './brandGolden';
import HeaderSeparator from './headerSeparator';

export {
  Brand,
  CaretDown,
  CaretRight,
  BrandFooter,
  Mail,
  RightArrow,
  BrandGolden,
  HeaderSeparator
};

export const ICON_MAPPER = {
  BRAND: Brand,
  CARET_DOWN: CaretDown,
  CARET_RIGHT: CaretRight,
  BRAND_FOOTER: BrandFooter,
  MAIL: Mail,
  RIGHT_ARROW: RightArrow,
  BRAND_GOLDEN: BrandGolden,
  HEADER_SEPARATOR: HeaderSeparator
} as Record<string, React.FC<SVGIconProps>>;

export const getIconFromMapper = (
  iconId: string
) => {
  return ICON_MAPPER[
    iconId as keyof typeof ICON_MAPPER
  ];
};
