export const stack = {
  title: {
    type: 'text',
    value: '{Tech Stack}'
  },
  statement: {
    type: 'statement',
    value: 'Always learning, always shipping.'
  },
  tech: {
    "Languages": {
      icon: "book",
      statement: "Strong fundamentals make everything else easier.",
      tabs: {
        'JavaScript': {
          statement: "Flexible, chaotic, and somehow still everywhere."
        },
        'TypeScript': {
          statement: "Makes large codebases way less painful to work with."
        },
        'HTML5': {
          statement: "Easy to start with, surprisingly deep when done right.",
        },
        'CSS3': {
          statement: "Looks simple until you try centering something at 2AM.",
        },
        'Rust': {
          statement: "Steep learning curve, but the performance and safety are worth it."
        },
      }
    },

    "Frontend": {
      icon: "code",
      statement: "Clean UI, smooth UX, and maintainable code matter.",
      tabs: {
        'React': {
          statement: "Component-driven development done right."
        },
        'Next': {
          statement: "Makes production React apps feel structured and scalable."
        },
        'Vue': {
          statement: "Clean developer experience with a really nice learning curve."
        },
        'Redux': {
          statement: "Verbose sometimes, but solid for predictable state management."
        },
        'Tailwind CSS': {
          statement: "Fast workflow if you stay disciplined."
        },
        'React Router': {
          statement: "Flexible routing without getting in your way."
        },
      } as const
    },

    "Backend": {
      icon: "server",
      statement: "I enjoy building scalable systems and clean APIs.",
      tabs: {
        'Node': {
          statement: "Fast iteration and a huge ecosystem."
        },
        'Bun': {
          statement: "Ridiculously fast and getting better fast."
        },
        'tRPC': {
          statement: "End-to-end types feel almost unfair sometimes."
        },
        'Express': {
          statement: "Minimal, simple, and still relevant."
        },
        'Nest': {
          statement: "Structured backend architecture without the mess."
        },
        'MySQL': {
          statement: "Reliable and battle-tested."
        },
        'Drizzle': {
          statement: "Lightweight ORM with a surprisingly clean developer experience."
        },
      } as const
    },

    "Infra & DevOps": {
      icon: "boxes",
      statement: "Automation and deployment workflows save real time.",
      tabs: {
        'Docker': {
          statement: "Makes environments predictable instead of painful."
        },
        "Github": {
          statement: "Good tooling, smooth collaboration, massive ecosystem."
        },
        "Bitbucket": {
          statement: "Gets the job done, especially in enterprise setups."
        },
        "Google Cloud": {
          statement: "Powerful platform with a lot to explore."
        },
        'Github Actions': {
          statement: "CI/CD setup without unnecessary complexity."
        },
      } as const
    },

    "Tools": {
      icon: 'wrench',
      statement: "Good tools speed up good work.",
      tabs: {
        'Figma': {
          statement: "Makes collaboration between design and development smooth."
        },
        'Adobe Illustrator': {
          statement: "Still one of the best tools for vector work."
        },
        "Webstorm": {
          statement: "Top-tier TypeScript IDE. Hard to switch away from it."
        },
        'Photoshop': {
          statement: "Useful when things need more than basic edits."
        },
      } as const
    }
  },
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
    value: '<p>Full Stack Developer with 5+ years of experience <strong>building reliable, secure, and high-performance systems</strong>. Demonstrated experience in clean architecture, scalable API design, and efficient data workflows using Node.js, Bun and Rust. Proven track record of delivering high-quality apps. <strong>Strong foundation in React and TypeScript app engineering</strong>, and cloud deployment with Docker and CI/CD pipelines. <strong>Active edge tech researcher and chill vibes</strong>.</p>'
  },
  stack,
} as const;


