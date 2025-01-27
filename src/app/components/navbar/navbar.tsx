"use client";
import styles from './navbar.module.scss';
import Burger from '@/app/components/navbar/burger';
import {Github, LinkedIn, Mail} from '@/app/components/navbar/icons';
import ThemeButton from '@/app/components/navbar/theme-button';
import config from '@/app/config';
import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {AppContext} from '@/app/context';
import Navlink from '@/app/components/navbar/navlink';
import Menu from '@/app/components/navbar/menu';
import {usePathname} from 'next/navigation';
import Button from '@/app/components/button/button';

export default function Navbar() {
  const burgerRef = useRef<HTMLLabelElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [previousScroll, setPreviousScroll] = useState<number>(0);
  const pathname = usePathname();
  const {menuOpen, toggleMenu} = useContext(AppContext);
  const [offset, setOffset] = useState(0);
  const handleBurgerChange = () => {
    toggleMenu();
  };

  const handleOffsetCalc = () => {
    if (burgerRef.current) {
      setOffset(burgerRef.current.offsetLeft + burgerRef.current.clientWidth);
    }
  };


  const scrollEventListener = useCallback(() => {
    if (!navbarRef.current || menuOpen) {
      return;
    }

    if (previousScroll < window.scrollY) {
      navbarRef.current.style.background = "transparent";
      navbarRef.current.style.transform = "translateY(-100%)";
    } else {
      navbarRef.current.style.background = "var(--background)";
      navbarRef.current.style.transform = "translateY(0)";
    }

    if (window.scrollY < navbarRef.current.clientHeight) {
      navbarRef.current.style.background = "transparent";
    }
    setPreviousScroll(window.scrollY < 0 ? 0 : window.scrollY)
  }, [navbarRef, setPreviousScroll, previousScroll, menuOpen])

  useEffect(() => {
    if (burgerRef.current) {
      window.addEventListener("resize", () => {
        handleOffsetCalc();
      });

      handleOffsetCalc();
    }

    return () => {
      window.removeEventListener("resize", () => {
      });
    };
  }, []);

  useEffect(() => {
    toggleMenu(false);
  }, [pathname, toggleMenu]);

  useEffect(() => {
    window.addEventListener("scroll", scrollEventListener);

    return () => {
      window.removeEventListener("scroll", scrollEventListener)
    }
  }, [navbarRef, scrollEventListener]);

  return (
      <>
        <Menu open={menuOpen} offset={offset}/>
        <div className={styles.navbar} ref={navbarRef}>
          <div className={styles.navbar__container}>
            <div className={styles.navbar__links}>
              <Navlink href="/">
                Root
              </Navlink>
              <Navlink href="/about-me">
                About me
              </Navlink>
              <Navlink href="/projects">
                Projects
              </Navlink>
              <Navlink href="/contact">
                Contact
              </Navlink>
            </div>
            <Burger onChange={handleBurgerChange} ref={burgerRef} checked={menuOpen}/>
            <div className={styles.navbar__socialbox}>
              <Button variant="resume" asLink={true} href={config.resume} external={true}>
                Download Resume
              </Button>
              <a href={`mailto:${config.email}`} rel="noreferrer">
                <Mail/>
              </a>
              <a href={config.githubUrl} target="_blank" rel="noopener">
                <Github/>
              </a>
              <a href={config.linkedinUrl} target="_blank" rel="noopener">
                <LinkedIn/>
              </a>
              <div className={styles.navbar__social__separator}/>
              <ThemeButton/>
            </div>
          </div>
        </div>
      </>
  );
}