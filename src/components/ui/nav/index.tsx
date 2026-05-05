"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import clsx from 'clsx';
import {useState} from 'react';
import IconButton from '@/components/lib/icon-button';
import IconLink from '@/components/lib/icon-link';
import Container from '@/components/lib/container';
import menu from '@/content/menu';

interface NavProps {
  data: typeof menu;
}

export default function Nav(props: NavProps) {
  const {theme, setTheme} = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const {data} = props;
  return (
      <nav className="nav">
        <Container className="nav__layout">
          <Link draggable={false} className="nav__link nav__brand" href={data.brand.href}
                dangerouslySetInnerHTML={{__html: data.brand.html}}/>
          <div className="nav__list">
            {
              Object.entries(data.navigation.list).map(([menuItemKey, entry]) => (
                  <Link draggable={false} key={menuItemKey} className="nav__link"
                        href={entry.href}>
                    {entry.text}
                  </Link>
              ))
            }
          </div>
          <div className="nav__buttons">
            <IconLink icon="git-commit" href={data.navigation.social.github.href}/>
            <IconButton icon="sun" onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}/>
            <IconButton className="nav__drawer-toggler" icon="align-right" onClick={() => setMenuOpen(true)}></IconButton>
          </div>
          <div className={clsx('nav__drawer', menuOpen ? 'open' : 'close')}>
            <IconButton icon="x" onClick={() => setMenuOpen(false)}/>
            {
              Object.entries(data.navigation.list).map(([menuItemKey, entry]) => (
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