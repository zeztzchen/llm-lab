# AGENTS.md

## What this repo is

Personal LLM study notes (Chinese). Jupyter notebooks + VitePress docs site. No application code, no tests.

## Commands

- `uv run jupyter lab` — run notebooks (Python 3.14, managed by uv)
- `npm install` — required before any docs commands (installs vitepress + markdown-it-mathjax3)
- `npm run docs:dev` — VitePress dev server
- `npm run docs:build` — build docs (output: `docs/.vitepress/dist/`)
- `npm run docs:preview` — preview built docs locally

## Structure

- `optimizer/` — optimizer notebooks (lr scheduler, adagrad, adam, etc.)
- `math/` — math foundations (matrix norms, prob/stats)
- `basis/` — markdown notes (micrograd, etc.)
- `docs/` — VitePress site source. Config in `docs/.vitepress/config.ts`. Base path is `/llm-lab/`. Uses MathJax3 for LaTeX rendering. Language is `zh-CN`.
- `roadmap/` — study plans and resource links (mirrored into `docs/roadmap/`)

## Gotchas

- No linter, formatter, typecheck, or test runner. There is nothing to run for verification.
- `package-lock.json` is committed but `node_modules/` is gitignored. Run `npm install` before docs work.
- Python deps managed by `uv` (see `uv.lock`). No pip/requirements.txt.
- CI deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.
