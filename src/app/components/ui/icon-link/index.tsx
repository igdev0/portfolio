import Link from 'next/dist/client/link';
import Icon, {IconTypes} from '@/app/components/ui/icon';
import "../icon-button/index.css";

export interface IconLinkProps {
  icon: IconTypes;
  href: string;
}

export default function IconLink(props: IconLinkProps) {
  return (
      <Link href={props.href}>
        <Icon type={props.icon}/>
      </Link>
  );
}