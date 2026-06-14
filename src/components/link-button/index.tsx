import "../button/index.css";
import {AppLinkProps} from '@/components/link';
import {buttonVariants} from '@/components/button';
import {VariantProps} from 'class-variance-authority';
import Icon, {IconNames} from '@/components/icons';
import Link from 'next/dist/client/link';
import {Ref} from 'react';

interface LinkButtonProps extends AppLinkProps, VariantProps<typeof buttonVariants> {
  icon?: IconNames;
  external?: boolean;
  label?: string;
  ref?: Ref<HTMLAnchorElement>;
  iconPosition?: 'left' | 'right';
}

export default function LinkButton(props: LinkButtonProps) {
  const {href, children, label, ref, icon, iconPosition = 'left', external, className = '', ...variants} = props;
  return (
      <Link
          ref={ref}
          aria-label={label}
          className={`${buttonVariants(variants)} icon--${variants.aspect === 'square' ? '' : iconPosition} ${external ? 'icons--external' : ''} ${className}`}
          href={href} target={external ? "_blank" : "_self"}>
        {icon && iconPosition === 'left' && <Icon name={icon}/>}
        {children}
        {icon && iconPosition === 'right' && <Icon name={icon}/>}
      </Link>
  );
}
