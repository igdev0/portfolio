import {co} from 'jazz-tools';
import {Conversation} from '@/features/chat/schema';
import {z} from 'zod';

export const JazzRoot = co.map({
  conversations: co.list(Conversation),
});

export const Account = co.account({
  root: JazzRoot,
  profile: co.profile({
    avatar: co.image(),
    status: z.enum(['active', 'inactive', 'busy']),
    thought: z.string(),
  }),
})