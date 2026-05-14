"use client";
import {useCoState} from 'jazz-tools/react';
import {Profile} from '@/schema';

interface ChatHeaderProps {
  userId: string;
}

export default function ChatHeader(props: ChatHeaderProps) {
  const account = useCoState(Profile, props.userId, {resolve: {avatar: true}});
  if (!account.$isLoaded) {
    return <div>Loading ...</div>;
  }
  return (
      <div className="header">
        {account.name}
      </div>
  );
}
