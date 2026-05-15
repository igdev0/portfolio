"use client";
import "./index.css";
import ChatHeader from '@/features/chat/header';
import ChatConversation from '@/features/chat/conversation';
import ChatForm from '@/features/chat/form';
import {useAccount, useCoState} from 'jazz-tools/react';
import {Account} from '@/schema';
import {useMemo} from 'react';
import {ADMIN_ID} from '@/features/chat/const';

interface ChatProps {
  conversationId?: string;
}

export function Chat(props: ChatProps) {
  const {conversationId} = props;
  return (
      <div className="chat">
        <ChatHeader/>
        <ChatConversation conversationId={conversationId}/>
        <ChatForm conversationId={conversationId}/>
      </div>
  )
}

export default function ChatApp() {
  const account = useAccount(Account, {resolve: {root: {conversations: {$each: true}}, profile: {avatar: true}}});
  const admin = useCoState(Account, ADMIN_ID);

  const conversation = useMemo(() => {
    if (!account.$isLoaded) {
      return undefined;
    }

    if (!account.root.conversations) {
      return undefined;
    }

    if (!account.root.conversations.length) {
      return undefined;
    }

    return account.root.conversations.at(-1);
  }, [account]);

  if (!admin.$isLoaded || !account.$isLoaded || (conversation && !conversation.$isLoaded)) {
    return <div>Loading ...</div>;
  }

  return (
      <Chat conversationId={conversation?.$jazz.id}/>
  );

}