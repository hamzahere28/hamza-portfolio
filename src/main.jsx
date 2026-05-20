import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Phone,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X
} from "lucide-react";
import "./styles.css";

const contact = {
  email: "hamzatalha783@gmail.com",
  phone: "+92 3177113621",
  phoneHref: "tel:+923177113621",
  github: "https://github.com/hamzahere28"
};

const projects = [
  {
    slug: "caresync",
    title: "CareSync",
    type: "MERN Healthcare Platform",
    live: "https://caresync-healthcare-platform.vercel.app",
    source: contact.github,
    summary:
      "A deployed healthcare appointment platform with doctor discovery, booking, dashboards, prescriptions, admin workflows, and AI-assisted visit summaries.",
    problem:
      "Healthcare demos often stop at simple forms. CareSync was built to feel like a practical clinic product with patient, doctor, and admin workflows.",
    solution:
      "I designed a multi-page React experience backed by an Express/MongoDB architecture, demo-safe fallback data, booking flows, operational dashboards, and Gemini-ready summary routes.",
    outcome:
      "The app is live on Vercel and remains explorable even when the backend is not running, which makes it reliable for portfolio visitors and interviews.",
    stack: ["React", "Express", "MongoDB", "Gemini API", "Vercel"],
    highlights: ["Doctor search", "Appointment booking", "Admin dashboard", "AI visit summaries"],
    metrics: ["9+ pages", "3 user roles", "API-ready"],
    accent: "healthcare"
  },
  {
    slug: "iscord",
    title: "Iscord",
    type: "Realtime Chat Product",
    live: "https://hamza-discord-clone.vercel.app",
    source: "https://github.com/hamzahere28/discord-clone",
    summary:
      "A deployed Discord-inspired chat platform with styled authentication, mobile-first chat, direct messages, profile uploads, roles, channels, and realtime messaging.",
    problem:
      "The goal was to build more than a static chat UI: it needed live messaging, user flows, channel structure, and a mobile-friendly product surface.",
    solution:
      "I connected a React frontend with a Node/Socket.IO backend, MongoDB persistence, Railway API hosting, and Vercel frontend deployment.",
    outcome:
      "The result is a public full-stack app that demonstrates realtime product architecture, mobile UI decisions, and production deployment.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "Vercel", "Railway"],
    highlights: ["Realtime messages", "Direct messages", "Profile uploads", "Role structure"],
    metrics: ["Live sockets", "Mobile UI", "Railway API"],
    accent: "chat"
  },
  {
    slug: "launchpilot",
    title: "LaunchPilot AI",
    type: "AI SaaS Platform",
    live: "https://launchpilot-ai-saas.vercel.app",
    source: "https://github.com/hamzahere28/mern-ai-saas",
    summary:
      "A MERN SaaS product with a professional landing site, dashboard, admin panel, AI Studio, billing UI, MongoDB Atlas integration, and one-link Vercel deployment.",
    problem:
      "SaaS demos need to show trust quickly: landing page, dashboard, admin views, pricing, and AI output should feel connected.",
    solution:
      "I built a polished product shell with protected dashboard-style screens, AI generation surfaces, billing UI, and deployment-ready environment structure.",
    outcome:
      "LaunchPilot AI shows full-stack SaaS thinking from marketing page to app dashboard, which helps position the work as product engineering.",
    stack: ["React", "Express", "MongoDB Atlas", "AI API", "Vercel"],
    highlights: ["AI Studio", "Admin analytics", "Billing UI", "Dashboard"],
    metrics: ["SaaS flow", "AI-ready", "Atlas-ready"],
    accent: "saas"
  }
];

const skills = [
  { icon: Code2, label: "React Frontends", detail: "Responsive interfaces, dashboards, component systems, and polished UX" },
  { icon: Server, label: "Node.js APIs", detail: "Express services, auth foundations, realtime features, and route design" },
  { icon: Database, label: "MongoDB", detail: "Schemas, relationships, seed data, and production database wiring" },
  { icon: Globe2, label: "Responsive Web", detail: "Mobile-friendly web layouts, landing pages, and product interfaces" },
  { icon: Rocket, label: "Deployment", detail: "Vercel, Railway, environment variables, builds, aliases, and production fixes" },
  { icon: ShieldCheck, label: "Product Quality", detail: "Validation, role flows, fallback states, and reliable demos" }
];

const stats = [
  ["4+", "Production-ready apps"],
  ["3", "Live case studies"],
  ["React + Node", "Core stack"],
  ["BSE", "Software engineering"]
];

const outcomes = [
  "Built and deployed full-stack MERN products with Vercel and Railway.",
  "Designed portfolio-ready healthcare, SaaS, and realtime chat workflows.",
  "Created responsive interfaces that stay usable on mobile and desktop.",
  "Connected frontend experiences to API, database, auth, and AI foundations."
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>MH</span>
          Muhammad Hamza
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#case-studies" onClick={closeMenu}>Case Studies</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={16} />
              Full-stack web developer
            </div>

            <h1>Building deployed products with clean UI, stable APIs, and product thinking.</h1>

            <p>
              I am Muhammad Hamza, an undergraduate software engineering student
              focused on React, Node.js, and MongoDB. I build portfolio-ready
              products that look polished, work on mobile, and can be deployed live.
            </p>

            <div className="hero-contact-card">
              <a href={`mailto:${contact.email}`}>
                <Mail size={17} />
                {contact.email}
              </a>

              <a href={contact.phoneHref}>
                <Phone size={17} />
                {contact.phone}
              </a>
            </div>

            <div className="hero-actions">
              <a className="primary-btn" href="#case-studies">
                View Case Studies
                <ArrowUpRight size={18} />
              </a>

              <a className="secondary-btn" href={`mailto:${contact.email}`}>
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer profile visual">
            <div className="terminal-card">
              <div className="terminal-top">
                <span />
                <span />
                <span />
              </div>

              <div className="terminal-body">
                <p><span>$</span> npm run build</p>
                <p className="success">Done: React frontend compiled</p>
                <p className="success">Done: API architecture documented</p>
                <p className="success">Done: production deployment shipped</p>
              </div>
            </div>

            <div className="profile-card">
              <img className="profile-photo" src="/profile-photo.jpeg" alt="Muhammad Hamza" />
              <div>
                <strong>Muhammad Hamza</strong>
                <span>Software engineering undergraduate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Portfolio highlights">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <span>Selected work</span>
            <h2>Live projects with real product surfaces.</h2>
            <p>
              Each project includes a live demo, source link where available,
              product summary, and a case study breakdown.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <LivePreview project={project} />
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                  <a href={project.source} target="_blank" rel="noreferrer">
                    Source
                    <Code2 size={16} />
                  </a>
                  <a href={`#${project.slug}`}>
                    Case Study
                    <FileText size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section case-study-section" id="case-studies">
          <div className="section-heading">
            <span>Case studies</span>
            <h2>Problem, build decisions, and outcomes.</h2>
          </div>

          <div className="case-study-list">
            {projects.map((project) => (
              <article className="case-study" id={project.slug} key={project.slug}>
                <div className="case-copy">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>

                  <div className="case-block">
                    <strong>Problem</strong>
                    <p>{project.problem}</p>
                  </div>

                  <div className="case-block">
                    <strong>Solution</strong>
                    <p>{project.solution}</p>
                  </div>

                  <div className="case-block">
                    <strong>Outcome</strong>
                    <p>{project.outcome}</p>
                  </div>

                  <div className="hero-actions">
                    <a className="primary-btn" href={project.live} target="_blank" rel="noreferrer">
                      Open Live Project
                      <ArrowUpRight size={18} />
                    </a>
                    <a className="secondary-btn" href={project.source} target="_blank" rel="noreferrer">
                      View GitHub
                      <Code2 size={18} />
                    </a>
                  </div>
                </div>

                <div className={`case-media ${project.accent}`}>
                  <LivePreview project={project} large />
                  <div className="outcome-grid">
                    {project.metrics.map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="about">
          <div className="section-heading compact">
            <span>About</span>
            <h2>A practical builder for web, mobile, APIs, and deployment.</h2>
            <p>
              I like building products that can be shown, tested, and shipped.
              My work combines interface polish with the backend structure needed
              for real workflows: auth foundations, data models, dashboards,
              admin views, AI routes, and deployment setup.
            </p>
            <a className="secondary-btn inline-btn" href={contact.github} target="_blank" rel="noreferrer">
              <Code2 size={18} />
              View GitHub
            </a>
          </div>

          <div className="about-panel">
            <div className="outcome-list">
              {outcomes.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="skill-grid">
              {skills.map(({ icon: Icon, label, detail }) => (
                <div className="skill-item" key={label}>
                  <Icon size={22} />
                  <div>
                    <strong>{label}</strong>
                    <span>{detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <span>How I work</span>
            <h2>A clear path from idea to production link.</h2>
          </div>

          <div className="process-grid">
            <div>
              <Layers3 size={24} />
              <strong>Plan the product flow</strong>
              <p>Map the core screens, user actions, states, and data before building.</p>
            </div>

            <div>
              <Terminal size={24} />
              <strong>Build the system</strong>
              <p>Implement frontend, backend, auth, realtime logic, and database models.</p>
            </div>

            <div>
              <Globe2 size={24} />
              <strong>Ship and improve</strong>
              <p>Deploy live, fix production issues, tune mobile UI, and keep the app stable.</p>
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="section-heading">
            <span>Proof points</span>
            <h2>Signals that make the work easier to trust.</h2>
          </div>

          <div className="testimonial-grid">
            <article>
              <BriefcaseBusiness size={22} />
              <p>Built projects as complete product demos instead of isolated UI screens.</p>
              <strong>Product depth</strong>
            </article>
            <article>
              <Rocket size={22} />
              <p>Shipped public links for portfolio review, client conversations, and interviews.</p>
              <strong>Deployment ready</strong>
            </article>
            <article>
              <ShieldCheck size={22} />
              <p>Designed fallback states so visitors can still explore live apps reliably.</p>
              <strong>Reliable demos</strong>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span>Available for work</span>
            <h2>Let us build something professional.</h2>
            <p>
              Reach out for portfolios, dashboards, full-stack MERN apps,
              React interfaces, Node.js APIs, dashboards, landing
              pages, or mobile-responsive UI improvements.
            </p>

            <div className="contact-details">
              <a href={`mailto:${contact.email}`}>
                <Mail size={18} />
                {contact.email}
              </a>

              <a href={contact.phoneHref}>
                <Phone size={18} />
                {contact.phone}
              </a>
            </div>
          </div>

          <form className="contact-form" action={`mailto:${contact.email}`} method="post" encType="text/plain">
            <label>
              Name
              <input name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell me what you want to build" required />
            </label>
            <button className="primary-btn" type="submit">
              Send Message
              <Send size={18} />
            </button>
            <a className="secondary-btn" href={contact.github} target="_blank" rel="noreferrer">
              GitHub
              <Code2 size={18} />
            </a>
          </form>
        </section>
      </main>
    </div>
  );
}

function LivePreview({ project, large = false }) {
  return (
    <div className={large ? `live-preview large ${project.accent}` : `live-preview ${project.accent}`}>
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <small>{project.live.replace("https://", "")}</small>
      </div>
      <div className="preview-screen">
        <div className="preview-hero-row">
          <div>
            <strong>{project.title}</strong>
            <p>{project.type}</p>
          </div>
          <span>Live</span>
        </div>
        <div className="preview-layout">
          <div className="preview-sidebar-mini">
            {project.highlights.slice(0, 3).map((item) => (
              <i key={item}>{item.slice(0, 2)}</i>
            ))}
          </div>
          <div className="preview-content">
            {project.highlights.map((item, index) => (
              <div className="preview-row" key={item}>
                <span style={{ width: `${92 - index * 12}%` }} />
                <small>{item}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
