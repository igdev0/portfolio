"use client";
import Link from 'next/dist/client/link';
import "./index.css";
import {useTheme} from 'next-themes';
import Icon from '@/components/ui/icon';
import menu from '@/config/content/menu';
import clsx from 'clsx';
import {useState} from 'react';

export default function Menu() {
  const {theme, setTheme} = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <nav className="w-full border-y border-gray-200 sticky top-0 px-6">
        <div className="max-w-275 lg:mx-auto px-6 border-x border-gray-200 menu">
          <Link draggable={false} className={clsx('menu__brand')} href={menu.brand.href}
                dangerouslySetInnerHTML={{__html: menu.brand.html}}/>
          <div className="menu__desktop-nav">
            {
              Object.entries(menu.navigation).map(([menuItemKey, entry]) => (
                  <Link draggable={false} key={menuItemKey} className={clsx(`menu__item`, entry.text && "internal")}
                        href={entry.href}>
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
            <button className="menu__toggle  cursor-pointer menu__toggle w-6" onClick={() => setMenuOpen(true)}><Icon
                type="menu"/></button>
          </div>
          <div className={clsx('menu__drawer', menuOpen ? 'open' : 'close')}>
            <button className="menu__toggle cursor-pointer menu__toggle w-6 mb-4" onClick={() => setMenuOpen(false)}><Icon
                type="menu"/></button>
            {
              Object.entries(menu.navigation).filter(item => item[0] !== 'github').map(([menuItemKey, entry]) => (
                  <Link draggable={false} key={menuItemKey}
                        className={clsx(`menu__drawer-item`, entry.text && "internal", "py-1", "flex justify-end")}
                        href={entry.href}>
                    {
                        entry.icon && <Icon type={entry.icon}/>
                    }
                    {entry.text}
                  </Link>
              ))
            }
          </div>
        </div>
      </nav>
  );
}