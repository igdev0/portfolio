import {ProfileType} from '@/content/types';
import {stack} from '@/content/stack';

export const profile: ProfileType = {
  comment: "// Profile",
  title: "{About me}",
  bio: `<p>
            Full Stack Engineer with 5+ years of experience building web and mobile applications focused on performance, maintainability, and clean architecture. 
            <strong>Strong expertise in React and TypeScript</strong>, with experience across backend APIs, cloud deployments, and CI/CD workflows using Docker and modern tooling. 
            Proven ability to deliver production-ready applications across frontend, backend, and infrastructure.
        </p>`,
  stack,
} as const;
