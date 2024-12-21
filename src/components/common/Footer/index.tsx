import * as React from 'react';
import {
  Brand,
  BrandFooter,
  Mail
} from '~assets/icons';
import Button from '../Button';
import { navigateTo } from '~utils/common';
import { URL_PATHS } from '~constants/paths';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bg-primary1100 px-6 sm:px-10 lg:px-[128px] pt-8 sm:pt-10 lg:pt-[70px] pb-6 sm:pb-8 lg:pb-[50px] gap-6 sm:gap-8 lg:gap-[40px]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
        {/* Left Section */}
        <div className="flex flex-col gap-4 lg:gap-[10px] w-full lg:w-[35%]">
          <div className="flex w-full items-center">
            <BrandFooter />
          </div>
          <div className="text-[20px] sm:text-[28px] lg:text-[36px] font-[400] leading-[28px] sm:leading-[36px] lg:leading-[43.2px] font-['Marcellus'] text-secondary500">
            Building Legacy, <br></br>Investing in
            Excellence
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col ml-auto w-full sm:w-[60%] lg:w-[40%] px-4 sm:px-[20px] lg:px-[30px] py-6 sm:py-8 lg:py-[40px] bg-primary1000 rounded-[12px] h-auto lg:h-[199px]">
          <div className="text-[18px] sm:text-[20px] lg:text-[22px] font-[400] leading-[28px] sm:leading-[30px] lg:leading-[33px] text-white mb-4 sm:mb-6 lg:mb-[30px]">
            Join us to build a legacy with us.
          </div>
          <Button
            variant="secondary"
            size="medium"
            theme="light"
            iconId={'MAIL'}
            onClick={() =>
              navigateTo(URL_PATHS.CONTACT_US)
            }
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-secondary500"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 sm:gap-0">
        <div className="text-[14px] sm:text-[16px] font-[400] leading-[16px] text-white">
          &copy; 2024. House of Brar. All rights
          reserved.
        </div>
        <div
          className="text-[14px] sm:text-[16px] font-[400] leading-[16px] text-white cursor-pointer"
          onClick={() =>
            navigateTo(URL_PATHS.ONE_CRAFT)
          }
        >
          Created by One Craft
        </div>
        {/* Uncomment this if Privacy Policy is needed */}
        {/* <div
      className="text-[14px] sm:text-[16px] font-[400] leading-[16px] text-white cursor-pointer"
      onClick={() => navigateTo(URL_PATHS.PRIVACY)}
    >
      Privacy Policy | Terms
    </div> */}
      </div>
    </footer>
  );
};

export default Footer;
