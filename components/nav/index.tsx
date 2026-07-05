"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import IconButton from '@/components/icon-button';
import Container from '@/components/container';
import {NavType} from '@/content/types';
import LinkButton from '@/components/link-button';
import NavProgress from '@/components/nav/progress';
import {Menu} from '@base-ui/react';
import {MenuIcon} from 'lucide-react';
import clsx from 'clsx';

export interface NavProps extends NavType {
}

export default function Nav(props: NavProps) {
  const {theme, setTheme} = useTheme();
  const {brand, links} = props;
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
            <Menu.Root>
              <Menu.Trigger className="nav__drawer-toggler">
                <MenuIcon className="stroke-(--foreground)"/>
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Positioner className="z-20" sideOffset={8}>
                  <Menu.Popup className="relative bg-(--background) p-3 border border-(--grid) rounded-sm outline-hidden transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0 origin-[var(--transform-origin)]">
                    {
                      links.map((entry, index) => (
                          <Menu.Item key={index} className="py-1">
                            <Link draggable={false}
                                  className={clsx(`nav__drawer-link`)}
                                  href={entry.href}>
                              {entry.text}
                            </Link>
                          </Menu.Item>
                      ))
                    }
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>
          </div>

        </Container>
      </nav>
  );
}