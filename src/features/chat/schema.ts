import {co, z} from 'jazz-tools';


export const Message = co.map({
  text: z.string(),
  sender: co.account(),
  timestamp: z.number(),
});
export type Message = co.loaded<typeof Message>;


export const Conversation = co.map({
  messages: co.optional(co.list(Message)),
  status: z.enum(['started', 'pending', 'denied'])
});

export type Conversation = z.infer<typeof Conversation>;

