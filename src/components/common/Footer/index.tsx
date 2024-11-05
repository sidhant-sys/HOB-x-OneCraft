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
    <footer className="flex flex-col bg-primary1100 px-[128px] pt-[70px] pb-[50px] gap-[40px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-[10px] w-[35%]">
          <div className="flex w-full  align-middle items-center">
            <BrandFooter />
          </div>
          <div className="text-[36px] font-[400] leading-[43.2px] font-['Marcellus'] text-secondary500">
            Building Legacy, Investing in
            Excellence
          </div>
        </div>
        <div className="flex flex-col ml-auto w-[40%] px-[30px] py-[40px] bg-primary1000 rounded-[12px] h-[199px]">
          <div className="text-[22px] font-[400] leading-[33px] text-[#fff] mb-[30px]">
            Join us and build a legacy with us
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
      <div className="w-full h-px bg-secondary500"></div>
      <div className="flex flex-row justify-between">
        <div className="text-[16px] font-[400] leading-[16px] text-[#fff]">
          &copy; 2024. House of Brar. All rights
          reserved.
        </div>
        <div
          className="text-[16px] font-[400] leading-[16px] text-[#fff] cursor-pointer"
          onClick={() =>
            navigateTo(URL_PATHS.ONE_CRAFT)
          }
        >
          Created by One Craft
        </div>
        {/* <div
          className="text-[16px] font-[400] leading-[16px] text-[#fff] cursor-pointer"
          onClick={() =>
            navigateTo(URL_PATHS.PRIVACY)
          }
        >
          Privacy Policy | Terms
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
