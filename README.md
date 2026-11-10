# Simple Things

An Astro reconstruction of https://buysimplethings.org/, using the supplied Framer project as a read-only design reference.

```sh
npm install
npm run dev
npm run build
```

- `src/pages/index.astro`: homepage and authored product data.
- `src/styles/main.css`: design tokens, components, and source breakpoints (810px and 1280px).
- `src/styles/fonts.css`: original self-hosted font declarations.
- `public/images`: source photography, wordmarks and favicon.
- `/style-guide`: extracted palette and typography.
- `MIGRATION.md`: implementation and verification status, including remaining limitations.

All four products remain unavailable, matching the source. Contact links open email; there is no checkout or submission backend.

## Asset hosting

All 25 images, wordmarks, favicon and fonts are hosted in Cloudflare R2 bucket `simple-things-assets` at `https://assets.buysimplethings.org/v1`. `src/lib/assets.ts` supplies image URLs, while `src/styles/fonts.css` supplies font URLs. Local originals remain as backups.

`assets-manifest.json` records object paths, byte counts and SHA-256 checksums. Every public HTTPS download was checked against its local source; CORS and immutable one-year cache headers were verified. Use a new version prefix for future asset changes.
