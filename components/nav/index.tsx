"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import IconButton from '@/components/icon-button';
import Container from '@/components/container';
import {NavType} from '@/content/types';
import LinkButton from '@/components/link-button';
import NavMenu from '@/components/nav/menu';
import {Dispatch, SetStateAction, useRef} from 'react';
import NavProgress from '@/components/nav/progress';

export interface NavProps extends NavType {
}

export default function Nav(props: NavProps) {
  const {theme, setTheme} = useTheme();
  const {brand, links} = props;
  const menuRef = useRef<{ setMenuOpen: Dispatch<SetStateAction<boolean>> }>(null);

  return (
      <nav className="nav">
        <NavProgress/>
        <Container className="nav__layout">
          <Link className="nav__link nav__brand" draggable={false}
                href="#"
                dangerouslySetInnerHTML={{__html: brand}}/>
          <div className="nav__list">

            {
              links.map((entry, index) => (
                  <Link className="nav__link"
                        key={index}
                        href={entry.href}>
                    {entry.text}
                  </Link>
              ))
            }
          </div>
          <div className="nav__buttons">
            <LinkButton label="Github" href={props.github} icon="github" aspect="square" size="xs" variant="ghost"
                        external/>
            <IconButton label="Theme" icon="sun" onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}/>
            <IconButton label="Menu" className="nav__drawer-toggler" icon="menu"
                        onClick={() => menuRef.current?.setMenuOpen(true)}></IconButton>
          </div>
          <NavMenu ref={menuRef} {...props}/>
        </Container>
      </nav>
  );
}