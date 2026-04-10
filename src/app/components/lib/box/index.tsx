import {type BoxProps} from '@/app/components/lib/box/types';
import {components} from '@/app/components/lib/box/map';
import {PropsWithChildren} from 'react';

function Box(props: BoxProps & PropsWithChildren) {
  const {children, className = '', as = 'div'} = props;
  const Component = components[as];

  return (
      <Component className={className}>
        {children}
      </Component>
  );
}

const result = Object.assign(Box, components);

export default result;