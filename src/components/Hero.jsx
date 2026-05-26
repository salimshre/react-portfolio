import { useEffect, useState } from "react";
import { FiDownload, FiMail } from "react-icons/fi";

const roles = ["Web Developer", "Computer Engineer", "Founder"];

export default function Hero({ user }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [letters, setLetters] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let nextRoleTimeout;

    const typingTimeout = setTimeout(() => {
      if (letters < current.length) {
        setLetters((value) => value + 1);
      } else {
        nextRoleTimeout = setTimeout(() => {
          setLetters(0);
          setRoleIndex((value) => (value + 1) % roles.length);
        }, 900);
      }
    }, 90);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(nextRoleTimeout);
    };
  }, [letters, roleIndex]);

  return (
    <section id="hero" className="flex min-h-screen items-center pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-500/15 dark:text-violet-200">
            Kathmandu, Nepal
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-6xl">
            Salim Shrestha
          </h1>
          <p className="mt-5 text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text">
            {roles[roleIndex].slice(0, letters)}
            <span className="text-violet-600">|</span>
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {user.bio || "Web Developer and Computer Engineer building clean, responsive web experiences."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:salim9shrestha@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:scale-105"
            >
              <FiMail /> Hire me
            </a>
            <a
              href="https://www.ssanu.com.np/images/Salim-Shrestha-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:scale-105 dark:border-white/10 dark:bg-slate-900 dark:text-white"
            >
              <FiDownload /> Download CV
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-2 shadow-soft">
            <img
              src={user.avatar_url || "https://www.ssanu.com.np/images/salim.jpg"}
              alt="Salim Shrestha"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
