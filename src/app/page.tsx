"use client";
import TextType from '@/components/lib/TextType';
import Menu from '@/components/ui/menu';
import Hero from '@/components/ui/hero';
import clsx from 'clsx';

const titleCls = clsx("text-white text-5xl");

    export default function LandingPage() {
  return (
      <Hero>
        <Menu/>
        <h1 className={titleCls}>Building:</h1>
        <TextType
            text={["AI Agents", "Smart Contracts", "Bespoke Software"]}
            typingSpeed={75}
            pauseDuration={1500}
            className={titleCls}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
        />
      </Hero>
  );
}
