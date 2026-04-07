import {PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';

const containerVariants = cva('container', {
  variants: {
    variant: {
      bordered: "border-x border-(--semigrid) mx-auto px-9"
    }
  },
  defaultVariants: {
    variant: "bordered"
  }
});

export interface ContainerProps extends PropsWithChildren, VariantProps<typeof containerVariants> {
  name?: string;
  className?: string;
}

export default function Container({children, className, name = 'default', ...props}: ContainerProps) {

  return (
      <div className="px-8">
        <div className={`@container/${name} ${containerVariants(props)}` + ` ${className}`}>
          {children}
        </div>
      </div>
  );
}