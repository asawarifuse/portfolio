import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <div key={i} className="group bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <p className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</p>
            <h3 className="font-semibold text-lg mb-3">{skill.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {skill.items.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}