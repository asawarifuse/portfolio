"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const fullName = "Asawari"
  const [displayedName, setDisplayedName] = useState("")
  const [nameComplete, setNameComplete] = useState(false)

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

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex justify-between items-center px-6 md:px-20 py-4">
          <a href="#" className="text-white font-bold text-lg">Asawari</a>
          <div className="hidden md:flex gap-8 text-gray-400 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#academics" className="hover:text-white transition">Academics</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a href="/resume.pdf" className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-white hover:text-white transition">
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <p className="text-gray-400 text-lg mb-2">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 h-20 flex items-center">
          {displayedName}
          {!nameComplete && <span className="animate-pulse ml-1">|</span>}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Data Analyst
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 hover:scale-105 transition transform">
            View Projects
          </a>
          <a href="#contact" className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black hover:scale-105 transition transform">
            Connect
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 hover:text-gray-200 transition">About Me</h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <p>
            I turn data into decisions — especially where technology meets real impact.
          </p>
          <p>
            I'm a third-year B.Tech CSE (Data Science) student with strong foundations in data analytics, 
            machine learning, and generative AI. My toolkit spans Python, Power BI, SQL, Excel, R, and DAX — 
            applied through hands-on projects in retail, healthcare, finance, and automobile analytics.
          </p>
          <p>
            I don't just build dashboards. I build systems that combine prediction, explanation, and 
            prescription — from credit risk engines to Gen AI-powered dealer intelligence platforms.
          </p>
          <p>
            I thrive on solving messy, real-world problems — the kind that don't come with clean datasets 
            or clear instructions.
          </p>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section id="academics" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Academic Journey</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 text-center hover:border-gray-500 hover:scale-105 transition transform">
            <p className="text-gray-500 text-sm mb-2">Semester 1</p>
            <p className="text-4xl font-bold">7.77</p>
            <p className="text-gray-600 text-xs mt-2">Starting Out</p>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 text-center hover:border-gray-500 hover:scale-105 transition transform">
            <p className="text-gray-500 text-sm mb-2">Semester 2</p>
            <p className="text-4xl font-bold">8.88</p>
            <p className="text-green-500 text-xs mt-2">▲ Big Jump</p>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 text-center hover:border-gray-500 hover:scale-105 transition transform">
            <p className="text-gray-500 text-sm mb-2">Semester 3</p>
            <p className="text-4xl font-bold">8.91</p>
            <p className="text-blue-400 text-xs mt-2">Consistent</p>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 border border-yellow-600 text-center hover:border-yellow-400 hover:scale-105 transition transform relative">
            <p className="text-yellow-500 text-sm mb-2">⭐ Semester 4</p>
            <p className="text-4xl font-bold text-yellow-400">9.95</p>
            <p className="text-yellow-500 text-xs mt-2">Excellence</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white text-black rounded-xl px-12 py-6 text-center hover:scale-105 transition transform">
            <p className="text-gray-600 text-sm mb-1">Cumulative CGPA</p>
            <p className="text-5xl font-bold">8.88</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {/* Skill Card 1: Programming Languages */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform">
            <p className="text-3xl mb-3">🐍</p>
            <h3 className="font-semibold text-lg mb-3">Programming Languages</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Python<br/>SQL<br/>JavaScript</p>
          </div>

          {/* Skill Card 2: Data Analytics & BI */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform">
            <p className="text-3xl mb-3">📊</p>
            <h3 className="font-semibold text-lg mb-3">Data Analytics & BI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Excel<br/>Power Query • VBA<br/>Tableau<br/>Power BI</p>
          </div>

          {/* Skill Card 3: Data Science & ML */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform">
            <p className="text-3xl mb-3">🤖</p>
            <h3 className="font-semibold text-lg mb-3">Data Science & ML</h3>
            <p className="text-gray-400 text-sm leading-relaxed">NumPy • Pandas<br/>Matplotlib • Seaborn<br/>Scikit-learn<br/>XGBoost</p>
          </div>

          {/* Skill Card 4: ML Algorithms */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform">
            <p className="text-3xl mb-3">🧠</p>
            <h3 className="font-semibold text-lg mb-3">ML Algorithms</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Linear/Logistic Regression<br/>KNN • SVM • Naive Bayes<br/>Decision Trees • Random Forest<br/>K-Means • Hierarchical<br/>PCA • Recommendation Systems</p>
          </div>

          {/* Skill Card 5: Web Development */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform">
            <p className="text-3xl mb-3">💻</p>
            <h3 className="font-semibold text-lg mb-3">Web Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed">React.js • Redux<br/>Node.js • Express.js<br/>Flask • Django<br/>MongoDB • PostgreSQL</p>
          </div>

          {/* Skill Card 6: Frontend */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform">
            <p className="text-3xl mb-3">🎨</p>
            <h3 className="font-semibold text-lg mb-3">Frontend</h3>
            <p className="text-gray-400 text-sm leading-relaxed">HTML • CSS<br/>SASS/LESS<br/>Flexbox • CSS Grid<br/>Bootstrap<br/>Vue.js • Angular</p>
          </div>

          {/* Skill Card 7: Tools & Platforms */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform">
            <p className="text-3xl mb-3">🛠️</p>
            <h3 className="font-semibold text-lg mb-3">Tools & Platforms</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Git • GitHub<br/>Docker<br/>Vercel • Heroku<br/>Streamlit</p>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1: ResistNet — AMR Outbreak Early Warning */}
          <div className="bg-[#111111] rounded-xl p-6 border border-red-800 hover:border-red-500 hover:scale-[1.02] transition transform flex flex-col justify-between relative">
            <div>
              <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium">🚧 In Development</span>
              <h3 className="text-xl font-bold mb-2 mt-2">ResistNet — AMR Early Warning System</h3>
              <p className="text-gray-400 text-sm mb-4">
                Predicts antibiotic resistance hotspots across Indian districts 4-6 weeks before outbreaks. Ingests real ICMR antibiogram PDFs, analyzes pharma sales, and generates plain-language GPT-4o alerts. Built from raw government data — no toy datasets.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Python</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Prophet</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">LSTM</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">SHAP</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">GPT-4o</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">LangChain</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">FastAPI</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Docker</span>
              </div>
            </div>
            <a href="#" target="_blank" className="text-red-400 text-sm hover:underline">GitHub — Coming Soon →</a>
          </div>

          {/* Project 2: Dealer Performance AI */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Dealer Performance Intelligence System</h3>
              <p className="text-gray-400 text-sm mb-4">
                AI-powered dealer performance monitoring with Gen AI conversational analytics for 500 automobile dealers across 11 KPIs and 24 months of data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Python</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">XGBoost</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">SHAP</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">DiCE</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">GPT-4o</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Streamlit</span>
              </div>
            </div>
            <a href="https://github.com/asawarifuse/dealer-performance-ai" target="_blank" className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
          </div>

          {/* Project 3: CIROP Platform */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">CIROP — Customer Intelligence Platform</h3>
              <p className="text-gray-400 text-sm mb-4">
                Full-stack analytics platform combining customer segmentation, CLV prediction, churn prediction, and revenue forecasting in a single application. 75-day solo build.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">XGBoost</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Prophet</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Docker</span>
              </div>
            </div>
            <a href="https://github.com/asawarifuse/cirop-platform" target="_blank" className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
          </div>

          {/* Project 4: Credit Risk Scoring */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Credit Risk Scoring System</h3>
              <p className="text-gray-400 text-sm mb-4">
                End-to-end rule-based credit risk decision engine built in Excel with LAMBDA functions, VBA automation, audit trail, and Python benchmark validation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Excel</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">LAMBDA</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">VBA</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Power Query</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Python</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Logistic Regression</span>
              </div>
            </div>
            <a href="https://github.com/asawarifuse/Credit-Risk-Scoring-System" target="_blank" className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
          </div>

          {/* Project 5: Enterprise Retail Intelligence */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Enterprise Retail Intelligence Suite</h3>
              <p className="text-gray-400 text-sm mb-4">
                Multi-dashboard Power BI solution for executive-level retail performance analysis across sales, customer behavior, and profitability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Power BI</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">DAX</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Power Query</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Data Modeling</span>
              </div>
            </div>
            <a href="https://github.com/asawarifuse/Enterprise-Retail-Intelligence-Profitability-Command-Center" target="_blank" className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
          </div>

          {/* Project 6: Healthcare Analytics */}
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition transform flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Healthcare Analytics Dashboard</h3>
              <p className="text-gray-400 text-sm mb-4">
                Power BI dashboard analyzing patient demographics, hospital operations, and resource utilization for data-driven healthcare decisions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Power BI</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">DAX</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Healthcare Analytics</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Data Visualization</span>
              </div>
            </div>
            <a href="#" className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg max-w-xl mb-10">
          I'm actively seeking internship opportunities in Data Science, AI, and Analytics. 
          Whether you have a role, a project idea, or just want to connect — I'd love to hear from you.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <a href="mailto:fuseaasawari@gmail.com" className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 hover:scale-105 transition transform text-lg">
            Email Me
          </a>
          <a href="https://linkedin.com/in/asawarifuse" target="_blank" className="border border-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black hover:scale-105 transition transform text-lg">
            LinkedIn
          </a>
          <a href="https://github.com/asawarifuse" target="_blank" className="border border-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black hover:scale-105 transition transform text-lg">
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm">© 2026 Asawari Fuse. Built from scratch.</p>
      </footer>

    </main>
  )
}