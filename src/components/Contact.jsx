import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const socials = [
  { label: "GitHub", href: "https://github.com/salimshre", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/salimshrestha", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com/salimshre", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/salimsshrestha/", icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/c/technodynamic", icon: FaYoutube },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white py-24 dark:border-white/10 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-violet-600 dark:text-violet-300">Contact</p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 dark:text-white">Start a conversation</h2>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:salim9shrestha@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:scale-105"
          >
            <FiMail /> salim9shrestha@gmail.com
          </a>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:scale-105 hover:border-violet-300 hover:text-violet-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-200"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
