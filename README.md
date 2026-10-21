# TruwoTech Website

A single landing page for truwotech.com: one large technology icon at a time animates in the centre of the screen and cycles continuously, with "Great things are being built." and today's date underneath.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS base plus plain CSS in `globals.css`
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start        # binds 0.0.0.0 and uses $PORT (Railway)
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx             # The only page
│   ├── layout.tsx           # Fonts and metadata
│   └── globals.css          # Page and animation styles
└── components/
    ├── TechIconCycle.tsx    # Centre animation; keyframes are generated from the icon count
    ├── techIcons.ts         # Icon line art (24 x 24 grid); add or remove icons here
    └── LiveDate.tsx         # Visitor's local date, rendered in the browser
```

The old routes (`/about`, `/contact`, `/products`, `/services/...`) redirect to `/` (see `next.config.mjs`).

Visitors who set "reduce motion" in their operating system get a slow cross-fade instead of the draw-in and zoom effects.

## Deployment

The site runs on Railway. When the Railway service is connected to this GitHub repository, pushing to `master` triggers a new deploy. The custom domain is configured in the Railway service under **Settings → Networking → Custom Domain**, with DNS records at Namecheap (ALIAS for `@`, CNAME for `www`).
