//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Power Tools',
    category: 'UI/UX design',
    clinetSite: 'https://github.com/TanzimTayef/power-tools-client',
    serverSite: 'https://github.com/TanzimTayef/power-tools-server',
    description: ' Developed as a manufacturer website for a product manufacturer company. The company can display tools and take online bookings. A user can order, delete only his/her unpaid order and write a review. There have more limited the activities based on user role.',
    liveSite: 'https://power-tools-64cbf.web.app/'
  },
  {
    id: '2',
    image: Project2,
    name: 'Bike Warehouse',
    category: 'web development',
    clinetSite: 'https://github.com/TanzimTayef/bike-warehouse-client',
    serverSite: 'https://github.com/TanzimTayef/bike-warehouse-server',
    description: 'Developed as an Inventory management website for online bike seller. Incorporated with managing inventories, adding item, updating stock of any item, delivering ordered stock and sign in, sign up, sing out system.',
    liveSite: 'https://bike-warehouse-8640e.web.app/'
  },
  {
    id: '3',
    image: Project3,
    name: 'Jack Travel Advisor',
    category: 'UI/UX design',
    clinetSite: 'https://github.com/TanzimTayef/jack-travel-advisor-assignment',
    serverSite: '',
    description: 'Developed and designed for a single parson to sale traveling guide. Implemented sign in, sign up and sign out system with firebase authentication.',
    liveSite: 'https://jack-travel-advisor.web.app/'
  }
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'fontend project',
  },
  {
    name: 'full-stack project',
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      '',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      '',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      '',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      '',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at tayef464@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Syleht, Sunamganj, Bangladesh',
    description: 'Serving clients worldwide',
  },
];
