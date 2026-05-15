"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/experience';
import nav from '@/content/nav';
import hero from '@/content/hero';
import {profile} from '@/content/profile';
import {experience} from '@/content/experience';
import Collaborate from '@/components/lib/collaborate';
import {collaborate} from '@/content/collaborate';
import Footer from '@/components/lib/footer';
import {useSearchParams} from 'next/navigation';
import {Account} from '@/schema';
import {Conversation, Conversations} from '@/features/chat/schema';
import {useAccount, useCoState} from 'jazz-tools/react';
import {useEffect} from 'react';


export default function LandingPage() {
  const query = useSearchParams();
  const conversationId = query.get("conversationId");
  const account = useAccount(Account, {resolve: {root: {conversations: {$each: true}}}});
  const conversation = useCoState(Conversation, conversationId ?? undefined);

  const processInvitation = async () => {

    if (!account.$isLoaded || !conversation.$isLoaded) {
      throw new Error("Conversation or admin account is not loaded");
    }

    const has = account.root.conversations?.some(item => item.$jazz.id === conversationId)??null;

    if(has === null) {
      const conversations = Conversations.create([]);
      conversations.$jazz.push(conversation as keyof object);
      account.root.$jazz.set("conversations", conversations);
      conversation.$jazz.set("status", 'accepted');
    }

    if(!has) {
      account.root.conversations?.$jazz.push(conversation);
      conversation.$jazz.set("status", 'accepted');
    }

  };

  useEffect(() => {
    if(conversation.$isLoaded && account.$isLoaded) {
      processInvitation().catch(console.error);
    }
  }, [conversation.$isLoaded, account.$isLoaded]);

  return (
      <>
        <Nav data={nav}/>
        <Hero data={hero}/>
        <Profile data={profile}/>
        <Expertise data={experience}/>
        <Collaborate data={collaborate}/>
        <Footer/>
      </>
  );
};
