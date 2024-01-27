import {useCallback, useEffect, useMemo, useState} from 'react';

type WindowSizeType = {width: number, height: number};
export default function useWindowSize() {
  const [size, setSize] = useState<WindowSizeType | null>(null);

  const handleSizeChange = useCallback<EventListener>((event) => {
    const window = event.currentTarget as Window;
    setSize({width: window.innerWidth, height: window.innerHeight});
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleSizeChange)
    return () => window.removeEventListener('resize', handleSizeChange)
  }, [handleSizeChange]);
  return useMemo(() => {
    return size ? size : {width: window.innerWidth, height: window.innerHeight};
  }, [size])
}