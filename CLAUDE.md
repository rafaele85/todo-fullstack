# Claude Instructions

See [docs/project-setup.md](docs/project-setup.md) for project overview and GitHub issue list.

## Development Workflow

1. Analyze the ticket
2. Create a feature branch (`feature/<issue-number>-<slug>`)
3. Write code + tests
4. Run quality gates: `typecheck`, `eslint`, unit tests
5. Commit and push branch
6. Wait for CI/CD to pass
7. Open a PR and submit for human approval
8. Do not start the next ticket until the current PR is approved and merged

## PR Size — HARD LIMIT

**Every PR must have: ≤ 3 files changed AND ≤ 30 lines added/changed.**

- If a ticket requires more, split it into sub-tickets first — do not start coding
- Count lines before opening a PR; if over limit, stop and split
- `pnpm-lock.yaml`, generated files, and config-only changes don't count toward the line limit
- One logical change per PR — no bundling unrelated fixes

## Other Constraints

- Tiny increments — one ticket at a time, no work ahead
- Test coverage ≥ 80% on all TypeScript code
- All code must be TypeScript — no `.js` files

## TypeScript Guidelines

- Prefer `type` over `interface`
- Functional style — no classes
- Named exports only — no default exports
- Semicolons at end of every statement
- Curly braces on all `if`/`for`/etc. bodies, even single-line
- Functional React components
- Single quotes for strings
- No `index.ts` — use descriptive filenames (`server.ts`, `router.ts`, `app.ts`, …)
