import {ForwardedRef, PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import Box from '@/components/lib/box';

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
  id?: string;
  ref?: ForwardedRef<HTMLDivElement>
}


export default function Container(props: ContainerProps) {
  const {children, className, id, name = 'default', ...variants} = props;
  return (
      <div className="px-4 md:px-8" id={id}>
        <Box className={`@container/${name} ${containerVariants(variants)}` + ` ${className}`} ref={props?.ref??null}>
            {children}
        </Box>
      </div>
  );
}