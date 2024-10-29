import * as React from 'react';
import { Brand } from '~assets/icons';
import Button from '../Button';
import Dropdown from '../Dropdown';
import DropdownItem from '../Dropdown/DropdownItems';
import { OurWorkNavbarItems } from '~constants/navbar';
import { INavbarProps } from './type';
import { URL_PATHS } from '~constants/paths';
import { navigateTo } from '~utils/common';

const Navbar: React.FC<INavbarProps> = ({
  selectedValue,
  customClass = ''
}) => {
  const [activeItem, setActiveItem] =
    React.useState<string | null>(
      selectedValue || null
    );

  const handleItemClick = (itemName: string) => {
    if (itemName !== 'portfolio')
      setActiveItem(itemName);
  };

  return (
    <nav
      className={`flex w-full h-[84px] px-[108px] bg-secondary300 top-0 z-[9999] ${customClass}`}
    >
      <div className="flex w-full  align-middle items-center">
        <Brand />
      </div>
      <div className="ml-auto align-middle flex flex-row cursor-pointer">
        <div
          className={`flex text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center w-[94px] justify-center ${
            activeItem === 'Home'
              ? 'border-b-2 border-neutral1000'
              : ''
          }`}
          onClick={() =>
            navigateTo(URL_PATHS.HOME)
          }
        >
          <div
            className={`text-center ${
              activeItem === 'Home' &&
              'text-secondary900'
            }`}
          >
            Home
          </div>
        </div>
        <div
          className={`flex text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center w-[146px] ${
            activeItem === 'portfolio'
              ? 'border-b-4 border-secondary900'
              : ''
          }`}
          onClick={() =>
            handleItemClick('portfolio')
          }
        >
          <Dropdown
            background="#FBF9F1"
            className="items-center"
            isActiveEle={
              activeItem === 'portfolio'
            }
          >
            {OurWorkNavbarItems.map((item) => (
              <DropdownItem
                text={item.name}
                onClick={() =>
                  navigateTo(item.path)
                }
              />
            ))}
          </Dropdown>
        </div>
        <div
          className={`flex text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center w-[94px] justify-center ${
            activeItem === 'story'
              ? 'border-b-2 border-neutral1000'
              : ''
          }`}
          onClick={() =>
            navigateTo(URL_PATHS.OUR_STORY)
          }
        >
          <div
            className={`text-center ${
              activeItem === 'story' &&
              'text-secondary900'
            }`}
          >
            Our Story
          </div>
        </div>
        <div className="flex text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center justify-center w-[174px]">
          <Button size="small">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
