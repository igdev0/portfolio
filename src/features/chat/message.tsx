"use client";
import {useCoState} from 'jazz-tools/react';
import {Message} from '@/features/chat/schema';
import moment from 'moment';
import clsx from 'clsx';
import {UserCircle} from 'lucide-react';

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

      <div className={clsx('message', isMe ? " message--owned" : "")}>
        <div className="message-header">
          <div className="message-avatar">
            <UserCircle/>
          </div>
          <input className="message-sender" type="text" value={message.sender.profile.name} disabled={true}/>
        </div>
        <div className="message-text">{message.text}</div>
        <div className="message-time">{moment(message.timestamp).format('h:mm A')}</div>
      </div>
  );
}