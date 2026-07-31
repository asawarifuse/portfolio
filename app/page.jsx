"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const fullName = "Asawari"
  const [displayedName, setDisplayedName] = useState("")
  const [nameComplete, setNameComplete] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (displayedName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    } else {
      setNameComplete(true)
    }
  }, [displayedName])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500 selection:text-white">

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-[#0a0a0a]/80 backdrop-blur-sm'}`}>
        <div className="flex justify-between items-center px-6 md:px-20 py-4">
          <a href="#" className="text-white font-bold text-lg hover:text-blue-400 transition">Asawari</a>
          <div className="hidden md:flex gap-8 text-gray-400 text-sm">
            <a href="#about" className="hover:text-white transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all">About</a>
            <a href="#academics" className="hover:text-white transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all">Academics</a>
            <a href="#skills" className="hover:text-white transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all">Skills</a>
            <a href="#certifications" className="hover:text-white transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all">Certifications</a>
            <a href="#projects" className="hover:text-white transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all">Projects</a>
            <a href="#contact" className="hover:text-white transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all">Contact</a>
          </div>
          <a href="https://github.com/asawarifuse" target="_blank" className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-white hover:text-white hover:shadow-lg hover:shadow-white/10 transition-all">
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
        <p className="text-gray-400 text-lg mb-2 animate-fade-in">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 h-20 flex items-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {displayedName}
          {!nameComplete && <span className="animate-pulse ml-1 text-white">|</span>}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-delayed">
          Data Analyst & Full-Stack Developer
        </p>
        <div className="mt-8 flex gap-4 animate-fade-in-delayed">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300">
            View Projects
          </a>
          <a href="#contact" className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300">
            Connect
          </a>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 hover:text-blue-400 transition relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <p>I turn data into decisions — and ideas into deployed systems.</p>
          <p>
            I'm a third-year B.Tech CSE (Data Science) student with 6 deployed projects 
            in Gen AI, machine learning, and full-stack analytics — including an AMR outbreak 
            early warning system and a human rights AI platform. My toolkit spans Python, SQL, 
            Power BI, Excel, DAX, React, Node.js, PostgreSQL, and Docker.
          </p>
          <p>
            I don't just build dashboards. I ship systems that solve real problems — from 
            database design to ML pipelines to live deployment. My latest project CIROP is a 
            75-day solo build with 200+ commits, real-time streaming, MLOps, and CI/CD.
          </p>
          <p>
            I thrive on solving messy, real-world problems — the kind that don't come with 
            clean datasets or clear instructions.
          </p>
          <p className="flex flex-wrap gap-2">
            <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-500/30">IBM SQL Certified</span>
            <span className="bg-green-500/20 text-green-300 text-sm px-3 py-1 rounded-full border border-green-500/30">HackerRank SQL Advanced</span>
            <span className="bg-yellow-500/20 text-yellow-300 text-sm px-3 py-1 rounded-full border border-yellow-500/30">Google Data Analytics Certified</span>
            <span className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/30">CDC Coordinator</span>
          </p>
        </div>
      </section>

      {/* Academic Journey */}
      <section id="academics" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
          Academic Journey
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { sem: "Semester 1", score: "7.77", label: "Starting Out", border: "border-gray-800", textColor: "text-gray-600" },
            { sem: "Semester 2", score: "8.88", label: "▲ Big Jump", border: "border-gray-800", textColor: "text-green-500" },
            { sem: "Semester 3", score: "8.91", label: "Consistent", border: "border-gray-800", textColor: "text-blue-400" },
            { sem: "⭐ Semester 4", score: "9.95", label: "Excellence", border: "border-yellow-600", textColor: "text-yellow-400" }
          ].map((item, i) => (
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

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "🐍", title: "Programming Languages", skills: "Python\nSQL\nJavaScript" },
            { icon: "📊", title: "Data Analytics & BI", skills: "Excel\nPower Query • VBA\nTableau\nPower BI" },
            { icon: "🤖", title: "Data Science & ML", skills: "NumPy • Pandas\nMatplotlib • Seaborn\nScikit-learn\nXGBoost" },
            { icon: "💻", title: "Web Development", skills: "React.js • Redux\nNode.js • Express.js\nFastAPI\nPostgreSQL • MongoDB" },
            { icon: "⚙️", title: "MLOps & Streaming", skills: "MLflow • Prefect\nEvidently\nRedpanda • WebSocket" },
            { icon: "🛠️", title: "DevOps & Tools", skills: "Git • GitHub\nDocker • Docker Compose\nGitHub Actions (CI/CD)\nVercel • Render" }
          ].map((skill, i) => (
            <div key={i} className="group bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <p className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</p>
              <h3 className="font-semibold text-lg mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{skill.skills}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "🗄️", title: "Databases and SQL for Data Science", issuer: "IBM (Coursera)", desc: "Complex queries. Database design. Python-SQL integration. Applied in CIROP & ResistNet.", border: "border-blue-500/30", glow: "hover:shadow-blue-500/10" },
            { icon: "⚡", title: "SQL (Advanced)", issuer: "HackerRank", desc: "Window functions. Recursive queries. Performance tuning. Not basic SELECT statements.", border: "border-green-500/30", glow: "hover:shadow-green-500/10" },
            { icon: "📊", title: "Google Data Analytics Capstone", issuer: "Google (Coursera)", desc: "End-to-end data analysis. Case study. Data storytelling. Business decision-making.", border: "border-yellow-500/30", glow: "hover:shadow-yellow-500/10" },
            { icon: "🧠", title: "Global MOOC on Ethics of AI", issuer: "Coursera", desc: "Ethical frameworks. Bias mitigation. Fairness. Patient autonomy. Responsible AI design.", border: "border-purple-500/30", glow: "hover:shadow-purple-500/10" },
            { icon: "📉", title: "Get Started Building with Power BI", issuer: "Microsoft", desc: "Data loading. Visualizations. Reports. Dashboard creation. End-to-end Power BI workflow.", border: "border-yellow-600/30", glow: "hover:shadow-yellow-600/10" },
            { icon: "🏥", title: "Digital Partograph System", issuer: "Unnat Bharat Abhiyan", desc: "Dashboard for maternal health monitoring. Social impact. Rural healthcare initiative.", border: "border-red-500/30", glow: "hover:shadow-red-500/10" }
          ].map((cert, i) => (
            <div key={i} className={`bg-[#111111] rounded-xl p-6 border ${cert.border} hover:scale-[1.02] transition-all duration-300 hover:shadow-lg ${cert.glow} flex flex-col justify-between`}>
              <div>
                <p className="text-3xl mb-3">{cert.icon}</p>
                <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "CIROP — Customer Intelligence Platform",
              desc: "Full-stack enterprise analytics platform. Customer segmentation, CLV prediction, churn prediction, revenue forecasting, scenario simulator, real-time streaming. MLOps with Prefect + MLflow. CI/CD with GitHub Actions. 75-day solo build. 200+ commits.",
              techs: ["React", "Node.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Redpanda", "MLflow", "XGBoost"],
              github: "https://github.com/asawarifuse/cirop-platform",
              demo: "https://cirop-platform.vercel.app",
              live: true,
              border: "border-blue-800"
            },
            {
              title: "DIGNITY Watch — Human Rights AI",
              desc: "India's first AI platform tracking manual scavenging deaths. Scrapes 50+ news sources across 8 Indian languages. Custom NLP pipeline. Dual database: PostgreSQL + Neo4j. React dashboard with 10 modules.",
              techs: ["Python", "PyTorch", "HuggingFace", "PostgreSQL", "Neo4j", "React", "FastAPI", "Docker"],
              github: "#",
              demo: null,
              live: false,
              border: "border-red-800"
            },
            {
              title: "ResistNet — AMR Early Warning System",
              desc: "AI-powered antimicrobial resistance outbreak prediction system. Forecasts which antibiotics will fail in which Indian district — 4 to 6 weeks ahead. Tracks 5 pathogens against 14 antibiotics across 114 districts.",
              techs: ["Python", "FastAPI", "React", "Prophet", "XGBoost", "SHAP"],
              github: "https://github.com/asawarifuse/resistnet",
              demo: null,
              live: false,
              border: "border-gray-800"
            },
            {
              title: "Dealer Performance Intelligence",
              desc: "AI-powered dealer performance monitoring with Gen AI conversational analytics for 500 automobile dealers across 11 KPIs and 24 months of data.",
              techs: ["Python", "XGBoost", "SHAP", "DiCE", "GPT-4o", "Streamlit"],
              github: "https://github.com/asawarifuse/dealer-performance-ai",
              demo: null,
              live: false,
              border: "border-gray-800"
            },
            {
              title: "Credit Risk Scoring System",
              desc: "End-to-end rule-based credit risk decision engine built in Excel with LAMBDA functions, VBA automation, audit trail, and Python benchmark validation.",
              techs: ["Excel", "LAMBDA", "VBA", "Power Query", "Python"],
              github: "https://github.com/asawarifuse/Credit-Risk-Scoring-System",
              demo: null,
              live: false,
              border: "border-gray-800"
            },
            {
              title: "Enterprise Retail Intelligence",
              desc: "Multi-dashboard Power BI solution for executive-level retail performance analysis across sales, customer behavior, and profitability.",
              techs: ["Power BI", "DAX", "Power Query", "Data Modeling"],
              github: "https://github.com/asawarifuse/Enterprise-Retail-Intelligence-Profitability-Command-Center",
              demo: null,
              live: false,
              border: "border-gray-800"
            }
          ].map((project, i) => (
            <div key={i} className={`bg-[#111111] rounded-xl p-6 border ${project.border} hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between relative`}>
              <div>
                {project.live && (
                  <span className="absolute top-3 right-3 bg-green-500 text-black text-xs px-2 py-1 rounded-full font-medium animate-pulse">🟢 Live</span>
                )}
                <h3 className="text-xl font-bold mb-2 mt-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, j) => (
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

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg max-w-xl mb-10">
          I'm actively seeking internship opportunities in Data Science, AI, and Full-Stack Development. 
          Whether you have a role, a project idea, or just want to connect — I'd love to hear from you.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          {[
            { href: "mailto:fuseaasawari@gmail.com", label: "Email Me", primary: true },
            { href: "https://linkedin.com/in/asawarifuse", label: "LinkedIn", primary: false },
            { href: "https://github.com/asawarifuse", label: "GitHub", primary: false }
          ].map((btn, i) => (
            <a key={i} href={btn.href} target={btn.primary ? "" : "_blank"} className={`px-8 py-4 rounded-lg font-medium hover:scale-105 transition-all duration-300 text-lg hover:shadow-xl ${btn.primary ? 'bg-white text-black hover:bg-gray-200 hover:shadow-white/20' : 'border border-white hover:bg-white hover:text-black hover:shadow-white/20'}`}>
              {btn.label}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm">© 2026 Asawari Fuse. Built from scratch.</p>
      </footer>

    </main>
  )
}