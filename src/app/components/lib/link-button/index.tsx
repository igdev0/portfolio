import "../button/index.css";
import AppLink, {AppLinkProps} from '@/app/components/lib/link';
import {buttonVariants} from '@/app/components/lib/button';
import {VariantProps} from 'class-variance-authority';

interface LinkButtonProps extends AppLinkProps, VariantProps<typeof buttonVariants> {
}

export default function LinkButton({href, children, className, ...props}: LinkButtonProps) {
  return (
      <AppLink
          className={`${buttonVariants(props)} ${className}`}
          href={href}>
        {children}
      </AppLink>
  );
}