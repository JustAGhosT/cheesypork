# Cheesypork

Cheesypork is a Next.js storefront and farm operations prototype. The current application is frontend-only: auth, cart, and checkout flows are mocked in the browser and persisted with `localStorage`.

## Current Hosting

The project is prepared for Cloudflare Pages as a static Next.js export.

Cloudflare Pages settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Production branch | `main` |

Cloudflare will create preview deployments for pull requests after the GitHub repository is connected.

## Local Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The build emits static files into `out/`.

## Fullstack Direction

The intended fullstack path is:

- Supabase Postgres for products, customers, orders, order items, inventory, and admin data.
- Supabase Auth for customer/admin accounts.
- Supabase Storage for product images and uploaded assets if needed.
- Cloudflare Pages for the frontend.
- Supabase Edge Functions or Cloudflare Workers for server-side order processing, notifications, and payment callbacks.

When backend features are added, keep secrets server-side. Browser-exposed variables should be limited to public Supabase values such as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
