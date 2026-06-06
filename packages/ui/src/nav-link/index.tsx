import Link, {LinkProps} from 'next/link';
import clsx from 'clsx';
import {PropsWithChildren} from 'react';

export interface NavLinkProps extends LinkProps, PropsWithChildren {
  className?: string;
  'data-active'?: boolean;
}

export default function NavLink(props: NavLinkProps) {
  const {children, className, ...rest} = props;

  return (
      <Link className={clsx('nav-link', className)} {...rest}>
        {children}
      </Link>
  );
}