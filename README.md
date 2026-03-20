# TruwoTech Website

Official website for TruwoTech — engineering the future through innovative drone, EV, electric water sports, embedded systems, IoT, and edge AI solutions.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout (Header + Footer)
│   ├── globals.css                 # Global styles & Tailwind config
│   ├── about/page.tsx              # About page
│   ├── contact/page.tsx            # Contact page with form
│   ├── products/page.tsx           # Products showcase
│   └── services/
│       ├── page.tsx                # Services overview
│       ├── drones/page.tsx         # Drones & UAV
│       ├── electric-vehicles/      # Electric Vehicles
│       ├── electric-water-sports/  # Electric Water Sports
│       ├── embedded-systems/       # Embedded Systems
│       ├── iot/                    # IoT Solutions
│       └── ai-edge/               # AI at the Edge
└── components/
    ├── Header.tsx                  # Navigation header
    ├── Footer.tsx                  # Site footer
    ├── Icons.tsx                   # SVG icon components
    ├── HeroIllustration.tsx        # Animated hero SVG
    ├── ServiceCard.tsx             # Reusable service card
    └── ServicePageTemplate.tsx     # Template for service detail pages
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services overview, stats, features, CTA |
| About | `/about` | Mission, values, journey, team |
| Services | `/services` | All six service domains |
| Drones & UAV | `/services/drones` | Drone solutions detail |
| Electric Vehicles | `/services/electric-vehicles` | EV solutions detail |
| Electric Water Sports | `/services/electric-water-sports` | Marine electrification detail |
| Embedded Systems | `/services/embedded-systems` | Embedded engineering detail |
| IoT Solutions | `/services/iot` | IoT ecosystem detail |
| AI at the Edge | `/services/ai-edge` | Edge AI detail |
| Products | `/products` | Product portfolio |
| Contact | `/contact` | Contact form and info |

## Deployment

Deploy on Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
```

The output in `.next/` is ready for deployment.
