import {DynamicIcon, dynamicIconImports} from 'lucide-react/dynamic';

export type IconNames = keyof typeof dynamicIconImports;

export interface IconProps {
  name: IconNames;
  size?: "small";
}

export default function Icon(props: IconProps) {
  const {name} = props;


  return (
      <DynamicIcon name={name} strokeWidth={1.5} className="w-6 h-6"/>
  );
}