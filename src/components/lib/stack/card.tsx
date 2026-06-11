import {PropsWithChildren, useContext, useLayoutEffect} from 'react';
import {StackContext} from '@/components/lib/stack/context';
import {motion} from 'framer-motion';

export interface StackCardProps extends PropsWithChildren {
  id: string;
}

export default function StackCard(props: StackCardProps) {
  const {children} = props;
  const {setActiveId} = useContext(StackContext);

  useLayoutEffect(() => {
    setActiveId(id => id ? id : props.id);
  }, []);

  return (
      <motion.div>
        {children}
      </motion.div>
  );
}