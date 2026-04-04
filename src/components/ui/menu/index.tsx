"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import Icon from '@/components/ui/icon';
import menu from '@/config/content/menu';
import clsx from 'clsx';

export default function Menu() {
  const {theme, setTheme} = useTheme();
  return (
      <nav className="menu">
        <Link draggable={false} className="menu__brand" href={menu.brand.href} dangerouslySetInnerHTML={{__html: menu.brand.html}}/>
        <div className="menu__navigation">
          {
            Object.entries(menu.navigation).map(([menuItemKey, entry]) => (
                <Link draggable={false} key={menuItemKey} className={clsx(`menu__item`, entry.text && "internal")} href={entry.href}>
                      {
                          entry.icon && <Icon type={entry.icon}/>
                      }
                        {entry.text}
                </Link>
            ))
          }
          <button className="menu__item cursor-pointer w-6"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Icon type="sun"/>
          </button>
        </div>
      </nav>
  );
}