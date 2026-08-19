export default function App() {
  const skills = [
    "React.js",
    "React 19",
    "JavaScript (ES6+)",
    "TypeScript",
    "Next.js",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Context API",
    "Redux Toolkit",
    "Recoil",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API",
    "JWT Authentication",
    "Axios",
    "Appwrite",
    "Git",
    "GitHub",
    "Responsive Design",
    "C Programming",
  ];

  const projects = [
    {
      title: "Ecommerce Admin Dashboard",
      desc: "Modern MERN admin dashboard with authentication, product management, categories, analytics, image uploads, and responsive UI.",
      tags: [
        "React",
        "Context Api",
        "Node.js",
        "MongoDB",
        "JWT",
      ],
      live: "https://admin-repo-olive.vercel.app",
      github: "https://github.com/codeTukai/Admin_Dashboard",
      linkedin: "https://www.linkedin.com/in/tukaighosh753",
    },
    {
      title: "Content Management System",
      desc: "Full-stack content management system for creating, editing, deleting, sharing, and organizing content, with support for YouTube videos and Twitter/X posts, secure authentication, and a responsive admin dashboard.",
      tags: [
        "React",
        "TypeScript",
        "Custom Hooks",
        "Node.js",
        "MongoDB",
        "JWT",
      ],
      live: "content-platform-lime-gamma.vercel.app",
      github: "https://github.com/codeTukai/content-platform",
      linkedin: "https://www.linkedin.com/in/tukaighosh753",
    },
    

    {
      title: "Hospital Management System",
      desc: "Backend API for managing patients, doctors, appointments, medical records, authentication, billing, and role-based access.",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      live: null,
      github: "https://github.com/codeTukai/hospital-erp-backend",
      linkedin: "https://www.linkedin.com/in/tukaighosh753",
    },
    
  ];

  return (
    <div className="min-h-screen bg-black text-white">
     
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-pink-500 font-semibold tracking-widest uppercase mb-3">
            Frontend Developer | Backend Developer | Full-Stack Developer 
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Tukai <span className="text-pink-500">Ghosh</span>
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            I'm a frontend-focused full-stack developer specializing in React,
            TypeScript, and modern JavaScript. I build scalable web
            applications, admin dashboards, ecommerce platforms, and REST APIs
            using the MERN stack while focusing on clean UI, performance, and
            great user experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:tukaighosh753@gmail.com"
              className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-pink-500 mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-8">
            I'm passionate about building modern, responsive, and scalable web
            applications. I enjoy creating reusable components, developing REST
            APIs, optimizing performance, and solving real-world problems with
            React and the MERN stack. Currently, I'm learning Figma, improving
            my UI/UX skills, and exploring advanced React concepts.
          </p>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">
          Skills <span className="text-pink-500">& Tech Stack</span>
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-pink-500 transition"
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
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-pink-500 transition duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/20"></div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-black border border-zinc-700 text-pink-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-xl text-sm font-semibold transition"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-zinc-700 hover:border-pink-500 hover:text-pink-400 px-4 py-2 rounded-xl text-sm font-semibold transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-zinc-700 hover:border-pink-500 hover:text-pink-400 px-4 py-2 rounded-xl text-sm font-semibold transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}