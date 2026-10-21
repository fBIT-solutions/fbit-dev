# fBit Project Showcase

A responsive Next.js showcase for fBit projects, styled with a charcoal / blue-grey base and restrained moss-green accents.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Customise projects

Edit `content/projects.ts`. The project browser automatically reads that list and supports category filters and text search. For projects without confirmed product details, copy is intentionally cautious. Update each project's `status`, `description`, `href`, and `tags` when the details are ready.

## Brand assets

The supplied fBit logos and avatar are in `public/brand/`. The current homepage uses the developer logo in the header and the light logo in the About section.

## Before publishing

- Confirm the public domain to use in `app/layout.tsx` (`metadataBase`).
- Confirm project descriptions, availability, and outbound URLs.
- Add a real contact address and a privacy page if you collect personal data or add analytics.
- Add real product screenshots under `public/projects/` as they become available.
- Confirm whether the GitHub organisation URL should be `https://github.com/fBit`.

## Stack
Next.js App Router, React, TypeScript, Lucide icons, custom CSS.
