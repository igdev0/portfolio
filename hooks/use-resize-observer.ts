"use client";
import {RefObject, useEffect, useRef} from "react";
import {observe, unobserve} from '@/config/resize-observer';

export default function useResizeObserver() {
  const elementRef = useRef<HTMLElement | null>(null);

  function addRef<T extends HTMLElement>(callback: (props: ResizeObserverEntry) => void) {
    return function ref(target: T | null) {
      if (!target) return;
      elementRef.current = target;
      observe(target, callback);
    };
  }

  function removeRef() {
    if (elementRef.current) {
      unobserve(elementRef.current);
      elementRef.current = null;
    }
  }

  useEffect(() => {
    return () => {
      if (elementRef.current) {
        unobserve(elementRef.current);
      }
    };
  }, []);

  return [addRef, removeRef, elementRef] as [typeof addRef, typeof removeRef, RefObject<HTMLElement>];
}