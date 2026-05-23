
export default function App() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
  ];

  const projects = [
    {
      title: "Ecommerce Admin Dashboard",
      desc: "Modern admin dashboard with authentication, product management, analytics, and responsive UI.",
      tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    },
    {
      title: "Authentication System",
      desc: "Full MERN authentication system with JWT authentication, OTP verification, and password reset.",
      tags: ["MongoDB", "Express", "JWT", "React"],
    },
    {
      title: "Productivity Mobile App",
      desc: "React Native + Expo productivity application with clean UI and modern mobile experience.",
      tags: ["React Native", "Expo", "TypeScript"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-pink-500 font-semibold tracking-widest uppercase mb-3">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Tukai <span className="text-pink-500">Ghosh</span>
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            I build scalable frontend applications, ecommerce platforms,
            admin dashboards, and modern MERN stack applications using React,
            TypeScript, and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">

            {/* CONTACT BUTTON */}
            <a
              href="mailto:tukaighosh753@gmail.com"
              className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-2xl font-semibold shadow-lg"
            >
              Contact Me
            </a>

            {/* RESUME BUTTON */}
            <a
              href="/Tukai's Resume.pdf"
              download
              className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition px-6 py-3 rounded-2xl font-semibold"
            >
              Download Resume
            </a>

          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-pink-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Passionate frontend developer focused on building responsive,
            scalable, and modern web applications with clean UI and reusable
            architecture.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-8">
          Skills <span className="text-pink-500">& Tech Stack</span>
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Featured <span className="text-pink-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/20" />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-black border border-zinc-700 text-pink-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
