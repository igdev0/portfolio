import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';
import "./index.css";
import LinkButton from '@/components/lib/link-button';
import {IconNames} from '@/components/lib/icon';
import {usePasskeyAuth} from 'jazz-tools/react';
import Button from '@/components/lib/button';
import Chat from '@/features/chat';

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
        <div className="max-w-150 gap-6 w-full">
          {/*<BasicMessage book={{text: props.data.social.calendar.text, href: props.data.social.calendar.href}}/>*/}
          <Chat/>
          <Button onClick={auth.logIn}>Log in</Button>
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