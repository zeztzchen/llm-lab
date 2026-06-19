# AGENTS.md

## What this repo is

Personal LLM study notes (Chinese). Jupyter notebooks + VitePress docs site. No application code, no tests, no CI.

## Commands

- `uv run jupyter lab` — run notebooks (Python 3.14, managed by uv)
- `npm run docs:dev` — VitePress dev server
- `npm run docs:build` — build docs (output: `docs/.vitepress/dist/`)
- `npm install` — required before docs commands (installs vitepress + markdown-it-mathjax3)

## Structure

- `optimizer/` — optimizer notebooks (lr scheduler, adagrad, adam, etc.)
- ` math/` — math foundations notebooks (matrix norms). **Directory name has a leading space** — quote paths in shell commands.
- `basis/` — markdown notes (micrograd, etc.)
- `docs/` — VitePress site source. Config in `docs/.vitepress/config.ts`. Base path is `/llm-lab/`. Uses MathJax3 for LaTeX rendering. Language is `zh-CN`.
- `roadmap/` — study plans and resource links (also mirrored into `docs/roadmap/`)

## Gotchas

- The ` math/` directory has a leading space in its name. Always quote paths: `" math/matrix/spectral_norm.ipynb"`.
- No linter, formatter, typecheck, or test runner configured. There is nothing to run for verification.
- `package-lock.json` is committed but no `node_modules/` (gitignored). Run `npm install` before docs work.
- Python deps managed by `uv` (see `uv.lock`). No pip/requirements.txt.
