export const stack = {
  title: {
    type: 'text',
    value: '{Tech Stack}'
  },
  statement: {
    type: 'statement',
    value: 'I’m always learning something new.'
  }
} as const;

export const profile = {
  tag: {
    type: 'text',
    value: '// Profile'
  },
  title: {
    type: 'text',
    value: '{About me}'
  },
  bio: {
    type: 'html',
    value: '<p>Full Stack Developer with 5+ years of experience <strong>building reliable, secure, and high-performance systems</strong>. Demonstrated expertise in clean architecture, scalable API design, and efficient data workflows using Node.js, Bun and Rust. Proven track record of delivering high-quality apps. <strong>Strong foundation in React and TypeScript app engineering</strong>, and cloud deployment with Docker and CI/CD pipelines. <strong>Active edge tech researcher and chill vibes</strong>.</p>'
  },
  stack,
} as const;


