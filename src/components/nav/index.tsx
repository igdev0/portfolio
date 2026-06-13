"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {motion, MotionConfig, useScroll} from 'framer-motion';
import {useTheme} from 'next-themes';
import clsx from 'clsx';
import {useState} from 'react';
import IconButton from '@/components/icon-button';
import Container from '@/components/container';
import {NavType} from '@/content/types';
import LinkButton from '@/components/link-button';

export interface NavProps extends NavType {
  github: string;
}

export default function Nav(props: NavProps) {
  const {theme, setTheme} = useTheme();
  const {scrollYProgress: scaleX} = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const {brand, links} = props;

  return (
      <nav className="nav">
        <motion.div className="w-full h-1 bg-accent-500 origin-left fixed top-0 left-0 right-0 z-10"
                    style={{scaleX}}/>
        <Container className="nav__layout">
          <Link className="nav__link nav__brand" draggable={false}
                        href="#"
                        dangerouslySetInnerHTML={{__html: brand}}/>
          <div className="nav__list">
            <MotionConfig transition={{delayChildren: 100000}}>

              {
                links.map((entry, index) => (
                    <Link className="nav__link"
                                  key={index}
                                  draggable={false}
                                  href={entry.href}>
                      {entry.text}
                    </Link>
                ))
              }
            </MotionConfig>
          </div>
          <div className="nav__buttons">
            <LinkButton href={props.github} icon="github" aspect="square" size="xs" variant="ghost" external/>
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