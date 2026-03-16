"use client";
import Link from 'next/dist/client/link';
import "./index.css";

const brand=  "<span><</span>IGDev<span>/></span>";
export default function Menu() {
  return (
      <nav className="menu">
        <Link draggable={false} className="menu__brand" href="#" dangerouslySetInnerHTML={{__html: brand}}/>
        <div className="menu__links">
          <Link draggable={false} className="menu__item" href="/#about">Root</Link>
          <Link draggable={false} className="menu__item" href="/#about">About</Link>
          <Link draggable={false} className="menu__item" href="/">Contact</Link>
          <Link draggable={false} className="menu__item" href="https://github.com/igdev0" target="_blank"><img src="/icons/github-brands-solid-full.svg" alt="github" width={30} height={30}/></Link>
        </div>
      </nav>
  );
}