"use client";
import {useAccount} from 'jazz-tools/react';
import {Account} from '@/schema';

export default function ChatConversation() {
  const account = useAccount(Account, {resolve: {root: {conversations: {$each: true}}}});


  if (!account.$isLoaded) {
    return <div>Loading...</div>;
  }

  return (
      <div className="conversation">
        {
          account.root.conversations?.map((conversation) => {
            return (
                <div key={conversation.$jazz.id}>{conversation.$jazz.id} {conversation.status}</div>
            );
          })
        }
        {/*{*/}
        {/*  conversation.messages?.map((message) => {*/}
        {/*    return (*/}
        {/*        <ChatMessage key={message.$jazz.id} conversationId={conversation.$jazz.owner.$jazz.id}/>*/}
        {/*    );*/}
        {/*  })*/}
        {/*}*/}
      </div>
  );
}
