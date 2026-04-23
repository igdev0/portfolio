"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import clsx from 'clsx';
import {useState} from 'react';
import menu from '@/content/menu';
import IconButton from '@/components/lib/icon-button';
import IconLink from '@/components/lib/icon-link';
import Container from '@/components/lib/container';

export default function Nav() {
  const {theme, setTheme} = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <nav className="nav">
        <Container className="nav__layout">
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
          </div>
          <div className="nav__buttons">
            <IconLink icon="github" href={menu.navigation.social.github.href}/>
            <IconButton icon="sun" onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}/>
            <IconButton className="nav__drawer-toggler" icon="menu" onClick={() => setMenuOpen(true)}></IconButton>
          </div>
          <div className={clsx('nav__drawer', menuOpen ? 'open' : 'close')}>
            <IconButton icon="menu" onClick={() => setMenuOpen(false)}/>
            {
              Object.entries(menu.navigation.list).map(([menuItemKey, entry]) => (
                  <Link draggable={false} key={menuItemKey}
                        className={clsx(`nav__drawer-link`, entry.text && "internal", "py-1", "flex justify-end")}
                        href={entry.href}>
                    {entry.text}
                  </Link>
              ))
            }
          </div>
        </Container>
      </nav>
  );
}