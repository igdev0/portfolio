import {PropsWithChildren, useRef, useState} from 'react';
import styles from './expandable.module.scss';

const DEFAULT_HEIGHT = 14.8;

function ChevronDown() {
  return (
      <svg width="48" height="26" viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.625065 2.37501C0.625065 1.83154 0.832782 1.28754 1.24769 0.872634C2.07803 0.04229 3.42263 0.0422901 4.25244 0.872634L24.0001 20.6203L43.7477 0.872636C44.578 0.0422919 45.9226 0.042292 46.7524 0.872636C47.5823 1.70298 47.5828 3.04757 46.7524 3.87738L25.5024 25.1274C24.6721 25.9577 23.3275 25.9577 22.4977 25.1274L1.24769 3.87738C0.832782 3.46248 0.625065 2.91848 0.625065 2.37501Z"
            fill="#606060"/>
      </svg>

  );
}

export default function Expandable(props: PropsWithChildren) {
  const expandableRef = useRef<HTMLDivElement>(null);
  const buttonBackgroundRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"opened" | "closed">("closed");
  const handleToggleContent = () => {
    if (expandableRef.current) {
      const {scrollHeight} = expandableRef.current;
      if (state === "closed") {
        expandableRef.current.style.maxHeight = `${scrollHeight}rem`;
        setState("opened");
      } else {
        expandableRef.current.style.maxHeight = `${DEFAULT_HEIGHT}rem`;
        setState("closed");
      }
    }
  };

  const handleTransitionEnd = () => {
    if (state === "opened" && expandableRef.current) {
      expandableRef.current.style.maxHeight = "100%";
    }
  };

  return (
      <div className={styles.expandable} ref={expandableRef} onTransitionEnd={handleTransitionEnd}>
        {props.children}
        <div className={styles.expandable__button__container} ref={buttonBackgroundRef}>
          <button onClick={handleToggleContent}
                  className={state === "opened" ? styles.expandable__button__container__buttonOpened : ""}>Read
             {state === "closed" ? " more" : " less"} <ChevronDown/></button>
        </div>
      </div>
  );
}