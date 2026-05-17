"use client";
import "./index.css";
import ChatHeader from '@/features/chat/header';
import ChatConversation from '@/features/chat/conversation';
import ChatForm from '@/features/chat/form';
import {useAccount} from 'jazz-tools/react';
import {Account} from '@/schema';
import {Fragment, useMemo, useState} from 'react';
import {Tabs} from '@base-ui/react/tabs';
import Button from '@/components/lib/button';
import {Conversation, conversationStatus} from '@/features/chat/schema';
import "./admin.css";
import IconButton from '@/components/lib/icon-button';

interface ChatProps {
  conversationId?: string;
}

export function Chat(props: ChatProps) {
  const {conversationId} = props;
  return (
      <div className="chat">
        <ChatHeader conversationId={conversationId}/>
        <ChatConversation conversationId={conversationId}/>
        <ChatForm conversationId={conversationId}/>
      </div>
  );
}

export default function ChatApp() {
  const account = useAccount(Account, {
    resolve: {
      root: {conversations: {$each: {participants: {$each: {profile: true}}}}},
      profile: {avatar: true}
    }
  });
  const [conversationIndex, setConversationIndex] = useState(-1);

  const canAdmin = useMemo(() => {
    return account.$isLoaded && account.root.conversations?.length && account.canAdmin(account.root.conversations!.at(conversationIndex) as Conversation);
  }, [conversationIndex, account]);

  if (!account.$isLoaded) {
    return (
        <div>Loading ...</div>
    );
  }

  if (canAdmin) {
    return (
        <Tabs.Root className="tabs relative">
          <Tabs.List className="tabs-header">
            {
                account.root.conversations && account.root.conversations?.map((conversation, index) => {
                  return (
                      <Fragment key={index}>
                        <Tabs.Tab value={index} className="tabs-tab" nativeButton
                                  render={(_, state) => <Button onClick={_.onClick as keyof object} variant="secondary"
                                                                disabled={state.active}
                                                                active={state.active}>{conversation.participants && conversation.participants[1]?.profile.name}</Button>}/>
                        <Tabs.Indicator/>
                      </Fragment>
                  );
                })
            }
          </Tabs.List>
          {
              account.root.conversations && account.root.conversations?.map((conversation, index) => {
                return (
                    <Tabs.Panel key={index} value={index}>
                      <div className="flex gap-2 flex-col flex-wrap absolute border top-0 -right-3 translate-x-full z-100 bg-gray-100 p-2 rounded-sm border-(--semigrid)">
                        <IconButton
                                icon="trash"
                                className="mb-2 w-fit"
                                onClick={() => account.root.conversations!.$jazz.remove(index)} aspect="square" size="xs"/>
                        {
                          conversationStatus.map((status) => (
                              <Button key={status} variant="outline" active={conversation.status === status}
                                      disabled={conversation.status === status}
                                      onClick={() => conversation.$jazz.set("status", status)}>{status} </Button>
                          ))
                        }
                      </div>
                      <Chat conversationId={conversation.$jazz.id}/>
                    </Tabs.Panel>
                );
              })
          }
        </Tabs.Root>
    );
  }

  return (
      <Chat conversationId={account.root?.conversations?.at(conversationIndex)?.$jazz.id}/>
  );

}