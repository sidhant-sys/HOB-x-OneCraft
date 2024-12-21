import images from '~assets/image';
import { URL_PATHS } from './paths';

export const PortfolioItems = {
  REDJ: {
    title: 'Real Estate Development Journey',
    imageSrc: images.Redj,
    JOURNEY_CONFIG: {
      title: 'Our Journey so Far',
      prefixText:
        'Real Estate development started in 2004 with its first property acquisition in Australia. Over the years, it has grown significantly. Despite the pandemic challenges in 2019 and 2020 and various business restructurings, the company found resilience, wisdom, and strength, embracing inner solace during tough times.',
      highlightedText: '',
      suffixText: '',
      JOURNEY_CARDS: [
        {
          year: '2004',
          title: 'Official Launch',
          subtitle:
            'Formal establishment with the registration of Brar Property Developments, marking the beginning of multiple townhouse and property development projects.',
          imgSrc: images.RedjJourney1
        },
        {
          year: '2011',
          title: 'Town House Projects Delivered',
          subtitle:
            'Have been continously developing various townhome projects since 2004',
          imgSrc: images.RedjJourney3
        },
        {
          year: '2012',
          title: 'Foundation Projects',
          subtitle:
            'Pioneered the purchase of Englobo sites, setting the foundation for future large-scale developments.',
          imgSrc: images.RedjJourney2
        },
        {
          year: '2021',
          title: 'Sinclair Heights',
          subtitle:
            'Successfully developed the Rockdale Estate in Paynes Road, Thornhill Park.',
          imgSrc: images.RedjJourney4
        },
        {
          year: '2023',
          title: 'The Village Thornhill',
          subtitle:
            'Successfully developed and delivered a 32-acre residential subdivision on time.',
          imgSrc: images.RedjJourney5
        }
      ]
    },
    ACQUISITION_CONFIG: {
      TITLE:
        'Property Acquisition and Land Development',
      SUBTITLE:
        'Our notable projects reflect our expansion strategy, including englobo sites, childcare centers, medical centers, swimming pools, and gyms across Melbourne, Adelaide, and Perth, as well as luxury townhouses in Frankston, Clayton, Clayton South, Sunshine, and high-end homes in Balwyn and Burwood.',
      CARDS: [
        {
          imageSrc: images.RedjAcquiition1,
          highlightedText:
            '5 acres of Warehouse Development land',
          text: ' on Palladium Crt in Clyde North'
        },
        {
          imageSrc: images.RedjAcquiition2,
          highlightedText:
            '220+ Lot Residential Subdivision',
          text: ' in Thornhill Park (The Village Thornhill Park)'
        },
        {
          imageSrc: images.RedjAcquiition3,
          highlightedText:
            '225+ Lot Residential Subdivision',
          text: ' in Deanside (The Sinclair Heights)'
        }
      ]
    },
    CURRENT_PROJECTS_CONFIG: {
      TITLE: 'Current Projects',
      SUBTITLE: `Our portfolio features a diverse range of projects, with the total value of our current holdings and developments estimated at $850 million. This reflects our ongoing growth and unwavering commitment to excellence.`,
      CARDS: [
        {
          imageSrc: images.RedjProject1,
          title:
            'The Brarz Business Park Officer South',
          subtitle: 'Cardinia Road, Officer'
        },
        {
          imageSrc: images.RedjProject2,
          title:
            'The Cardinia North Industrial Park',
          subtitle: 'Officer'
        },
        {
          imageSrc: images.RedjProject3,
          title:
            'The Brarz Business Park Truganina',
          subtitle: 'Truganina'
        },
        {
          imageSrc: images.RedjProject4,
          title:
            'Summerhill Business and Industrial Park',
          subtitle: 'Craigieburn'
        },
        {
          imageSrc: images.RedjProject5,
          title: 'The Wollert Business Hub',
          subtitle: 'Wollert'
        },
        {
          imageSrc: images.RedjProject6,
          title: 'Hotel and Residential Tower',
          subtitle: 'Melbourne City'
        },
        {
          imageSrc: images.RedjProject7,
          title: 'The Handford Employment Hub',
          subtitle: 'Officer South'
        }
      ]
    },
    OVERALL_IMPACT: {
      imgSrc: images.RedjImpact,
      title: 'Overall Impact',
      description: {
        prefixText:
          'From humble beginnings with 3 townhome developments to ',
        highlightedText:
          'overseeing multi-million-dollar projects, our real estate portfolio is now well established across residential and commercial developments.',
        suffixText:
          ' Our journey reflects steady expansion, innovation, and a dedication to delivering superior residential and commercial properties.'
      }
    },
    KNOW_MORE_SECTION: [
      {
        title: 'Our Endeavors in Healthcare',
        imageSrc: images.Healthcare,

        link: URL_PATHS.OEIH
      },
      {
        title: 'Our Footprint in Education',
        imageSrc: images.Education,
        link: URL_PATHS.OFIE
      }
    ]
  },
  OFIE: {
    title:
      'Our Footprint in Early Childhood and Vocational Education',
    imageSrc: images.Ofie,
    JOURNEY_CONFIG: {
      title: 'Our Journey so Far',
      prefixText:
        'In 2008, we embarked on our first private education venture aimed at offering international students a pathway to a bright future in Australia. This initiative flourished into a network of campuses catering to diverse educational needs.',
      highlightedText: '',
      suffixText: '',
      JOURNEY_CARDS: [
        {
          year: '2008',
          title: '',
          subtitle:
            'The formal establishment of the first vocational education project was achieved with the registration of Barkly International College in Melbourne.',
          imgSrc: images.OfieJourney1
        },
        {
          year: '2009 - 2014',
          title: '',
          subtitle:
            'Established over 12 vocational colleges across Melbourne, Canberra, Sydney, Adelaide, and Tasmania, offering 40+ qualifications to thousands of international and local students.',
          imgSrc: images.OfieJourney2
        },
        {
          year: '2014',
          title: '',
          subtitle:
            'First Childcare Project in Lyndhurst – Paving the way for future early education centers.',
          imgSrc: images.OfieJourney3
        },
        {
          year: '2015',
          title: '',
          subtitle:
            'Led by Jagbir Kaur, we established the brand "Learn Smart Early Learning Centres," now delivering early education across multiple centers under her management.',
          imgSrc: images.OfieJourney4
        },
        {
          year: '2016 - 2024',
          title: '',
          subtitle:
            'The journey of expanding our childcare portfolio continues, with two centers set to open in 2024 and plans to add two more in 2025, reflecting consistent growth.',
          imgSrc: images.OfieJourney5
        }
      ]
    },
    ACQUISITION_CONFIG: {
      TITLE:
        'Land Acquisitions and Facilities Development',
      SUBTITLE:
        "Expanding beyond childcare, we have developed facilities that enhance early childhood education, promoting physical activity, learning, and holistic development to support children's growth and well-being.",
      CARDS: [
        {
          imageSrc: images.OfieAcquisition1,
          highlightedText:
            'Early Childhood Education Facilities',
          text: ''
        },
        {
          imageSrc: images.OfieAcquisition2,
          highlightedText:
            'A Double Story Modern Childcare',
          text: ''
        },
        {
          imageSrc: images.OfieAcquisition3,
          highlightedText: 'Childcare in Berwick',
          text: ''
        }
      ]
    },
    OVERALL_IMPACT: {
      imgSrc: images.OfieImpact,
      title: 'Overall Impact',
      description: {
        prefixText:
          'These successful acquisitions marked a period of steady growth and innovation. For a single vocational education',
        highlightedText:
          ' provided to 12 establishments across multiple Australian states, ',
        suffixText:
          ' and from one early childhood education facility to many, our journey has been a testament to relentless dedication and continous expansion.'
      }
    },
    KNOW_MORE_SECTION: [
      {
        title: 'Our Endeavors in Healthcare',
        imageSrc: images.Healthcare,
        link: URL_PATHS.OEIH
      },
      {
        title:
          'Our Real Estate Development Journey',
        imageSrc: images.RealEstate,
        link: URL_PATHS.REAL_ESTATE
      }
    ]
  },
  OEIH: {
    title: 'Our Endeavours in Healthcare',
    imageSrc: images.Oeih,
    JOURNEY_CONFIG: {
      title: 'Our Journey so Far',
      prefixText:
        'Over the years, Mrs. Brar’s passion for healthcare, from working as a registered nurse in Hong Kong to serving as a Nursing Manager in Australia, has inspired the family to invest in the healthcare sector. This dedication has resulted in the successful delivery of medical centers, gymnasiums, swimming centers, and residential aged care facilities worth over $90 million.',
      highlightedText: '',
      suffixText: '',
      JOURNEY_CARDS: [
        {
          year: '2021',
          title: '',
          subtitle:
            'First medical centre was approved in Thornhill Park',
          imgSrc: images.OeihJourney1
        },
        {
          year: '2022',
          title: '',
          subtitle:
            'Acquired Medical Centre, Gym and a swimming school project in Doreen ',
          imgSrc: images.OeihJourney2
        },
        {
          year: '2023',
          title: '',
          subtitle:
            'The residential agedcare facility approved in Deanside',
          imgSrc: images.OeihJourney3
        },
        {
          year: '2024',
          title: '',
          subtitle:
            'Approval of a modern Gym with Swimming School in Deanside',
          imgSrc: images.OeihJourney4
        }
      ]
    },
    ACQUISITION_CONFIG: {
      TITLE: 'Healthcare Projects',
      SUBTITLE:
        'Expanding beyond medical centers, the integration of health facilities has been a significant milestone in our journey. Owning and developing various facilities has enhanced our impact on broader healthcare services, from children learning to swim, to youth gaining self-confidence, strength, physical literacy, cardiovascular fitness, and flexibility through gym activities, and to ensuring that our baby boomers are well cared for in our residential aged care facilities.',
      CARDS: [
        {
          imageSrc: images.OeihJourney4,
          highlightedText:
            'Swimming pool and Gym Deanside',
          text: ''
        },
        {
          imageSrc: images.OeihJourney3,
          highlightedText:
            '127-Bed, 5-level Residential Aged Care Facility',
          text: ''
        },
        {
          imageSrc: images.OeihJourney1,
          highlightedText:
            'Medical Centre Thornhill Park',
          text: ''
        },
        {
          imageSrc: images.OeihJourney2,
          highlightedText:
            'Medical Centre, Gym and Swimming School Doreen',
          text: ''
        }
      ]
    },
    OVERALL_IMPACT: {
      imgSrc: images.OeihImpact,
      title: 'Overall Impact',
      description: {
        prefixText:
          'With approval for two additional healthcare projects in 2024,',
        highlightedText:
          ' the current holding and development portfolio exceeds $90 million,',
        suffixText:
          ' encompassing a harmonious blend of health services designed to enhance the well-being of individuals across diverse communities.'
      }
    },
    KNOW_MORE_SECTION: [
      {
        title:
          'Our Real Estate Development Journey',
        imageSrc: images.RealEstate,
        link: URL_PATHS.REAL_ESTATE
      },
      {
        title: 'Our Footprint in Education',
        imageSrc: images.Education,
        link: URL_PATHS.OFIE
      }
    ]
  }
};

export const PAGE_TITLE = {
  HOME: 'House of Brar',
  REDJ: 'HOB | Real Estate Development Journey',
  OFIE: 'HOB | Our Footprint in Early Childhood and Vocational Education',
  OEIH: 'HOB | Our Endeavours in Healthcare',
  STORY: 'HOB | Our Story',
  CONTACT_US: 'HOB | Contact Us'
};

export const HOME_CONFIG = {
  ABOUT_US: {
    NAME: '',
    TITLE:
      'Tradition Meets Investment Excellence',
    DESCRIPTION1:
      'Founded by the enterprising Sarbjit Brar in 2004, our investment office steers towards creating a lasting impact on generations to come. At House of Brar, our commitment is to unify the family legacy and seek new avenues of growth.',
    DESCRIPTION2:
      'Our philosophy is rooted in maximising shareholder returns through unwavering investments in real estate, education and healthcare, upholding a tradition of excellence.'
  },
  OUR_WORK: {
    NAME: '',
    TITLE:
      'Unfolding Our Journey of Diversification, Growth, and Returns',
    DESCRIPTION:
      'From humble beginnings, the journey to delivering projects worth $850 million has been a learning, challenging, and encouraging experience. Over the years, we have left a lasting mark on the landscape of Australian business.',
    WORK_CARD: [
      {
        imageSrc: images.Work1,
        value: '$850',
        title: 'Real Estate',
        subtitle: {
          prefixText: 'Shaping communities',
          suffixText: 'since 2004'
        },
        link: URL_PATHS.REAL_ESTATE
      },
      {
        imageSrc: images.Work2,
        value: '$90',
        title: 'Healthcare',
        subtitle: {
          prefixText: 'Shaping communities',
          suffixText: 'compassionate care'
        },
        link: URL_PATHS.OEIH
      },
      {
        imageSrc: images.Work3,
        value: '$50',
        title: 'Education',
        subtitle: {
          prefixText:
            'Empowering global minds at the',
          suffixText: 'forefront of education'
        },
        link: URL_PATHS.OFIE
      }
    ]
  },
  UPCOMING_PROJECTS: {
    NAME: '',
    TITLE: 'Our Work',
    PROJECTS: [
      {
        imageSrc: images.HomeProject1,
        address: 'La Trobe Street, Melbourne'
      },
      {
        imageSrc: images.HomeProject2,
        address:
          'Cardinia Central Industrial Estate'
      },
      {
        imageSrc: images.HomeProject3,
        address: 'Business Park Officer'
      },
      {
        imageSrc: images.HomeProject4,
        address:
          'Build To Rent Project Ascot Vale'
      },
      {
        imageSrc: images.HomeProject7,
        address:
          'Residential & Employment Estate Wollert'
      },

      {
        imageSrc: images.HomeProject6,
        address:
          'Business & Industrial Estate Truganina'
      },
      {
        imageSrc: images.HomeProject5,
        address: 'Childcare and NDIS'
      },
      {
        imageSrc: images.HomeProject8,
        address: 'Adelaide Developments'
      }
      // {
      //   imageSrc: images.HomeProject9,
      //   address: 'Employment Precinct Officer'
      // }
    ]
  },
  PRESENCE: {
    NAME: '',
    TITLE: 'Our Investments Across',
    SUBTITLE: 'Melbourne, Victoria',
    CATEGORIES: [
      {
        name: 'Real Estate',
        description:
          'We began our property and land development journey in 2004 with our first acquisition in Australia. Since then, our portfolio has grown to include townhouse developments in prominent locations such as Frankston, Clayton, and Balwyn. Our significant land acquisitions and transformative projects have played a vital role in shaping these communities.',
        link: URL_PATHS.REAL_ESTATE
      },
      {
        name: 'Education',
        description:
          'In 2008, we launched a private education venture to offer international students pathways to a bright future in Australia. By 2010, we expanded by acquiring TEDI and later registered Malvern Institute Pty Ltd/CMI in 2012. These milestones fueled steady growth, resulting in twelve education providers across multiple Australian states, driven by dedication and innovation.',
        link: URL_PATHS.OFIE
      },
      {
        name: 'Healthcare',
        description:
          'Expanding beyond medical centers, we have integrated diverse health facilities, enhancing services from youth fitness to aged care. With two new healthcare projects approved for 2024, our $90 million portfolio reflects our commitment to enriching communities and prioritizing well-being.',
        link: URL_PATHS.OEIH
      }
    ],
    MAP_IMAGE_SRC: images.PresenceMap
  }
};
