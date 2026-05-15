"use client";
import "./index.css";
import ChatHeader from '@/features/chat/header';
import ChatConversation from '@/features/chat/conversation';
import ChatForm from '@/features/chat/form';
import {useAccount, useCoState} from 'jazz-tools/react';
import {Account} from '@/schema';
import {useMemo} from 'react';
import {co, Group} from 'jazz-tools';
import {Conversation, Conversations, Message} from '@/features/chat/schema';
import {notifyDiscord} from '@/app/actions';
import {ADMIN_ID, APP_URL} from '@/features/chat/const';


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


  const initializeConversation = async (text: string) => {
    if (!account.$isLoaded || !admin.$isLoaded) {
      throw new Error("Account is not loaded");
    }
    const group = Group.create();
    group.addMember(admin, 'admin');
    group.addMember(account, 'manager');

    const conversations = Conversations.create([], group);

    const message = Message.create({text, sender: account, timestamp: Date.now()}, group);
    const messages = co.list(Message).create([], group);

    messages.$jazz.push(message);

    const conversation = Conversation.create({
      messages,
      status: 'pending'
    }, group);

    conversations.$jazz.push(conversation);

    account.root.$jazz.set("conversations", conversations);

    await notifyDiscord(`${APP_URL}?conversationId=${conversation.$jazz.id}`);

  };

  if (!admin.$isLoaded || !account.$isLoaded || (conversation && !conversation.$isLoaded)) {
    return <div>Loading ...</div>;
  }
  return (
      <div className="chat">
        <ChatHeader userId={account.$jazz.id}/>
        <ChatConversation conversationId={conversation?.$jazz.id}/>
        <ChatForm account={account}
                  initializeConversation={initializeConversation}
                  conversation={conversation}
        />
      </div>
  );

}