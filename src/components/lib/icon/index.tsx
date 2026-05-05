import Github from '@/components/lib/icon/github';
import {
  BookIcon,
  BoxesIcon,
  ChevronRightIcon,
  CodeIcon,
  LinkIcon,
  MenuIcon,
  ServerIcon,
  SquareTerminalIcon,
  SunIcon,
  WrenchIcon,
  XIcon
} from 'lucide-react';

export const iconsMap = {
  github: Github,
  menu: MenuIcon,
  sun: SunIcon,
  x: XIcon,
  link: LinkIcon,
  book: BookIcon,
  code: CodeIcon,
  wrench: WrenchIcon,
  server: ServerIcon,
  terminal: SquareTerminalIcon,
  boxes: BoxesIcon,
  ['chevron-right']: ChevronRightIcon,
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