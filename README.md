# IGDev's Personal Website

A personal portfolio and blog built with Next.js, TypeScript, Tailwind CSS, and Motion. The site content is maintained in the `content/` directory.

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/) and TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for animations
- [Zustand](https://zustand.docs.pmnd.rs/) for state management
- [React PDF](https://react-pdf.org/) for resume rendering

## Getting started

### Requirements

- [Node.js](https://nodejs.org/)
- npm (the repository includes `package-lock.json`)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the site for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run the configured Next.js lint command |
| `npm run generate:resume` | Generate resume output using Bun |

## Project structure

```text
app/                  Next.js routes, layouts, and global styles
components/           Reusable interface components
content/              Site copy and portfolio data
hooks/                Shared React hooks
public/               Static assets, fonts, and icons
scripts/              Content generation scripts
```

## Docker

The repository includes a Dockerfile for building and running the site:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## License

Private — All rights reserved.
