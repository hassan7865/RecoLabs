# RecoLabs

Multi-app workspace containing a shared backend, ecommerce app, and main website.

## Overview

RecoLabs groups related products in one repository so shared backend services and frontends can evolve together.

## Apps

| Folder | Role |
|--------|------|
| `Backend/` | Node/Express API (MongoDB/Mongoose) |
| `Ecommerce/` | Ecommerce frontend |
| `MainWebsite/` | Primary marketing / main site |

## Stack

- Node.js, Express
- MongoDB (Mongoose)
- JavaScript/TypeScript frontends (per app)

## Getting started

Each app is independent. From the app you want to run:

```bash
cd Backend   # or Ecommerce / MainWebsite
npm install
npm start    # or npm run dev if available
```

Configure environment variables per app (database URI, ports, etc.) before starting.

## Notes

Treat this as a monorepo-style workspace without a shared package manager root — install and run each folder separately.
