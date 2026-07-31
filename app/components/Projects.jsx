import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between relative">
            <div>
              {project.live && (
                <span className="absolute top-3 right-3 bg-green-500 text-black text-xs px-2 py-1 rounded-full font-medium animate-pulse">🟢 Live</span>
              )}
              <h3 className="text-xl font-bold mb-2 mt-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, j) => (
                  <span key={j} className="bg-gray-800 text-xs px-3 py-1 rounded-full hover:bg-gray-700 transition">{tech}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <a href={project.github} target="_blank" className="text-blue-400 text-sm hover:underline">GitHub →</a>
              {project.demo && (
                <a href={project.demo} target="_blank" className="text-green-400 text-sm hover:underline ml-3">Live Demo →</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}