import Link from 'next/dist/client/link';
import {PropsWithChildren} from 'react';
import {cva, VariantProps} from 'class-variance-authority';

export const linkVariants = cva("link", {
  variants: {}
});

export interface AppLinkProps extends PropsWithChildren, VariantProps<typeof linkVariants> {
  className?: string;
  href: string;
}

export default function AppLink({className, children, href, ...props}: AppLinkProps) {
  return (
      <Link href={href} className={`${linkVariants(props)} ${className}`}>{children}</Link>
  );
}