import Link from 'next/dist/client/link';
import {PropsWithChildren} from 'react';
import clsx from 'clsx';

type Variant = "primary" | "secondary" | "default";

export default function LinkButton({href, children, variant = "default"}: PropsWithChildren & {
  href: string,
  variant?: Variant
}) {
  return (
      <Link
          className={clsx('inline-block', 'px-2 py-2 font-bold rounded-md border-2', variant === 'default' ? 'dark:border-gray-200 border-gray-900' : "")}
          href={href}>
        {children}
      </Link>
  );
}