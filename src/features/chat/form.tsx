"use client";
import {Account} from '@/schema';
import {ChangeEventHandler, SubmitEventHandler, useMemo, useState} from 'react';
import {Conversation, Message} from '@/features/chat/schema';
import Button from '@/components/lib/button';
import {useAccount} from 'jazz-tools/react';


interface ChatFormProps {
  account: Account;
  admin: Account;
  conversation?: Conversation;

  initializeConversation(text: string): Promise<void>;

}

export default function ChatForm(props: ChatFormProps) {
  const [text, set] = useState('');
  const {conversation, initializeConversation, admin} = props;
  const account = useAccount(Account, {resolve: {profile: true, root: {conversations: {$each: true}}}});
  const isSendDisabled = useMemo(() => {
    if(conversation) {
      return ['pending', 'denied'].includes(conversation.status);
    }
    return false;
  }, [conversation]);
  const sendMessage = async () => {
    if (!account.$isLoaded || !admin.$isLoaded || !account.root.$isLoaded || !account.root.conversations?.$isLoaded) {
      throw new Error("Account is not loaded");
    }
    if (text.length === 0) return;


    if (!account.root.conversations || account.root.conversations.length === 0) {
      await initializeConversation(text);
    } else if(conversation) {
      if (conversation.$isLoaded) {
        if (conversation.messages?.$isLoaded) {
          const message = Message.create({
            text,
            sender: account.profile,
            timestamp: Date.now()
          }, conversation.$jazz.owner);
          conversation.messages.$jazz.push(message);
        }
      }
    }

    set('');
  };

  const onInputChange:ChangeEventHandler<HTMLInputElement> = (event) => {
    set(event.currentTarget.value);
  }

  const onSubmit: SubmitEventHandler = async (event) => {
    event.preventDefault();
    await sendMessage();
  };

  if (!account.$isLoaded) {
    return <div>Loading ...</div>;
  }

  return (
      <form className="form" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onInputChange} placeholder="Type ..."/>
        <Button disabled={isSendDisabled} type="submit" variant="solid" aspect="square" icon="send"/>
      </form>
  );
}