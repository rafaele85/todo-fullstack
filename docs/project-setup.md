# Project Setup

## Overview

Fullstack TODO app — a portfolio-ready project demonstrating a modern TypeScript monorepo deployed to GCP Cloud Run.

## Tech Stack

- **Frontend**: React + Vite + Vitest
- **Backend**: Fastify + Jest
- **Database**: Prisma + PostgreSQL (CloudSQL)
- **Infra**: Terraform, GCP Cloud Run, Artifact Registry
- **CI/CD**: GitHub Actions

## GitHub Issues (phases)

Created via GitHub MCP server in order with labels `phase-1` through `phase-5`:

| # | Title | Phase |
|---|-------|-------|
| 1 | Repo scaffold — monorepo with apps/frontend, apps/backend, infra/, .github/workflows/, tsconfig, eslint, prettier, pnpm workspaces | phase-1 |
| 2 | Backend scaffold — Fastify + health endpoint + Jest config | phase-1 |
| 3 | Frontend scaffold — React + Vite + basic App component + Vitest config | phase-1 |
| 4 | Database schema — Prisma setup, Todo model, migrations | phase-2 |
| 5 | Backend CRUD API — REST endpoints for todos + unit tests (80%+ coverage) | phase-2 |
| 6 | Frontend UI — Todo list with add/edit/delete + API integration + unit tests (80%+ coverage) | phase-2 |
| 7 | Test coverage gate — GitHub Action that enforces 80% coverage on PRs | phase-3 |
| 8 | Linting + formatting CI — GitHub Action for eslint/prettier checks on PRs | phase-3 |
| 9 | Terraform base — GCP project, Cloud Run, CloudSQL, networking, service accounts | phase-4 |
| 10 | Dockerfiles — multi-stage builds for frontend and backend | phase-4 |
| 11 | CI/CD pipeline — GitHub Actions: test > build > push to Artifact Registry > deploy to Cloud Run | phase-4 |
| 12 | README + architecture diagram — portfolio-ready documentation | phase-5 |

Each issue has a clear title, description, and acceptance criteria.
