import {ResumeType} from '@/content/types';
import contact from '@/content/contact';
import stack from '@/content/stack';
import experience from '@/content/experience';

const resume: ResumeType = {
  name: 'Ianos G Dorultan',
  contact: contact,
  tech: stack.skills,
  experience: experience.roles,
};
export default resume;