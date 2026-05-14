import {useAccount, useCoState} from 'jazz-tools/react-core';
import {Account} from '@/schema';
import {ChangeEventHandler, SubmitEventHandler, useMemo, useState} from 'react';
import {Group} from 'jazz-tools';
import {Conversation, Message} from '@/features/chat/schema';
import {notifyDiscord} from '@/app/actions';
import Button from '@/components/lib/button';

const adminID = process.env.NEXT_PUBLIC_ADMIN_ID ?? "";
const appURL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";


export default function ChatForm() {
  const [text, set] = useState('');
  const account = useAccount(Account, {
    resolve: {
      root: {
        conversations: {
          $each: true
        }
      }
    }
  });

  const admin = useCoState(Account, adminID, {resolve: {profile: {avatar: true,}}});

  const isSendDisabled = useMemo(() => {
    if (!account.$isLoaded) {
      return true;
    }
    return account.root.conversations.length > 0 && ['pending', 'denied'].includes(account.root.conversations[0].status);
  }, [account]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    set(event.currentTarget.value);
  };

  const sendMessage = async () => {
    if (!account.$isLoaded || !admin.$isLoaded) {
      throw new Error("Account is not loaded");
    }
    if (text.length === 0) return; // ignore empty messages

    let conversationGroup: Group;
    if (!account.root.conversations?.length) {
      conversationGroup = Group.create();
      conversationGroup.addMember(admin, 'admin');
      conversationGroup.addMember(account, 'admin');

      const message = Message.create({text, sender: account, timestamp: Date.now()}, conversationGroup);
      const conversation = Conversation.create({messages: [message], status: 'pending'}, conversationGroup);
      account.root.conversations?.$jazz.push(conversation);
      await notifyDiscord(`${appURL}?conversationId=${conversation.$jazz.id}`);

    } else {
      const conversation = account.root.conversations[0];
      if (conversation.messages?.$isLoaded) {
        const message = Message.create({text, sender: account, timestamp: 100}, conversation.$jazz.owner);
        conversation.messages?.$jazz?.push(message);
      }
    }

    set('');
  };

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