import {IconNames} from '@/components/lib/social';

export type IconType = IconNames;
export interface ContactType {
  linkedin: string;
  github: string;
  telegram: string;
  email: string;
  calendly: string;
}
export interface CollaborateType extends SectionType {
  contact: ContactType
}
export interface ImageType {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export interface LinkType {
  href: string;
  icon: IconType;
  text: string;
}

export interface HeroType extends SectionType {
  cta0: LinkType;
  cta1: LinkType;
  image: ImageType;
}

export interface SectionType {
  comment: string;
  title: string;
  statement: string;
}