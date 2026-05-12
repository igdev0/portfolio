import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';
import "./index.css";
import LinkButton from '@/components/lib/link-button';
import {IconNames} from '@/components/lib/icon';
import {MessageCircle} from 'lucide-react';
import Button from '@/components/lib/button';
import {SubmitEventHandler, useState} from 'react';
import {notifyDiscord} from '@/app/actions';

interface CollaborateProps {
  data: CollaborateType;
}

export default function Collaborate(props: CollaborateProps) {
  const [message, setMessage] = useState('');
  const {data} = props;

  const handleSubmit: SubmitEventHandler = async (event) => {
    event.preventDefault();
    await notifyDiscord(message);
    setMessage("");
  };

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
          <form onSubmit={handleSubmit} className="mt-2">
            <label className="flex flex-col gap-4 w-full h-full" htmlFor="message">
              <div className="flex flex-wrap-reverse w-full gap-4 items-baseline justify-between">
                <span className="flex gap-4 mb-2">
                <MessageCircle/><span>Write me a message:</span>
                </span>
                <LinkButton size="small" className="w-fit" external href={props.data.social.calendar.href}
                            icon="calendar">
                  {props.data.social.calendar.text}
                </LinkButton>
              </div>
              <textarea className="border border-(--semigrid) p-2 rounded-sm h-30" name="message"
                        value={message}
                        onChange={(event) => setMessage(event.currentTarget.value)}
                        placeholder="Say Hello ..."/>
              <Button className="self-end" variant="solid-light" type="submit" icon="send"
                      aspect="square"
                      iconPosition="right"></Button>
            </label>
          </form>
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