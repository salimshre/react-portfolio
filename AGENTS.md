# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vite + React portfolio app for Salim Shrestha. Application code lives in `src/`. Use `src/components/` for section components such as `Hero.jsx`, `Projects.jsx`, and `Contact.jsx`; use `src/hooks/` for shared logic such as `useGitHub.js`. Keep root-level tooling in `package.json`, `vite.config.js`, `tailwind.config.js`, and `postcss.config.js`.

## Build, Test, and Development Commands

- `npm install`: installs project dependencies.
- `npm run dev`: starts the Vite development server.
- `npm run build`: creates a production build in `dist/`.
- `npm run preview`: previews the production build locally.
- `npm test`: currently reports that no test suite is configured.

Use the scripts in `package.json`; do not add alternate package managers unless the project is migrated intentionally.

## Coding Style & Naming Conventions

Use plain JavaScript and JSX. Prefer functional components and hooks. Name React components in `PascalCase` such as `ProjectCard.jsx`, and hooks/utilities in `camelCase` such as `useGitHub.js`. Use TailwindCSS utility classes for styling; keep `src/index.css` limited to Tailwind directives. Use 2-space indentation for JavaScript, JSX, CSS, and JSON.

## Testing Guidelines

No test framework is configured yet. When adding tests, prefer behavior-focused component tests for navigation, dark mode, GitHub fallback handling, project cards, and contact links. Name test files with `.test.jsx` or `.test.js`, for example `ProjectCard.test.jsx`. Update `npm test` when a runner is added.

## Commit & Pull Request Guidelines

The current Git history uses short imperative messages such as `Update README.md` and `Initial commit`. Continue using concise, present-tense commit messages, for example `Add project card component`.

Pull requests should include a brief summary, screenshots or screen recordings for visual changes, testing notes, and any related issue links. Call out changes to GitHub API handling, build tooling, environment variables, or deployment paths because they affect setup and hosting.

## Security & Configuration Tips

Do not commit API keys or deployment secrets. Use a local `.env` file for `VITE_GITHUB_TOKEN` when raising the GitHub API rate limit, and document variable names without exposing real values.
