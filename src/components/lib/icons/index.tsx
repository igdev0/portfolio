import Github from '@/components/lib/icons/github';
import {
  BlocksIcon,
  BookIcon,
  BoxesIcon,
  CalendarIcon,
  Check,
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeIcon,
  DatabaseIcon,
  ExternalLink,
  LayoutPanelLeft,
  LinkIcon,
  LockIcon,
  LogIn,
  MenuIcon,
  MessageCircleIcon,
  Pen,
  SendIcon,
  ServerIcon,
  SignatureIcon,
  SmartphoneIcon,
  SquareTerminalIcon,
  SunIcon,
  TestTubeIcon,
  TrashIcon,
  WrenchIcon,
  XIcon
} from 'lucide-react';
import Email from '@/components/lib/icons/email';
import Linkedin from '@/components/lib/icons/linkedin';
import Telegram from '@/components/lib/icons/telegram';
import SkateIcon from '@/components/lib/icons/skate';
import FootballIcon from '@/components/lib/icons/football';

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
  'new-tab': ExternalLink,
  'chat': MessageCircleIcon,
  'blocks': BlocksIcon,
  'phone': SmartphoneIcon,
  'test': TestTubeIcon,
  'database': DatabaseIcon,
  'trash': TrashIcon,
  'pen': Pen,
  'check': Check,
  'app': LayoutPanelLeft,
  'sign': SignatureIcon,
  'log-in': LogIn,
  'lock': LockIcon,
  'skate': SkateIcon,
  'football': FootballIcon
};

export type IconNames = keyof typeof iconsMap;

export interface IconProps {
  name: IconNames;
  size?: "small";
}

export default function Icons(props: IconProps) {
  const Element = iconsMap[props.name];
  if (!Element) {
    return null;
  }
  return (
      <Element className="w-6 h-6"/>
  );
}