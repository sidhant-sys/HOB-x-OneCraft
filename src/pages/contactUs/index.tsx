import React from 'react';
import { FC } from 'react';
import Button from '~components/common/Button';
import Footer from '~components/common/Footer';
import Navbar from '~components/common/Navbar/Navbar';

const ContactUs: FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row py-[80px] px-[212px]">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col w-[394px]">
            <div className='text-[48px] font-[400] leading-[57.6pxpx] text-primary1000 font-["Marcellus"] mb-[55px] w-[306px]'>
              Get in Touch with Us
            </div>
            <div className="flex flex-col h-[403px] border-[1px] border-neutral300 rounded-[12px] ">
              <div className="flex flex-col p-[30px] gap-y-[16px]">
                <div className='text-[24px] font-[400] leading-[28.8px] text-neutral1000 font-["Marcellus"]'>
                  Our Corporate Office
                </div>
                <div className="text-[16px] font-[400] leading-[24px] text-neutral1000 ">
                  423 Little Collins St, Melbourne
                  VIC 3000, Australia
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089868012!2d77.46612713338561!3d12.953945614765908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1730023660454!5m2!1sen!2sin"
                width="100%"
                height="248"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 bg-secondary300 p-[50px] rounded-[12px]">
          <form
            action="mailto:abc@xyz.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-y-[24px]"
          >
            <div className="flex flex-col gap-y-[6px]">
              <div className="text-[14px] font-[400] leading-[21px] text-neutral1000">
                Name &#42;
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="py-[12px] px-[16px] bg-white border border-secondary500 rounded focus:outline-none"
              ></input>
            </div>
            <div className="flex flex-col gap-y-[6px]">
              <div className="text-[14px] font-[400] leading-[21px] text-neutral1000">
                Phone Number &#42;
              </div>
              <input
                type="tel"
                name="Phone"
                placeholder="Enter your phone number"
                required
                className="py-[12px] px-[16px] bg-white border border-secondary500 rounded focus:outline-none"
              ></input>
            </div>
            <div className="flex flex-col gap-y-[6px]">
              <div className="text-[14px] font-[400] leading-[21px] text-neutral1000">
                Email &#42;
              </div>
              <input
                type="email"
                name="Email"
                placeholder="Enter your Email"
                required
                className="py-[12px] px-[16px] bg-white border border-secondary500 rounded focus:outline-none"
              ></input>
            </div>
            <div className="flex flex-col gap-y-[6px]">
              <div className="text-[14px] font-[400] leading-[21px] text-neutral1000">
                Message &#42;
              </div>
              <textarea
                rows={5}
                cols={80}
                id="Message"
                className="py-[12px] px-[16px] bg-white border border-secondary500 rounded focus:outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex w-full items-center justify-center">
              <Button
                size="large"
                variant="primary"
                onClick={() => {}}
                iconId="RIGHT_ARROW"
                iconFillColor="#ffffff"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
