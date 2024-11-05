import React, {
  useEffect,
  useState
} from 'react';
import Carousel from '~components/common/Carousel';
import Footer from '~components/common/Footer';
import Navbar from '~components/common/Navbar';
import AboutUs from '~components/home/AboutUs';
import OurPresence from '~components/home/OurPresence';
import OurWork from '~components/home/OurWork';
import UpcomingProjects from '~components/home/UpcomingProjects';
import { PAGE_TITLE } from '~constants/common';

const Home: React.FC = () => {
  const initialNavbarClass = 'absolute z-[999]';
  const initialBorderClass =
    'border-secondary900';
  const initialNavbarStyles = {
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(4px)'
  };

  const [navbarStyle, setNavbarStyle] =
    useState<{}>(initialNavbarStyles);

  const [navbarClass, setNavbarClass] = useState(
    initialNavbarClass
  );

  const [borderClass, setBorderClass] = useState(
    initialBorderClass
  );

  useEffect(() => {
    document.title = PAGE_TITLE.HOME;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarClass('sticky');
        setNavbarStyle({});
        setBorderClass('');
      } else if (window.scrollY === 0) {
        setNavbarStyle(initialNavbarStyles);
        setNavbarClass(initialNavbarClass);
        setBorderClass(initialBorderClass);
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
        customClass={navbarClass}
        customStyle={navbarStyle}
        customBorderClass={borderClass}
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
