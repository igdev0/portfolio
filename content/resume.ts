import {ResumeType} from '@/content/types';
import contact from '@/content/contact';
import stack from '@/content/stack';
import experience from '@/content/experience';

const resume: ResumeType = {
  name: 'Ianos G Dorultan',
  bio: "Frontend engineer with 5+ years of experience building web and cross-platform applications with React and TypeScript. Focused on maintainable UI architecture, accessible interfaces, and reusable design systems.",
  contact: contact,
  tech: stack.skills,
  experience: experience.roles,
  languages: ['Romanian (native)', 'English']
};
export default resume;