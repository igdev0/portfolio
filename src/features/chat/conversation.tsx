"use client";
import {useCoState} from 'jazz-tools/react';
import {Conversation} from '@/features/chat/schema';
import ChatMessage from '@/features/chat/message';
import {ScrollArea} from '@base-ui/react';
import {ADMIN_ID} from '@/features/chat/const';
import {useEffect, useRef} from 'react';
import "./index.css";
import {Info} from 'lucide-react';

interface ChatConversationProps {
  conversationId?: string;
}

export default function ChatConversation(props: ChatConversationProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const conversation = useCoState(Conversation, props.conversationId, {resolve: {messages: {$each: {sender: true}}}});

  useEffect(() => {
    if (!conversation.$isLoaded || !viewport.current) {
      return;
    }

    viewport.current.scrollTo({
      top: viewport.current.scrollHeight,
    });
  }, [conversation]);


  return (
      <ScrollArea.Root className="conversation">
        <ScrollArea.Viewport className="conversation-viewport" ref={viewport}>
          <ScrollArea.Content className="conversation-content">
            {

              conversation.$isLoaded && conversation?.messages?.map((message) => {
                return (
                    <ChatMessage key={message.$jazz.id}
                                 isMe={message.sender?.$jazz.id === ADMIN_ID}
                                 id={message.$jazz.id}/>
                );
              })
            }
            {
              !props.conversationId && (
                  <div className="panel">
                    <Info className="mr-3"/>
                    You can only send up to one message before I accept your message request.
                  </div>
                )
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