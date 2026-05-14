"use client";
import {Image} from 'next/dist/client/image-component';
import {useCoState} from 'jazz-tools/react';
import {Message} from '@/features/chat/schema';
import moment from 'moment';
import clsx from 'clsx';

interface ChatMessageProps {
  id: string;
  isMe: boolean;
}

export default function ChatMessage(props: ChatMessageProps) {
  const {id, isMe} = props;
  const message = useCoState(Message, id, {resolve: {sender: {profile: true}}});
  if (!message.$isLoaded) {
    return (
        <div>
          Loading ..
        </div>
    );
  }

  return (

      <div className={clsx('message', isMe ? " me" : "")}>
        <div className="message-header">
          <div className="avatar">
            <Image src="/icons/circle-user.svg" alt="Alt" width={25} height={25}/>
          </div>
          <input type="text" value={message.sender.profile.name} disabled={true}/>
        </div>
        <div className="message-text">{message.text}</div>
        <div className="date">{moment(message.timestamp).format('h:mm A')}</div>
      </div>
  );
}