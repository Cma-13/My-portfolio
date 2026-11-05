import { profile, projects, skills, education, certificates } from "./data/profile.js";

/* Small arrow shown after external links */
function ArrowUpRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1 font-medium underline decoration-line decoration-2 underline-offset-4 hover:decoration-crimson transition-colors ${className}`}
    >
      {children}
      <ArrowUpRight />
    </a>
  );
}

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28 border-t border-line">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
        {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Nav() {
  const links = [
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold">
          {profile.name}
          <span className="text-crimson">.</span>
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-muted hover:text-ink transition-colors ${
                label === "Projects" || label === "Contact" ? "" : "hidden sm:inline"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-16 sm:pt-28 pb-20 sm:pb-28">
      <h1 className="rise font-display font-extrabold tracking-tight leading-[0.92] text-[clamp(3.4rem,11.5vw,9.5rem)]">
        {profile.name}
        <span className="text-crimson">.</span>
      </h1>

      <div className="rise-late mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
        <div>
          <p className="font-display text-2xl sm:text-3xl font-semibold">
            {profile.role}.
          </p>
          <p className="mt-4 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">{profile.intro}</p>
        </div>

        <div className="flex flex-col gap-5 lg:items-end">
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-crimson hover:bg-crimson-dark text-white font-semibold px-6 py-3 transition-colors"
            >
              See my projects
            </a>
          </div>
          <div className="flex flex-wrap gap-5">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <a
              href={`mailto:${profile.email}`}
              className="font-medium underline decoration-line decoration-2 underline-offset-4 hover:decoration-crimson transition-colors"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechList({ tech }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Built with">
      {tech.map((t) => (
        <li key={t} className="rounded-md bg-paper border border-line px-2.5 py-1 text-sm text-ink">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Highlights({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((h) => (
        <li key={h} className="flex gap-3 text-ink/85 leading-relaxed">
          <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-crimson" aria-hidden="true"></span>
          {h}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="rounded-2xl bg-card border border-line p-7 sm:p-10 grid lg:grid-cols-2 gap-8 lg:gap-14">
      <div>
        <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">{project.name}</h3>
        {project.subtitle && <p className="mt-1 text-lg text-muted">{project.subtitle}</p>}
        <p className="mt-5 text-lg leading-relaxed">{project.summary}</p>
        <div className="mt-6">
          <TechList tech={project.tech} />
        </div>
        <ExternalLink href={project.github} className="mt-7">
          View code on GitHub
        </ExternalLink>
      </div>
      <div className="lg:border-l lg:border-line lg:pl-14">
        <h4 className="font-display text-lg font-semibold mb-4">What I built</h4>
        <Highlights items={project.highlights} />
      </div>
    </article>
  );
}

function SmallProject({ project }) {
  return (
    <article className="rounded-2xl bg-card border border-line p-7 flex flex-col">
      <h3 className="font-display text-2xl font-bold tracking-tight">{project.name}</h3>
      <p className="mt-3 leading-relaxed">{project.summary}</p>
      <div className="mt-5">
        <Highlights items={project.highlights} />
      </div>
      <div className="mt-6">
        <TechList tech={project.tech} />
      </div>
      <ExternalLink href={project.github} className="mt-6 self-start">
        View code on GitHub
      </ExternalLink>
    </article>
  );
}

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" title="Projects" intro="From AI tools to full restaurant software. All code is on GitHub.">
      <div className="space-y-6">
        {featured.map((p) => (
          <FeaturedProject key={p.name} project={p} />
        ))}
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {others.map((p) => (
          <SmallProject key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The languages and tools I have used in real projects.">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((s) => (
          <div key={s.group} className="py-5 grid sm:grid-cols-[12rem_1fr] gap-2 sm:gap-8">
            <dt className="font-display text-lg font-semibold">{s.group}</dt>
            <dd className="text-lg text-ink/85">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education and certificates">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h3 className="font-display text-xl font-semibold mb-6">Education</h3>
          <ul className="space-y-8">
            {education.map((e) => (
              <li key={e.title}>
                <p className="text-sm text-muted">{e.years}</p>
                <p className="mt-1 text-lg font-semibold">{e.title}</p>
                <p className="text-ink/85">{e.place}</p>
                {e.note && <p className="text-muted">{e.note}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold mb-6">Certificates</h3>
          <ul className="space-y-6">
            {certificates.map((c) => (
              <li key={c.title} className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                <div>
                  <p className="text-lg font-semibold">{c.title}</p>
                  <p className="text-ink/85">{c.issuer}</p>
                </div>
                <p className="text-muted whitespace-nowrap">{c.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 border-t border-line">
      <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl">
        Have a role or a project in mind? Get in touch.
      </h2>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block font-display text-2xl sm:text-4xl font-semibold text-crimson underline decoration-2 underline-offset-8 break-all hover:text-crimson-dark"
      >
        {profile.email}
      </a>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-lg">
        <span className="text-muted">{profile.location}</span>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="font-medium underline decoration-line decoration-2 underline-offset-4 hover:decoration-crimson">
          {profile.phone}
        </a>
        <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main className="max-w-6xl mx-auto px-5 sm:px-8">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </>
  );
}
