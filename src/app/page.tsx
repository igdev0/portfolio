"use client";
import Hero from '@/components/ui/hero';
import Container from '@/components/ui/container';
import Background from '@/components/ui/background';
import Menu from '@/components/ui/menu';

export default function LandingPage() {
  return (
      <Container>
        <Background/>
        <Menu/>
        <Hero/>
      </Container>
  );
}
