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
          year: '2012',
          title: 'Foundation Projects',
          subtitle:
            'Pioneered the purchase of Englobo sites, setting the foundation for future large-scale developments.',
          imgSrc: images.RedjJourney2
        },
        {
          year: '2013',
          title: 'Residential Projects',
          subtitle:
            'Developed the Sinclair Heights residential subdivision after acquiring Sinclair Road.',
          imgSrc: images.RedjJourney3
        },
        {
          year: '2020',
          title: 'Sinclair Heights',
          subtitle:
            'Successfully developed the Rockdale Estate in Paynes Road, Thornhill Park.',
          imgSrc: images.RedjJourney4
        },
        {
          year: '2020',
          title: 'Murray Estate',
          subtitle:
            'Introduced The Village Thornhill Park Estate in Murray Road, Thornhill Park.',
          imgSrc: images.RedjJourney5
        }
      ]
    },
    ACQUISITION_CONFIG: {
      TITLE:
        'Property Acquisition and Land Development',
      SUBTITLE:
        'Our notable projects reflect our expansion strategy, including englobo sites, childcare centers, medical centers, swimming pools, and gyms across Melbourne, Adelaide, & Perth, as well as luxury townhouses in Frankston, Clayton, Clayton South, Sunshine, & high-end homes in Balwyn & Burwood.',
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
            'The Brarz Officer Business Park',
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
            'The Brarz Truganina Business Park',
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
        link: ''
      },
      {
        title: 'Our Footprint in Education',
        imageSrc: images.Education,
        link: ''
      }
    ]
  },
  OFIE: {
    title: 'Our Footprint in Education',
    imageSrc: images.Ofie,
    JOURNEY_CONFIG: {
      title: 'Our Journey so Far',
      prefixText:
        'In 2008, we embarked on our first private education venture aimed at offering international students a pathway to a bright future in Australia. This initiative flourished into a network of campuses catering to diverse educational needs.',
      highlightedText: '',
      suffixText: '',
      JOURNEY_CARDS: [
        {
          year: '2010',
          title: '',
          subtitle:
            'Formal establishment with the registration of Brar Property Developments, marking the beginning of multiple townhouse and property development projects.',
          imgSrc: images.OfieJourney1
        },
        {
          year: '2012',
          title: '',
          subtitle:
            'We brought another milestone with the registration of Malvern Institute Pty Ltd/CMI. ',
          imgSrc: images.OfieJourney2
        },
        {
          year: '2010',
          title: '',
          subtitle:
            'First Childcare Project in Lyndhurst – Paving the way for future early education centers.',
          imgSrc: images.OfieJourney3
        },
        {
          year: '2012',
          title: 'Foundation Projects',
          subtitle:
            'Melton and Traralgon Childcare Centres – New openings, strengthening our commitment to quality early education. ',
          imgSrc: images.OfieJourney4
        }
      ]
    },
    OVERALL_IMPACT: {
      imgSrc: images.OfieImpact,
      title: 'Overall Impact',
      description: {
        prefixText:
          'These successful acquisitions marked a period of steady growth and innovation. From one education provider to ',
        highlightedText: '',
        suffixText:
          '12 establishments spread across multiple states of Australia, our educational journey has been a testament to relentless dedication and continuous expansion.'
      }
    },
    KNOW_MORE_SECTION: [
      {
        title: 'Our Endeavors in Healthcare',
        imageSrc: images.Healthcare,
        link: ''
      },
      {
        title:
          'Our Real Estate Development Journey',
        imageSrc: images.RealEstate,
        link: ''
      }
    ]
  },
  OEIH: {
    title:
      'Our Endeavours in Healthcare and Childcare',
    imageSrc: images.Oeih,
    JOURNEY_CONFIG: {
      title: 'Our Journey so Far',
      prefixText:
        'Over the years, this passion for childcare development has resulted in a total of ',
      highlightedText:
        '10 centres across various locations, representing a total investment of $50 million',
      suffixText:
        '. These facilities have not only provided essential services but also become integral parts of the communities they serve.',
      JOURNEY_CARDS: [
        {
          year: '2000',
          title: 'Content required',
          subtitle: 'Content pending',
          imgSrc: null
        },
        {
          year: '2012',
          title: 'Content required',
          subtitle: 'Content pending ',
          imgSrc: null
        }
      ]
    },
    ACQUISITION_CONFIG: {
      TITLE:
        'Property Acquisition and Land Development',
      SUBTITLE:
        'Expanding beyond childcare, the integration of health facilities has been a significant aspect of our journey. Owning and developing the following has bolstered the impact on both child and elder care.',
      CARDS: [
        {
          imageSrc: images.OeihAcquisition1,
          highlightedText: '8 childcare centers',
          text: ' across key locations'
        },
        {
          imageSrc: images.OeihAcquisition2,
          highlightedText:
            '127-bed aged care facility',
          text: ' with basement and 4 levels'
        },
        {
          imageSrc: images.OeihAcquisition3,
          highlightedText:
            'Thornhill Park, Deanside, and Dorreen',
          text: ' Health Centres'
        },
        {
          imageSrc: images.OeihAcquisition4,
          highlightedText:
            '4500 sqm swimming pool and medical centre',
          text: ' at Yellow Drive'
        }
      ]
    },
    OVERALL_IMPACT: {
      imgSrc: images.OeihImpact,
      title: 'Overall Impact',
      description: {
        prefixText:
          'With 2 additional childcare projects in Adelaide',
        highlightedText:
          ' the current holding and development portfolio stands at $90 million,',
        suffixText:
          ' encompassing a harmonious blend of childcare and health services aimed at enhancing the well-being of individuals across diverse communities.'
      }
    },
    KNOW_MORE_SECTION: [
      {
        title:
          'Our Real Estate Development Journey',
        imageSrc: images.RealEstate,
        link: ''
      },
      {
        title: 'Our Footprint in Education',
        imageSrc: images.Education,
        link: ''
      }
    ]
  }
};

export const PAGE_TITLE = {
  HOME: 'House of Brar',
  REDJ: 'HOB | Real Estate Development Journey'
};

export const HOME_CONFIG = {
  ABOUT_US: {
    NAME: '',
    TITLE:
      'Tradition Meets Investment Excellence',
    DESCRIPTION1:
      'Founded by the enterprising Sarbjit Brar in 2004, our investment office steers towards creating a lasting impact on generations to come. At House of Brar, our commitment is to unify the family legacy and seek new avenues of growth.',
    DESCRIPTION2:
      'Our philosophy reveres maximising shareholder returns through unwavering investments in real estate, education and healthcare, upholding a tradition of excellence.'
  },
  OUR_WORK: {
    NAME: '',
    TITLE:
      'Unfolding Our Journey of Diversification, Growth, and Returns',
    DESCRIPTION:
      'From humble beginnings to a current worth of $850 million, House of Brar’s legacy of growth and excellence is a testament to our dedication to building a prosperous future. Over the years, we have left a lasting mark on the landscape of Australian business.',
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
        address:
          '54-68 La Trobe Street, Melbourne'
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
        imageSrc: images.HomeProject5,
        address: 'Childcare and NDIS'
      },
      {
        imageSrc: images.HomeProject6,
        address:
          'Business & Industrial Estate Truganina'
      },
      {
        imageSrc: images.HomeProject7,
        address:
          'Residential & Business Park Estate Wollert'
      },
      {
        imageSrc: images.HomeProject8,
        address: 'Adelaide Developments'
      },
      {
        imageSrc: images.HomeProject9,
        address: 'Employment Precinct Officer'
      }
    ]
  },
  PRESENCE: {
    NAME: 'OUR PRESENCE',
    TITLE: 'Our Investments Across The Country',
    CATEGORIES: [
      {
        name: 'Real Estate',
        description:
          'We began our property and land development journey in 2004 with our first acquisition in Australia. Since then, our portfolio has grown to include townhouse developments in prominent locations such as Frankston, Clayton, and Balwyn. Our significant land acquisitions and transformative projects have played a vital role in shaping these communities.',
        link: '/real-estate'
      },
      {
        name: 'Education',
        description:
          'In 2008, we launched a private education venture to offer international students pathways to a bright future in Australia. By 2010, we expanded by acquiring TEDI and later registered Malvern Institute Pty Ltd/CMI in 2012. These milestones fueled steady growth, resulting in twelve education providers across multiple Australian states, driven by dedication and innovation.',
        link: '/ofie'
      },
      {
        name: 'Healthcare',
        description:
          'Since 2014, we’ve developed 10 childcare centres and integrated health services, including an aged care facility and multiple medical centres, with a total investment of $50 million. With two new childcare projects in Adelaide, our portfolio has grown to $90 million, combining childcare and health services to support communities.',
        link: '/oeih'
      }
    ],
    MAP_IMAGE_SRC: images.PresenceMap
  }
};
