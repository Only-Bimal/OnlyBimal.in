## Repo overview (short)

- Monorepo serving a React + Vite client and an Express server from a single repository.
- Client: `client/` — Vite + React, Tailwind, Radix primitives under `client/src/components/ui`.
- Server: `server/` — Express + integrated Vite middleware for development (see `server/vite.ts`).
- Shared types/data: `shared/` (e.g. `shared/schema.ts` contains the resume data shape used in the UI).

## How this repo runs (quick)

- Dev (recommended): npm run dev
  - This launches the Node server (`server/index.ts`) in development mode which mounts Vite middleware so the client and API are served from the same port.
  - Note: scripts in `package.json` prefix the command with `NODE_ENV=...` which is POSIX-style. On Windows PowerShell you can instead run:
    - $env:NODE_ENV='development'; npx tsx server/index.ts

- Build & serve production:
  - npm run build  — runs `vite build` (client) and bundles `server/index.ts` with esbuild to `dist`.
  - npm run start  — runs the bundled server from `dist/index.js` (expects built client assets).

- Typecheck: npm run check
- Database scaffold (drizzle): npm run db:push

## Architecture & important files

- Entry points
  - Server: `server/index.ts` — sets up middleware, logging and mounts Vite in dev via `setupVite`.
  - Client: `client/src/main.tsx` -> `client/src/App.tsx` — uses Wouter for routing and TanStack Query for data.

- Vite integration
  - `server/vite.ts` mounts Vite middleware in dev mode and also provides `serveStatic` for production.
  - The Vite build config (`vite.config.ts`) sets `root` to `client/` and `build.outDir` to `dist/public` at repo root. Note: `server/vite.ts` looks for a `public` folder relative to `server/` when serving static files — be mindful of this mismatch when diagnosing production asset issues.
  
    - IPv4 / HMR note: on some Windows hosts IPv6 (`::1`) or certain socket options may cause ENOTSUP or bind errors. The server and Vite HMR are configured to bind explicitly to `127.0.0.1` to avoid this; follow that pattern when adding dev server or HMR settings.

- API surface & storage
  - `server/routes.ts` is where API routes should be registered (all routes intended to be under `/api`).
  - `server/storage.ts` exposes the storage interface used by routes. Use `storage.*` for CRUD operations.

## Conventions & patterns an AI coder should follow

- Path aliases: `@/*` maps to `client/src/*` and `@shared/*` maps to `shared/*` (see `tsconfig.json`). Use the aliases in edits to stay consistent with imports.

- UI primitives: The `client/src/components/ui` directory contains small wrappers around Radix primitives and common patterns (e.g. `button.tsx` uses `class-variance-authority` + `cn` helper). When adding components:
  - Follow the variant/size pattern used by `button.tsx` (export variant helpers and a React.forwardRef component).

- Styling: Tailwind utility classes + small helper `cn` are used across components. Prefer composing tailwind classes using existing `cva` variants where available.

- API logging & error handling:
  - Server logging middleware (in `server/index.ts`) logs only `/api` paths and truncates long JSON responses to ~80 chars — new endpoints should return JSON objects consistent with existing patterns ({ message, ... }) so logs remain readable.
  - Express body parser is configured with a `verify` hook that attaches `rawBody` to the request; middleware or endpoints that need raw payloads can use `req.rawBody`.

- Types & shared data: Use interfaces exported from `shared/schema.ts` (e.g. `ResumeData`, `Project`) for cross-boundary typing between client and server code.

## Developer workflows & gotchas

- Running locally: use `npm run dev`. If HMR or static asset issues arise in dev, inspect `server/vite.ts` and `vite.config.ts` (the server mounts Vite in middleware mode).

- Building for production: `npm run build` then `npm run start`. If the server cannot find client assets in production, check the build output path (`dist/public`) and `server/vite.ts`'s `serveStatic` path described above.

- Environment & ports: The server binds to the port in `PORT` or defaults to 5000. In production, ensure `PORT` is set to the correct public port.
  - Environment & ports: The server binds to the port in `PORT` or defaults to 5053 (the code defaults to 5053). In production, ensure `PORT` is set to the correct public port. Note: bind explicitly to `127.0.0.1` (IPv4) rather than `localhost` to avoid IPv6-related ENOTSUP errors on some Windows hosts.

- Windows users: package.json uses `NODE_ENV=...` inline. On Windows PowerShell use `$env:NODE_ENV='value'; <cmd>` or run scripts via a POSIX-compatible shell.

## Examples (copyable patterns)

- Path alias example:
  - import Navigation from "@/components/Navigation"  // maps to client/src/components/Navigation.tsx

- Button variant usage (see `client/src/components/ui/button.tsx`):
  - <Button variant="outline" size="sm">Edit</Button>

- Adding a new API route:
  - Edit `server/routes.ts`, prefix the route with `/api`, use `storage` for persistence, return JSON { message: string, ... } on success.

## Where to look for more context

- Client UI patterns: `client/src/components/ui/*`
- App wiring: `client/src/App.tsx`, `client/src/main.tsx`
- Server wiring & dev server: `server/index.ts`, `server/vite.ts`, `server/routes.ts`
- Shared types/data: `shared/schema.ts`
- Build/dev scripts: `package.json` and `vite.config.ts`

If anything here is unclear or you want the tone/level adjusted (more prescriptive or more permissive), tell me which sections to expand or trim and I will iterate.
