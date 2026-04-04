"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import Icon from '@/components/ui/icon';

const brand = "<span><</span>IGDev<span>/></span>";

export default function Menu() {
  const {theme, setTheme} = useTheme();
  return (
      <nav className="menu">
        <Link draggable={false} className="menu__brand" href="#" dangerouslySetInnerHTML={{__html: brand}}/>
        <div className="menu__links">
          <Link draggable={false} className="menu__item" href="/#about">Root</Link>
          <Link draggable={false} className="menu__item" href="/#about">About</Link>
          <Link draggable={false} className="menu__item" href="/">Contact</Link>
          <Link draggable={false} className="menu__item" href="https://github.com/igdev0" target="_blank">
            <Icon type="github"/>
          </Link>
          <button className="menu__item cursor-pointer w-6"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Icon type="sun"/>
          </button>
        </div>
      </nav>
  );
}