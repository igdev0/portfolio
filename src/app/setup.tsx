"use client";
import {JazzReactProvider} from "jazz-tools/react";
import {Account} from '@/schema';
import {PropsWithChildren} from 'react';
import {JazzInspector} from 'jazz-tools/inspector';

const apiKey = process.env.NEXT_PUBLIC_JAZZ_API_KEY as string;


const peer: `wss://${string}` = `wss://cloud.jazz.tools/?key=${apiKey}`;

export function JazzSetup(props: PropsWithChildren) {
  const {children} = props;
  return (
      <JazzReactProvider sync={{peer}} AccountSchema={Account}>
        {process.env.NODE_ENV === 'development' && <JazzInspector/>}
        {children}
      </JazzReactProvider>
  );
}