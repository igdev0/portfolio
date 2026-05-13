"use client";
import {JazzReactProvider} from "jazz-tools/react";
import {Account} from '@/schema';
import {PropsWithChildren} from 'react';

const apiKey = process.env.JAZZ_API_KEY as string;


const peer: `wss://${string}` = `wss://cloud.jazz.tools/?key=${apiKey}`;

export function JazzSetup(props: PropsWithChildren) {
  const {children} = props;
  return (
      <JazzReactProvider sync={{peer}} AccountSchema={Account}>
        {children}
      </JazzReactProvider>
  );
}