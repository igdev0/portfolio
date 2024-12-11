"use client";
import styles from './navbar.module.scss';
import Burger from '@/app/components/navbar/burger';
import {Github, LinkedIn, Mail} from '@/app/components/navbar/icons';
import ThemeButton from '@/app/components/navbar/theme-button';
import config from '@/app/config';
import Menu from '@/app/components/navbar/menu';
import {useState} from 'react';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleBurgerChange = (value: boolean) => {
    setMenuOpen(value);
  }
  return (
      <>
        <Menu open={menuOpen}/>
        <div className={styles.navbar}>
          <Burger onChange={handleBurgerChange}/>
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
            <ThemeButton/>
          </div>
        </div>
      </>
  )
}