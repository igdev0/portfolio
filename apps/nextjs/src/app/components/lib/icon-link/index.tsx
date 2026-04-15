import Link from 'next/dist/client/link';
import Icon, {IconNames} from '@/app/components/lib/icon';
import "../icon-button/index.css";
import {AppLinkProps} from '@/app/components/lib/link';
import {VariantProps} from 'class-variance-authority';
import {iconButtonVariants} from '@/app/components/lib/icon-button';

export interface IconLinkProps extends AppLinkProps, VariantProps<typeof iconButtonVariants> {
  icon: IconNames;
}

export default function IconLink(props: IconLinkProps) {
  const {className = '', icon, ...variants} = props;
  return (
      <Link className={`${iconButtonVariants(variants)} ${className}`} href={props.href}>
        <Icon name={props.icon}/>
      </Link>
  );
}