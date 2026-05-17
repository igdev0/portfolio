import {Heart} from 'lucide-react';
import Container from '@/components/lib/container';
import {usePasskeyAuth} from 'jazz-tools/react';

export default function Footer() {
  const auth = usePasskeyAuth({appName: "IGDev's portfolio"});
  return (
      <Container className="flex justify-center items-center pb-2">
        <span className="flex gap-2 text-sm items-center my-6 md:my-8" onClick={auth.logIn}>Built with <Heart className="text-indigo-500"/></span>
      </Container>
  );
}