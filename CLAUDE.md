# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**cheesypork** — Next.js application synced with v0.dev for chat-based design workflow. Deployed to Vercel.

## Status: Consolidation Pending

This is one of several agriculture-related repos (cheesypork, pigpro, zeeplan, farm-plan). Most should be archived in favor of one primary repo.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI**: shadcn/ui (components.json)
- **Package Manager**: pnpm

## Key Commands

```bash
pnpm install              # Install dependencies
pnpm run dev              # Start dev server
pnpm run build            # Production build
pnpm run lint             # ESLint
```

## Architecture

- `app/` — Next.js App Router pages
- `components/` — React components
- `hooks/` — Custom React hooks
- `lib/` — Shared utilities
- `styles/` — CSS

## AgentKit Forge

This project has not yet been onboarded to [AgentKit Forge](https://github.com/phoenixvc/agentkit-forge). To request onboarding, [create a ticket](https://github.com/phoenixvc/agentkit-forge/issues/new?title=Onboard+cheesypork&labels=onboarding).

## Baton Integration

Baton is the shared task graph for cross-repo work. When the `baton` MCP server is available, agents should check for existing work with `task_check` at the start of meaningful tasks, create or claim visible work with `task_notify`/`log_agent_message`, update the task when significant new information becomes available, and log completion or blockers before handing off.
