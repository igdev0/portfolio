import "../button/index.css";
import AppLink, {AppLinkProps} from '@/app/components/lib/link';
import {buttonVariants} from '@/app/components/lib/button';
import {VariantProps} from 'class-variance-authority';
import Icon, {IconNames} from '@/app/components/lib/icon';

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