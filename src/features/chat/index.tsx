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


const adminID = process.env.NEXT_PUBLIC_ADMIN_ID ?? "";
const appURL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Chat() {
  const account = useAccount(Account, {resolve: {root: {conversations: {$each: true}}, profile: true}});
  const admin = useCoState(Account, adminID);
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

    return account.root.conversations[0];
  }, [account]);


  const initializeConversation = async (text: string) => {
    if (!account.$isLoaded || !admin.$isLoaded) {
      throw new Error("Account is not loaded");
    }
    let conversationGroup: Group;
    conversationGroup = Group.create();
    conversationGroup.addMember(admin, 'admin');
    conversationGroup.addMember(account, 'manager');


    const message = Message.create({text, sender: account.profile, timestamp: Date.now()}, conversationGroup);
    const conversation = Conversation.create({
      messages: co.list(Message).create([message], conversationGroup),
      status: 'pending'
    }, conversationGroup);

    account.root.$jazz.set("conversations", Conversations.create([conversation], conversationGroup));
    await notifyDiscord(`${appURL}?conversationId=${conversationGroup.$jazz.id}`);

  };

  if (!admin.$isLoaded || !account.$isLoaded || (conversation && !conversation.$isLoaded)) {
    return <div>Loading ...</div>;
  }


  return (
      <div className="chat">
        <ChatHeader userId={account.$jazz.id}/>
        <ChatConversation conversationId={conversation?.$jazz.id}/>
        <ChatForm admin={admin} account={account} initializeConversation={initializeConversation}
                  conversation={conversation}/>
      </div>
  );

}