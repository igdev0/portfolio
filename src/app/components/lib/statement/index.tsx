import "./index.css";
import {cva} from 'class-variance-authority';
import Html from '@/app/components/lib/html';
import {PropsWithChildren} from 'react';

interface Props {
  className?: string;
}

export const statementVariants = cva('statement', {
  variants: {}
});

export default function Statement(props: Props & PropsWithChildren) {
  const {className = '', children, ...variants} = props;
  return (
      <Html className={`${statementVariants(variants)} ${className}`}>
        {children}
      </Html>
  );
}