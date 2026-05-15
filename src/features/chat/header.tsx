"use client";
import {useAccount, useCoState} from 'jazz-tools/react';
import {Account} from '@/schema';
import {ADMIN_ID} from '@/features/chat/const';
import {ChangeEventHandler, useState} from 'react';
import {Check, Pen, XIcon} from 'lucide-react';

interface Field {
  value: string | null;
  editing: boolean;
}

export default function ChatHeader() {
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

  if (!account.$isLoaded || !adminAccount.$isLoaded) {
    return <div>Loading ...</div>;
  }

  const adminValue = fields.admin.value ? fields.admin.value : adminAccount.profile.name;
  const userValue = fields.user.value ? fields.user.value : account.profile.name;

  return (
      <div className="header">
        <div className="field">
          <input className="header-account" value={adminValue} name="admin" onChange={onInputChange}
                 disabled={!fields.admin.editing}/>
          {
              adminAccount.isMe && !fields.admin.editing && (
                  <button onClick={toggleEdit('admin')}>
                    <Pen/>
                  </button>
              )
          }
          {
              fields.admin.editing && (
                  <>
                    <button onClick={onSave('admin')}>
                      <Check/>
                    </button>
                    <button onClick={onCancel('admin')}>
                      <XIcon/>
                    </button>
                  </>
              )
          }
        </div>
        <div className="field">
          <input className="header-account" value={userValue} name="user" onChange={onInputChange}
                 disabled={!fields.user.editing}/>
          {
              account.isMe && !fields.user.editing && (
                  <button onClick={toggleEdit('user')}>
                    <Pen/>
                  </button>
              )
          }
          {
              fields.user.editing && (
                  <>
                    <button onClick={onSave('user')}>
                      <Check/>
                    </button>
                    <button onClick={onCancel('user')}>
                      <XIcon/>
                    </button>
                  </>
              )
          }
        </div>
      </div>
  );
}
