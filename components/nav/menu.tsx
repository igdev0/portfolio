"use client";
import {Dispatch, Ref, SetStateAction, useImperativeHandle, useState} from 'react';
import clsx from 'clsx';
import IconButton from '@/components/icon-button';
import {NavProps} from '@/components/nav/index';
import Link from 'next/dist/client/link';

export default function NavMenu(props: NavProps & { ref: Ref<{ setMenuOpen: Dispatch<SetStateAction<boolean>> }> }) {
  const {links} = props;
  const [menuOpen, setMenuOpen] = useState(false);

  useImperativeHandle(props.ref, () => {
    return {
      setMenuOpen,
    };
  }, []);

  return (

      <div className={clsx('nav__drawer', menuOpen ? 'open' : 'close')}>
        <IconButton label="Menu Close" icon="x" onClick={() => setMenuOpen(false)}/>
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
  );
}