import {BoxProps} from '@/app/components/lib/box/types';


export default function Html(props: Omit<BoxProps, 'children'> & { children: string }) {
  const {children, as: Element = 'div', className} = props;
  return (
      <Element className={className} dangerouslySetInnerHTML={{__html: children}}/>
  );
}