# Repository Guidelines

## Project Structure & Module Organization

This repository currently contains a portfolio README and is intended for a React portfolio application. Keep application source under `src/` once the React app is scaffolded. Use `src/components/` for reusable UI, `src/pages/` for route-level views such as Home, About, Projects, and Contact, and `src/assets/` for images, icons, and other static media imported by components. Place directly served static files in `public/`. Keep config files such as `package.json`, `.gitignore`, and build config at the repository root.

## Build, Test, and Development Commands

No `package.json` is present yet. After the React scaffold is added, document and keep these commands current:

- `npm install`: installs project dependencies.
- `npm start` or `npm run dev`: starts the local development server.
- `npm test`: runs the test suite.
- `npm run build`: creates a production build.

Use the command names defined in `package.json`; do not assume Vite, Create React App, or another tool unless the repo config confirms it.

## Coding Style & Naming Conventions

Use JavaScript or JSX consistently with the chosen React setup. Prefer functional components and hooks. Name React components in `PascalCase` such as `ProjectCard.jsx`, and utility modules in `camelCase` such as `formatDate.js`. Keep component-specific styles near the component when the styling approach supports it. Use 2-space indentation for JavaScript, JSX, CSS, and JSON. Run the project formatter or linter before submitting changes once one is configured.

## Testing Guidelines

Add tests alongside components or in a dedicated `src/__tests__/` directory, following the convention used by the selected test framework. Prefer behavior-focused tests for navigation, theme toggling, project cards, and the contact form. Name test files with `.test.jsx` or `.test.js`, for example `ProjectCard.test.jsx`. Run `npm test` before opening a pull request once testing is configured.

## Commit & Pull Request Guidelines

The current Git history uses short imperative messages such as `Update README.md` and `Initial commit`. Continue using concise, present-tense commit messages, for example `Add project card component`.

Pull requests should include a brief summary, screenshots or screen recordings for visual changes, testing notes, and any related issue links. Call out changes to routing, build tooling, environment variables, or contact-form integrations because they affect setup and deployment.

## Security & Configuration Tips

Do not commit API keys, EmailJS credentials, or deployment secrets. Store environment-specific values in local `.env` files and document required variable names without exposing real values.
