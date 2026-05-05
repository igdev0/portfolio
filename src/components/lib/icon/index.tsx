import {dynamicIconImports} from 'lucide-react/dynamic';
import Github from '@/components/lib/icon/github';

export type IconNames = keyof typeof dynamicIconImports;

export interface IconProps {
  name: IconNames;
  size?: "small";
}

export default function Icon(props: IconProps) {
  const {name} = props;

  return (
      <Github className="w-6 h-6"/>
  );
}