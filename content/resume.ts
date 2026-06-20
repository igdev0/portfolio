import {ResumeType} from '@/content/types';
import contact from '@/content/contact';
import stack from '@/content/stack';
import experience from '@/content/experience';
import hero from '@/content/hero';

const resume: ResumeType = {
  name: 'Ianos G Dorultan',
  bio: hero.statement as string,
  contact: contact,
  tech: stack.skills,
  experience: experience.roles,
  languages: ['Romanian (main)', 'English']
};
export default resume;