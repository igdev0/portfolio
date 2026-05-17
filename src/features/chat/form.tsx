"use client";
import {Account} from '@/schema';
import {ChangeEventHandler, SubmitEventHandler, useMemo, useState} from 'react';
import {Conversation, Conversations, Message, Participants} from '@/features/chat/schema';
import {useAccount, useCoState} from 'jazz-tools/react';
import {co, Group} from 'jazz-tools';
import {ADMIN_ID, APP_URL} from '@/features/chat/const';
import {notifyDiscord} from '@/app/actions';
import IconButton from '@/components/lib/icon-button';


interface ChatFormProps {
  conversationId?: string;
}

export default function ChatForm(props: ChatFormProps) {
  const [text, set] = useState('');
  const {conversationId} = props;
  const account = useAccount(Account, {resolve: {root: {conversations: {$each: true}}}});
  const adminAccount = useCoState(Account, ADMIN_ID);
  const conversation = useCoState(Conversation, conversationId, {resolve: {messages: {$each: true}}});

  const isSendDisabled = useMemo(() => {
    if (conversation.$isLoaded) {
      return ['pending', 'closed'].includes(conversation.status);
    }
    return false;
  }, [conversation, account]);


  const initializeConversation = async (text: string) => {
    if (!account.$isLoaded || !adminAccount.$isLoaded) {
      throw new Error(`${!adminAccount.$isLoaded ? "Admin" : 'User'} account is not loaded`);
    }
    const group = Group.create();
    group.addMember(adminAccount, 'admin');
    group.addMember(account, 'writer');

    const conversations = Conversations.create([], group);

    const message = Message.create({text, sender: account, timestamp: Date.now()}, group);
    const messages = co.list(Message).create([], group);

    messages.$jazz.push(message);

    const conversation = Conversation.create({
      messages,
      status: 'pending',
      participants: Participants.create([adminAccount, account], group),
    }, group);

    conversations.$jazz.push(conversation);

    account.root.$jazz.set("conversations", conversations);

    await notifyDiscord(`${APP_URL}?conversationId=${conversation.$jazz.id}`);
    set("");
  };


  const sendMessage = async () => {
    if (!text.trim().length) {
      return;
    }
    if (!conversation.$isLoaded) {
      return await initializeConversation(text);
    }

    if (!account.$isLoaded || !conversation.$isLoaded) throw new Error('Conversation or account is not loaded');

    if (!conversation.messages) {
      throw new Error(`Conversation was initiated, but doesn't have messages list, avoiding to send messages.`);
    }

    const message = Message.create({
      text,
      sender: account,
      timestamp: Date.now()
    }, conversation.$jazz.owner);

    conversation.messages.$jazz.push(message);

    set('');
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    set(event.currentTarget.value);
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
        <IconButton disabled={isSendDisabled} type="submit" variant="solid" aspect="square" icon="send"/>
      </form>
  );
}