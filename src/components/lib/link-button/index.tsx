import "../button/index.css";
import {AppLinkProps} from '@/components/lib/link';
import {buttonVariants} from '@/components/lib/button';
import {VariantProps} from 'class-variance-authority';
import Icon, {IconNames} from '@/components/lib/icon';
import Link from 'next/dist/client/link';

interface LinkButtonProps extends AppLinkProps, VariantProps<typeof buttonVariants> {
  icon?: IconNames;
  external?: boolean;
}

export default function LinkButton(props: LinkButtonProps) {
  const {href, children, icon, external, className = '', ...variants} = props;
  return (
      <Link
          className={`${buttonVariants(variants)} ${className}`}
          href={href} target={external ? "_blank" : "_self"}>
        {icon && <Icon name={icon}/>}
        {children}
      </Link>
  );
}