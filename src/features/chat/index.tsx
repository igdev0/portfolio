"use client";
import {useAccount, useCoState} from 'jazz-tools/react-core';
import {ChangeEventHandler, KeyboardEventHandler, SubmitEventHandler, useEffect, useMemo, useState} from 'react';
import "./index.css";
import {Conversation, Message} from '@/features/chat/schema';
import {Account} from '@/schema';
import {Image} from 'next/dist/client/image-component';
import Button from '@/components/lib/button';
import {Group} from 'jazz-tools';
import {notifyDiscord} from '@/app/actions';

const adminID = process.env.NEXT_PUBLIC_ADMIN_ID ?? "";
const appURL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function ChatHeader() {
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

export function ChatMessage(props: { conversationId: string }) {

  const message = useCoState(Message, props.conversationId, {resolve: {sender: true, text: true, timestamp: true}});
  if (!message.$isLoaded) {
    return (
        <div>
          Loading ...
        </div>
    );
  }

  return (

      <div key={message.$jazz.id}>
        <div className="avatar">
          <Image src="/icons/circle-user.svg" alt={message.sender.profile.name} width={40} height={40}/>
        </div>
        <span className="name">{message.sender.profile.name}</span>
        <span className="message">{message.text}</span>
        <span className="date">{new Date(message.timestamp).getDate()}</span>
      </div>
  );
}

export function ChatConversation() {
  const account = useAccount(Account, {resolve: {root: {conversations: {$each: true}}}});
  const state = useCoState(Conversation, account.$jazz.id, {
    resolve: {
      messages: {
        $each: true
      }
    }
  });

  if (!state.$isLoaded) {
    return (<div>Loading ..</div>);
  }

  useEffect(() => {
    if (!account.$isLoaded) {
      return;
    }


  }, [account]);

  return (
      <div className="conversation">
        {
          state.messages?.map((message) => {
            return (
                <ChatMessage key={message.$jazz.id} conversationId={state.$jazz.id}/>
            );
          })
        }
      </div>
  );
}

export function ChatForm() {
  const [text, set] = useState('');
  const account = useAccount(Account, {
    resolve: {
      root: {
        conversations: {
          $each: true
        }
      }
    }
  });

  const admin = useCoState(Account, adminID, {resolve: {profile: {avatar: true,}}});

  const isSendDisabled = useMemo(() => {
    if (!account.$isLoaded) {
      return true;
    }
    return account.root.conversations.length > 0 && ['pending', 'denied'].includes(account.root.conversations[0].status);
  }, [account]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    set(event.currentTarget.value);
  };

  if (!account.$isLoaded) {
    return <div>Loading ...</div>;
  }

  const sendMessage = async () => {
    if (!account.$isLoaded || !admin.$isLoaded) {
      throw new Error("Account is not loaded");
    }
    if (text.length === 0) return; // ignore empty messages

    let conversationGroup: Group;
    if (!account.root.conversations?.length) {
      conversationGroup = Group.create();
      conversationGroup.addMember(admin, 'admin');
      conversationGroup.addMember(account, 'admin');

      const message = Message.create({text, sender: account, timestamp: Date.now()}, conversationGroup);
      const conversation = Conversation.create({messages: [message], status: 'pending'}, conversationGroup);
      account.root.conversations?.$jazz.push(conversation);
      await notifyDiscord(`${appURL}?conversationId=${conversation.$jazz.id}`);

    } else {
      const conversation = account.root.conversations[0];
      if (conversation.messages?.$isLoaded) {
        const message = Message.create({text, sender: account, timestamp: 100}, conversation.$jazz.owner);
        conversation.messages?.$jazz?.push(message);
      }
    }

    set('');
  };

  const onSubmit: SubmitEventHandler = async (event) => {
    event.preventDefault();
    await sendMessage();
  };

  const onKeyUo: KeyboardEventHandler = async (event) => {
    if (event.code === 'Enter') {
      // await sendMessage();
    }
  };

  return (
      <form className="form" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onInputChange} placeholder="Type ..." onKeyUp={onKeyUo}/>
        <Button disabled={isSendDisabled} type="submit" variant="solid" aspect="square" icon="send"/>
      </form>
  );
}

export default function Chat() {
  const account = useAccount();
  return (
      <div className="chat">
        <ChatHeader/>
        <ChatConversation/>
        <ChatForm/>
      </div>
  );

}