import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Phone,
  Rocket,
  Send,
  Server,
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
    type: "Healthcare Platform",
    live: "https://caresync-healthcare-platform.vercel.app",
    source: contact.github,
    summary:
      "A healthcare appointment product with doctor discovery, booking flows, dashboards, prescriptions, admin workflows, and AI-assisted visit summaries.",
    problem:
      "Healthcare demos usually feel like forms. CareSync needed to feel like a real clinic product across patients, doctors, and admins.",
    solution:
      "I built a multi-page React experience with Express/MongoDB architecture, demo-safe fallback data, booking flows, operational dashboards, and Gemini-ready summary routes.",
    result:
      "A reliable live demo that remains explorable for portfolio visitors even when backend services are unavailable.",
    stack: ["React", "Express", "MongoDB", "Gemini API", "Vercel"],
    stats: ["3 roles", "9+ screens", "AI-ready"],
    theme: "mint"
  },
  {
    slug: "iscord",
    title: "Iscord",
    type: "Realtime Chat Product",
    live: "https://hamza-discord-clone.vercel.app",
    source: "https://github.com/hamzahere28/discord-clone",
    summary:
      "A Discord-inspired full-stack chat product with authentication styling, channels, direct messages, profile uploads, roles, and realtime messaging.",
    problem:
      "The challenge was to go beyond a static chat UI and prove realtime architecture, channel structure, and mobile-first product behavior.",
    solution:
      "I connected React with a Node/Socket.IO backend, MongoDB persistence, Railway API hosting, and a Vercel frontend deployment.",
    result:
      "A public full-stack app that demonstrates live product behavior, deployment handling, and responsive chat UX.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "Railway"],
    stats: ["Live sockets", "Mobile UI", "Railway API"],
    theme: "violet"
  },
  {
    slug: "launchpilot",
    title: "LaunchPilot AI",
    type: "AI SaaS Platform",
    live: "https://launchpilot-ai-saas.vercel.app",
    source: "https://github.com/hamzahere28/mern-ai-saas",
    summary:
      "A MERN SaaS concept with a conversion-focused landing page, dashboard, admin panel, AI Studio, billing UI, MongoDB Atlas wiring, and deployment structure.",
    problem:
      "SaaS work needs trust quickly: landing page, dashboard, pricing, admin views, and AI output must feel connected instead of scattered.",
    solution:
      "I built a polished product shell with protected dashboard-style screens, AI generation surfaces, billing UI, and production-ready environment structure.",
    result:
      "A stronger product-engineering signal that shows the path from marketing page to real app dashboard.",
    stack: ["React", "Express", "MongoDB Atlas", "AI API", "Vercel"],
    stats: ["SaaS flow", "Admin UI", "Atlas-ready"],
    theme: "amber"
  }
];

const services = [
  {
    icon: Layers3,
    title: "Landing Pages",
    text: "Animated, responsive pages that make the offer clear fast and still feel premium on mobile."
  },
  {
    icon: Server,
    title: "MERN Apps",
    text: "React interfaces, Express APIs, MongoDB schemas, dashboards, role flows, and deployment-ready structure."
  },
  {
    icon: Gauge,
    title: "UI Modernization",
    text: "Upgrade weak layouts into polished product surfaces with better hierarchy, motion, and trust signals."
  },
  {
    icon: Rocket,
    title: "Deployment",
    text: "Vercel, Railway, environment setup, build fixes, production aliases, and public demo polish."
  }
];

const skills = [
  "React interfaces",
  "Node.js APIs",
  "MongoDB models",
  "Socket.IO realtime",
  "AI integrations",
  "Vercel deployment",
  "Railway backend",
  "Responsive CSS",
  "Dashboard UX",
  "Product flows"
];

const proof = [
  ["4+", "production-ready apps"],
  ["3", "live case studies"],
  ["MERN", "core stack"],
  ["BSE", "software engineering"]
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="noise" />
      <div className="spotlight spotlight-one" />
      <div className="spotlight spotlight-two" />

      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Muhammad Hamza home">
          <span>MH</span>
          <strong>Muhammad Hamza</strong>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#case-studies" onClick={closeMenu}>Case Studies</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="status-pill">
              <span />
              Available for full-stack web projects
            </div>

            <h1>I build polished web products that look sharp, feel fast, and ship live.</h1>

            <p>
              I am Muhammad Hamza, a software engineering undergraduate focused on
              React, Node.js, MongoDB, realtime features, AI workflows, and deployment.
              My portfolio is built around live products, not placeholder screens.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#work">
                See the work
                <ArrowRight size={18} />
              </a>
              <a className="btn secondary" href={`mailto:${contact.email}`}>
                <Mail size={18} />
                Hire me
              </a>
            </div>

            <div className="proof-strip" aria-label="Portfolio proof">
              {proof.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-stage" aria-label="Animated portfolio preview">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-panel">
              <img src="/profile-photo.jpeg" alt="Muhammad Hamza" />
              <div>
                <strong>Muhammad Hamza</strong>
                <span>Full-stack product builder</span>
              </div>
              <BadgeCheck size={20} />
            </div>

            <div className="showcase-device">
              <div className="device-top">
                <span />
                <span />
                <span />
                <small>portfolio.live</small>
              </div>
              <div className="device-body">
                <div className="app-preview-header">
                  <Sparkles size={18} />
                  <span>Product launch dashboard</span>
                </div>
                <div className="metric-row">
                  <div><strong>98</strong><span>UI score</span></div>
                  <div><strong>3</strong><span>case studies</span></div>
                  <div><strong>Live</strong><span>deploys</span></div>
                </div>
                <div className="chart-card">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="task-list">
                  <span><CheckCircle2 size={15} /> React frontend</span>
                  <span><CheckCircle2 size={15} /> Node API</span>
                  <span><CheckCircle2 size={15} /> Production deploy</span>
                </div>
              </div>
            </div>

            <div className="code-float">
              <Terminal size={18} />
              <span>npm run build: shipped</span>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Core skills">
          <div>
            {skills.concat(skills).map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <SectionIntro
            eyebrow="Selected work"
            title="Live projects with product depth, deployment, and real workflows."
            text="Each project is positioned like a professional case study: what it solves, what was built, and why it matters."
          />

          <div className="work-grid">
            {projects.map((project, index) => (
              <article className={`work-card ${project.theme}`} key={project.slug}>
                <ProjectMockup project={project} index={index} />
                <div className="work-card-copy">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                  <a href={`#${project.slug}`}>
                    Case Study
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <SectionIntro
            eyebrow="What I can build"
            title="A portfolio that now sells capability, not just code."
            text="The upgrade gives visitors quick signals: what I build, how I ship, and what kind of product work I can own."
          />

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section case-section" id="case-studies">
          <SectionIntro
            eyebrow="Case studies"
            title="The build story behind each live product."
            text="This is the part recruiters and clients usually need: not only what exists, but what problem it solves and how it was shipped."
          />

          <div className="case-list">
            {projects.map((project, index) => (
              <article className={`case-card ${project.theme}`} id={project.slug} key={project.slug}>
                <div className="case-number">0{index + 1}</div>
                <div className="case-main">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="case-actions">
                    <a className="btn primary" href={project.live} target="_blank" rel="noreferrer">
                      Open live
                      <ArrowUpRight size={17} />
                    </a>
                    <a className="btn ghost" href={project.source} target="_blank" rel="noreferrer">
                      GitHub
                      <Code2 size={17} />
                    </a>
                  </div>
                </div>
                <div className="case-detail">
                  <DetailBlock label="Problem" text={project.problem} />
                  <DetailBlock label="Solution" text={project.solution} />
                  <DetailBlock label="Result" text={project.result} />
                  <div className="mini-stats">
                    {project.stats.map((stat) => (
                      <strong key={stat}>{stat}</strong>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section build-system">
          <div className="system-copy">
            <span className="eyebrow">Build system</span>
            <h2>From idea to a link people can actually click.</h2>
            <p>
              I focus on the full path: plan the user flow, design the interface,
              wire the backend, connect data, test the mobile experience, and deploy it.
            </p>
          </div>

          <div className="system-grid">
            <div><BriefcaseBusiness size={22} /><strong>Product flow</strong><span>Pages, states, roles, actions</span></div>
            <div><Code2 size={22} /><strong>Frontend</strong><span>React UI, animations, responsive CSS</span></div>
            <div><Database size={22} /><strong>Backend</strong><span>Express APIs, MongoDB data, realtime</span></div>
            <div><Globe2 size={22} /><strong>Launch</strong><span>Vercel, Railway, production polish</span></div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2>Ready to build a cleaner, sharper web product?</h2>
            <p>
              Send the idea, app, or website you want to upgrade. I can help with
              full-stack MERN builds, dashboards, landing pages, deployment, and UI polish.
            </p>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`}><Mail size={18} />{contact.email}</a>
              <a href={contact.phoneHref}><Phone size={18} />{contact.phone}</a>
              <a href={contact.github} target="_blank" rel="noreferrer"><Code2 size={18} />GitHub</a>
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
              Project
              <textarea name="message" placeholder="Tell me what you want to build or improve" required />
            </label>
            <button className="btn primary" type="submit">
              Send message
              <Send size={18} />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function DetailBlock({ label, text }) {
  return (
    <div className="detail-block">
      <strong>{label}</strong>
      <p>{text}</p>
    </div>
  );
}

function ProjectMockup({ project, index }) {
  return (
    <div className="mockup" style={{ "--delay": `${index * 0.15}s` }}>
      <div className="mockup-top">
        <span />
        <span />
        <span />
        <small>{project.live.replace("https://", "")}</small>
      </div>
      <div className="mockup-body">
        <div className="mockup-hero">
          <strong>{project.title}</strong>
          <em>Live</em>
        </div>
        <div className="mockup-layout">
          <div className="mock-sidebar">
            <i />
            <i />
            <i />
          </div>
          <div className="mock-content">
            {project.stats.map((stat, row) => (
              <div className="mock-row" key={stat}>
                <span style={{ width: `${92 - row * 14}%` }} />
                <small>{stat}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
