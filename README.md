# Juris — Bangladesh Legal-Tech Platform (Next.js)

Production-ready **Next.js (App Router) + TypeScript + Tailwind CSS** implementation of the
Juris design system. Verified Bangladesh law, answered — a grounded AI legal assistant, a
full searchable law database, and a Bar-verified lawyer marketplace. **Bilingual (বাংলা /
English) and light/dark from day one.**

The visual source of truth is kept untouched at [`design/index.html`](design/index.html).
All design tokens and component styles were ported verbatim into `src/app/globals.css` so
the coded product matches the reference 1:1, with Tailwind wired to the same CSS-variable
tokens (`tailwind.config.ts`).

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (51 routes)
pnpm typecheck  # tsc --noEmit
```

## Routes

| Area | Route | Notes |
| --- | --- | --- |
| Landing | `/` | Hero, features, how-it-works, categories, lawyers, CTA |
| AI Assistant | `/assistant` | **Interactive** — grounded answers, citations, disclaimer, no-verified fallback, suggested prompts, history |
| Law database | `/laws` | Category grid + filter + featured acts |
| Act detail | `/laws/[act]` | Chapters → sections (D5) |
| Section detail | `/laws/[act]/[section]` | EN / বাংলা / Plain-language tabs, callouts, related, tools (D6) |
| Search | `/search?q=` | Filters, highlighted matches, empty & popular states (D3) |
| Lawyers | `/lawyers`, `/lawyers/[slug]` | Directory + profile + consultation request (E1/E2) |
| Account | `/account` | Profile, working theme/language/notification prefs, bookmarks, activity (F1/F2) |
| Auth | `/login`, `/signup`, `/verify` | Split-screen, Google, OTP with stepper (A3/A4/A5) |
| Admin | `/admin`, `/admin/users`, `/admin/lawyers`, `/admin/cms`, `/admin/ai-review`, `/admin/reports`, `/admin/settings` | KPI dashboard, user table, verification queue, bilingual Law CMS, AI answer review (H2/H3/H5/H7) |
| Design system | `/style-guide` | Foundations, components, state matrix + the 29 hi-fi mockups |
| System states | `/offline`, `not-found`, `error` | Offline / 404 / error boundary |

## Architecture

- **Theme + language** — `src/components/ui-provider.tsx` owns `data-theme` / `data-lang` on
  `<html>`/`<body>`, persists to `localStorage`, with a no-flash inline script in the root
  layout. Bilingual copy is rendered via the `Lang` component (both languages emitted, CSS
  shows one) so it works in Server Components with no hydration mismatch.
- **Design system components** — `src/components/ui/` (Button, CitationChip, Disclaimer,
  VerifiedBadge, Stars, SectionHead …) and `src/components/icons.tsx`.
- **Mock data** — everything runs on typed mock data in `src/lib/mock/` (acts & sections,
  categories, lawyers, chat answers, admin, account, search). No backend required.
- **Fonts** — Fraunces · Plus Jakarta Sans · Noto Sans Bengali · IBM Plex Mono via the
  Google Fonts CDN (matching the design).

## Notes

- Mockup images and the hero live in `public/assets/` (copied from `design/assets/`).
- The AI assistant, search, CMS editor, admin review, consultation request, OTP and all
  preference toggles are interactive using client components and local state.
