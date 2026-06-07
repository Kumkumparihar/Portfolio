import { ArrowUp, Mail } from 'lucide-react'
import { Github, Linkedin } from './Icons'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-slate-100 dark:bg-[#05030d] border-t border-slate-200 dark:border-purple-900/15 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-center md:text-left space-y-1">
          <span className="text-lg font-bold text-gradient block">&lt;Kumkum Parihar /&gt;</span>
          <p className="text-xs text-slate-500 dark:text-zinc-500">
            Aspiring MERN Stack & Full Stack Web Developer.
          </p>
        </div>

        {/* Center / Socials */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Kumkumparihar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kumkum-parihar-a6305a310"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:kumkumparihar2005@gmail.com.com"
            className="text-slate-400 hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors"
            aria-label="Email Address"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Right side / Back to top */}
        <div className="flex items-center space-x-4">
          <p className="text-xs text-slate-500 dark:text-zinc-500">
            © 2026 Kumkum Parihar. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white dark:bg-purple-950/35 border border-slate-200 dark:border-purple-900/25 text-slate-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:shadow-sm transition-all duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
