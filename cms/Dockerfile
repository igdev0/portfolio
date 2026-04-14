# Dockerfile - Multi-stage build for Strapi CMS

# Build stage: install dependencies and build the admin panel
FROM oven/bun AS builder

WORKDIR /app

# Copy package files first for better Docker cache utilization
COPY package.json bun.lock ./


# Install dependencies
RUN bun ci

# Copy the rest of the application
COPY . .

# Expose the Strapi port
EXPOSE 1337

RUN ["bun", "run", "strapi", "build"]
CMD ["bun", "run", "strapi", "start"]