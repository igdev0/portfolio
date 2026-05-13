import {useAccount, useCoState} from 'jazz-tools/react-core';
import {ChangeEventHandler, KeyboardEventHandler, SubmitEventHandler, useState} from 'react';
import "./index.css";
import {Conversation, Message} from '@/features/chat/schema';
import {Account} from '@/schema';
import {Image} from 'next/dist/client/image-component';
import Button from '@/components/lib/button';
import {Group} from 'jazz-tools';

const adminID = process.env.ADMIN_ID ?? "";

export function ChatHeader() {
  const account = useAccount();
  return (
      <div className="header">

      </div>
  );
}

export function ChatMessage(props: { conversationId: string }) {
  const message = useCoState(Message, props.conversationId, {resolve: {sender: true, text: true, timestamp: true}});
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
  const account = useAccount();
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

  return (
      <div className="conversation">
        {
          state.messages.map((message) => {
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
  const account = useAccount(Account, {resolve: {root: {conversations: {$each: {messages: {$each: true}}}}}});
  const admin = useCoState(Account, adminID);
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    set(event.currentTarget.value);
  };

  const sendMessage = () => {
    if (!account.$isLoaded || !admin.$isLoaded) {
      throw new Error("Account is not loaded");
    }
    if (text.length === 0) return; // ignore empty messages

    let conversation: Conversation;
    let dm: Group;
    if (!account.root.conversations.length) {
      dm = Group.create();
      dm.addMember(account, 'manager');
      dm.addMember(admin, 'admin');
      const message = Message.create({text, sender: account, timestamp: 100}, dm);
      conversation = Conversation.create({messages: [message], status: 'pending'}, dm);

    } else {
      conversation = account.root.conversations[0];
      if (conversation.messages.$isLoaded) {
        const message = Message.create({text, sender: account, timestamp: 100}, conversation.$jazz.owner);
        conversation.messages.$jazz.push(message);
      }

    }


    set('');
  };

  const onSubmit: SubmitEventHandler = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const onKeyUo: KeyboardEventHandler = (event) => {
    if (event.code === 'Enter') {
      sendMessage();
    }
  };

  return (
      <form className="form" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onInputChange} placeholder="Type ..." onKeyUp={onKeyUo}/>
        <Button type="submit" variant="solid" aspect="square" icon="send"/>
      </form>
  );
}

export default function Chat() {

  return (
      <div className="chat">
        <ChatHeader/>
        <ChatConversation/>
        <ChatForm/>
      </div>
  );

}