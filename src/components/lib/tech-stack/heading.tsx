import {useEffect, useRef} from 'react';

export default function Heading() {
  const h1 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {

  }, []);

  return (
      <h1 ref={h1}>Hello</h1>
  )
}