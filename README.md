# Lucky Computers — Next.js

Marketing site for Lucky Computers (Kukatpally, Hyderabad), built with
Next.js (App Router), React 19, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Structure

```
src/
  app/
    layout.tsx     # <html>, metadata (title, description, favicon)
    page.tsx       # home page — composes all sections (Server Component)
    globals.css    # Tailwind v4 + tw-animate-css
  components/      # Navbar, Hero, Services, Ecosystem, FeaturedLaptops,
                   # About, WhyUs, Contact, Footer (client components)
  assets/          # Logo.webp, LC3.webp, A1.png (optimized via next/image)
public/            # favicon.svg, icons.svg
```

Remote images come from images.unsplash.com, allowed in `next.config.ts`.
