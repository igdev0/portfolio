"use client";
import {useLayoutEffect, useState} from 'react';

export function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 600) {
      setMobile(true);
    }

    return () => {}
  }, []);
  return mobile;
}