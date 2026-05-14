"use client";
import {useAccount, useCoState} from 'jazz-tools/react';
import {Account} from '@/schema';
import {ChangeEventHandler, SubmitEventHandler, useMemo, useState} from 'react';
import {co, Group} from 'jazz-tools';
import {Conversation, Conversations, Message} from '@/features/chat/schema';
import {notifyDiscord} from '@/app/actions';
import Button from '@/components/lib/button';

const adminID = process.env.NEXT_PUBLIC_ADMIN_ID ?? "";
const appURL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";


export default function ChatForm() {
  const [text, set] = useState('');
  const account = useAccount(Account, {
    resolve: {
      root: {
        conversations: {
          $each: true,
        },
      },
      profile: true,
    }
  });

  const admin = useCoState(Account, adminID, {resolve: {profile: {avatar: true}}});

  const isSendDisabled = useMemo(() => {
    if (!account.$isLoaded) {
      return true;
    }

    if (!account.root.conversations) {
      return false;
    }

    return account.root.conversations.length > 0 && ['pending', 'denied'].includes(account.root.conversations[0].status);

  }, [account]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    set(event.currentTarget.value);
  };


  const initializeConversation = async () => {
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

  const sendMessage = async () => {
    if (!account.$isLoaded || !admin.$isLoaded) {
      throw new Error("Account is not loaded");
    }
    if (text.length === 0) return; // ignore empty messages
    if (!account.root.conversations || account.root.conversations.length === 0) {
      await initializeConversation();
    } else {
      const conversation = account.root.conversations[0];
      if (conversation.messages?.$isLoaded) {
        const message = Message.create({
          text,
          sender: account.profile,
          timestamp: Date.now()
        }, conversation.$jazz.owner);
        conversation.messages.$jazz.push(message);
      }
    }

    set('');
  };

  const onSubmit: SubmitEventHandler = async (event) => {
    event.preventDefault();
    await sendMessage();
  };

  if (!account.$isLoaded) {
    return <div>Loading ...</div>;
  }

  return (
      <form className="form" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onInputChange} placeholder="Type ..."/>
        <Button disabled={isSendDisabled} type="submit" variant="solid" aspect="square" icon="send"/>
      </form>
  );
}