import { FiMapPin } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white py-24 dark:border-white/10 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-violet-600 dark:text-violet-300">About</p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 dark:text-white">Web Developer / Computer Engineer</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Salim Shrestha builds responsive, practical web experiences with a focus on clean interfaces,
          project showcases, and approachable user flows. He graduated in 2022 and is based in Kathmandu.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <FiMapPin /> Kathmandu, Nepal
        </div>
      </div>
    </section>
  );
}
