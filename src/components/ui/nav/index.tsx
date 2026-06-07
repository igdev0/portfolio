"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import clsx from 'clsx';
import {useState} from 'react';
import IconButton from '@/components/lib/icon-button';
import Container from '@/components/lib/container';
import {NavType} from '@/content/types';

export default function Nav(props: NavType) {
  const {theme, setTheme} = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const {brand, links} = props;
  return (
      <nav className="nav">
        <Container className="nav__layout">
          <Link draggable={false} className="nav__link nav__brand" href="#"
                dangerouslySetInnerHTML={{__html: brand}}/>
          <div className="nav__list">
            {
              links.map((entry, key) => (
                  <Link draggable={false} key={key} className="nav__link"
                        href={entry.href}>
                    {entry.text}
                  </Link>
              ))
            }
          </div>
          <div className="nav__buttons">
            <IconButton icon="sun" onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}/>
            <IconButton className="nav__drawer-toggler" icon="menu" onClick={() => setMenuOpen(true)}></IconButton>
          </div>
          <div className={clsx('nav__drawer', menuOpen ? 'open' : 'close')}>
            <IconButton icon="x" onClick={() => setMenuOpen(false)}/>
            {
              links.map((entry, index) => (
                  <Link draggable={false} key={index}
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