# -------- Base image (shared) --------
FROM oven/bun:1 AS base
WORKDIR /app

# -------- Dependencies (cached layer) --------
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install

# -------- Builder --------
FROM base AS builder
ENV NODE_ENV=production

# reuse cached deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# build admin + TS
RUN bun run strapi build

# -------- Production deps only (small) --------
FROM base AS prod-deps
COPY package.json bun.lock ./
RUN bun install --production

# -------- Runner (minimal) --------
FROM oven/bun:1-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# copy only what is actually needed at runtime
COPY --from=builder /app ./
COPY --from=prod-deps /app/node_modules ./node_modules

# remove unnecessary stuff
RUN rm -rf \
  /root/.bun/install/cache \
  ./node_modules/.cache \
  ./src \
  .git \
  tests \
  docs

EXPOSE 1337

# faster startup than "bun run"
CMD ["bun", "node_modules/@strapi/strapi/bin/strapi.js", "start"]