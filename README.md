# Portfolio

Personal portfolio of Hugo Besnard: a single-page site built with
[Next.js](https://nextjs.org) (static export), [Chakra UI](https://v2.chakra-ui.com),
[Framer Motion](https://motion.dev) and [Vanta.js](https://www.vantajs.com).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | Description                               |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Development server with hot reload        |
| `npm run build`     | Static export to `out/`                   |
| `npm run start`     | Serves the `out/` folder locally          |
| `npm run lint`      | ESLint                                    |
| `npm run typecheck` | TypeScript type-check                     |

## Editing the content

All the content lives in [`src/data`](src/data); components never need to change to update it.

| File            | Content                                              |
| --------------- | ---------------------------------------------------- |
| `profile.ts`    | Name, tagline, about text, social links, form endpoint |
| `experience.ts` | Work experience (accordion)                          |
| `projects.ts`   | Personal projects (cards)                            |
| `stack.ts`      | "My Stack" groups                                    |
| `navigation.ts` | Navigation bar entries                               |
| `techIcons.ts`  | Technology logos (inline SVG or file in `public/images`) |

To add a technology logo, drop its SVG into `public/images` and register it in `techIcons.ts`
(`myTool: { src: "/images/mytool.svg" }`); it can then be referenced by name in `stack.ts` or `experience.ts`.

## Project structure

```
src/
├── app/                 # Next.js App Router: layout, page, global CSS, favicon
├── components/
│   ├── HomePage.tsx     # Page composition (preloader → sections)
│   ├── layout/          # Navbar, Footer, Section wrapper, Preloader, animated background
│   ├── sections/        # Hero, About, Experience, Projects, Stack, Contact
│   ├── ui/              # Small reusable pieces (SectionTitle, TechIcon, TypingText)
│   └── motion.ts        # Chakra + Framer Motion components and animation helpers
├── data/                # Site content
├── hooks/               # useSectionInView
├── lib/                 # basePath helper
├── theme/               # Chakra UI theme
└── types/               # Type declarations for untyped packages
```

## Deployment

Every push to `main` triggers [`.github/workflows/static.yml`](.github/workflows/static.yml), which
lints, builds the static export and publishes it to GitHub Pages. The base path (`/portfolio` or empty
for a custom domain) is provided automatically by `actions/configure-pages`.

In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

## Easter egg

Click the `©` in the footer to switch the background between waves and birds.
