"use client";
import {useAccount, useCoState} from 'jazz-tools/react';
import {Account} from '@/schema';
import {ADMIN_ID} from '@/features/chat/const';
import {ChangeEventHandler, useState} from 'react';
import {Check, Pen, XIcon} from 'lucide-react';
import {Conversation} from '@/features/chat/schema';
import {Image} from 'next/dist/client/image-component';

interface Field {
  value: string | null;
  editing: boolean;
}

interface ChatHeaderProps {
  conversationId?: string;
}

export default function ChatHeader(props: ChatHeaderProps) {
  const conversation = useCoState(Conversation, props.conversationId, {resolve: {participants: {$each: {profile: true}}}});
  const adminAccount = useCoState(Account, ADMIN_ID, {resolve: {profile: {avatar: true}}});
  const account = useAccount(Account, {resolve: {profile: {avatar: true}}});
  const [fields, setFields] = useState<{ admin: Field, user: Field }>({
    admin: {value: null, editing: false},
    user: {value: null, editing: false}
  });
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const name = event.currentTarget.name;
    setFields(prev => ({...prev, [name]: {value: event.target.value, editing: true}}));
  };

  const toggleEdit = (name: string) => {
    return () => {
      setFields(() => ({
        user: {
          value: account.$isLoaded && name === 'user' ? account.profile.name : null,
          editing: account.$isLoaded && name === 'user'
        },
        admin: {
          value: adminAccount.$isLoaded && name === 'admin' ? adminAccount.profile.name : null,
          editing: adminAccount.$isLoaded && name === 'admin'
        }
      }));

    };
  };

  const onCancel = (name: keyof typeof fields) => {
    return () => {
      setFields(prev => ({...prev, [name]: {editing: false, value: null}}));
    };
  };


  const onSave = (name: keyof typeof fields) => {
    return () => {

      if (name === 'user' && account.$isLoaded) {
        account.profile.$jazz.set("name", fields.user.value ?? account.profile.name);
      }


      if (name === 'admin' && adminAccount.$isLoaded) {
        adminAccount.profile.$jazz.set("name", fields.user.value ?? adminAccount.profile.name);
      }

      setFields(prev => ({...prev, [name]: {editing: false, value: null}}));
    };
  };

  if (!conversation.$isLoaded) {
    return <div>Loading ...</div>;
  }

  if (!account.$isLoaded || !adminAccount.$isLoaded) {
    return <div>Loading ...</div>;
  }

  const admin = conversation.participants!.at(0);
  const user = conversation.participants!.at(1);

  const adminValue = fields.admin.value ? fields.admin.value : admin?.profile.name;
  const userValue = fields.user.value ? fields.user.value : user?.profile.name;


  return (
      <div className="header">
        {
          conversation.participants?.map((participant) => {
            const isAdmin = participant.canAdmin(conversation);
            const fieldKey = isAdmin ? "admin" : "user";
            return (
                <div className="field" key={participant.$jazz.id}>
                  {isAdmin &&
                      <div className="w-12.5 aspect-square rounded-full overflow-hidden flex items-center"><Image
                          src="/images/me.png" alt="me" width={50} height={50}/></div>}
                  <input className="header-account" value={isAdmin ? adminValue : userValue}
                         name={fieldKey}
                         onChange={onInputChange}
                         disabled={!fields[fieldKey].editing}/>
                  {
                      participant.isMe && !fields[fieldKey].editing && (
                          <button onClick={toggleEdit(fieldKey)}>
                            <Pen/>
                          </button>
                      )
                  }
                  {
                      fields[isAdmin ? 'admin' : "user"].editing && (
                          <>
                            <button onClick={onSave(fieldKey)}>
                              <Check/>
                            </button>
                            <button onClick={onCancel(fieldKey)}>
                              <XIcon/>
                            </button>
                          </>
                      )
                  }
                  {!isAdmin && <div>(You)</div>}
                </div>
            );
          })
        }
      </div>
  );
}
