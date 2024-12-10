"use client";
import styles from './navbar.module.scss';
import Burger from '@/app/components/navbar/burger';
import {Github, LinkedIn, Mail} from '@/app/components/navbar/icons';
import ThemeButton from '@/app/components/navbar/theme-button';

export default function Navbar() {

  const handleBurgerChange = (changed: boolean) => {
  }
  return (
      <div className={styles.navbar}>
        <Burger onChange={handleBurgerChange}/>
        <div className={styles.navbar__socialbox}>
          <Mail/>
          <Github/>
          <LinkedIn/>
          <ThemeButton/>
        </div>
      </div>
  )
}