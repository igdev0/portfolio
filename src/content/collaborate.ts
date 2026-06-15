import {CollaborateType} from '@/content/types';
import contact from '@/content/contact';

const collaborate: CollaborateType = {
  comment: "// Message",
  title: "{Collaborate}",
  statement: "It all begins with a message, don't be shy.",
  contact
} as const;

export default collaborate;