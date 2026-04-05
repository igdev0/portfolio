import Link from 'next/dist/client/link';
import {PropsWithChildren} from 'react';
import clsx from 'clsx';

type Variant = "solid" | "outline" | "default";

export default function LinkButton({href, children, className, variant = "default"}: PropsWithChildren & {
  href: string,
  className?: string,
  variant?: Variant
}) {
  let variantCls = 'inline-flex px-3 py-2 font-bold rounded-md items-center ';
  switch (variant) {
    case 'solid':
      variantCls += clsx('bg-accent-500');
      break;
    case 'outline':
      variantCls += clsx('border-2');
      break;
    default:
      variantCls += clsx('');
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