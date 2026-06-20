"use client";
import {SubmitEventHandler, useState} from 'react';
import {notifyDiscord} from '@/app/(frontend)/actions';
import {MessageCircle, XIcon} from 'lucide-react';
import LinkButton from '@/components/link-button';
import IconButton from '@/components/icon-button';

interface BasicMessageProps {
  book: {
    text: string;
    href: string;
  }
}

export default function BasicMessage(props: BasicMessageProps) {

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit: SubmitEventHandler = async (event) => {
    event.preventDefault();
    if (message.length) {
      await notifyDiscord(message);
      setMessage("");
      setSuccess(true);
    }
  };

  return (
      <>

        <form onSubmit={handleSubmit} className="mt-2">
          <label className="flex flex-col gap-4 w-full h-full" htmlFor="message">
            <div className="flex flex-wrap-reverse w-full gap-4 items-baseline justify-between">
                <span className="flex gap-4 mb-2">
                <MessageCircle/><span>Write me a message:</span>
                </span>
              <LinkButton size="small" className="w-fit" external href={props.book.href}
                          icon="calendar">
                {props.book.text}
              </LinkButton>
            </div>
            <textarea className="border border-(--grid) p-2 rounded-sm h-30" name="message"
                      value={message}
                      onChange={(event) => setMessage(event.currentTarget.value)}
                      placeholder="Type ..."/>
            <IconButton className="self-end" size="sm" type="submit" icon="send" disabled={message.length === 0}/>
          </label>
        </form>
        {
            success && (
                <div
                    className="relative rounded-sm bg-(--surface-2) p-2 mb-6 flex items-center border border-(--grid) w-fit">
                  Message received. Looking forward to reading it.
                  <button className="cursor-pointer pl-2" onClick={() => setSuccess(false)}>
                    <XIcon/>
                  </button>
                </div>
            )
        }
      </>
  )
}