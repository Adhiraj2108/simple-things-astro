# Project conventions
Astro with semantic HTML and authored CSS. Serve images through src/lib/assets.ts and fonts through the Cloudflare URLs in src/styles/fonts.css. Local assets under public/images and public/fonts are retained as source backups. Preserve original source copy and image crops. Do not add checkout: all products are unavailable in the source.

## Visual language
- Colors: --background #f6f2e5, --foreground #141211, --footer-background #ede8da, --hero-ink #f7f2d6.
- Switzer body at 14px/1.2 desktop, 11px/1.3 mobile. Switzer Medium for product names and hero labels. Switzer Semibold for navigation. PP Editorial New Italic for editorial emphasis; false Normal is the source custom display face.
- Main headings 54px, intro/collection/quote 34px, feature headings 27px, uppercase labels 15px. See main.css for breakpoint adjustments.
- Source breakpoints: below 810px phone; 810–1279px tablet; 1280px and above desktop.
- Desktop gutters 32px, mobile 16px; section spacing 80px desktop and 48px phone. Editorial spacing is asymmetric; preserve it.
- Square corners, edge-to-edge photographs, no cards with shadows, no decorative gradients. Text overlay on mobile story panels is for legibility.
- Logo SVGs are original source assets. Do not replace the logo with typeset text.
- Read MIGRATION.md for verification status and remaining gaps.

## Asset hosting
Cloudflare R2 bucket `simple-things-assets`, public URL `https://assets.buysimplethings.org/v1`. Asset contents are immutable with a one-year cache lifetime. Publish changed content under a new version prefix and update both src/lib/assets.ts and src/styles/fonts.css. See assets-manifest.json for SHA-256 checksums.
