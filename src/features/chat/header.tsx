"use client";
import {useAccount} from 'jazz-tools/react';
import {Account} from '@/schema';

export default function ChatHeader() {
  const account = useAccount(Account, {resolve: {profile: true}});
  if (!account.$isLoaded) {
    return <div>Loading ...</div>;
  }
  return (
      <div className="header">
        {account.profile.name}
      </div>
  );
}
