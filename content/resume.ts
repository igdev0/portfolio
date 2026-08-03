import {ResumeType} from '@/content/types';
import contact from '@/content/contact';
import stack from '@/content/stack';
import experience from '@/content/experience';

const resume: ResumeType = {
  name: 'Ianos G Dorultan',
  bio: "Frontend Engineer with 5+ years of experience building modern web and mobile applications using React and React Native, with a strong focus on clean architecture, SOLID principles, and maintainable code.",
  contact: contact,
  tech: stack.skills,
  experience: experience.roles,
  languages: ['Romanian (native)', 'English']
};
export default resume;