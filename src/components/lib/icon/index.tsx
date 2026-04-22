import {Bars3Icon, SunIcon} from '@heroicons/react/24/outline';
import {ComponentType, SVGProps} from 'react';
import Github from '@/components/lib/icon/github';

export type IconNames = "github" | "sun" | "menu";

export interface IconProps {
  name: IconNames;
  size?: "small";
}

const iconsMap: Record<IconNames, ComponentType<SVGProps<SVGSVGElement>>> = {
  sun: SunIcon,
  github: Github,
  menu: Bars3Icon,
};

export default function Icon(props: IconProps) {
  const {name} = props;
  const Element = iconsMap[name];

  return (
      <Element className="w-6 h-6"/>
  );
}