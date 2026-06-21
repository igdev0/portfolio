import {ForwardedRef, PropsWithChildren} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';

const containerVariants = cva('container', {
  variants: {
    variant: {
      bordered: "border-x border-0 border-(--grid) mx-auto px-3 md:px-6"
    }
  },
  defaultVariants: {
    variant: "bordered"
  }
});

export interface ContainerProps extends PropsWithChildren, VariantProps<typeof containerVariants> {
  name?: string;
  className?: string;
  id?: string;
  ref?: ForwardedRef<HTMLDivElement>;
}


export default function Container(props: ContainerProps) {
  const {children, className, id, name = 'default', ...variants} = props;
  return (
      <div className="px-3">
        <div id={id} className={clsx(containerVariants(variants), className)} ref={props?.ref ?? null}>
          {children}
        </div>
      </div>
  );
}