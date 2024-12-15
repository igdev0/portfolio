"use client";
import styles from './globe.module.scss';
import {PropsWithChildren, useEffect, useRef} from 'react';

export default function Globe(props: PropsWithChildren) {
  const globeRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (event: MouseEvent) => {
    if (globeRef.current) {
      const x = event.clientX - (globeRef.current.clientWidth / 2);
      const y = event.clientY - (globeRef.current.clientHeight / 2);

      // globeRef.current.style.transform = `translate(${x}px, ${y}px)`
      globeRef.current.animate(
          {
            transform: `translate(${x}px, ${y}px)`,
          },
          {
            fill: "forwards",
            duration: 10000,
            delay: 100
          }
      );
     
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
      <div className={styles.wrapper}>
        <div className={styles.globe__wrapper}>
          {props.children}
        </div>
        <div ref={globeRef} className={styles.globe}/>
      </div>
  );
}