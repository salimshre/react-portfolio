# Salim Shrestha Portfolio

A clean, modern single-page portfolio for Salim Shrestha built with Vite, React 18, and TailwindCSS. The app displays seeded profile details and fetches public GitHub profile statistics and recently updated repositories.

## Features

- Full-screen hero with animated role text
- About, Skills, Projects, GitHub Stats, Contact, and Footer sections
- Live GitHub data from `https://api.github.com/users/salimshre`
- Skeleton loaders and graceful fallback data for GitHub API errors
- Dark mode toggle persisted in `localStorage`
- Smooth scrolling navigation with active section highlighting
- Mobile-first responsive layout

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Optional GitHub Token

GitHub's unauthenticated API has a low rate limit. To raise the limit, create a local `.env` file:

```bash
VITE_GITHUB_TOKEN=your_github_token_here
```

Do not commit `.env` files or real tokens.
