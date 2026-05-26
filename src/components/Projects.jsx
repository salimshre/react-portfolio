import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";

function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft dark:bg-slate-900">
      <div className="h-5 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mt-4 h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mt-8 h-8 w-28 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}

export default function Projects({ repos, loading, error }) {
  return (
    <section id="projects" className="border-y border-slate-200 bg-white py-24 dark:border-white/10 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-violet-600 dark:text-violet-300">Projects</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 dark:text-white">Recently updated GitHub work</h2>
          </div>
          <a
            href="https://github.com/salimshre"
            className="inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-indigo-700 dark:text-violet-300"
          >
            <FiGithub /> View all on GitHub
          </a>
        </div>
        {error ? (
          <p className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
            Live GitHub data is unavailable, so static fallback project data is shown.
          </p>
        ) : null}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
            : repos.map((repo) => (
                <article
                  key={repo.name}
                  className="flex min-h-64 flex-col rounded-2xl bg-white p-6 shadow-soft transition hover:scale-105 dark:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">{repo.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <FiStar /> {repo.stargazers_count}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 dark:bg-violet-500/15 dark:text-violet-200">
                      {repo.language || "Code"}
                    </span>
                    <a
                      href={repo.html_url}
                      className="inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-indigo-700 dark:text-violet-300"
                    >
                      View <FiExternalLink />
                    </a>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}
