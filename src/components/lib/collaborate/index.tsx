import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';
import "./index.css";
import LinkButton from '@/components/lib/link-button';
import {IconNames} from '@/components/lib/icon';
import {usePasskeyAuth} from 'jazz-tools/react';
import Chat from '@/features/chat';
import Button from '@/components/lib/button';
import {LockIcon} from 'lucide-react';

interface CollaborateProps {
  data: CollaborateType;
}

export default function Collaborate(props: CollaborateProps) {
  const {data} = props;
  const auth = usePasskeyAuth({appName: "IGDev's portfolio"});

  return (
      <Container className="pt-40 pb-4" id="collaborate">
        <Comment>
          {data.comment}
        </Comment>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <Statement>
          {data.statement}
        </Statement>
        <div className="max-w-120 gap-6 w-full">
          {auth.state !== 'signedIn' && <Button className="mb-2" onClick={auth.logIn}>Log in</Button>}
          <div className="panel gap-2 mb-3">
            <LockIcon className="text-accent-500"/>
            <p>This chat is end-to-end encrypted and built using <a className="text-accent-500 underline" href="https://jazz-tools.com">Jazz</a>, local-first architecture.</p>
          </div>
          <Chat/>
        </div>

        <span className="font-bold inline-block mb-3">Lets Connect on:</span>
        <div className="flex gap-4 w-fit">
          {
            Object.entries(props.data.social).filter(([key]) => key !== 'calendar').map(([key, value]) => (
                <LinkButton icon={key as IconNames} size="xs" key={key} href={value.href} aspect="square" external
                            variant="outline"

                            className="w-fit">
                  {value.text}
                </LinkButton>
            ))
          }
        </div>
      </Container>
  );
}