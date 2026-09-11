# RecoLabs

Multi-app workspace: a small Express/Mongo newsletter API, a Next.js ecommerce storefront, and a Vite landing/main website.

## Overview

RecoLabs groups related product surfaces in one repo. Each folder installs and runs independently (no root workspace package manager).

## Apps

| Folder | Role | Stack highlights |
|--------|------|------------------|
| `Backend/` | Newsletter subscription API | Express 5, Mongoose, TypeScript entry (`index.ts`) |
| `Ecommerce/` | Storefront | Next.js 14, Tailwind, Redux Toolkit, Radix UI |
| `MainWebsite/` | Marketing / landing | React, Vite, Tailwind, Framer Motion |

## Features

- **Backend:** `POST /api/newsletter` — subscribe emails (duplicate check), CORS open for clients
- **Ecommerce:** product browsing UI patterns (carousel, accordion, drawers), cart-oriented Redux state
- **MainWebsite:** landing sections (hero, courses/categories-style blocks, CTA), toast feedback, coming-soon route

## Structure

```
Backend/
  index.ts
  Models/Newsletter.ts
  vercel.json
Ecommerce/
  src/app/          # Next.js App Router
  src/components/
MainWebsite/
  src/              # Vite React landing + pages
```

## Setup

### Backend

```bash
cd Backend
npm install
# .env: MONGOURI, PORT
npm start
```

### Ecommerce

```bash
cd Ecommerce
npm install
npm run dev
```

### Main website

```bash
cd MainWebsite
npm install
npm run dev
```

## Notes

Treat this as a loose monorepo: configure env vars per app and deploy each target separately (Backend includes `vercel.json`).
