"use client";
import styles from './navbar.module.scss';
import Burger from '@/app/components/navbar/burger';
import {Github, LinkedIn, Mail} from '@/app/components/navbar/icons';
import ThemeButton from '@/app/components/navbar/theme-button';
import config from '@/app/config';

export default function Navbar() {

  const handleBurgerChange = (changed: boolean) => {
  }
  return (
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
  )
}