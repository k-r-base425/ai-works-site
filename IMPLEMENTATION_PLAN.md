# AI WORKS Web Implementation Plan

## Goal

Create a React + Tailwind CSS implementation of the AI WORKS website based on the generated UI mock images in `outputs/`.

The site should reproduce the mock direction as closely as possible:
- Japanese mobile-first pages.
- Off-white gallery-like layout.
- Rounded cards, badges, STAGE labels, product-card works sections.
- Soft, approachable AI portfolio tone.
- No aggressive sales CTAs.
- No visible email, phone, LINE, or other concrete contact details.

## Reference Images

- `outputs/ai-works-mobile-ui.png`
- `outputs/ai-works-works-list-ui.png`
- `outputs/ai-works-work-detail-ui.png`
- `outputs/ai-works-can-do-ui.png`
- `outputs/ai-works-process-ui.png`
- `outputs/ai-works-notes-ui.png`
- `outputs/ai-works-profile-ui.png`
- `outputs/ai-works-related-activity-ui.png`
- `outputs/ai-works-qr-guide-ui.png`

## Technical Stack

- React
- Vite
- Tailwind CSS
- TypeScript
- Framer Motion for tasteful UI animation
- Lucide React only where a generated transparent image asset is not appropriate

Note: the user wrote `Tailscale.css`; this plan treats that as `Tailwind CSS`.

## Asset Strategy

Use `/image-gen` built-in generation from the mock images as visual references for project-bound raster assets.

Project assets should be saved under `public/assets/generated/`.

Required generated assets:
- `hero-gallery.png`: transparent or edge-blended hero gallery motif.
- `work-thumbnails.png`: work card thumbnail sheet or reusable image tiles.
- `profile-portrait.png`: friendly portrait style matching the profile mock.
- `qr-guide-visual.png`: QR card guide illustration.
- `related-activity-visual.png`: subdued storefront / dedicated LP preview.
- `soft-icon-set.png`: transparent PNG icon set for stage/category accents.

For transparent icon-like assets:
- Generate on a flat chroma-key background.
- Remove chroma key with the imagegen helper.
- Verify PNG alpha exists.

## Architecture

Pages are implemented with React Router:
- `/` top page
- `/works`
- `/works/ai-works`
- `/can-do`
- `/process`
- `/notes`
- `/profile`
- `/related`
- `/qr-guide`

Core folders:
- `src/data/`: page data and shared text.
- `src/components/`: shared layout, nav, cards, badges, stage UI.
- `src/pages/`: one page component per route.
- `src/styles/`: global styles and Tailwind layer customizations.
- `public/assets/generated/`: generated image assets.

## Fidelity Criteria

Primary visual acceptance criteria:
- At 390x844 viewport, each page matches the reference composition and tone.
- Header spacing, stage labels, large page headings, card radii, shadows, badge sizes, and accent colors are visibly close.
- Japanese copy appears readable and uses the same hierarchy as the references.
- Cards do not overlap and button text fits.
- Related Activity remains subdued and not present as an aggressive nav item.
- Animations are gentle: reveal, hover, stage-path motion, card float. No flashy or childish game behavior.

Known limitation:
- Pixel-level exactness is not realistically possible from generated static mockups without design source files. The implementation target is high visual fidelity and layout parity, with browser screenshots used for iteration.

## Browser Verification

Use Browser Use for:
- Opening the local dev server.
- Capturing/inspecting mobile viewport at 390x844.
- Checking at least `/`, `/works`, `/works/ai-works`, `/can-do`, `/process`, `/profile`, `/qr-guide`.
- Checking desktop width around 1280px for non-broken responsive layout.

Visual issues to fix:
- Text overflow.
- Incoherent overlaps.
- Missing generated assets.
- Too much sales/CTA emphasis.
- Page no longer resembles the mock family.

