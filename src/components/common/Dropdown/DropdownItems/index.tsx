import * as React from 'react';
import { IDropdownItemProps } from './type';
import { CaretRight } from '~assets/icons';

const DropdownItem: React.FC<
  IDropdownItemProps
> = ({
  text,
  icon = <CaretRight />,
  onClick
}) => {
  return (
    <li
      className="flex items-center justify-between cursor-pointer px-[12px] py-[18px]"
      onClick={onClick} // Trigger onClick handler if provided
    >
      <span className="text-gray-700 text-[16px] font-normal leading-[16px]">
        {text}
      </span>
      <span className="ml-auto">{icon}</span>
    </li>
  );
};

export default DropdownItem;
