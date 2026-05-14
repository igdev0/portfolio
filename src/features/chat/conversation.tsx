"use client";
import {useCoState} from 'jazz-tools/react';
import {Conversation} from '@/features/chat/schema';
import ChatMessage from '@/features/chat/message';

interface ChatConversationProps {
  conversationId?: string;
}

export default function ChatConversation(props: ChatConversationProps) {
  const conversation = useCoState(Conversation, props.conversationId, {resolve: {messages: {$each: true}}});

  if (!conversation.$isLoaded) {
    return <div>Loading...</div>;
  }

  return (
      <div className="conversation">
        {
          conversation.messages?.map((message) => {
            return (
                <ChatMessage key={message.$jazz.id}
                             id={message.$jazz.id}/>
            );
          })
        }
      </div>

  );
}