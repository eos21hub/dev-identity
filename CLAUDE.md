# CLAUDE.md — Portfolio Project Guide

This file tells Claude Code how this codebase is structured and how to work on it effectively.

## Commands

```bash
npm run dev      # Dev server at http://localhost:5173
npm run build    # tsc + vite build → dist/
npm run preview  # Serve dist/ locally
npx tsc --noEmit # Type-check without emitting
```

There is no test runner configured. Type checking (`tsc --noEmit`) is the primary correctness gate.

## Architecture

Single-page React app (no router). One file per section, one file per UI primitive.

```
src/
├── components/layout/   Navbar, Footer
├── components/sections/ Hero, About, Skills, Experience, Projects, Contact
├── components/ui/       Button, Badge (+ variants), SectionHeader
├── data/                Pure TS arrays — projects, experience, skills
├── hooks/               useActiveSection, useNavbar, useScrollReveal
├── types/               Shared interfaces (Project, Experience, SkillCategory…)
└── utils/cn.ts          clsx + tailwind-merge
```

**App.tsx** is a flat composition of layout + sections — no state, no logic.

## Key patterns

### Path alias
`@/` maps to `src/`. Use it for all internal imports. Never use relative `../../` paths.

### Animation
All enter animations use **Framer Motion** `whileInView` + `viewport={{ once: true }}`.
Standard easing: `[0.4, 0, 0.2, 1]`, duration: `0.55s`.
Hover effects: `whileHover={{ y: -5 }}` or Tailwind `hover:-translate-y-1` — pick one per component, don't mix.

### Tailwind conventions
- Spacing scale: sections use `py-24`, inner gaps use `gap-6` / `gap-10`
- Cards: `bg-white border border-gray-200 rounded-2xl shadow-card`
- Custom shadows are in `tailwind.config.ts`: `shadow-card`, `shadow-card-md`, `shadow-card-lg`, `shadow-card-xl`
- Custom animations: `animate-pulse-dot`, `animate-float`
- `focus:ring-2` not `focus:ring-3` — Tailwind v3 only ships ring-0, ring-1, ring-2, ring-4, ring-8

### cn() utility
Always use `cn()` from `@/utils/cn` when merging conditional classes:
```ts
import { cn } from '@/utils/cn'
className={cn('base-classes', condition && 'conditional', className)}
```

### Data-driven sections
Content lives in `src/data/`. Components import and `.map()` over the arrays.
Never hardcode project/experience content inline in JSX.

### TypeScript
- `strict: true` is on — no `any`, no `!` non-null assertions without a comment
- `noUnusedLocals` and `noUnusedParameters` are on — clean up unused imports immediately
- Prefer `type` imports for interfaces: `import type { Project } from '@/types'`

## Adding a new section

1. Create `src/components/sections/NewSection.tsx`
2. Export a named function component: `export function NewSection() { ... }`
3. Add a corresponding `id="new-section"` on the `<section>` element
4. Import and add it to `src/App.tsx`
5. Add the nav link to `NAV_LINKS` in `src/components/layout/Navbar.tsx`
6. Add `'new-section'` to the `SECTION_IDS` array in `Navbar.tsx`

## Adding a new project

Edit `src/data/projects.ts`. Copy an existing entry and update all fields.
The `id` must be unique — it's also used to look up the thumbnail icon in `Projects.tsx`
via the `thumbIcons` map. Add a new `[id]: LucideIcon` entry there if needed.

## Swapping the photo

In `Hero.tsx` and `About.tsx`, find the placeholder div with the comment about replacing it.
Place the photo in `public/photo.jpg` and replace the div with:
```tsx
<img src="/photo.jpg" alt="Emmanuel Oppong-Sarpong" className="w-full h-full object-cover" />
```

## Contact form

The form in `Contact.tsx` currently simulates a sent state after 1.2s.
To wire it to a real backend, replace the `setTimeout` block in `handleSubmit` with:

**Formspree (simplest):**
```ts
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message }),
})
if (res.ok) setStatus('sent')
else setStatus('error')
```

**EmailJS:**
```ts
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { name, email, message }, 'PUBLIC_KEY')
setStatus('sent')
```

## Deployment

```bash
npm run build        # → dist/
npx vercel --prod    # Vercel
# Or drag dist/ to netlify.com/drop
```

See README.md for full deployment instructions including GitHub Pages workflow.
