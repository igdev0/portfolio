"use client";
import "./index.css";
import ChatHeader from '@/features/chat/header';
import ChatConversation from '@/features/chat/conversation';
import ChatForm from '@/features/chat/form';


export default function Chat() {
  return (
      <div className="chat">
        <ChatHeader/>
        <ChatConversation/>
        <ChatForm/>
      </div>
  );

}