# Emmanuel Oppong-Sarpong — Portfolio

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Other commands:

```bash
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

---

## Project structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav, mobile drawer, active-section highlighting
│   │   └── Footer.tsx          # Logo, copyright, social links
│   ├── sections/
│   │   ├── Hero.tsx            # Full-viewport intro with avatar + floating stat cards
│   │   ├── About.tsx           # Bio, photo, key stats
│   │   ├── Skills.tsx          # 4-column skill-category grid
│   │   ├── Experience.tsx      # Timeline (KaydTech → Opticash → Freelance)
│   │   ├── Projects.tsx        # 2-column project card grid
│   │   └── Contact.tsx         # Info panel + contact form + WhatsApp CTA
│   └── ui/
│       ├── Button.tsx          # Primary, ghost, and WhatsApp button variants
│       ├── Badge.tsx           # Badge, SkillTag, TechTag, ProjectTag
│       └── SectionHeader.tsx   # Animated label + h2 + optional subtitle
├── data/
│   ├── projects.ts             # Project cards content
│   ├── experience.ts           # Timeline entries
│   └── skills.ts               # Skill category cards
├── hooks/
│   ├── useActiveSection.ts     # IntersectionObserver → active nav link
│   ├── useNavbar.ts            # Scroll state + mobile menu open/close
│   └── useScrollReveal.ts      # Utility hook for CSS-based reveal (not used by sections — sections use Framer Motion directly)
├── types/
│   └── index.ts                # Shared TypeScript interfaces
├── utils/
│   └── cn.ts                   # clsx + tailwind-merge helper
├── App.tsx                     # Root — assembles layout + sections
├── main.tsx                    # React entry point
└── index.css                   # Tailwind directives + base/utility overrides
```

---

## Customisation guide

### Your name and headline
Edit **`src/components/sections/Hero.tsx`** lines 57–61:
```tsx
Emmanuel          ← your first name
Oppong-Sarpong    ← your last name
```
Update the subtitle on the same file.

### Your photo
In both `Hero.tsx` and `About.tsx`, find the comment:
```tsx
{/* Replace contents with: <img src="/photo.jpg" ... /> */}
```
Drop your photo into the `public/` folder and replace the placeholder div with:
```tsx
<img src="/photo.jpg" alt="Your name" className="w-full h-full object-cover" />
```

### Projects
Edit **`src/data/projects.ts`** — each entry has:
| Field | What to change |
|---|---|
| `title` | Project name |
| `description` | 2–3 sentence description |
| `tags` | Tech stack labels |
| `bgGradient` | Tailwind gradient classes for thumbnail (e.g. `from-blue-50 to-blue-100`) |
| `strokeColor` | Hex colour for the thumbnail icon |
| `links.demo` | Live URL or `undefined` to hide the button |
| `links.github` | Repo URL or `undefined` to hide the button |

### Work experience
Edit **`src/data/experience.ts`** — three entries: `kaydtech`, `opticash`, `freelance`.
Update `role`, `company`, `period`, `description`, and `skills` for each.

### Skills
Edit **`src/data/skills.ts`** — four categories. Add, remove, or rename any skill string.

### Contact details
Edit **`src/components/sections/Contact.tsx`**:
- `contactItems` array → update email, location, availability
- `WHATSAPP_URL` → replace the phone number: `https://wa.me/233XXXXXXXXX`

### Social links
Three places use social links — update the `href` values in:
- `src/components/sections/Hero.tsx` — the `socials` array
- `src/components/layout/Footer.tsx` — the `socials` array
- `src/components/layout/Navbar.tsx` (no socials in nav, but update the CTA link if needed)

### OG meta tags
Edit **`index.html`** — update `og:title`, `og:description`, and `og:image`.

---

## Tech stack

| Layer | Choice |
|---|---|
| UI Framework | React 18 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Utilities | clsx + tailwind-merge |
| Build tool | Vite 5 |

---

## Deployment

### Netlify Drop (fastest — ~30 seconds)
1. Run `npm run build` — output lands in `dist/`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder into the browser
4. Live URL instantly — no account needed

### Vercel
```bash
npm run build
npx vercel --prod
```
Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Vite.

### GitHub Pages
1. Push the repo to GitHub
2. In repo **Settings → Pages → Source**, select **GitHub Actions**
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

> **Note for GitHub Pages:** If your repo is not at a root domain (e.g. `username.github.io/portfolio`), add `base: '/portfolio/'` to `vite.config.ts` inside `defineConfig({ ... })`.
