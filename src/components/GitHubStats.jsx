import { FiGitBranch, FiUserPlus, FiUsers } from "react-icons/fi";

const items = [
  { key: "public_repos", label: "Repositories", icon: FiGitBranch },
  { key: "followers", label: "Followers", icon: FiUsers },
  { key: "following", label: "Following", icon: FiUserPlus },
];

export default function GitHubStats({ user, loading }) {
  return (
    <section id="stats" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-violet-600 dark:text-violet-300">GitHub Stats</p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 dark:text-white">Public profile counters</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="rounded-2xl bg-white p-6 shadow-soft transition hover:scale-105 dark:bg-slate-900">
                <Icon className="text-violet-600 dark:text-violet-300" size={28} />
                {loading ? (
                  <div className="mt-6 h-10 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                ) : (
                  <p className="mt-5 text-4xl font-extrabold text-slate-950 dark:text-white">{user[item.key]}</p>
                )}
                <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
