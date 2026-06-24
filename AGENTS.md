# AGENTS.md

## What this repo is

Personal LLM study notes (Chinese). Jupyter notebooks + VitePress docs site. No application code, no tests.

## Commands

- `uv run jupyter lab` — run notebooks (Python 3.14, managed by uv)
- `npm install` — required before any docs commands (installs vitepress + markdown-it-mathjax3)
- `npm run docs:dev` — VitePress dev server
- `npm run docs:build` — build docs (output: `.vitepress/dist/`)
- `npm run docs:preview` — preview built docs locally

## Architecture

VitePress publishes `.md` files only. Jupyter notebooks (`.ipynb`) are separate learning materials not rendered on the site. New topics typically need both a `.md` page and a sidebar entry in `.vitepress/config.ts`.

## Gotchas

- No linter, formatter, typecheck, or test runner. There is nothing to run for verification.
- `README.md` and `AGENTS.md` are excluded from VitePress via `srcExclude` in `.vitepress/config.ts` — they won't appear on the site.
- `package-lock.json` is committed but `node_modules/` is gitignored. Run `npm install` before docs work.
- Python deps managed by `uv` (see `uv.lock`). No pip/requirements.txt.
- CI uses `npm ci` (not `npm install`), node 22. Deploys to GitHub Pages on push to `main`.
- VitePress base path is `/llm-lab/`. Uses MathJax3 for LaTeX rendering. Language is `zh-CN`.
