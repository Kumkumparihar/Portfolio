import { useState, useEffect } from 'react'
import { Mail, ArrowRight, Download } from 'lucide-react'
import { Github, Linkedin } from './Icons'

function Hero() {
  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Computer Science Student",
    "Passionate Web Creator"
  ];
  
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(60);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000); // Hold word
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Info */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 px-3.5 py-1.5 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-semibold w-fit">
            <span>Open to Internship Roles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            Hi, I'm <span className="text-gradient">Kumkum Parihar</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-zinc-300 h-[40px]">
            I am a <span className="text-indigo-600 dark:text-indigo-400 border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 animate-pulse">{text}</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            A passionate Computer Science student specializing in building responsive and highly interactive web applications using the MERN Stack. Dedicated to writing clean, maintainable, and efficient code.
          </p>

          {/* Socials & Resume CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-indigo-500/25 group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              download="Kumkum_Parihar_Resume.pdf"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white dark:bg-purple-950/20 border border-slate-200 dark:border-purple-900/30 hover:bg-slate-50 dark:hover:bg-purple-900/40 text-slate-800 dark:text-zinc-200 font-medium rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Icon Links */}
          <div className="flex items-center space-x-4 pt-6">
            <a
              href="https://github.com/Kumkumparihar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-purple-950/30 dark:hover:bg-purple-900/40 dark:border dark:border-purple-900/20 text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kumkum-parihar-a6305a310"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-purple-950/30 dark:hover:bg-purple-900/40 dark:border dark:border-purple-900/20 text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:kumkumparihar2005@gmail.com"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-purple-950/30 dark:hover:bg-purple-900/40 dark:border dark:border-purple-900/20 text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Floating Terminal Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center select-none animate-float pt-8 lg:pt-0">
          <div className="w-full max-w-md p-0.5 rounded-2xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 shadow-2xl dark:shadow-indigo-500/10">
            <div className="bg-slate-900 dark:bg-[#0c081e] rounded-[14px] p-6 text-left font-mono text-sm overflow-hidden relative border border-slate-800 dark:border-purple-900/20">
              {/* Terminal top bar */}
              <div className="flex items-center space-x-2 border-b border-slate-800 dark:border-purple-900/20 pb-4 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                <span className="text-xs text-slate-500 font-sans ml-2">kumkum-parihar.js</span>
              </div>
              {/* Code editor content */}
              <div className="space-y-2 text-slate-300 leading-relaxed">
                <div>
                  <span className="text-pink-400 font-medium">const</span> developer = &#123;
                </div>
                <div className="pl-4">
                  name: <span className="text-emerald-300">'Kumkum Parihar'</span>,
                </div>
                <div className="pl-4">
                  type: <span className="text-emerald-300">'Aspiring Full Stack'</span>,
                </div>
                <div className="pl-4">
                  stack: [
                </div>
                <div className="pl-8 text-cyan-300">
                  'MongoDB', 'Express',
                </div>
                <div className="pl-8 text-cyan-300">
                  'React', 'Node.js'
                </div>
                <div className="pl-4">
                  ],
                </div>
                <div className="pl-4">
                  skills: [
                </div>
                <div className="pl-8 text-cyan-300">
                  'JavaScript', 'Python', 'C++'
                </div>
                <div className="pl-4">
                  ],
                </div>
                <div className="pl-4">
                  passionateAbout: <span className="text-purple-400">function</span>() &#123;
                </div>
                <div className="pl-8 text-yellow-300">
                  return <span className="text-emerald-300">'Building scalable web products'</span>;
                </div>
                <div className="pl-4">
                  &#125;
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-slate-500 italic">
                  // Ready to start coding
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
