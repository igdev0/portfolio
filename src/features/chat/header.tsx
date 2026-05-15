"use client";
import {useAccount, useCoState} from 'jazz-tools/react';
import {Account} from '@/schema';
import {ADMIN_ID} from '@/features/chat/const';

export default function ChatHeader() {
  const adminAccount = useCoState(Account, ADMIN_ID, {resolve: {profile: {avatar: true}}});
  const account = useAccount(Account, {resolve: {profile: {avatar: true}}});
  if (!account.$isLoaded || !adminAccount.$isLoaded) {
    return <div>Loading ...</div>;
  }
  return (
      <div className="header">
        <div className="header-account">
          {adminAccount.profile.name}
        </div>
        <div className="header-account">
          {account.profile.name}
        </div>
      </div>
  );
}
