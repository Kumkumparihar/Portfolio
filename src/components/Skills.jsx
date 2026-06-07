import { Layout, Server, Database, Wrench, Languages } from 'lucide-react'

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-indigo-500" size={22} />,
      skills: [
        { name: "HTML5 & CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-emerald-500" size={22} />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="text-cyan-500" size={22} />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Environments",
      icon: <Wrench className="text-orange-500" size={22} />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Languages className="text-purple-500" size={22} />,
      skills: [
        { name: "C++", level: 80 },
        { name: "Python", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
            A comprehensive overview of technologies, frameworks, and programming languages I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-card-light dark:glass-card-dark border border-slate-100 dark:border-zinc-800/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="p-2.5 rounded-xl bg-slate-100 dark:bg-purple-950/40 dark:border dark:border-purple-900/20 text-slate-700 dark:text-zinc-300">
                    {category.icon}
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Progress list */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-slate-700 dark:text-zinc-300">
                          {skill.name}
                        </span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Custom Progress Bar */}
                      <div className="w-full h-2 bg-slate-100 dark:bg-purple-950/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 dark:from-purple-500 dark:to-pink-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
