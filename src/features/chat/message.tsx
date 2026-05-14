"use client";
import {useCoState} from 'jazz-tools/react';
import {Message} from '@/features/chat/schema';
import {Image} from 'next/dist/client/image-component';

export default function ChatMessage(props: { conversationId: string }) {
  const message = useCoState(Message, props.conversationId, {resolve: {sender: true}});

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
          <Image src="/icons/circle-user.svg" alt="Alt" width={40} height={40}/>
        </div>
        <span className="name">{message.sender.name}</span>
        <span className="message">{message.text}</span>
        <span className="date">{new Date(message.timestamp).getDate()}</span>
      </div>
  );
}