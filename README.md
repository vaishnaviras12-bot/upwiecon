# UPWIECON 2027 — Redesigned Frontend

A modern, premium redesign of the UPWIECON 2027 conference website
(source of truth: https://nielit.ac.in/upwiecon2026/), rebuilt with
React + Vite + Tailwind CSS. All conference content (dates, venue,
tracks, committees, speakers, registration fees, etc.) is copied
verbatim from the live site — only layout, typography, color and
interaction have been redesigned.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## IMPORTANT — Replace placeholder logos

This project was built in a sandbox with no internet access, so the required header logos could not be downloaded from the live site. They are currently **placeholder SVGs** with text labels.

Replace the placeholder files with the official logos:

```text
src/assets/logos/wit-logo-placeholder.svg
→ Replace with the real WIT logo (site's logo1.png)

src/assets/logos/ieee-logo-placeholder.svg
→ Replace with the real IEEE logo (site's ieee_logo.jpg)

src/assets/logos/ieee-up-wie-placeholder.svg
→ Replace with the real IEEE UP Section WIE logo (site's ieee_up.jpg)

src/assets/logos/wie-logo-placeholder.svg
→ Replace with the real IEEE WIE logo
```

The final header should display the logos of:

* **WIT** – Women's Institute of Technology
* **IEEE** – Institute of Electrical and Electronics Engineers
* **IEEE UP Section** – IEEE Uttar Pradesh Section
* **IEEE WIE** – IEEE Women in Engineering


Your **VMSB UTU logo is already in place** at
`src/assets/logos/vmsbutu-logo.png` and wired up correctly.

To swap a placeholder:
1. Save the real logo file into `src/assets/logos/` (any image format works — png/jpg/svg).
2. Open `src/components/LogoGroup.jsx` and update the corresponding `import` line to point at your new file, e.g.:
   ```js
   import nielitLogo from '../assets/logos/your-real-file.png'
   ```
No other changes are needed — the header, mobile menu, and footer all pull logos from this one file.

## Sponsor / partner logos

The homepage "Our Sponsors" and "Trusted by leading organizations
worldwide" strips are also placeholders (text chips) for the same
reason — those image assets weren't accessible either. Real sponsor
logos can be dropped into `src/assets/images/sponsors/` and wired up
in `src/components/SponsorStrip.jsx`.

## Project structure

```
src/
├── components/     # Reusable UI: Header, Footer, Hero, Card, Timeline, etc.
├── pages/          # One file per route (Home, Speakers, Committees, ...)
├── data/           # All real conference content, as plain JS data
├── assets/logos/   # Header logos (see note above)
├── App.jsx         # Route definitions
├── main.jsx        # Entry point
└── index.css       # Tailwind + global styles
```

## Notes

- Backend/forms are **not** rebuilt. Registration and paper submission
  buttons link out to the same external systems the original site
  uses (Google Forms, Microsoft CMT, `registrationform.php` on the
  NIELIT domain). Wire these to your actual endpoints if they change.
- This build was written carefully against known-good Vite/Tailwind/
  React Router versions but **could not be `npm install`'d or test-run**
  in the environment it was created in (no network access). Please
  run it locally and report any dependency or console errors so they
  can be fixed.
- Supports `prefers-reduced-motion`, keyboard navigation, semantic
  landmarks, and alt text throughout.
