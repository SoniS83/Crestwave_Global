# Crestwave Global Website

React + Vite frontend with a Node.js/Express backend, containerized with Docker and auto-deployed to an Azure VM via GitHub Actions.

**Live site:** http://20.6.74.110
**Stack:** React 19 + Vite 8 · Node.js + Express 5 · Docker · Azure VM (Ubuntu 24) · GitHub Actions

---

## Prerequisites

Before cloning, make sure you have:

- **Node.js** v20.x (matches the Docker image — check with `node -v`)
- **npm** v10+ (comes with Node 20)
- **Git**
- **Docker** (only needed if you want to test the container build locally — not required for frontend/backend dev)

---

## 1. Clone the repository

```bash
git clone https://github.com/SoniS83/Crestwave_Global.git
cd Crestwave_Global
```

## 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

> **Why `--legacy-peer-deps`:** this project uses React 19, but one dependency (`react-simple-maps`) only declares peer support up to React 18. The packages work fine together in practice, but npm's strict resolver blocks a plain `npm install`. This flag is required both locally and inside the Dockerfile — don't drop it or the install will fail with an `ERESOLVE` error.

## 3. Create your local environment file

```bash
cp .env.example .env   # if .env.example exists
# otherwise create .env manually:
nano .env
```

Required variables:

```
PORT=5000
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
```

`.env` is git-ignored and must be created manually on every machine (laptop or server) that runs this project. It is never pulled from GitHub.

## 4. Run in development

Two separate processes — frontend (Vite dev server) and backend (Express API) — run side by side during development:

```bash
# Terminal 1 — frontend dev server (hot reload, http://localhost:5173)
npm run dev

# Terminal 2 — backend API server (http://localhost:5000)
npm run server
```

The Vite dev server proxies/CORS-allows requests to `localhost:5173` from the Express server — see `server/server.js` if you need to adjust allowed origins.

## 5. Build for production

```bash
npm run build
```

This generates the static frontend bundle into `dist/`. In production, `server/server.js` serves this folder directly (only when `NODE_ENV=production`) and falls back to `index.html` for all non-API routes, so client-side routing works correctly.

## 6. Run the full production build locally (optional)

```bash
NODE_ENV=production node server/server.js
```

Visit `http://localhost:5000` — you should see the built React app, not the Express placeholder route.

---

## Running with Docker (optional, local test)

To test the exact container that runs in production:

```bash
docker build --no-cache -t crestwave .
docker run -d \
  --name crestwave \
  -p 8080:5000 \
  -e NODE_ENV=production \
  -e PORT=5000 \
  --env-file .env \
  crestwave
```

Visit `http://localhost:8080`. Check logs with `docker logs -f crestwave`, stop with `docker stop crestwave && docker rm crestwave`.

---

## Project structure

```
Crestwave_Global/
├── src/                      ← React frontend source
├── public/                   ← Static assets
├── server/
│   └── server.js             ← Express backend (serves API + built frontend in production)
├── dist/                     ← Vite build output (generated, not committed)
├── .github/workflows/
│   └── deploy.yml            ← CI/CD pipeline (auto-deploy on push to main)
├── Dockerfile                ← Multi-stage build: Vite build → Node runtime
├── docker-compose.yml        ← Optional local compose config (not used by the CI/CD pipeline)
├── .dockerignore
├── .gitignore
├── .env                      ← Local only, never committed
├── package.json
└── vite.config.js
```

---

## CI/CD — how deploys work

Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Checks out the repo
2. SSHs into the Azure VM using GitHub Secrets (`VM_HOST`, `VM_USER`, `VM_SSH_KEY`, `VM_PORT`)
3. Runs `git pull origin main` on the VM
4. Stops and removes the old `crestwave` container
5. Rebuilds the Docker image (`--no-cache`, multi-stage: builds the frontend, then sets up the production runtime)
6. Starts a new container on port 80

No manual steps are needed on the VM for a normal code change — just:

```bash
git add .
git commit -m "your change"
git push origin main
```

Watch progress under the repo's **Actions** tab. Deploy takes roughly 2–3 minutes.

### Requirements only relevant to whoever manages the Azure VM (not needed to develop locally)
- `.env` must exist at all times in `/home/azureuser/prince/Crestwave_Global/.env` on the VM — it's read directly by the container at runtime and is never part of any git operation.
- Docker must be installed on the VM (`docker.io`) — the pipeline uses plain `docker build`/`docker run` commands, not `docker-compose`, due to a known compatibility issue with the VM's older `docker-compose` version.

---

## Troubleshooting

**Site shows "Backend is working" instead of the React app**
A root `/` route in `server/server.js` was intercepting requests before the static-file middleware. This has been fixed by removing that route — if you see it again, check that no new `app.get("/", ...)` route was reintroduced above the production static-serving block.

**`npm install` fails with `ERESOLVE`**
Always use `npm install --legacy-peer-deps` — see the note in step 2.

**Local dev CORS errors**
Check the `cors()` origin whitelist in `server/server.js` — it's currently limited to `localhost:5173` / `127.0.0.1:5173`.
