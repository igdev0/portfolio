import {IconNames} from '@/components/icons';

export interface ConfigType {
  animationDuration: number;
}

export type IconType = IconNames;
export interface ContactType {
  location: string;
  websiteUrl: string;
  github: string;
  phone: string;
  telegram: string;
  email: string;
  calendly: string;
  linkedin: string;
}

export interface NavType {
  brand: string;
  links: LinkType[];
  github: string;
}

export interface CollaborateType extends SectionType {
  contact: ContactType
}

export interface TechType {
  [key: string]: {
    icon: IconType,
    tabs: {
      [key: string]: {
        statement: string;
      }
    }
  }
}


export interface ExperiencePinType {
  title: string;
  brand: string;
  contractType: "Full-Time" | "Part-Time";
  jobType: "Remote" | "Hybrid" | "On-Site";
  startDate: string;
  endDate?: string;
  city?: string;
  countryShort?: string;
  country?: string;
  company: string;
  summary: string;
  contributions: string[];
  projects: ProjectType[];
}

export interface ExperienceTimelineType extends SectionType {
  roles: ExperiencePinType[];
}

export interface SkillsType extends SectionType {
  skills: TechType;
}

export interface ProfileType extends SectionType {
  stack: SkillsType;
}

export interface ImageType {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export interface LinkType {
  href: string;
  icon?: IconType;
  text: string;
}

export interface HeroType extends SectionType {
  cta0: LinkType;
  cta1: LinkType;
  image: ImageType;
}

export interface PassionEntityType {
  image: ImageType;
  bio: string;
  icon: IconType;
  content: string;
  title: string;
}

export interface PassionsType extends SectionType {
  passions: PassionEntityType[]
}

export interface SectionType {
  comment?: string;
  title: string;
  statement?: string;
}

export interface ProjectType {
  id: string;
  name: string;
  summary: string;
  owner: "IGDev" | "FinerVision" | "IOG";
  repositoryUrl?: string;
  imageAlt?: string;
  imageSrc?: string;
  appUrl?: string;
}

export interface ResumeType {
  name: string;
  bio: string;
  contact: ContactType;
  experience: ExperiencePinType[];
  tech: TechType;
  languages: string[];
}