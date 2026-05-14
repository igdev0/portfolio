"use client";
import {Image} from 'next/dist/client/image-component';
import {useCoState} from 'jazz-tools/react';
import {Message} from '@/features/chat/schema';

interface ChatMessageProps {
  id: string;
}

export default function ChatMessage(props: ChatMessageProps) {
  const {id} = props;
  const message = useCoState(Message, id, {resolve: {sender: {profile: true}}})
  if(!message.$isLoaded) {
    return (
        <div>
          Loading ..
        </div>
    )
  }
  return (

      <div className="message">
        <div className="message-header">
          <div className="avatar">
            <Image src="/icons/circle-user.svg" alt="Alt" width={40} height={40}/>
          </div>
          <div>
            {message.sender.profile.name}
          </div>
        </div>
        <div className="message-text">{message.text}</div>
        <div className="date">timestamp: {message.timestamp}</div>
      </div>
  );
}