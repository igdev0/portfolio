import Link from 'next/dist/client/link';
import Icon, {IconNames} from '@/components/icons';
import "../icon-button/index.css";
import {AppLinkProps} from '@/components/link';
import {VariantProps} from 'class-variance-authority';
import {iconButtonVariants} from '@/components/icon-button';

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