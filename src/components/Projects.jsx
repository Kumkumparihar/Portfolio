import { ExternalLink, Calculator, CheckSquare, CloudSun, UserCheck, Bot } from 'lucide-react'
import { Github } from './Icons'

function Projects() {
  const projects = [
    {
      title: "Calculator Web App",
      description: "A fully responsive, clean, and modern web calculator supporting basic arithmetic, decimal calculations, keypress listeners, and theme toggling.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      icon: <Calculator className="text-white" size={32} />,
      gradient: "from-blue-500 to-indigo-500",
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Feature-Rich To-Do App",
      description: "A high-performance React Task Manager utilizing local storage, featuring task prioritization, category tagging, completion states, and active filtering.",
      tech: ["React.js", "Tailwind CSS", "LocalStorage"],
      icon: <CheckSquare className="text-white" size={32} />,
      gradient: "from-emerald-500 to-teal-500",
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Real-Time Weather App",
      description: "An API-integrated dashboard displaying current temperature, wind speed, humidity, and weather conditions worldwide. Includes local search auto-completion.",
      tech: ["React.js", "OpenWeather API", "Tailwind CSS"],
      icon: <CloudSun className="text-white" size={32} />,
      gradient: "from-amber-400 to-orange-500",
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Student Management System",
      description: "A Full Stack (MERN) platform for administrators to manage student databases, enrollments, course catalogs, and test grading with secure authentication.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      icon: <UserCheck className="text-white" size={32} />,
      gradient: "from-pink-500 to-rose-500",
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "NLP Python Chatbot",
      description: "An intelligent dialogue assistant designed with NLTK and Flask. Resolves queries, parses user intent, and provides helpful context replies.",
      tech: ["Python", "NLTK", "Flask", "Tailwind CSS"],
      icon: <Bot className="text-white" size={32} />,
      gradient: "from-purple-500 to-violet-600",
      github: "https://github.com",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white/30 dark:bg-black/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
            A handpicked collection of applications showcasing my progression from frontend foundations to full-stack integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden glass-card-light dark:glass-card-dark border border-slate-100 dark:border-purple-900/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Card Header Illustration */}
              <div className={`h-48 bg-gradient-to-tr ${project.gradient} flex items-center justify-center relative transition-transform duration-300`}>
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                <div className="transform group-hover:scale-110 transition-transform duration-300 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  {project.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-indigo-50 dark:bg-purple-950/45 text-indigo-600 dark:text-indigo-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer Links */}
                <div className="flex justify-between items-center border-t border-slate-100 dark:border-purple-900/20 pt-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>

                  {project.demo !== '#' ? (
                    <a
                      href={project.demo}
                      className="inline-flex items-center space-x-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-slate-400 dark:text-zinc-500 italic">
                      Local Environment
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
