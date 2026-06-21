# IGDev's Personal Website

A personal portfolio and blog website built with **Next.js 16**, **Payload CMS 3**, **TypeScript**, **Motion**, and **TailwindCSS v4**.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **CMS:** [Payload CMS 3](https://payloadcms.com/) with Lexical editor
- **Database:** PostgreSQL
- **Styling:** TailwindCSS v4
- **Animations:** Motion (Framer Motion)
- **State Management:** Zustand
- **Media Storage:** Vercel Blob
- **PDF Rendering:** React PDF
- **Deployment:** Docker / Vercel

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/)
- [PostgreSQL](https://www.postgresql.org/) (or a remote database URL)
- [Vercel Blob](https://vercel.com/storage/blob) token (for media uploads)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<username>/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Copy the example env file and fill in the values:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `PAYLOAD_SECRET` | Secret key for Payload CMS |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob storage token |
| `NEXT_PUBLIC_MEDIA_STORAGE_URL` | Base URL for media assets |

### 4. Set up the database

Ensure your PostgreSQL database is running and the `DATABASE_URL` in `.env` points to it. Payload will handle migrations on first run.

### 5. Start the development server

```bash
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

The Payload admin panel is available at [http://localhost:3000/admin](http://localhost:3000/admin).

## Project Structure

```
portfolio/
├── app/
│   ├── (frontend)/       # Public-facing pages
│   ├── (payload)/        # Payload CMS admin & API routes
│   └── globals.css       # Global styles
├── components/           # Reusable React components
├── content/              # Static content / data
├── hooks/                # Custom React hooks
├── payload/
│   ├── blocks/           # Payload block definitions
│   ├── collections/       # Payload collections (Blogs, Media, Users, etc.)
│   ├── fields/           # Custom Payload fields
│   └── globals/          # Payload globals
├── utils/                # Utility functions
├── payload.config.ts     # Payload CMS configuration
├── next.config.ts        # Next.js configuration
└── Dockerfile            # Multi-stage Docker build (Bun)
```

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm generate:types` | Generate Payload TypeScript types |
| `pnpm generate:importmap` | Generate Payload import map |

## Docker

Build and run with Docker using the included multi-stage Dockerfile (Bun-based):

```bash
docker build -t portfolio .
docker run -p 3000:3000 --env-file .env portfolio
```

## License

Private — All rights reserved.