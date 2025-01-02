"use client";
import styles from './navbar.module.scss';
import Burger from '@/app/components/navbar/burger';
import {Github, LinkedIn, Mail} from '@/app/components/navbar/icons';
import ThemeButton from '@/app/components/navbar/theme-button';
import config from '@/app/config';
import {useContext, useEffect, useRef, useState} from 'react';
import {AppContext} from '@/app/context';
import Navlink from '@/app/components/navbar/navlink';
import Menu from '@/app/components/navbar/menu';
import {usePathname} from 'next/navigation';


export default function Navbar() {
  const burgerRef = useRef<HTMLLabelElement>(null);
  const pathname = usePathname();
  const {menuOpen, toggleMenu} = useContext(AppContext);
  const [offset, setOffset] = useState(0);
  const handleBurgerChange = () => {
    toggleMenu()
  }


  const handleOffsetCalc = () => {
    if(burgerRef.current) {
      setOffset(burgerRef.current.offsetLeft + burgerRef.current.clientWidth);
    }
  }

  useEffect(() => {
    if(burgerRef.current) {
      window.addEventListener("resize" , () => {
        handleOffsetCalc();
      })

      handleOffsetCalc()
    }

    return () => {
      window.removeEventListener("resize", () =>{});
    }
  }, [])

  useEffect(() => {
    toggleMenu(false);
  }, [pathname, toggleMenu]);

  return (
      <>
        <Menu open={menuOpen} offset={offset}/>
        <div className={styles.navbar}>
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
          <Burger onChange={handleBurgerChange} ref={burgerRef}/>
          <div className={styles.navbar__socialbox}>
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
      </>
  )
}