"use client";
import "../button/index.css";
import {AppLinkProps} from '@/components/lib/link';
import {buttonVariants} from '@/components/lib/button';
import {VariantProps} from 'class-variance-authority';
import Icon, {IconNames} from '@/components/lib/icons';
import Link from 'next/dist/client/link';
import {Ref} from 'react';
import {motion} from 'framer-motion';

interface LinkButtonProps extends AppLinkProps, VariantProps<typeof buttonVariants> {
  icon?: IconNames;
  external?: boolean;
  ref?: Ref<HTMLAnchorElement>;
  iconPosition?: 'left' | 'right';
}

export default function LinkButton(props: LinkButtonProps) {
  const {href, children, ref, icon, iconPosition = 'left', external, className = '', ...variants} = props;
  return (
      <Link
          ref={ref}
          className={`${buttonVariants(variants)} icon--${variants.aspect === 'square' ? '' : iconPosition} ${external ? 'icons--external' : ''} ${className}`}
          href={href} target={external ? "_blank" : "_self"}>
        {icon && iconPosition === 'left' && <Icon name={icon}/>}
        {children}
        {icon && iconPosition === 'right' && <Icon name={icon}/>}
      </Link>
  );
}

export const AnimatedLinkButton = motion(LinkButton)