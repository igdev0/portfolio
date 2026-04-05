"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import Icon from '@/app/components/ui/icon';
import menu from '@/config/content/menu';
import clsx from 'clsx';
import {useState} from 'react';
import IconButton from '@/app/components/ui/icon-button';
import IconLink from '@/app/components/ui/icon-link';

export default function Nav() {
  const {theme, setTheme} = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <nav className="nav">
        <div className="nav__layout">
          <Link draggable={false} className="nav__link nav__brand" href={menu.brand.href}
                dangerouslySetInnerHTML={{__html: menu.brand.html}}/>
          <div className="nav__list">
            {
              Object.entries(menu.navigation.list).map(([menuItemKey, entry]) => (
                  <Link draggable={false} key={menuItemKey} className="nav__link"
                        href={entry.href}>
                    {entry.text}
                  </Link>
              ))
            }
            <IconLink icon="github" href={menu.navigation.social.github.href}/>
            <IconButton type="sun" onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}/>
            <button className="menu__toggle  cursor-pointer menu__toggle w-6" onClick={() => setMenuOpen(true)}><Icon
                type="menu"/></button>
          </div>
          <div className={clsx('menu__drawer', menuOpen ? 'open' : 'close')}>
            <IconButton type="menu" onClick={() => setMenuOpen(false)}/>
            {
              Object.entries(menu.navigation.list).map(([menuItemKey, entry]) => (
                  <Link draggable={false} key={menuItemKey}
                        className={clsx(`menu__drawer-item`, entry.text && "internal", "py-1", "flex justify-end")}
                        href={entry.href}>
                    {entry.text}
                  </Link>
              ))
            }
          </div>
        </div>
      </nav>
  );
}