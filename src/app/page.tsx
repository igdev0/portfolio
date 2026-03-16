"use client";
import Menu from '@/components/ui/menu';
import Hero from '@/components/ui/hero';
import Container from '@/components/ui/container';
import Background from '@/components/ui/background';

export default function LandingPage() {
  return (
      <Container>
        <Background/>
        <Menu/>
        <Hero/>
      </Container>
  );
}
