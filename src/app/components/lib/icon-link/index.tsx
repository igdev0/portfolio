import Link from 'next/dist/client/link';
import Icon, {IconTypes} from '@/app/components/lib/icon';
import "../icon-button/index.css";
import clsx from 'clsx';

export interface IconLinkProps {
  icon: IconTypes;
  href: string;
  className?: string;
}

export default function IconLink(props: IconLinkProps) {
  let cls = clsx("icon-button");

  if (props.className) {
    cls += " " + (props.className ?? "");
  }

  return (
      <Link className={cls} href={props.href}>
        <Icon type={props.icon}/>
      </Link>
  );
}