import React, {
  useEffect,
  useState
} from 'react';
import Carousel from '~components/common/Carousel';
import Footer from '~components/common/Footer';
import Navbar from '~components/common/Navbar/Navbar';
import AboutUs from '~components/home/AboutUs';
import OurPresence from '~components/home/OurPresence';
import OurWork from '~components/home/OurWork';
import UpcomingProjects from '~components/home/UpcomingProjects';
import { PAGE_TITLE } from '~constants/common';

const Home: React.FC = () => {
  const initialNavbarClass =
    'absolute !bg-transparent z-[999]';
  const [navbarStyle, setNavbarStyle] = useState(
    initialNavbarClass
  );

  useEffect(() => {
    document.title = PAGE_TITLE.HOME;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarStyle('sticky');
      } else if (window.scrollY === 0) {
        setNavbarStyle(initialNavbarClass);
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <Navbar
        selectedValue="Home"
        customClass={navbarStyle}
      />
      <Carousel />
      <AboutUs />
      <OurWork />
      <UpcomingProjects />
      <OurPresence />
      <Footer />
    </>
  );
};

export default Home;
