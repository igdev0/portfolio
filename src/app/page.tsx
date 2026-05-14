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
import {useEffect} from 'react';
import {Account} from '@/schema';
import {ADMIN_ID} from '@/features/chat/const';
import {Conversation} from '@/features/chat/schema';


export default function LandingPage() {
  const query = useSearchParams();

  const processInvitation = async (conversationId: string) => {
    const account = await Account.load(ADMIN_ID, {resolve: {root: {conversations: {$each: true}}}});
    if (account.$isLoaded) {
      const conversation = await Conversation.load(conversationId, {resolve: {messages: true}});
      let has = false;
      for (const conversation of account.root.conversations ?? []) {
        conversation.$jazz.set("status", 'started');
        if (conversation.$jazz.owner.$jazz.id === conversationId) {
          has = true;
        }
      }
      if (conversation.$isLoaded) {
        conversation.$jazz.set("status", 'started');
        !has && account.root.conversations?.$jazz.push(conversation);
      }

    }
  };

  useEffect(() => {
    const conversationId = query.get("conversationId");
    conversationId && processInvitation(conversationId);
  }, [query]);
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
}
