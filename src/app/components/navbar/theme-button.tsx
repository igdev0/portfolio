"use client";
import {Moon, Sun} from '@/app/components/navbar/icons';
import styles from "./theme-button.module.scss";
import {useTheme} from 'next-themes';


export default function ThemeButton() {
  const {theme, setTheme} = useTheme();
  const handleClick = () => {
    const nextTheme = theme === "dark" ? "light": "dark";
    setTheme(nextTheme);
  }


  return (
      <button className={styles.theme__button} onClick={handleClick}>
        {theme === "light" ?  <Moon/> :<Sun/>}
      </button>
  )
}