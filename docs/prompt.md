You are setting up a fullstack TODO app project. 
First, create all GitHub issues for this project using the GitHub MCP server. 
Create them in order with labels phase-1 through phase-5:

Repo scaffold — monorepo with apps/frontend, apps/backend, infra/, .github/workflows/, tsconfig, eslint, prettier, pnpm workspaces
Backend scaffold — Fastify + health endpoint + Jest config
Frontend scaffold — React + Vite + basic App component + Vitest config
Database schema — Prisma setup, Todo model, migrations
Backend CRUD API — REST endpoints for todos + unit tests (80%+ coverage)
Frontend UI — Todo list with add/edit/delete + API integration + unit tests (80%+ coverage)
Test coverage gate — GitHub Action that enforces 80% coverage on PRs
Linting + formatting CI — GitHub Action for eslint/prettier checks on PRs
Terraform base — GCP project, Cloud Run, CloudSQL, networking, service accounts
Dockerfiles — multi-stage builds for frontend and backend
CI/CD pipeline — GitHub Actions: test > build > push to Artifact Registry > deploy to Cloud Run
README + architecture diagram — portfolio-ready documentation

Each issue should have a clear title, description, and acceptance criteria. 
After creating all issues, start working on issue #1.
