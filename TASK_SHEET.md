# Sitelytc Code Audit Task Sheet

Scope: Automated checks (`eslint`, `tsc`, `next build`) plus targeted manual review of the pages/components that were failing or high-risk.

## Fixed (Implemented)

1. Tailwind build failure: unknown utility classes (`bg-sun`, `bg-saturn-*`).
   - Root cause: missing `saturn-*` theme tokens and Tailwind v4 `@theme` placement.
   - Fix: defined `--color-saturn-*` and moved `@theme` ahead of `@import "tailwindcss"`.
   - Files: `src/app/globals.css`

2. Work detail route: `notFound()` called inside a Client Component.
   - Risk: `notFound()` is intended for Server Components; client usage can break in runtime/edge cases.
   - Fix: converted `src/app/work/[slug]/page.tsx` to a Server Component using `{ params }`.
   - Files: `src/app/work/[slug]/page.tsx`

3. Contact page: "Schedule a Call" was a dead `href="#"` link.
   - Fix: linked directly to Calendly.
   - Files: `src/app/contact/page.tsx`

4. Calendly widget: potential duplicate embeds when opening/closing repeatedly.
   - Fix: clear container before init and on close; typed `window.Calendly` instead of `any`.
   - Files: `src/components/WhatsAppCTA.tsx`

5. Navbar "Work" mega menu filters: unencoded query params (spaces in category names).
   - Fix: `encodeURIComponent(cat)` for `/work?category=...`.
   - Files: `src/components/Navbar.tsx`

6. Navbar preview fallback logo referenced a non-existent path.
   - Fix: fallback to `/logo.png` (exists).
   - Files: `src/components/Navbar.tsx`

7. Content data: `galleryImages` referenced `/placeholder.jpg` which does not exist in `public/`.
   - Fix: replaced with an existing asset.
   - Files: `src/content/case-studies.ts`

8. Lint noise: unused imports/vars across pages.
   - Fix: removed unused imports/vars; lint now passes clean.
   - Files: `src/app/contact/page.tsx`, `src/app/services/page.tsx`, `src/app/videos/page.tsx`, `src/app/work/page.tsx`, `src/app/page.tsx`, `src/app/work/[slug]/page.tsx`, `src/app/portals/page.tsx`, `src/app/founder/page.tsx`

9. Build flakiness caused by stale `.next/dev/types/*` artifacts.
   - Symptom: TypeScript errors importing generated `.next/dev/types/routes.d.ts`.
   - Fix: added best-effort `prebuild` cleanup for generated type/build outputs.
   - Files: `package.json`

## Remaining (Decisions / Next Work)

1. Package manager consistency (repo hygiene).
   - Current: `pnpm-lock.yaml` is now present, but `package-lock.json` also exists.
   - Decide one:
     - Option A (recommended): standardize on `pnpm` (keep `pnpm-lock.yaml`, remove `package-lock.json`).
     - Option B: standardize on `npm` and update README to use `npm run dev`.

2. Contact form is a mock submit (no backend).
   - Current behavior: `setTimeout` simulates success without sending anything.
   - Fix options:
     - Add `app/api/contact/route.ts` to send email (Resend/SendGrid/SMTP) and wire the form to it.
     - Or integrate a form provider (Formspree, etc.) and remove local state simulation.

3. Navbar robustness when `caseStudies` is empty.
   - Current: state initializes from `caseStudies[0]`.
   - Fix: default to `null` and guard the preview panel/selected client list.

4. Content QA pass (non-code).
   - Check copy, dates, and external links (YouTube channel, Calendly, WhatsApp) for correctness.

## Validation Status

- `npm run lint`: PASS
- `npx tsc --noEmit`: PASS
- `npm run build`: PASS
