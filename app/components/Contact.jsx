export default function Contact() {
  const buttons = [
    { href: "mailto:fuseaasawari@gmail.com", label: "Email Me", primary: true },
    { href: "https://linkedin.com/in/asawarifuse", label: "LinkedIn", primary: false },
    { href: "https://github.com/asawarifuse", label: "GitHub", primary: false }
  ];

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 lg:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-400 text-lg max-w-xl mb-10">
        I&apos;m actively seeking internship opportunities in Data Science, AI, and Full-Stack Development. 
        Whether you have a role, a project idea, or just want to connect — I&apos;d love to hear from you.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {buttons.map((btn, i) => (
          <a key={i} href={btn.href} target={btn.primary ? "" : "_blank"} className={`px-8 py-4 rounded-lg font-medium hover:scale-105 transition-all duration-300 text-lg hover:shadow-xl ${btn.primary ? 'bg-white text-black hover:bg-gray-200 hover:shadow-white/20' : 'border border-white hover:bg-white hover:text-black hover:shadow-white/20'}`}>
            {btn.label}
          </a>
        ))}
      </div>
    </section>
  );
}