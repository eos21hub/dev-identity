# Emmanuel Oppong-Sarpong — Portfolio

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

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
