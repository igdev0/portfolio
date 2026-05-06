import Github from '@/components/lib/icon/github';
import {
  BookIcon,
  BoxesIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeIcon,
  LinkIcon,
  MenuIcon,
  SendIcon,
  ServerIcon,
  SquareTerminalIcon,
  SunIcon,
  WrenchIcon,
  XIcon
} from 'lucide-react';
import Email from '@/components/lib/icon/email';
import Linkedin from '@/components/lib/icon/linkedin';
import Telegram from '@/components/lib/icon/telegram';

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
  ['chevron-left']: ChevronLeftIcon,
  'send': SendIcon,
  'email': Email,
  'linkedin': Linkedin,
  'calendar': CalendarIcon,
  'telegram': Telegram,
};

export type IconNames = keyof typeof iconsMap;

export interface IconProps {
  name: IconNames;
  size?: "small";
}

export default function Icon(props: IconProps) {
  const Element = iconsMap[props.name];
  if (!Element) {
    return null;
  }
  return (
      <Element className="w-6 h-6"/>
  );
}