# PROJECT_CONTEXT.md — Madhu Thakur Portfolio (AI Continuation Document)

> Generated 2026-09-09 by scanning the actual codebase at workspace root `D:\madhu portfolio`.
> NOTE: The task brief refers to `personalPortfolio/` as project root, but on disk the real layout is
> `D:\madhu portfolio/` containing `frontend/` + `backend/` directly (there is NO `personalPortfolio/`
> subfolder). Treat `D:\madhu portfolio` as the project root.
> Read ONLY this file to continue development safely. No secrets are included (names only).

## 1. Project Overview

- **Project name:** Madhu Thakur — Full Stack Developer Portfolio (monorepo: `frontend/` + `backend/`).
- **Purpose:** Personal portfolio site: hero + talking-intro placeholder, selected work, developer toolkit, stack workflow, about, experience, education, contact form; backed by a small intentional Node+Express+MySQL API (currently only base + health routes).
- **Tech stack:** Frontend `React 19.2.8 + React-DOM 19.2.8, Vite 8.2.2, @vitejs/plugin-react 6.1.0, react-icons 5.7.0, lucide-react 1.43.0 (UNCOMMITTED, see S11), ESLint 10`. Backend `Node 22 (tested v22.20.0), Express 5.2.1 (ESM), mysql2 3.24.2/promise, cors 2.8.6, dotenv 17.4.2, nodemon 3.1.14 (dev)`.
- **Architecture:** Decoupled SPA + REST API. Frontend static data files (`src/data/*.js`) are single source of truth; `ProjectCard` takes props so `GET /api/projects` can replace static data later. Contact goes via `src/services/contactService.js` abstraction (currently throws `Contact API is not connected yet` — no fake success). Backend layered `server.js -> app.js -> routes -> controllers`, `config/db.js` pooled mysql2, central `middleware/errorMiddleware.js` (404 + error handler).
- **Status:** Phases 1-10 done per git log (setup, design system, navbar/hero/video, projects, toolkit, stackflow, about/exp/edu, contact UI, backend foundation, MySQL pool). Working tree has UNCOMMITTED theme-toggle work (App.jsx + Navbar + lucide-react dep). Backend has NO projects/contact/auth/Swagger routes yet. DB has NO schema/migrations/tables yet (pool only, `SELECT 1` check).

## 2. Project Structure

Root `D:\madhu portfolio\` (NOT `personalPortfolio/`): `.gitignore`, `README.md` (phase-by-phase stub), `frontend/`, `backend/`, `PROJECT_CONTEXT.md` (this file, untracked).

Frontend (`frontend/`): `package.json`, `vite.config.js` (only `plugins:[react()]`), `index.html` (root div, Inter font, title `Madhu Thakur | Full Stack Developer`), `eslint.config.js` (ignores `dist`, recommended+hooks+refresh), `public/favicon.svg`, `dist/` (build output, ignored), `src/main.jsx` (StrictMode render), `src/App.jsx` (section composition + UNCOMMITTED theme state), `src/index.css` (imports variables+global), `src/styles/variables.css` + `global.css`, `src/components/*/*.jsx+*.css`, `src/data/*.js`, `src/services/contactService.js`.

Backend (`backend/`): `package.json` (`type:module`, `dev:nodemon server.js`, `start:node server.js`), `server.js` (dotenv, DB check, listen), `app.js` (cors+json+routes+404+errors), `config/db.js` (pool), `routes/healthRoutes.js`, `controllers/healthController.js`, `middleware/errorMiddleware.js`, `.env` (gitignored, exists locally — names only S12), `.env.example`, `.gitignore`, `package-lock.json`. No `tests/`, no `migrations/`, no Swagger, no auth/validation middleware yet.

Purpose: per-folder CSS co-located with component; tokens live only in `variables.css`; `data/` is swappable for API; backend stays tiny/explainable.

## 3. Frontend

Setup: React 19 + Vite 8, ESM (`type:module`), entry `src/main.jsx` -> `App.jsx`. `App.jsx` renders `Navbar(theme,onToggleTheme)` + `main`: Hero, SelectedWork, DeveloperToolkit, StackFlow, About, Experience, Education, ContactForm. CSS imported per-component inside App.jsx (all `*.css` side-imports). UNCOMMITTED theme: `useState(localStorage portfolio-theme || prefers-color-scheme)`, effect sets `documentElement[data-theme]` + localStorage.
- Navbar `components/Navbar/Navbar.jsx`: sticky header, brand link `#top`, NAV_LINKS About/Skills/Projects/Experience/Contact (anchor hrefs), disabled Resume btn + `Coming soon` badge, theme toggle (Sun/Moon lucide, desktop+mobile), hamburger `menuOpen` state, closes on min-width:768px change. Props theme/onToggleTheme (uncommitted).
- Hero `Hero/Hero.jsx`: eyebrow `Hello, I'm`, H1 Madhu Thakur, role Full Stack Developer, description practical/user-friendly, CTAs View Projects/Lets Connect + disabled Resume link-btn; embeds VideoIntro right column.
- VideoIntro: real intro video. Imports `../../assets/introvideo.mp4` (1280x720, ~10s) and renders a native `<video controls playsInline preload="metadata">` inside the existing framed container (16/9, `object-fit: contain`, no autoplay); placeholder + meta line removed. CSS side-imported in `App.jsx`.
- SelectedWork: splits `projects` into featured (`find featured`) + rest grid; section `#projects`.
- ProjectCard: props `project,featured=false`; visual (image or dark placeholder number+title), number/title/desc, tech pills, Role (`?? Details coming soon`), links Live Demo/GitHub/Case Study via ProjectLink (real URL->external link else `coming soon` muted span). API-ready.
- DeveloperToolkit: state `activeCategory(All default)/activeSkillId`; CATEGORIES filter buttons aria-pressed; grid of SkillIcon; hint text. SkillIcon: button tile, `--skill-color` var, aria-pressed/describedby, toggles tooltip. SkillTooltip: name/category/desc/usage spans.
- StackFlow: state `activeId`; accordion list of StackStage (button aria-expanded/controls + div hidden). Note explains React->REST->DB + DEEM Portal.
- About `#about`: lead MCA graduate, 3 points Full Stack/Problem Solving/Continuous Learning.
- Experience `#experience`: placeholder `Professional experience details will be added here.`
- Education `#education`: MCA + Gold Medalist pill + `University and year details to be added.`
- ContactForm: controlled name/email/message, regex email validation, per-field errors + submitError/success states, calls `submitContactMessage` (always throws now -> shows `Something went wrong...`).
Data: `projects.js` 6 items (see S8), `skills.js` 29 skills CATEGORIES All/Frontend/Backend/Database/Tools/Programming, `stackFlow.js` 6 stages Idea/Design/React/REST/Node+Express/Database. Service `contactService.js` stub. Hooks: only useState/useEffect (no custom hooks). Assets: only `public/favicon.svg`. CSS: tokens in `variables.css`, reset/base/utilities in `global.css`, BEM per-component, no Tailwind/styled-components.

## 4. Backend

Node ESM + Express 5. Entry `server.js`: `import dotenv/config`, PORT=env PORT||5000, `startServer()` awaits `testDatabaseConnection()` then listen; on DB fail logs code/message + hint and `process.exit(1)`. No `app.listen` in `app.js`. `app.js`: `cors({origin: FRONTEND_URL||http://localhost:5173})`, `express.json()+urlencoded`, `GET / -> {success:true,message:Portfolio API}`, `app.use(/api,healthRoutes)`, then notFoundHandler + errorHandler. Routes: only `routes/healthRoutes.js` `GET /api/health -> getHealth`. Controller `healthController.js getHealth`: tries `testDatabaseConnection()`, returns `{success:true,message:API is running,database:connected|disconnected,timestamp:ISO}` always 200 (DB field signals persistence). Middleware `errorMiddleware.js`: `notFoundHandler->{success:false,message:Route not found}` 404; `errorHandler(err,req,res,next)` logs in non-prod, generic 500 message, includes stack only non-prod. DB `config/db.js`: `mysql2/promise.createPool({host:DB_HOST||localhost,port:DB_PORT||3306,user:DB_USER,password:DB_PASSWORD,database:DB_NAME,limit 10,charset utf8mb4})`, `testDatabaseConnection()` getConnection+`SELECT 1`+release. No Swagger, no validation/auth/projects/contact code. Deps: cors/dotenv/express/mysql2 + nodemon dev.

Per-route: `GET /` 200 info, no DB. `GET /api/health` purpose liveness+DB reachability, no params/body/validation, response above, DB op `SELECT 1` via controller, files routes/healthRoutes.js + controllers/healthController.js. Unknown routes -> 404 JSON. Errors -> JSON envelope.

## 5. Database

Tech: MySQL (mysql2/promise pool, utf8mb4). DB name from env DB_NAME (example `portfolio_db`, real value unknown — names only). NO schema files, NO migrations, NO tables, NO keys/constraints exist in repo — do not invent any. CRUD: none yet (only `SELECT 1` liveness). Connect: `backend/config/db.js` pool (host/port/user/password/database from DB_* env, limit 10, waitForConnections true) + `testDatabaseConnection()` called at startup (fail-fast exit 1) and inside health controller per request (maps to connected/disconnected). `backend/.env` exists locally (gitignored); only `.env.example` is committed.

## 6. API Documentation

| Method | Endpoint | Purpose | Controller | Database |
| GET | `/` | Base info `Portfolio API` | inline in app.js | none |
| GET | `/api/health` | Liveness + DB reachability | controllers/healthController.js getHealth | `SELECT 1` via pool |

URLs: backend `http://localhost:5000`, frontend `http://localhost:5173` (Vite default; CORS origin defaults to it). Swagger URL: NONE (not implemented). CORS: single origin `process.env.FRONTEND_URL || http://localhost:5173` via `cors` package; no credentials/extra methods configured. Env names only: PORT, NODE_ENV, FRONTEND_URL, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, JWT_SECRET (commented, future). Future contracts referenced in comments only: `POST /api/contact {name,email,message}` and `GET /api/projects` — NOT implemented.

## 7. Current UI / Design System

Simple professional human-made fresher style (NOT neon/futuristic). Tokens `styles/variables.css`: bg `#f7f5f0`, text `#171717`, secondary `#66615b`, accent terracotta `#c65d3b` (sparingly: eyebrows, role, active states, honor pill), dark `#181a1b`, border `#ddd8cf`, white `#fff`. Font Inter via Google Fonts + system fallback; sizes xs12/sm14/base16/lg18/xl20/2xl24, H1 clamp(2.25rem,5vw,3.25rem) H2 clamp(1.5rem,3vw,2rem). Spacing scale 1/2/3/4/5/6/8/10/12/16; container 1120px, page padding clamp, section clamp(3rem,7vw,5rem). Borders 1px hairline; radius small 4/medium 8/large 12; shadows subtle/soft only; transitions 150/200ms ease. Buttons `.btn` primary (dark bg->accent hover), secondary (border), link (underline); cards white+hairline border, hover border-darken+subtle shadow (no glow/tilt); navbar sticky 64px bg+bottom border; grids: hero 1.1/0.9fr, projects 2col->1col <=1024px, toolkit 4->3->2, stack 3->2->1; breakpoints 1024/768/767/640/430; hover: links accent, filters invert, skill tile brand border + icon brand color + tooltip; active: filter dark pill, skill tooltip pinned, stack accordion open; animations: image scale 1.02, stack-fade translateY(-2px), mobile menu max-height; a11y: focus-visible accent outline, aria labels/expanded/pressed/describedby, sr-only/muted/eyebrow utilities, semantic sections, hidden attr accordion, prefers-reduced-motion disables motion. No `data-theme:dark` overrides committed (toggle sets attr but dark tokens missing — see S11).

## 8. Portfolio Content

Name Madhu Thakur; positioning Full Stack Developer (MCA graduate, Gold Medalist). Hero: `Hello, I'm / Madhu Thakur / Full Stack Developer / I build practical, user-friendly web applications...`. About: MCA interest full-stack, 3 points as S3. Skills: 22 (HTML5 CSS3 JS React Next Bootstrap Tailwind; Node Express; MySQL Postgres Mongo Firebase; Postman Swagger Git GitHub WordPress; Java Python DSA OOPs) each desc+usage. Experience: placeholder only. Education: MCA Gold Medalist, university/year TBD. Projects (exact): 01 DEEM Portal `A full-stack web application built to manage internal workflows. It was developed to demonstrate practical full-stack development across the frontend, backend and database.` tech React/Node/Express/MySQL, featured, all URLs null; 02 JeevanDo `An application built to explore practical development. Details and live links are coming soon.` tech [Coming soon]; 03 Algorithm Visualizer `A visualization tool for understanding algorithms through interactive demos. Details and links are coming soon.`; 04 Resume Builder `A tool for creating and formatting a professional resume. Details and links are coming soon.`; 05 AI Expense Tracker `An expense tracking application. Details and links are coming soon.`; 06 AI Blog `A blogging application. Details and links are coming soon.` (02-06 all URLs/role/image null, featured false). Contact: `Have a question, opportunity, or just want to connect?` form name/email/message. Footer: NONE (no footer component). Resume: disabled buttons (navbar + hero, `title=Resume coming soon`, badge in navbar, hidden on <=430px hero). Video: real HTML5 intro video (`src/assets/introvideo.mp4`, 1280x720, ~10s) with native controls, no autoplay.

## 9. Current Features

Frontend: anchor nav + mobile drawer, theme toggle (UNCOMMITTED), hero CTAs, video placeholder frame, featured+grid projects with coming-soon links, category filter + skill tooltips, stack accordion, about/edu static, contact validation + honest error (no fake success). Backend: base route, health with DB status, CORS single-origin, JSON parsing, 404 + central error envelope, fail-fast DB check. DB: pooled connections + liveness only. API: 2 GET endpoints only.

## 10. Features Being Developed

- Theme toggle: EXISTS uncommitted (App state + Navbar buttons + lucide-react + CSS). Remains: commit, add `data-theme=dark` token overrides in variables.css, test persisted + prefers-color-scheme. Files App.jsx, Navbar.jsx/css, package.json.
- Contact API: form + service shape exist; backend POST /api/contact + DB table + fetch wiring remain.
- Projects API: static data + prop-ready card exist; backend GET /api/projects + table + fetch remain.
- Resume PDF: disabled buttons only; needs file in `public/` + enable links.
- Intro video: placeholder only; needs MP4/poster in `public/video/` (create folder) + set constants + captions.
- Experience/education details, footer, Swagger, JWT auth: placeholders/comments only.

## 11. Known Issues / Warnings

Confirmed: (1) theme toggle sets `data-theme` but NO dark tokens in variables.css -> toggle has no visual effect; (2) worktree dirty — lucide-react + App/Navbar theme code uncommitted (HEAD f1f5fc7 has plain Navbar); (3) backend never sets `app.set(dbConnected)` though healthController comment claims it (health instead re-tests pool per request — harmless inconsistency); (4) no DB tables/migrations; server exits 1 if MySQL down so API unusable without DB; (5) contact always errors by design (not connected); (6) `skill__tooltip` uses `var(--color-ink,#181a1b)` fallback — `--color-ink` undefined (falls back fine, possible typo); (7) Navbar quote-style churn in diff (lint passes); (8) App.jsx missing trailing newline. Possible: tooltip clipping on last row (comment-noted); mobile menu visibility-hidden pattern; JS color `#f0db4f` low contrast. Intentional placeholders: Resume disabled, video placeholder, 5/6 projects coming-soon, experience/education TBD, JWT commented, Swagger absent, contactService throw. Lint/build verified 2026-09-09: `npm run lint` clean, `npm run build` success (255KB JS, 27KB CSS). Backend `node --check` pass; live start/DB/API not tested (would need DB + secrets; destructive/network avoided).

## 12. Environment Configuration

PORT=API port (default 5000). NODE_ENV=development|production (error detail + logging). FRONTEND_URL=CORS origin (default http://localhost:5173). DB_HOST/DB_PORT/DB_NAME/DB_USER/DB_PASSWORD=MySQL connection (pool in config/db.js; server fail-fast). JWT_SECRET=commented future auth. Frontend has NO VITE_* vars. Never commit `.env` (root+backend gitignore; `.env.example` committed).

## 13. Development Commands

Frontend (`cd frontend`): install `npm install`; dev `npm run dev` (-> http://localhost:5173); build `npm run build` (outputs `dist/`); lint `npm run lint`; preview `npm run preview`. Backend (`cd backend`): install `npm install`; dev `npm run dev` (nodemon server.js -> http://localhost:5000); prod `npm start`. Requires MySQL + `backend/.env` or server exits 1. No tests/seed/migrate scripts.

## 14. History / Decisions

Phases (git log): 1 setup+conventions, 2 tokens/global CSS, 3 navbar/hero/video, 4 projects showcase, 5 toolkit, 6 stackflow, 7 about/exp/edu, 8 contact UI+service, 9 express foundation, 10 pool+startup check. Decisions confirmed in code/comments: React+Vite JS (no TS/router), Node+Express5 ESM + MySQL pool, API-based future for projects/contact (props/service seams), CSS tokens single-source + BEM co-located, terracotta accent sparing, responsive anchor navbar, no-fabrication placeholders (null->coming soon, disabled Resume, VIDEO_SRC=null), tiny explainable backend with JSON envelope + credential-free errors.

## 15. Future Planned Features

Only with in-code evidence: Resume PDF (disabled btn title), POST /api/contact + fetch in contactService, GET /api/projects replacing static file, experience/education real data (comments), JWT_SECRET (env comment), Swagger-style docs (skills mention Documenting REST; no backend code), theme dark tokens (uncommitted toggle), footer (absent entirely — likely but unconfirmed).

## 16. Important File Reference

| File | Purpose | Notes |
| App.jsx | Section composition + theme state (uncommitted) | Check before layout changes; imports all CSS |
| main.jsx | React entry | StrictMode; imports index.css |
| styles/variables.css | Design tokens | Edit tokens here only; dark theme missing |
| styles/global.css | Reset/base/btn/container | Shared utilities |
| Navbar.jsx | Nav+Resume+theme+mobile | Props theme/onToggleTheme uncommitted |
| Hero.jsx/VideoIntro.jsx | Hero + real intro video | VideoIntro imports src/assets/introvideo.mp4 (1280x720, native controls, 16/9 contain) |
| SelectedWork.jsx/ProjectCard.jsx | Showcase + card (props-driven) | API-ready; null->coming soon |
| data/projects.js | 6 projects source of truth | DEEM featured; rest TBD |
| data/skills.js | 29 skills + categories | Brand color hover-only |
| data/stackFlow.js | 6 workflow stages | Frontend-only |
| DeveloperToolkit.jsx/SkillIcon.jsx/SkillTooltip.jsx | Filter grid + tiles | activeCategory/activeSkillId |
| StackFlow.jsx/StackStage.jsx | Accordion workflow | activeId; a11y disclosure |
| About/Experience/Education.jsx | Static sections | Placeholders, no fabrication |
| ContactForm.jsx/services/contactService.js | Form + API seam | Throws until backend exists |
| backend/server.js | Entry, dotenv, DB check, listen | Fail-fast exit 1 |
| backend/app.js | Middleware+routes+errors | CORS single origin |
| backend/config/db.js | MySQL pool | SELECT 1 only |
| backend/routes/healthRoutes.js | GET /api/health | Only API route |
| backend/controllers/healthController.js | Health logic | Re-tests pool per request |
| backend/middleware/errorMiddleware.js | 404 + error JSON | Never leaks internals |
| backend/.env.example | Env template | Names only; JWT future |

## 17. AI Continuation Guide

Preserve SPA+REST split, ESM JSX (no TS), BEM co-located CSS, token-only theming, `{success,message}` (+data) envelope, routes->controllers layering, no-fabrication rule. Before change check: App.jsx (composition/CSS), variables.css (tokens), data files (content), contactService (seam), app.js/server.js/db.js (API/DB), git status (dirty theme work). Conventions: camelCase JS, PascalCase components, BEM `block__el--mod`, tokens `var(--space-*/--color-*)`, REST `/api/*` lowercase, `{success:false,message}` errors, credential-free logs. Do NOT: add neon/glass/heavy animation, invent resume/projects/experience/education content, commit `.env`/secrets, add unneeded deps (lucide already uncommitted — reuse), restructure backend layers, bypass contactService/ProjectCard props. Design: terracotta sparingly, hairline borders, Inter, 1120px container. Placeholders: Resume disabled, VIDEO_SRC null, contact throws, 5 projects TBD, no tables, JWT/Swagger absent. Connect: frontend static now; add backend route+controller+migration then fetch in service/data (keep prop shapes). DB: add migrations (new folder), never hardcode creds, keep pool/test pattern. Ask before: new auth/architecture/DB engine, visual rebrand, router/state lib, changing CORS/error envelope, committing theme work vs adding dark tokens first.

## 18. Verification Summary

Frontend build: PASS `npm run build` 2026-09-09 (vite 8.2.2, 1883 modules, dist 0.93KB html / 27.24KB CSS / 255.87KB JS). Lint: PASS `npm run lint` (eslint, no errors). Backend syntax: PASS `node --check` app/server/db. Backend start/API/DB-live: NOT tested (needs MySQL + secrets; avoided per read-only rule — server would exit 1 without DB). Commands run: file listing, package/vite/eslint reads, all component+CSS+data reads, git log/status/diff, npm lint/build, npm list, node --check. Errors observed: none in code (only PowerShell `head`/`timeout` misuse during inspection). No source files modified (only created PROJECT_CONTEXT.md); git status otherwise still shows pre-existing dirty theme files. Secrets check: PASS — names only, values masked/omitted.
