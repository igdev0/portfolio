import {Heart} from 'lucide-react';
import Container from '@/components/container';

export default function Footer() {
  return (
      <Container className="flex justify-center items-center pb-2">
        <span className="flex gap-2 text-sm items-center mb-6 md:mb-8">Built with <Heart className="text-indigo-500"/></span>
      </Container>
  );
}