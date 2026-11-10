# Simple Things rebuild

Source: https://buysimplethings.org/
Reference: supplied Simple Things Framer project, inspected read-only.

## Done
- Surveyed the published homepage, its source styles, media queries, asset references, and Framer canvas.
- Rebuilt the single-page layout in Astro: hero, philosophy, paired photography, ceremony, story/philosophy panels, four products, two tenets, quote, contact, footer.
- Preserved source copy, prices and unavailable product states; restored decoded source email destinations.
- Downloaded original photographs, both logo SVGs, favicon, and seven font files into public/.
- Authored design tokens, responsive CSS, /style-guide and AGENTS.md visual language notes.
- Implemented anchor navigation, mobile menu with keyboard handling, reduced-motion behavior, image hovers and hero entrance motion.
- Verified production build with `npm run build`.
- Validated all generated homepage asset paths and section anchors: no missing destinations.
- Preview console had no errors when connected after the first build.

## Doing
None. Implementation is available locally; screenshot verification is waiting for preview access.

## Not done
- Desktop/tablet/phone screenshot comparisons and runtime interaction verification.
- Pixel-match score: not measured. The preview initially disconnected, briefly reconnected for a starter capture and console check, then reported multiple open projects with none focused. The computer-use browser host was unavailable. A Framer desktop reference screenshot was inspected, but no rendered rebuild screenshot could be obtained.
- Exact Framer scroll/spring animation parity is not established. Hero entrance and hover states are approximated with native CSS. Story panels expose text on hover rather than duplicating Framer's scroll-driven opacity.

## Needs you
Focus the simple-things workspace in Ship Studio to enable final screenshots and interaction checks. An asynchronous request has been sent.

## Templates and breakpoints
One authored homepage. /about redirects to /#about. /style-guide documents the extracted visual language.
Phone: below 810px; tablet: 810–1279px; desktop: 1280px and above. All three layouts are implemented but not visually verified.

## Cannot come across
- Framer editor, analytics, publishing infrastructure and proprietary runtime are outside the local frontend.
- Source products are unavailable and have no checkout destinations; this state is preserved.
- Source has no contact submission form; contact uses email links.

## Cloudflare asset hosting
- Hosted all 25 image/font assets (15,685,386 bytes) in R2 bucket `simple-things-assets`.
- Connected `assets.buysimplethings.org` with TLS and versioned `/v1/` paths.
- Enabled GET/HEAD CORS for font use from local previews and production.
- Set correct MIME types and immutable one-year cache headers.
- Downloaded every public asset and matched SHA-256 against local originals; verified CORS and cache headers.
- Updated production HTML/CSS to use all 25 CDN URLs, and confirmed the production build passes.
- Removed the temporary authenticated upload Worker after the transfer. No uploader remains deployed.
