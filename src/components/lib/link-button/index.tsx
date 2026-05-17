import "../button/index.css";
import {AppLinkProps} from '@/components/lib/link';
import {buttonVariants} from '@/components/lib/button';
import {VariantProps} from 'class-variance-authority';
import Icon, {IconNames} from '@/components/lib/icon';
import Link from 'next/dist/client/link';

interface LinkButtonProps extends AppLinkProps, VariantProps<typeof buttonVariants> {
  icon?: IconNames;
  external?: boolean;
  iconPosition?: 'left' | 'right';
}

export default function LinkButton(props: LinkButtonProps) {
  const {href, children, icon, iconPosition = 'left', external, className = '', ...variants} = props;
  return (
      <Link
          className={`${buttonVariants(variants)} icon--${variants.aspect === 'square' ? '' : iconPosition} ${external ? 'icon--external' : ''} ${className}`}
          href={href} target={external ? "_blank" : "_self"}>
        {icon && iconPosition === 'left' &&<Icon name={icon}/>}
        {children}
        {icon && iconPosition === 'right' &&<Icon name={icon}/>}
      </Link>
  );
}