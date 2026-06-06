import {IconNames} from '@/components/lib/icon';

export type IconType = IconNames;

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