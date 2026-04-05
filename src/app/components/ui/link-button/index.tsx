import Link from 'next/dist/client/link';
import {PropsWithChildren} from 'react';
import "../button/index.css";
import clsx from 'clsx';

type Variant = "solid" | "outline" | "default";

export default function LinkButton({href, children, className, variant = "default"}: PropsWithChildren & {
  href: string,
  className?: string,
  variant?: Variant
}) {
  let variantCls = 'button';

  if (variant) {
    variantCls += clsx(` button--${variant}`);
  }

  if (className) {
    variantCls += " " + className;
  }

  return (
      <Link
          className={variantCls}
          href={href}>
        {children}
      </Link>
  );
}