import serviceIcon1 from 'assets/images/services-icon-1.svg'
import serviceIcon2 from 'assets/images/services-icon-2.svg'
import serviceIcon3 from 'assets/images/services-icon-3.svg'
import serviceIcon4 from 'assets/images/services-icon-4.svg'
import serviceIcon5 from 'assets/images/services-icon-5.svg'
import serviceIcon6 from 'assets/images/services-icon-6.svg'

export const servicesData = [
  {
    id: 1,
    number: '1',
    title: 'Custom Software Development',
    description:
      'Transforming your vision into reality with bespoke software solutions tailored to your unique requirements.',
    icon: serviceIcon1,
  },
  {
    id: 2,
    number: '2',
    title: 'Mobile & Web Development',
    description:
      'Elevate your digital presence with cutting-edge web and mobile apps for iOS and Android, designed to engage and inspire.',
    icon: serviceIcon2,
  },
  {
    id: 3,
    number: '3',
    title: 'Software Consulting',
    description:
      'Navigate the complex world of technology with our expert software consulting, guiding you towards optimal strategies and practices.',
    icon: serviceIcon3,
  },
  {
    id: 4,
    number: '4',
    title: 'Cloud Computing Services',
    description:
      'Leverage the power of the cloud with our robust cloud computing solutions, ensuring scalability, flexibility, and security.',
    icon: serviceIcon4,
  },
  {
    id: 5,
    number: '5',
    title: 'Software Maintenance and Support',
    description: 'Providing continuous support and updates to keep your software running smoothly and efficiently.',
    icon: serviceIcon5,
  },
  {
    id: 6,
    number: '6',
    title: 'Search Engine Optimization (SEO)',
    description: `Boost your online visibility and drive organic traffic with our specialized SEO services, tailored to elevate your website's search engine ranking.`,
    icon: serviceIcon6,
  },
]

import projectImg1 from 'assets/images/uploads/home/project-img-1.png'
import projectImg2 from 'assets/images/uploads/home/project-img-2.png'
import projectImg3 from 'assets/images/uploads/home/project-img-3.png'
import projectImg4 from 'assets/images/uploads/home/project-img-4.png'

export const projectsData = [
  {
    id: 1,
    title: 'Altfolio',
    description: 'Track your net worth across alternative investments like precious metals and cryptocurrencies.',
    tags: ['Mobile App', 'Finance'],
    image: {
      src: projectImg1,
      alt: 'Altfolio',
    },
  },
  {
    id: 2,
    title: 'Georgian Railway',
    description:
      'Georgian Railway Booking System: A user-centric platform enabling seamless train ticket booking.',
    tags: ['Online Booking', 'Web App'],
    image: {
      src: projectImg2,
      alt: 'Georgian Railway',
    },
  },
  {
    id: 3,
    title: 'Cavea Movie Theatre',
    description:
      'Cave Movie Theatre Booking: Streamlined, intuitive platform for effortlessly reserving movie tickets.',
    tags: ['E-Ticketing Platform', 'Online Booking'],
    image: {
      src: projectImg3,
      alt: 'Cavea Movie Theatre',
    },
  },
  {
    id: 4,
    title: 'Business Media',
    description:
      'Business Media Platform: A dynamic digital hub for professionals, offering the latest in business news.',
    tags: ['Professional Networking', 'Industry Analysis'],
    image: {
      src: projectImg4,
      alt: 'Business Media',
    },
  },
]
