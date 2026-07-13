import {ResumeType} from '@/content/types';
import contact from '@/content/contact';
import stack from '@/content/stack';
import experience from '@/content/experience';

const resume: ResumeType = {
  name: 'Ianos G Dorultan',
  bio: "Frontend Engineer with 5+ years of experience building scalable React and TypeScript applications with a focus on performance, usability, and maintainable architecture." as string,
  contact: contact,
  tech: stack.skills,
  experience: experience.roles,
  languages: ['Romanian (main)', 'English']
};
export default resume;