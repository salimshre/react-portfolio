const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 60 },
  { name: "JavaScript", level: 80 },
  { name: "PHP", level: 50 },
  { name: "MySQL", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-violet-600 dark:text-violet-300">Skills</p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 dark:text-white">Core technical strengths</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="rounded-2xl bg-white p-6 shadow-soft transition hover:scale-105 dark:bg-slate-900">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>{skill.name}</span>
                <span className="text-violet-600 dark:text-violet-300">{skill.level}%</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
