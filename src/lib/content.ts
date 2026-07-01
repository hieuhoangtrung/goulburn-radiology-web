import businessData from '../../content/business.json';
import servicesData from '../../content/services.json';
import teamData from '../../content/team.json';
import faqData from '../../content/faq.json';
import referrersData from '../../content/referrers.json';

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
  heroImage: string;
  description: string;
  types?: string[];
  indications: string[];
  preparation: string;
  duration: string;
  bulkBilled: boolean;
  comingSoon: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BusinessContent {
  siteName: string;
  type: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  phone: string;
  fax: string;
  email: string;
  addressStreet: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  areaServed: string[];
  geo: { latitude: number; longitude: number };
  foundedYear: number | null;
  hours: { days: string; hours: string }[];
  logo: string;
  patientInfoImage: string;
  aboutImage: string;
  aboutBgImage: string;
  colors: { primary: string; dark: string; background: string };
  hero: {
    tagline: string;
    headline: string;
    subtext: string;
    badges: string[];
    backgroundImage: string;
  };
  stats: { value: string; label: string }[];
  whyUs: { title: string; desc: string }[];
  accreditations: string[];
  navLinks: NavLink[];
  sectionImage1: string;
  sectionImage2: string;
}

export const BUSINESS = businessData as BusinessContent;
export const SERVICES = servicesData as Service[];
export const TEAM = teamData as TeamMember[];
export const FAQS = faqData as FAQ[];
export const REFERRERS = referrersData as {
  intro: string;
  features: { title: string; desc: string; icon: string }[];
  steps: { step: string; title: string; desc: string }[];
  downloadForms: { label: string; href: string }[];
};

export const NAV_LINKS = BUSINESS.navLinks;

export const META = {
  siteName: BUSINESS.siteName,
  title: BUSINESS.title,
  description: BUSINESS.description,
  url: BUSINESS.url,
  image: `${BUSINESS.url}/og-image.jpg`,
  locale: BUSINESS.locale,
};
