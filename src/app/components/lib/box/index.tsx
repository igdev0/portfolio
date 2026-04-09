import {PropsWithChildren} from 'react';
import {type BoxProps, SemanticTags} from '@/app/components/lib/box/types';
import Html from '@/app/components/lib/html';

const components = {
  html: Html,
} as const;

export default function Box(props: BoxProps & PropsWithChildren) {
  const {children, className = '', as = 'div'} = props;

  let Component: typeof Html | typeof SemanticTags.infer = as;

  if(components[as as keyof typeof components]) {
    Component = components[as as keyof typeof components];

    // @ts-ignore
    return <Component className={className}>{children}</Component>;
  }

  return (
      // @ts-ignore
      <Component as={props.as} className={className}>
        {children}
      </Component>
  );
}