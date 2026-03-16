"use client";
import Link from 'next/dist/client/link';
import "./index.css";

const brand=  "<span><</span>IGDev<span>/></span>";
export default function Menu() {
  return (
      <nav className="menu">
        <Link draggable={false} className="menu__brand" href="#" dangerouslySetInnerHTML={{__html: brand}}/>
        <div className="menu__links">
          <Link draggable={false} className="menu__item" href="/#about">Top</Link>
          <Link draggable={false} className="menu__item" href="/#about">About</Link>
          <Link draggable={false} className="menu__item" href="/">Contact</Link>
        </div>
      </nav>
  );
}