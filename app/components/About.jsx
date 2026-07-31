export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 hover:text-blue-400 transition relative inline-block">
        About Me
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
      </h2>
      <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl">
        <p>I turn data into decisions — and ideas into deployed systems.</p>
        <p>
          I&apos;m a third-year B.Tech CSE (Data Science) student with 6 deployed projects 
          in Gen AI, machine learning, and full-stack analytics — including an AMR outbreak 
          early warning system and a human rights AI platform. My toolkit spans Python, SQL, 
          Power BI, Excel, DAX, React, Node.js, PostgreSQL, and Docker.
        </p>
        <p>
          I don&apos;t just build dashboards. I ship systems that solve real problems — from 
          database design to ML pipelines to live deployment. My latest project CIROP is a 
          75-day solo build with 200+ commits, real-time streaming, MLOps, and CI/CD.
        </p>
        <p>
          I thrive on solving messy, real-world problems — the kind that don&apos;t come with 
          clean datasets or clear instructions.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-500/30">IBM SQL Certified</span>
          <span className="bg-green-500/20 text-green-300 text-sm px-3 py-1 rounded-full border border-green-500/30">HackerRank SQL Advanced</span>
          <span className="bg-yellow-500/20 text-yellow-300 text-sm px-3 py-1 rounded-full border border-yellow-500/30">Google Data Analytics Certified</span>
          <span className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/30">CDC Coordinator</span>
        </div>
      </div>
    </section>
  );
}