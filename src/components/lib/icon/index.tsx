import Github from '@/components/lib/icon/github';
import {LinkIcon, MenuIcon, SunIcon, XIcon} from 'lucide-react';

export const iconsMap = {
  github: Github,
  menu: MenuIcon,
  sun: SunIcon,
  x: XIcon,
  link: LinkIcon
}

export type IconNames = keyof typeof iconsMap;

export interface IconProps {
  name: IconNames;
  size?: "small";
}

export default function Icon(props: IconProps) {
  const Element = iconsMap[props.name];
  if(!Element) {return null}
  return (
      <Element className="w-6 h-6"/>
  );
}