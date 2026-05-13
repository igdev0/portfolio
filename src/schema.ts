import {co, z} from 'jazz-tools';
import {Conversation} from '@/features/chat/schema';
import {faker} from '@faker-js/faker/locale/en';

export type Root = co.loaded<typeof Root>;
export const Root = co.map({
  conversations: co.optional(co.list(Conversation)),
});


export type Profile = co.loaded<typeof Profile>;
export const Profile = co.profile({
  avatar: co.optional(co.image()),
  status: z.enum(['active', 'inactive', 'busy']),
  thought: z.string(),
});

export type Account = co.loaded<typeof Account>
export const Account = co.account({
  root: Root,
  profile: Profile,
}).withMigration(async (account) => {

  if (!account.$jazz.has("root")) {
    account.$jazz.set("root", Root.create({
      conversations: []
    }));
  }


  if (!account.$jazz.has('profile')) {
    account.$jazz.set("profile", Profile.create({
      name: faker.person.firstName(),
      status: 'inactive',
      thought: '',
    }));
  }
});