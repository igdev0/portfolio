import "../button/index.css";
import AppLink, {AppLinkProps} from '@/app/components/lib/link';
import {buttonVariants} from '@/app/components/lib/button';
import {VariantProps} from 'class-variance-authority';

interface LinkButtonProps extends AppLinkProps, VariantProps<typeof buttonVariants> {
}

export default function LinkButton(props: LinkButtonProps) {
  const {href, children, className = '', ...variants} = props;
  return (
      <AppLink
          className={`${buttonVariants(variants)} ${className}`}
          href={href}>
        {children}
      </AppLink>
  );
}