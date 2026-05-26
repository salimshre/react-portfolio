import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import GitHubStats from "./components/GitHubStats.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { useGitHub } from "./hooks/useGitHub.js";

const sections = ["hero", "about", "skills", "projects", "stats", "contact"];

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage?.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

export default function App() {
  const github = useGitHub();
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage?.setItem("theme", theme);
    } catch {
      // Browsers can block storage; the theme toggle should still work for the current page.
    }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
      />
      <main>
        <Hero user={github.user} />
        <About />
        <Skills />
        <Projects repos={github.repos} loading={github.loading} error={github.error} />
        <GitHubStats user={github.user} loading={github.loading} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
