import {ResumeType} from '@/content/types';
import contact from '@/content/contact';
import stack from '@/content/stack';
import experience from '@/content/experience';

const resume: ResumeType = {
  name: 'Ianos G Dorultan',
  bio: "Frontend Engineer with 5+ years of experience building web and cross-platform applications using React, TypeScript, and modern frontend technologies. Focused on designing scalable, performant, accessible, and maintainable frontend architecture.",
  contact: contact,
  tech: stack.skills,
  experience: experience.roles,
  languages: ['Romanian (native)', 'English']
};
export default resume;