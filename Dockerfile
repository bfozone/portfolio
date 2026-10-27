# Build stage: Astro runs on Node (matching .nvmrc and CI); Bun is only the
# package manager and script runner. Versions are pinned so builds are repeatable.
FROM node:24.12.0-alpine AS build
COPY --from=oven/bun:1.4.4-alpine /usr/local/bin/bun /usr/local/bin/bun

WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source and build
COPY . .
RUN bun run build

# Production stage
FROM nginx:1.31.8-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
