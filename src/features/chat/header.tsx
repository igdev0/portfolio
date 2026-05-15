"use client";
import {useAccount} from 'jazz-tools/react';
import {Account} from '@/schema';

export default function ChatHeader() {
  const account = useAccount(Account, {resolve: {profile: {avatar: true}}});
  if (!account.$isLoaded) {
    return <div>Loading ...</div>;
  }
  return (
      <div className="header">
        {account.profile.name}
      </div>
  );
}
