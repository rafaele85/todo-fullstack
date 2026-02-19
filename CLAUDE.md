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

## Constraints

- Tiny increments — one ticket at a time, no work ahead
- Each PR: max 2–3 files changed, max ~30 new/changed lines; split tickets if needed
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
