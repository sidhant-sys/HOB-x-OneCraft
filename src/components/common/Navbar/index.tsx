import * as React from 'react';
import { Brand } from '~assets/icons';
import Button from '../Button';
import Dropdown from '../Dropdown';
import DropdownItem from '../Dropdown/DropdownItems';
import { OurWorkNavbarItems } from '~constants/navbar';
import { INavbarProps } from './type';
import { URL_PATHS } from '~constants/paths';
import { navigateTo } from '~utils/common';
import { useState } from 'react';

// const Navbar: React.FC<INavbarProps> = ({
//   selectedValue,
//   customClass = '',
//   customStyle,
//   customBorderClass = ''
// }) => {
//   const [activeItem, setActiveItem] =
//     React.useState<string | null>(
//       selectedValue || null
//     );

//   const handleItemClick = (itemName: string) => {
//     if (itemName !== 'portfolio')
//       setActiveItem(itemName);
//   };

//   return (
//     <nav
//       className={`flex w-full h-[84px] px-[108px] bg-secondary300 top-0 z-[9999] ${customClass}`}
//       style={customStyle}
//     >
//       <div
//         className="flex w-full  align-middle items-center cursor-pointer"
//         onClick={() => navigateTo(URL_PATHS.HOME)}
//       >
//         <Brand />
//       </div>
//       <div className="ml-auto align-middle flex flex-row cursor-pointer">
//         <div
//           className={`flex hover:text-secondary900 text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center w-[94px] justify-center ${
//             activeItem === 'Home'
//               ? `border-b-4 border-neutral1000 ${customBorderClass}`
//               : ''
//           }`}
//           onClick={() =>
//             navigateTo(URL_PATHS.HOME)
//           }
//         >
//           <div
//             className={`text-center ${
//               activeItem === 'Home' &&
//               'text-secondary900'
//             }`}
//           >
//             Home
//           </div>
//         </div>
//         <div
//           className={`flex  text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center w-[146px] ${
//             activeItem === 'portfolio'
//               ? `border-b-4 border-neutral1000 ${customBorderClass}`
//               : ''
//           }`}
//           onClick={() =>
//             handleItemClick('portfolio')
//           }
//         >
//           <Dropdown
//             background="#FBF9F1"
//             className="items-center"
//             isActiveEle={
//               activeItem === 'portfolio'
//             }
//           >
//             {OurWorkNavbarItems.map((item) => (
//               <DropdownItem
//                 text={item.name}
//                 onClick={() =>
//                   navigateTo(item.path)
//                 }
//               />
//             ))}
//           </Dropdown>
//         </div>
//         <div
//           className={`flex hover:text-secondary900 text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center w-[94px] justify-center ${
//             activeItem === 'story'
//               ? `border-b-4 border-neutral1000 ${customBorderClass}`
//               : ''
//           }`}
//           onClick={() =>
//             navigateTo(URL_PATHS.OUR_STORY)
//           }
//         >
//           <div
//             className={`text-center ${
//               activeItem === 'story' &&
//               'text-secondary900'
//             }`}
//           >
//             Our Story
//           </div>
//         </div>
//         <div
//           className="flex text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center justify-center w-[174px]"
//           onClick={() =>
//             navigateTo(URL_PATHS.CONTACT_US)
//           }
//         >
//           <Button size="small">Contact Us</Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Navbar: React.FC<INavbarProps> = ({
  selectedValue,
  customClass = '',
  customStyle,
  customBorderClass = ''
}) => {
  const [activeItem, setActiveItem] =
    React.useState<string | null>(
      selectedValue || null
    );
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] =
    useState(false);

  const handleItemClick = (itemName: string) => {
    if (itemName !== 'portfolio')
      setActiveItem(itemName);
    setIsMenuOpen(false); // Close menu on click
  };

  const toggleMenu = () =>
    setIsMenuOpen(!isMenuOpen);

  const togglePortfolioAccordion = () =>
    setIsPortfolioOpen(!isPortfolioOpen);

  return (
    <nav
      className={`flex w-full h-[84px] px-4 md:px-[108px] bg-secondary300 top-0 z-[9999] ${customClass}`}
      style={customStyle}
    >
      {/* Brand */}
      <div
        className="flex align-middle items-center cursor-pointer"
        onClick={() => navigateTo(URL_PATHS.HOME)}
      >
        <Brand />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex ml-auto align-middle flex-row cursor-pointer">
        <div
          className={`flex hover:text-secondary900 text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center w-[94px] justify-center ${
            activeItem === 'Home'
              ? `border-b-4 border-neutral1000 ${customBorderClass}`
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
              ? `border-b-4 border-neutral1000 ${customBorderClass}`
              : ''
          }`}
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
                key={item.name}
                text={item.name}
                onClick={() =>
                  navigateTo(item.path)
                }
              />
            ))}
          </Dropdown>
        </div>
        <div
          className={`flex hover:text-secondary900 text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center w-[94px] justify-center ${
            activeItem === 'story'
              ? `border-b-4 border-neutral1000 ${customBorderClass}`
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
        <div
          className="flex text-neutral1000 text-base leading-4 font-normal h-full align-middle items-center justify-center w-[174px]"
          onClick={() =>
            navigateTo(URL_PATHS.CONTACT_US)
          }
        >
          <Button size="small">Contact Us</Button>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="ml-auto flex items-center md:hidden">
        <button
          className="p-2 text-neutral1000 hover:text-secondary900"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[84px] left-0 w-full bg-secondary300 flex flex-col p-4 md:hidden z-[9998]">
          {/* Home */}
          <div
            className={`py-2 hover:text-secondary900 text-neutral1000 ${
              activeItem === 'Home'
                ? 'text-secondary900'
                : ''
            }`}
            onClick={() =>
              navigateTo(URL_PATHS.HOME)
            }
          >
            Home
          </div>
          {/* Portfolio Accordion */}
          <div>
            <div
              className={`flex justify-between items-center py-2 hover:text-secondary900 text-neutral1000 cursor-pointer ${
                activeItem === 'portfolio'
                  ? 'text-secondary900'
                  : ''
              }`}
              onClick={togglePortfolioAccordion}
            >
              <span>Portfolio</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isPortfolioOpen
                    ? 'rotate-180'
                    : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isPortfolioOpen && (
              <div className="pl-4">
                {OurWorkNavbarItems.map(
                  (item) => (
                    <div
                      key={item.name}
                      className="py-2 hover:text-secondary900 text-neutral1000 cursor-pointer"
                      onClick={() =>
                        navigateTo(item.path)
                      }
                    >
                      {item.name}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          {/* Our Story */}
          <div
            className={`py-2 hover:text-secondary900 text-neutral1000 ${
              activeItem === 'story'
                ? 'text-secondary900'
                : ''
            }`}
            onClick={() =>
              navigateTo(URL_PATHS.OUR_STORY)
            }
          >
            Our Story
          </div>
          {/* Contact Us */}
          <div
            className="py-2"
            onClick={() =>
              navigateTo(URL_PATHS.CONTACT_US)
            }
          >
            <Button size="small">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
