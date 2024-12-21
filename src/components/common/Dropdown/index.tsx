import * as React from 'react';
import { useEffect, useRef } from 'react';
import { CaretDown } from '~assets/icons';
import { IDropdownProps } from './type';

const Dropdown: React.FC<IDropdownProps> = ({
  background = '#fff',
  width = '200px',
  height = '180px',
  itemHeight = 52, // Default height for dropdown items
  children,
  className,
  isActiveEle
}) => {
  const [isOpen, setIsOpen] =
    React.useState<boolean>(false);
  const [isHovered, setIsHovered] =
    React.useState<boolean>(false);

  const dropdownRef =
    useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false); // Close the dropdown
      }
    };

    // Bind the event listener
    document.addEventListener(
      'mousedown',
      handleClickOutside
    );
    return () => {
      // Cleanup the event listener
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      className="flex justify-center relative w-[146px]"
      ref={dropdownRef}
    >
      {/* Dropdown Button */}
      <div
        className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded cursor-pointer flex items-center"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
        onMouseEnter={() => {
          setIsHovered(true);
          setIsOpen(true);
        }} // Track hover state
        onMouseLeave={() => {
          setIsHovered(false);
        }} // Reset hover state
      >
        <div
          className={`mr-2 ${
            isHovered || isOpen || isActiveEle
              ? 'text-secondary900'
              : 'text-neutral1000'
          }`}
        >
          Portfolio
        </div>
        {/* Dropdown Caret */}
        <CaretDown
          fill={
            isHovered || isOpen || isActiveEle
              ? '#7B5431'
              : 'black'
          }
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute mt-[64px] rounded shadow-lg z-10 px-[20px] py-[12px] bg-[#FBF9F1]"
          style={{
            backgroundColor: background,
            width: width,
            minHeight: 'max-content',
            maxHeight: height,
            borderRadius: '12px'
          }}
        >
          <ul className="list-none p-0 m-0">
            {React.Children.map(
              children,
              (child, index) => (
                <React.Fragment key={index}>
                  {child}
                  {/* Render divider except for the last item */}
                  {index <
                    React.Children.count(
                      children
                    ) -
                      1 && (
                    <li
                      className="border-t border-secondary300"
                      style={{ height: '1px' }}
                    />
                  )}
                </React.Fragment>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
