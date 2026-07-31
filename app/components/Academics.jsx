export default function Academics() {
  const semesters = [
    { sem: "Semester 1", score: "7.77", label: "Starting Out", border: "border-gray-800", textColor: "text-gray-600" },
    { sem: "Semester 2", score: "8.88", label: "▲ Big Jump", border: "border-gray-800", textColor: "text-green-500" },
    { sem: "Semester 3", score: "8.91", label: "Consistent", border: "border-gray-800", textColor: "text-blue-400" },
    { sem: "⭐ Semester 4", score: "9.95", label: "Excellence", border: "border-yellow-600", textColor: "text-yellow-400" }
  ];

  return (
    <section id="academics" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Academic Journey</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
        {semesters.map((item, i) => (
          <div key={i} className={`bg-[#111111] rounded-xl p-6 border ${item.border} text-center hover:border-blue-500 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`}>
            <p className="text-gray-500 text-sm mb-2">{item.sem}</p>
            <p className={`text-4xl font-bold ${item.score === "9.95" ? "text-yellow-400" : ""}`}>{item.score}</p>
            <p className={`${item.textColor} text-xs mt-2`}>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-12 py-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
          <p className="text-blue-100 text-sm mb-1">Cumulative CGPA</p>
          <p className="text-5xl font-bold">8.88</p>
        </div>
      </div>
    </section>
  );
}