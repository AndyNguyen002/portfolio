function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      <div
        className="absolute w-96 h-96 rounded-full animate-[floatY_10s_ease-in-out_infinite]"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          top: "15%",
          right: "10%",
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full animate-[floatX_12s_ease-in-out_infinite]"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          bottom: "20%",
          left: "5%",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      id="home"
      data-snap-section="true"
    >
      <FloatingOrbs />

      <div
        className="absolute inset-0 opacity-[0.02] hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 border border-violet-500/30 rounded-full px-4 py-1.5 mb-8 bg-violet-500/5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none">
          Hi, I&apos;m <span className="text-gradient">Ngoc Dung</span>
        </h1>

        <p className="text-2xl md:text-4xl font-semibold mb-6 text-gradient">Fullstack Developer</p>

        <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Fullstack Developer with 4 years of experience in React/TypeScript, specializing in
          real-time systems and complex data visualization — financial dashboards, energy trading
          platforms.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-medium transition-colors"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-full font-medium transition-colors"
          >
            Get in touch
          </a>
        </div>

       
      </div>
    </section>
  );
}
