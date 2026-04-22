import {PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import Box from '@/app/components/lib/box';

const containerVariants = cva('container', {
  variants: {
    variant: {
      bordered: "border-x border-(--semigrid) mx-auto px-4 md:px-8"
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


export default function Container(props: ContainerProps) {
  const {children, className, name = 'default', ...variants} = props;
  return (
      <Box className="px-4 md:px-8">
        <Box className={`@container/${name} ${containerVariants(variants)}` + ` ${className}`}>
          {children}
        </Box>
      </Box>
  );
}