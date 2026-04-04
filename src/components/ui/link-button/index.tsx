import Link from 'next/dist/client/link';
import {PropsWithChildren} from 'react';
import clsx from 'clsx';

type Variant = "primary" | "secondary" | "default";

export default function LinkButton({href, children, className, variant = "default"}: PropsWithChildren & {
  href: string,
  className?: string,
  variant?: Variant
}) {
  let variantCls = 'inline-block px-3 py-2 font-bold rounded-md border-2 ';
  switch (variant) {
    case 'primary':
      variantCls += clsx('bg-(--bg-secondary) border-2 border-primary');
      break;
    default:
      variantCls += clsx('border-2');
      break;
  }
  className && (variantCls += className);

  return (
      <Link
          className={variantCls}
          href={href}>
        {children}
      </Link>
  );
}