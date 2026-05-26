import { FiMoon, FiSun } from "react-icons/fi";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "stats", label: "Stats" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, theme, onToggleTheme }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="text-base font-extrabold tracking-normal text-slate-950 dark:text-white">
          Salim Shrestha
        </a>
        <div className="hidden items-center gap-1 rounded-full bg-slate-100 p-1 dark:bg-slate-900 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                activeSection === link.id
                  ? "bg-white text-violet-700 shadow-sm dark:bg-slate-800 dark:text-violet-300"
                  : "text-slate-600 hover:text-violet-700 dark:text-slate-300 dark:hover:text-violet-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-violet-300 hover:text-violet-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </nav>
    </header>
  );
}
