# AgentDesk – Session Handoff

## Context
Ayush is building AgentDesk: an AI agent team that manages Google reviews + social media for local clients (hotels, restaurants first; clinics later). Free clients first, paid later. Stack: Next.js (App Router, TS strict) + Tailwind + Supabase + Vercel + GitHub, Anthropic Claude API. Hinglish is the working language; code/comments in English. The full spec is "AgentDesk – Project Bible" (17 sections; Prompts 0-10 in section 13). Follow its builder rules: no secrets in code, server-side API calls only, RLS on every table, nothing public without approval, missing integrations show "Not connected" instead of crashing, ask rather than guess (log in TODO.md).

## Done in this session (Prompt 0, partial)
- Hand-written Next.js 14 scaffold: package.json, tsconfig (strict), Tailwind 3 (CSS variables, light/dark), Manrope font.
- App shell: `/` landing, `/login` placeholder, `/admin` (sidebar layout + dashboard + `[section]` placeholder pages), `/portal` (simple layout + approvals placeholder).
- `lib/crypto.ts`: AES-256-GCM encrypt/decrypt + maskSecret (server-only, reads ENCRYPTION_KEY).
- `.env.example`, `.gitignore`, `TODO.md`, empty `lib/ai`, `lib/social`, `lib/supabase`, `supabase/migrations`.

## NOT done / not verified
- `npm install` and `npm run build` were NOT run. First step next session: run both and fix any errors.
- shadcn/ui, ESLint/Prettier, TanStack Query, Zod, React Hook Form are not installed yet (add when first needed).
- `docs/PROJECT_BIBLE.md` is a stub: paste the full bible.
- No Supabase, auth, DB, AI, or integrations code yet.

## Next steps
1. Paste bible, `npm install`, `npm run build`, fix errors, `git init`, commit, push to a new private GitHub repo `agentdesk`.
2. Prompt 1: Supabase migrations (all tables + RLS), Auth, role middleware, seed super_admin.
3. Prompt 2: Integrations manager at /admin/integrations (+ unit tests for crypto.ts).
4. Start Meta App Review and Google Business Profile API access requests now (they take weeks).

## Decisions / constraints
- Clinic vertical postponed to V2. No auto-publish in V1; every post/reply needs approval.
- All API keys managed from /admin/integrations (encrypted); only bootstrap env vars in Vercel.
- Until Meta/Google approve, app runs in manual mode (AI draft, human posts and marks published).
- Open: app name/domain, pricing, alert channels, AI image generation timing.
