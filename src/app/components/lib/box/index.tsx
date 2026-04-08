import {ForwardedRef, PropsWithChildren} from 'react';
import {type BoxProps} from '@/app/components/lib/box/types';

/**
 * Classified kind of tags:
 *
 * - Text
 * - Markup
 * - Layout
 */




export default function Box(props: BoxProps & PropsWithChildren, ref?: ForwardedRef<any>) {
  const {children, className = '', as: Element = 'div'} = props;

  return (
      <Element ref={ref} className={className}>
        {children}
      </Element>
  );
}