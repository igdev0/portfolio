import {co, z} from 'jazz-tools';
import {Conversation} from '@/features/chat/schema';

export type Root = co.loaded<typeof Root>;
export const Root = co.map({
  conversations: co.list(Conversation),
});

export type Profile = co.loaded<typeof Profile>;
export const Profile = co.profile({
  avatar: co.image(),
  status: z.enum(['active', 'inactive', 'busy']),
  thought: z.string(),
});

export type Account = co.loaded<typeof Account>
export const Account = co.account({
  root: Root,
  profile: Profile,
});