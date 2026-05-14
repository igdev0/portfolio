import {useEffect} from 'react';
import {useAccount, useCoState} from 'jazz-tools/react-core';
import {Account} from '@/schema';
import {Conversation} from '@/features/chat/schema';
import ChatMessage from '@/features/chat/message';

export default function ChatConversation() {
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
