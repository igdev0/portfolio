import "../button/index.css";
import AppLink, {AppLinkProps} from '@/components/lib/link';
import {buttonVariants} from '@/components/lib/button';
import {VariantProps} from 'class-variance-authority';
import Icon, {IconNames} from '@/components/lib/icon';

interface LinkButtonProps extends AppLinkProps, VariantProps<typeof buttonVariants> {
  icon?: IconNames;
}

export default function LinkButton(props: LinkButtonProps) {
  const {href, children, icon, className = '', ...variants} = props;
  return (
      <AppLink
          className={`${buttonVariants(variants)} ${className}`}
          href={href}>
        {icon && <Icon name={icon}/>}
        {children}
      </AppLink>
  );
}