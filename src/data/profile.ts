import { Briefcase, Globe2, HeartHandshake, Lightbulb, Megaphone, ChartColumn, Users, Languages } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const pexels = (id: number, width = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const profile = {
  name: 'Manishaa Bhuvaneswaran',
  nameUpper: 'MANISHAA BHUVANESWARAN',
  title: 'Business & Travel Coordinator',
  positioning: 'Tourism Management | Business Development | Customer Experience',
  headline: 'Business Meets the Journey.',
  subheadline: 'Connecting People, Experiences and Possibilities.',
  summary:
    'Driven by business, inspired by travel, and passionate about creating meaningful experiences through coordination, communication and innovation.',
  location: 'Based in Tamil Nadu, India.',
  email: 'manishaabhuvaneswaran@gmail.com',
  phone: '9087441710',
  resumeUrl: '/resume.pdf',
  companyWebsite: 'https://airsaaitours.com/',
  heroImage: pexels(13239848, 1800),
};

export const socialLinks: { label: string; url: string }[] = [
  { label: 'LinkedIn', url: '' },
  { label: 'Instagram', url: '' },
];

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'experience', label: 'Experience' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export const aboutIntro = {
  heading: 'More Than a Professional Journey.',
  paragraphs: [
    'I am Manishaa B, a Business Administration student specializing in International Business, with hands-on experience in travel coordination, customer relationship management, destination research and business operations.',
    'My experience has helped me understand the importance of communication, planning, customer satisfaction and coordination in delivering meaningful travel experiences.',
    'From managing customer journeys to exploring tourism trends and participating in entrepreneurship initiatives, I enjoy connecting business thinking with practical execution.',
  ],
  closing:
    'I believe every successful journey begins with good planning, meaningful connections and a willingness to explore new possibilities.',
};

export const aboutCards: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Business Coordination',
    text: 'Keeping schedules, teams and travel logistics aligned from first enquiry to final itinerary.',
    icon: Briefcase,
  },
  {
    title: 'Travel & Tourism',
    text: 'Designing itineraries and understanding how destinations and traveller expectations shape each journey.',
    icon: Globe2,
  },
  {
    title: 'Customer Experience',
    text: 'Acting as the trusted point of contact, resolving queries and making every traveller feel looked after.',
    icon: HeartHandshake,
  },
  {
    title: 'Entrepreneurship & Innovation',
    text: 'Turning ideas into practical projects through startup initiatives, research and business thinking.',
    icon: Lightbulb,
  },
];

export const airSaaiExperience = {
  id: 'air-saai-tours',
    organization: 'Air Saai Tours',
    role: 'Business Coordinator & Travel Guide',
    period: '2024–2026',
    companyOverview:
      'Air Saai Tours is a Tamil Nadu-based domestic and international tour operator established in 2009.',
    companyServices: [
      'Domestic and international tours',
      'Group tours',
      'Adventure travel',
      'Cultural journeys',
      'Beach holidays',
      'Spiritual tours',
      'Customized travel packages',
      'Road, rail, flight and cruise travel experiences',
    ],
    responsibilities: [
      'Managed end-to-end travel coordination for 500+ customers.',
      'Designed customized travel itineraries across destinations including Kashmir, Andaman, Singapore and other locations.',
      'Served as the primary point of contact for travelers.',
      'Provided on-ground guidance and resolved customer queries.',
      'Coordinated travel logistics to ensure seamless trip planning.',
    ],
};

export const tickYourTourExperience = {
  id: 'tick-your-tour',
  organization: 'Tick Your Tour',
  role: 'Research Intern',
  period: '30 Days | 2026',
  responsibilities: [
    'Completed a 30-day research internship.',
    'Conducted research on tourism trends.',
    'Analyzed competitor strategies.',
    'Collected and analyzed industry information.',
    'Presented research findings.',
    'Supported business strategy and travel content development.',
  ],
};

export const destinations = [
  {
    name: 'Kashmir',
    region: 'Jammu & Kashmir, India',
    lon: 74.8,
    lat: 34.1,
    image: pexels(12750077, 1400),
  },
  {
    name: 'Andaman',
    region: 'Andaman & Nicobar Islands, India',
    lon: 92.7,
    lat: 11.7,
    image: pexels(37943870, 1400),
  },
  {
    name: 'Kerala',
    region: 'Kerala, India',
    lon: 76.3,
    lat: 10.0,
    image: pexels(12950219, 1400),
  },
  {
    name: 'Varkala',
    region: 'Kerala, India',
    lon: 76.7,
    lat: 8.7,
    image: pexels(27566375, 1400),
  },
  {
    name: 'Goa',
    region: 'Goa, India',
    lon: 73.9,
    lat: 15.3,
    image: pexels(32262464, 1400),
  },
  {
    name: 'Singapore',
    region: 'Singapore',
    lon: 103.8,
    lat: 1.35,
    image: pexels(16132156, 1400),
  },
  {
    name: 'Malaysia',
    region: 'Kuala Lumpur, Malaysia',
    lon: 101.7,
    lat: 3.1,
    image: pexels(11719269, 1400),
  },
];

export const destinationNote =
  'Travel coordination has given me an opportunity to work with diverse destinations, understand traveler expectations and appreciate the importance of planning every detail of a journey.';

export const skillCategories: { id: string; label: string; icon: LucideIcon; skills: string[] }[] = [
  {
    id: 'business',
    label: 'Business & Management',
    icon: Briefcase,
    skills: [
      'Business Analysis',
      'Business Coordination',
      'Tourism Management',
      'Customer Relationship Management',
      'Referral Marketing',
    ],
  },
  {
    id: 'data',
    label: 'Data & Research',
    icon: ChartColumn,
    skills: ['Data Analysis', 'Power BI', 'Tourism Trend Research', 'Competitor Analysis', 'Research Presentation'],
  },
  {
    id: 'communication',
    label: 'Communication & Leadership',
    icon: Users,
    skills: ['Strong Communication', 'Public Speaking', 'Customer Interaction', 'Leadership', 'Team Coordination'],
  },
  {
    id: 'digital',
    label: 'Digital & Marketing',
    icon: Megaphone,
    skills: ['Social Media Management', 'Travel Content Development', 'Business Communication'],
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: Languages,
    skills: ['Tamil', 'English'],
  },
];

export const achievements: {
  id: string;
  year: string;
  title: string;
  detail: string;
}[] = [
  {
    id: 'national-startup',
    year: '2025',
    title: 'Top 1 in National Startup Competition',
    detail: 'Ranked first in the National Startup Competition for the project presented.',
  },
  {
    id: 'iim-bangalore',
    year: '2025',
    title: 'Selected to Present Project at IIM Bangalore',
    detail: 'Selected to present my project at IIM Bangalore.',
  },
  {
    id: 'yes-summit',
    year: '2025',
    title: 'Best Performer, Young Entrepreneurship Summit (YES)',
    detail: 'Recognised as Best Performer at the Young Entrepreneurship Summit (YES).',
  },
  {
    id: 'public-speaking',
    year: '2024',
    title: 'Outstanding Performer in Effective Public Speaking',
    detail: 'Certified as an Outstanding Performer in Effective Public Speaking.',
  },
];

export const certifications: { name: string; issuer?: string; verifyUrl?: string }[] = [
  { name: 'South India Youngest Travel Operator', issuer: 'Indigo' },
  { name: 'Entrepreneurship Certification' },
  { name: 'Certified Spoken English – Business English Program' },
  { name: 'Data Scientist Analytics' },
  { name: 'Sustainable Business' },
  { name: 'Statistics Foundation Courses' },
];

export const education = {
  college: {
    institution: 'PSGR Krishnamal College for Women',
    degree: 'Bachelor of Business Administration – International Business',
    period: 'Expected Graduation: 2027',
    results: [{ label: 'Semester 4', value: '80%' }],
    leadership: {
      title: 'General Secretary',
      organisation: 'KCW Students Forum',
      period: '2025–2026',
    },
  },
  school: {
    institution: 'Holy Angels Matric Higher Secondary School',
    period: '2023–2024',
    results: [
      { label: 'SSLC', value: '78%' },
      { label: 'HSC', value: '89%' },
    ],
  },
};

export const contactIntro = {
  heading: "Let's Connect for the Next Opportunity.",
  text: "Whether it's a business opportunity, travel-related collaboration, professional connection or an interesting idea, I'd love to connect.",
};

export const journeyImages = {
  airport: pexels(38706325, 1400),
  meeting: pexels(1181363, 1400),
  research: pexels(8171214, 1400),
  map: pexels(8828679, 1400),
};
