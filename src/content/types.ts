import {IconNames} from '@/components/lib/social';

export interface ConfigType {
  animationDuration: number;
}

export type IconType = IconNames;
export interface ContactType {
  linkedin: string;
  github: string;
  telegram: string;
  email: string;
  calendly: string;
}

export interface NavType {
  brand: string;
  links: LinkType[];
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

export interface ExperienceEntityType {
  title: string;
  tags: string[];
  contributions: string[];
  links: LinkType[];
}

export interface ExperienceTimelineType extends SectionType {
  roles: ExperienceEntityType[];
}

export interface SkillsType extends SectionType {
  skills: TechType;
}

export interface ProfileType extends SectionType {
  bio: string;
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

export interface SectionType {
  comment?: string;
  title: string;
  statement?: string;
}