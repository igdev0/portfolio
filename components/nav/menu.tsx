"use client";
import {Dispatch, Ref, SetStateAction, useImperativeHandle, useState} from 'react';
import clsx from 'clsx';
import {NavProps} from '@/components/nav/index';

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
      </div>
  );
}