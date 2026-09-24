# BYTEBEARD_ · personal portfolio

A real Next.js starter built for bytebeard_ from the provided cream/red, playful editorial reference. It has its own artwork and layouts, not a screenshot of someone else's site.

**Pages:** `/` (home), `/work` (project index), `/work/[slug]` (four detailed project pages), `/about`, `/frames` (photography wall), `/playground` (working interactive typographic toy), and `/contact`.

**Stack:** Next.js App Router, React, TypeScript, Tailwind CSS (configured), a custom CSS art direction, and GSAP/ScrollTrigger for selective scroll reveals. No WebGL was added just for decoration. No database, CMS or environment variables are required to preview the site.

## Before touching Git or Vercel

1. Extract the ZIP. The folder should DIRECTLY contain `package.json`, `app/`, `components/`, `content/`, `.gitignore` and `public/`. There is no second nested project folder in this ZIP.
2. Install [Node.js LTS](https://nodejs.org/) if necessary.
3. Open **this exact folder** in VS Code. Menu: **Terminal → New Terminal**.
4. From that terminal:

```powershell
# Ensure the next command is being run in the folder that has package.json:
dir package.json
npm install
npm run typecheck
npm run build
npm run dev
```

5. Open http://localhost:3000 in your browser. Stop with Ctrl+C.

**Important:** A real `npm run build` on your computer is the gate before you deploy. Do not push if it reports an error.

## Make it YOURS first

- **Bio, handle, GitHub, optional contact links and portrait**: edit `content/site.ts`.
- **Projects and truthful case-study text**: edit `content/projects.ts`. The four examples describe previously discussed work. NEXA is explicitly described as an AI-assisted collaborative build. Metaversus and Thunder Text are explicitly labeled learning studies. Update/remove links if you change their URLs.
- **Personal photo**: your reference shows a cutout of a person, but you have not sent your own cutout yet. This starter uses a custom original illustration, not a photo of another person. Add your OWN transparent cutout as `public/images/portrait.png`, then change `portraitImage: ""` to `portraitImage: "/images/portrait.png"` inside `content/site.ts`.
- **Real photography**: the `/frames` page has four ORIGINAL CSS art placeholders, clearly labeled as placeholders. Add your own `public/images/frame-01.jpg` etc. Open `content/frames.ts`, add `src: "/images/frame-01.jpg"` to each corresponding object. Rename categories and text as you please.
- **Social/contact**: only GitHub is filled in; your own email/Instagram were not provided, so the site does not fabricate them. Add public contact handles to `content/site.ts` only if you wish to display them publicly.
- **Colors/fonts/layouts**: `app/globals.css`; typography uses remote Google Fonts (`Righteous`, `Caveat`, `DM Sans`) with system fallback. The site works without downloading font files into the project.

Since this is a public site, do not add your home address, school, private number or other sensitive details unless you deliberately intend to publish them.

## GitHub + Vercel after you see the site working locally

The `.gitignore` ALREADY exists. `node_modules`, `.next`, and `.env*` won't be tracked.

**Open the terminal in this project folder, not your Desktop, home directory or a parent folder.** Run `git rev-parse --show-toplevel` to confirm if you're unsure.

For a **brand-new, empty GitHub repo**, run:

```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-NEW-PORTFOLIO-REPO.git
git push -u origin main
```

If you use an existing repo, do NOT blindly run `git init` or `git remote add` again; use its current remote. On Vercel, **Add New → Project**, import your portfolio repo, choose **Next.js**, set Root Directory to `./`, and keep defaults. No environment variables required.

For later changes after the repo is connected:

```powershell
npm run typecheck
npm run build
git add .
git commit -m "Update portfolio"
git push
```

## Design and accessibility decisions

- Reference-inspired cream/red editorial look, giant irregular typographic hero, oversized personal-overview and competencies sections, collaged SVG art and warm paper texture.
- Every project has its own responsive, **original CSS illustration**, which is not passed off as a real screenshot.
- Full-screen animated navigation, restrained GSAP scroll entrances, large hover states and a tiny custom cursor on mouse devices only.
- Keyboard navigation, real links, descriptive alt text, mobile-specific layouts, `prefers-reduced-motion`, and no hover-only essential functions.

## A note on testing

The authoring environment in which this archive was generated could not connect to the npm registry, so the actual Next.js production build could not run there. All project TypeScript/TSX files were checked for **syntax parsing** using the TypeScript parser. You still need to run `npm install`, `npm run typecheck`, `npm run build` locally before publishing. Report the *first actual build error* with the filename and line if one appears; do not apply unrelated `npm audit fix --force` updates during setup.
