import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 shadow-lg glass-card-light dark:glass-card-dark border-b border-slate-200/20 dark:border-purple-800/20'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tight text-gradient">
          &lt;KP /&gt;
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-slate-600 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-purple-950/40 dark:hover:bg-purple-900/50 dark:border dark:border-purple-850/30 text-slate-800 dark:text-zinc-200 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile menu button & Theme toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-purple-950/40 dark:hover:bg-purple-900/50 dark:border dark:border-purple-850/30 text-slate-800 dark:text-zinc-200 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-purple-950/45 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm glass-card-light dark:glass-card-dark p-8 flex flex-col justify-between border-l border-slate-200/50 dark:border-purple-800/20">
          <div className="flex flex-col space-y-8 mt-12">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gradient">&lt;Kumkum /&gt;</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-purple-950/45"
              >
                <X size={20} />
              </button>
            </div>
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-700 dark:text-zinc-200 hover:text-indigo-500 dark:hover:text-indigo-400 block py-1 border-b border-slate-100 dark:border-purple-800/25"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-slate-400 dark:text-zinc-500">
            © 2026 Kumkum Parihar
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
