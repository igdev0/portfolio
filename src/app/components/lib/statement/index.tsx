import "./index.css";
import {cva} from 'class-variance-authority';
import Html from '@/app/components/lib/html';

interface Props {
  className?: string;
  children: string;
}

export const statementVariants = cva('statement', {
  variants: {}
});

export default function Statement(props: Props) {
  const {className = '', children, ...variants} = props;
  return (
      <Html className={`${statementVariants(variants)} ${className}`}>
        {children}
      </Html>
  );
}