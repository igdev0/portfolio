import {PropsWithChildren} from 'react';
import {cva, VariantProps} from 'class-variance-authority';

export const baseVariants = cva('base', {
  variants: {}
});

export interface BaseProps extends PropsWithChildren, VariantProps<typeof baseVariants> {
  className?: string;
}

export default function Base(props: BaseProps) {
  const {children, className = '', ...variants} = props;
  return (
      <div className={`${baseVariants(variants)} ${className}`}>
        {children}
      </div>
  );
}