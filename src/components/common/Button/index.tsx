import React, {
  useCallback,
  useState
} from 'react';
import { IButtonProps } from './type';
import { getIconFromMapper } from '~assets/icons';

const Button = (props: IButtonProps) => {
  const [isHovered, setIsHovered] =
    useState(false);

  const {
    children,
    onClick,
    disabled = false,
    variant = 'primary',
    size = 'medium',
    theme = 'dark',
    iconEle = null,
    iconId,
    iconFillColor = '',
    className = ''
  } = props;

  const Icon = getIconFromMapper(iconId || '');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getButtonClasses = useCallback(() => {
    const rootClassNames = `flex flex-row items-center gap-x-[12px] w-max rounded-[100px] cursor-pointer ${getWidth()} ${getHeight()} ${getHorizontalPadding()} ${getVerticalPaddingClassName()} ${getFontClasses()}`;
    if (theme === 'dark') {
      if (variant === 'primary') {
        return `${rootClassNames} bg-primary1000 hover:bg-primary1100 disabled:bg-neutral400 text-[#fff]`;
      } else if (variant === 'secondary') {
        return `${rootClassNames} text-primary1000 border-primary1000 border-[3px] hover:bg-primary1100 hover:text-[#fff] hover:border-transparent disabled:bg-neutral400 disabled:text-neutral400 disabled:border-neutral400`;
      }
    }
    if (theme === 'light') {
      if (variant === 'primary') {
        return `${rootClassNames} bg-secondary500 hover:bg-secondary600 disabled:bg-neutral400 text-[#fff]`;
      } else if (variant === 'secondary') {
        return `${rootClassNames} text-secondary500 border-secondary500 border-[3px] hover:bg-secondary600 hover:text-[#fff] hover:border-transparent disabled:bg-neutral400 disabled:text-neutral400 disabled:border-neutral400`;
      }
    }
  }, [theme, variant]);

  const getWidth = useCallback(() => {
    if (size === 'large') {
      return 'max-w-[185px]';
    } else if (size === 'medium') {
      return 'max-w-[194px]';
    } else return 'max-w-[167px]';
  }, [size]);

  const getHeight = useCallback(() => {
    if (size === 'large') {
      return variant === 'primary'
        ? 'h-[56px]'
        : 'h-[62px]';
    } else if (size === 'medium') {
      return variant === 'primary'
        ? 'h-[52px]'
        : 'h-[58px]';
    } else
      return variant === 'primary'
        ? 'h-[44px]'
        : 'h-[50px]';
  }, [size, variant]);

  const getHorizontalPadding = () => {
    return 'px-[24px]';
  };

  const getVerticalPaddingClassName =
    useCallback(() => {
      if (size === 'large') {
        return 'py-[20px]';
      } else if (size === 'medium') {
        return 'py-[19px]';
      } else return 'py-[15px]';
    }, [size]);

  const getFontClasses = useCallback(() => {
    if (size === 'large') {
      return 'text-base leading-4 font-semibold';
    } else if (size === 'medium') {
      return 'text-sm leading-[14px] font-semibold';
    } else
      return 'text-sm leading-[14px] font-semibold';
  }, [size]);

  return (
    <button
      className={`${getButtonClasses()} ${className}`}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {iconId && (
        <Icon
          fill={
            isHovered ? '#fff' : iconFillColor
          }
        />
      )}
    </button>
  );
};

export default Button;
