"use client";
import Link from 'next/dist/client/link';
import "./index.css";

export default function Menu() {
  return (
      <nav className="menu">
        <Link className="menu__item" href="/#about">Top</Link>
        <Link className="menu__item" href="/#about">About</Link>
        <Link className="menu__item" href="/">Contact</Link>
      </nav>
  );
}