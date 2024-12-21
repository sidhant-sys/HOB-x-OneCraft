import images from '~assets/image';
import { URL_PATHS } from './paths';

export const STORY_CONFIG = {
  HERO: {
    title: 'House of Brar',
    subtitle: 'Where Legacy Meets Excellence'
  },
  VISION: {
    title:
      'Rooted in Tradition, Driven by Vision',
    subtitle: {
      highlightedText:
        'Established in 2004 in Melbourne by Sarbjit Brar and Jagbir Kaur, House of Brar ',
      suffixText:
        'is more than just a family office, we are a symbol of heritage, vision, and resilience. Our mission extends far beyond investments; we aim to build a lasting legacy that multiplies wealth across generations.',
      extraText:
        'At the core of House of Brar is our commitment to maximizing shareholder returns while focusing on strategic investments in real estate, education, and healthcare. Our investors are more than stakeholders—they are part of an extended family that shares in our collective growth and prosperity.'
    }
  },
  VALUES: {
    title: 'Our Values',
    list: [
      {
        letter: 'B',
        title: 'Bold',
        subtitle:
          'We embrace challenges with unwavering confidence, forging ahead with innovative ideas and fearless execution.'
      },
      {
        letter: 'R',
        title: 'Resellient',
        subtitle:
          'Our resilience is the cornerstone of our success, allowing us to adapt, endure, and thrive in any circumstance.'
      },
      {
        letter: 'A',
        title: 'Ambitious',
        subtitle:
          'Our ambition fuels our drive for excellence, constantly pushing us to achieve greater heights and exceed expectations.'
      },
      {
        letter: 'R',
        title: 'Respect',
        subtitle:
          'We show respect through actions, building strong, collaborative relationships based on trust and understanding.'
      }
    ]
  },
  STORY: {
    title: 'A Story of Resilience',
    leftDesc:
      'Through transparency, mutual respect, and an unwavering focus on long-term goals, Sarbjit and his former shareholders navigated the complexities, emerging stronger on the other side. The experience became a lesson in resilience, integrity, and collaboration—values that continue to define our philosophy today.',
    rightDesc:
      'The journey of House of Brar is not without its challenges. In the past 20 years (2004-2024), Sarbjit Brar had to make painful buyout decisions from time to time to stay committed to its vision, values and future. Each of the buyout process was arduous, filled with uncertainties and emotional trials.'
  },
  PIONEER_EXCELLENCE: {
    title: 'Pioneering Excellence',
    subtite:
      'As we evolve and achieve new milestones, our mission remains clear: to generate exceptional returns and opportunities for other esteemed family offices, guided by the values that built our foundation. Our diversified portfolio reflects our dedication to quality and innovation. House of Brar excels in key sectors:',
    cards: [
      {
        imageSrc: images.RealEstateDark,
        title: 'Real Estate',
        subtitle:
          'Innovative residential and commercial property developments.',
        link: URL_PATHS.REAL_ESTATE
      },
      {
        imageSrc: images.EducationDark,
        title: 'Education',
        subtitle:
          'Private international student education and childcare centres that shape the future.',
        link: URL_PATHS.OEIH
      },
      {
        imageSrc: images.HealthcareDark,
        title: 'Healthcare',
        subtitle:
          'Building medical facilities that prioritize well-being and excellence.',
        link: URL_PATHS.OFIE
      }
    ]
  },
  LEGACY: {
    title: 'A Legacy That Endures',
    subtitle:
      'House of Brar stands as a testament to vision, perseverance, and the pursuit of excellence. Join us as we continue to forge new paths, committed to creating lasting prosperity and a family fortune that endures.'
  }
};
