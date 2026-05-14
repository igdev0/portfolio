"use client";
import {useCoState} from 'jazz-tools/react';
import {Conversation} from '@/features/chat/schema';
import ChatMessage from '@/features/chat/message';
import {ScrollArea} from '@base-ui/react';
import "./index.css";
import {ADMIN_ID} from '@/features/chat/const';
import {useEffect, useRef} from 'react';

interface ChatConversationProps {
  conversationId?: string;
}

export default function ChatConversation(props: ChatConversationProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const conversation = useCoState(Conversation, props.conversationId, {resolve: {messages: {$each: true}}});

  useEffect(() => {
    if (!conversation.$isLoaded || !viewport.current) {
      return;
    }

    viewport.current.scrollTo({
      top: viewport.current.scrollHeight,
    });
  }, [conversation]);

  if (!conversation.$isLoaded) {
    return <div>Loading...</div>;
  }

  return (
      <ScrollArea.Root className="conversation">
        <ScrollArea.Viewport className="conversation-viewport" ref={viewport}>
          <ScrollArea.Content className="conversation-content">
            {
              conversation.messages?.map((message) => {
                return (
                    <ChatMessage key={message.$jazz.id}
                                 isMe={message.sender.$jazz.id === ADMIN_ID}
                                 id={message.$jazz.id}/>
                );
              })
            }
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="conversation-scrollbar">
          <ScrollArea.Thumb className="conversation-thumb"/>
          <ScrollArea.Corner className="conversation-corner"/>
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

  );
}