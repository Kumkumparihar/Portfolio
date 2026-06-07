import { GraduationCap, Code2, Rocket, Heart } from 'lucide-react'

function About() {
  const cards = [
    {
      icon: <Rocket className="text-indigo-500" size={24} />,
      title: "My Career Goal",
      description: "To leverage my skills in Javascript, React, and Node.js to build fast, scalable, and user-centric web applications while continuously learning from experienced engineering teams."
    },
    {
      icon: <Heart className="text-pink-500" size={24} />,
      title: "Why I Love Tech",
      description: "Technology provides a canvas to turn ideas into tangible solutions that people interact with daily. The endless cycle of problem-solving and creation is incredibly rewarding."
    }
  ];

  const educationTimeline = [
    {
      title: "Bachelor of Computer Science",
      institution: "Shri Balaji Institute of Technology, Betul",
      duration: "2023 - Present",
      description: "Focused on Core Computer Science principles including Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, and Software Engineering."
    },
    {
      title: "Full Stack & MERN Developer Training",
      institution: "SkyRoute Solutions Pvt. Ltd.",
      duration: "2025 - 2026",
      description: "Dedicated to building modern single page applications. Developed hands-on experience with MongoDB, Express.js, React, Node.js, RESTful APIs, Git, and state management."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white/30 dark:bg-black/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
            Get to know my academic background, career objectives, and what motivates me as a developer.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Intro & Cards */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-6 rounded-2xl glass-card-light dark:glass-card-dark shadow-sm border border-slate-100 dark:border-purple-900/30">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Code2 className="text-indigo-500" size={20} />
                <span>Hi, I'm Kumkum!</span>
              </h3>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                I am a passionate Computer Science student and web developer. Over the past year, I have focused on mastering Frontend technologies like React.js and backend tools like Node.js and MongoDB. 
              </p>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed mt-4">
                I enjoy building neat user interfaces and connecting them to robust backend servers. Currently seeking an internship opportunity to apply my knowledge in a real-world setting.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-purple-950/10 border border-slate-100 dark:border-purple-900/25 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">{card.icon}</div>
                  <h4 className="font-bold text-slate-800 dark:text-white mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education Timeline */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center space-x-2">
              <GraduationCap className="text-indigo-500" size={22} />
              <span>My Education Journey</span>
            </h3>

            <div className="relative border-l-2 border-slate-200 dark:border-purple-900/30 pl-8 ml-4 space-y-12">
              {educationTimeline.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-[#0c081e] border-2 border-indigo-500 dark:border-purple-400 group-hover:bg-indigo-500 dark:group-hover:bg-purple-400 transition-colors duration-200">
                    <span className="w-2 h-2 bg-indigo-500 dark:bg-purple-400 group-hover:bg-white rounded-full transition-colors duration-200" />
                  </span>

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl glass-card-light dark:glass-card-dark shadow-sm border border-slate-100 dark:border-purple-900/20 hover:border-indigo-500/35 dark:hover:border-purple-500/30 transition-all duration-300">
                    <span className="text-xs font-semibold text-indigo-600 dark:text-purple-400 uppercase tracking-wider block mb-1">
                      {edu.duration}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                      {edu.title}
                    </h4>
                    <h5 className="text-sm font-medium text-slate-500 dark:text-purple-300/80 mb-3">
                      {edu.institution}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
