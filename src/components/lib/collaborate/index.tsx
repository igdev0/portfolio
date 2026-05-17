import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';
import LinkButton from '@/components/lib/link-button';
import {IconNames} from '@/components/lib/icon';
import Chat from '@/features/chat';
import {LockIcon} from 'lucide-react';
import {useAccount} from 'jazz-tools/react';
import {Account} from '@/schema';
import "./index.css";

interface CollaborateProps {
  data: CollaborateType;
}

export default function Collaborate(props: CollaborateProps) {
  const {data} = props;
  const account = useAccount(Account);
  return (
      <Container className="pt-40 pb-4" id="collaborate">
        <Comment>
          {data.comment}
        </Comment>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <Statement className="mb-12">
          {data.statement}
        </Statement>
        <div className="max-w-120 gap-6 w-full mb-4">
          <div className="panel gap-2 mb-3" onClick={() => window.navigator.clipboard.writeText(account.$jazz.id)}>
            <LockIcon className="text-accent-500"/>
            <p>
              This chat is end-to-end encrypted and built from scratch using <a
                  className="text-accent-500 underline"
                  href="https://classic.jazz.tools"
                  target="_blank"
              >
                Classic Jazz
              </a>
              , a local-first distributed database.
            </p>
          </div>
          <Chat/>
        </div>

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