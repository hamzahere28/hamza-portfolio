import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  X
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "CareSync",
    type: "MERN Healthcare Platform",
    description:
      "A deployed healthcare appointment platform with doctor discovery, booking, dashboards, prescriptions, admin workflows, and AI-assisted visit summaries.",
    stack: ["React", "Express", "MongoDB", "Gemini API", "Vercel"],
    link: "https://caresync-healthcare-platform.vercel.app"
  },
  {
    title: "Iscord",
    type: "Live Full-Stack Product",
    description:
      "A deployed Discord-inspired chat platform with styled authentication, mobile-first chat, direct messages, profile uploads, roles, channels, and realtime messaging.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "Vercel", "Railway"],
    link: "https://hamza-discord-clone.vercel.app"
  },
  {
    title: "LaunchPilot AI",
    type: "AI SaaS Platform",
    description:
      "A MERN SaaS product with a professional landing site, dashboard, admin panel, AI Studio, billing UI, MongoDB Atlas integration, and one-link Vercel deployment.",
    stack: ["React", "Express", "MongoDB Atlas", "AI API", "Vercel"],
    link: "https://launchpilot-ai-saas.vercel.app"
  },
  {
    title: "Admin Control Center",
    type: "Operations Dashboard",
    description:
      "A secure dashboard for managing users, servers, permissions, message moderation, and community health metrics.",
    stack: ["Express", "JWT", "MongoDB", "Railway"],
    link: "#contact"
  },
  {
    title: "Responsive Product UI",
    type: "Frontend System",
    description:
      "Mobile-first interface work focused on clean layouts, touch-friendly controls, fast navigation, and production deployment.",
    stack: ["React", "CSS", "Vercel", "UX"],
    link: "#work"
  }
];

const skills = [
  { icon: Code2, label: "React Expertise", detail: "Modern React apps, responsive UI, polished component systems" },
  { icon: Server, label: "Node.js Backend", detail: "Express APIs, auth, realtime services, backend architecture" },
  { icon: Database, label: "Data", detail: "MongoDB schemas, relationships, secure persistence" },
  { icon: Smartphone, label: "Flutter Mobile", detail: "Cross-platform mobile interfaces for Android-ready products" },
  { icon: Rocket, label: "Deployment", detail: "Vercel, Railway, environment setup, production fixes" },
  { icon: ShieldCheck, label: "Quality", detail: "Bug fixing, role access, validation, clean user flows" }
];

const stats = [
  ["4+", "Production-ready apps"],
  ["BSE", "Software engineering"],
  ["React + Node", "Core expertise"],
  ["Flutter", "Mobile development"]
];

const contact = {
  email: "hamzatalha783@gmail.com",
  phone: "+92 3177113621",
  phoneHref: "tel:+923177113621"
};

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
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={16} />
              Undergraduate software engineering student
            </div>

            <h1>Muhammad Hamza builds full-stack web and mobile products.</h1>

            <p>
              I am an undergraduate pursuing a Bachelor&apos;s in Software
              Engineering, focused on full-stack web development and Flutter
              mobile development. My strongest expertise is building responsive
              React frontends, Node.js backends, MongoDB-powered systems, and
              production-ready user experiences.
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
              <a className="primary-btn" href="#work">
                View Projects
                <ArrowUpRight size={18} />
              </a>

              <a className="secondary-btn" href={`mailto:${contact.email}`}>
                <Mail size={18} />
                Start a Project
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
                <p className="success">✓ React frontend compiled</p>
                <p className="success">✓ Node.js backend deployed</p>
                <p className="success">✓ Flutter mobile UI ready</p>
              </div>
            </div>

            <div className="profile-card">
              <div className="avatar-mark">H</div>
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

        <section className="featured-app" id="featured">
          <div className="featured-copy">
            <span className="project-type">Latest healthcare deployment</span>
            <h2>CareSync - healthcare appointments and clinical workflows.</h2>
            <p>
              A MERN healthcare platform with doctor discovery, appointment
              booking, patient and admin dashboards, prescriptions, responsive
              mobile views, and AI-assisted visit summary workflows.
            </p>

            <div className="deployment-list" aria-label="CareSync deployment details">
              <div>
                <strong>Frontend</strong>
                <span>Vercel production deployment</span>
              </div>
              <div>
                <strong>Backend</strong>
                <span>Express and MongoDB API architecture</span>
              </div>
              <div>
                <strong>Experience</strong>
                <span>Demo data fallback keeps the app explorable live</span>
              </div>
            </div>

            <div className="hero-actions">
              <a className="primary-btn" href="https://caresync-healthcare-platform.vercel.app" target="_blank" rel="noreferrer">
                Open CareSync
                <ArrowUpRight size={18} />
              </a>

              <a className="secondary-btn" href="#contact">
                Build Healthcare Software
                <Mail size={18} />
              </a>
            </div>
          </div>

          <a
            className="app-preview healthcare-preview"
            href="https://caresync-healthcare-platform.vercel.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the live CareSync healthcare platform"
          >
            <div className="preview-sidebar">
              <span className="active-bubble">CS</span>
              <span>DR</span>
              <span>AI</span>
            </div>
            <div className="preview-main">
              <div className="preview-top">
                <strong>CareSync</strong>
                <span>Live</span>
              </div>
              <div className="preview-message">
                <span>DR</span>
                <div>
                  <strong>Doctor discovery</strong>
                  <p>Search specialists, review profiles, and book clinic or video visits.</p>
                </div>
              </div>
              <div className="preview-message compact">
                <span>AI</span>
                <div>
                  <strong>Visit summaries</strong>
                  <p>Gemini-ready assistant flow for care notes and patient education.</p>
                </div>
              </div>
              <div className="preview-composer">Appointments, dashboards, prescriptions, and admin views</div>
            </div>
          </a>
        </section>

        <section className="featured-app">
          <div className="featured-copy">
            <span className="project-type">Featured deployed application</span>
            <h2>Iscord - realtime Discord-style web app.</h2>
            <p>
              A production full-stack social platform with a polished mobile login
              flow, responsive chat interface, direct messages, profile picture
              uploads, admin-ready structure, realtime updates, and separate
              frontend/backend deployment.
            </p>

            <div className="deployment-list" aria-label="Deployment details">
              <div>
                <strong>Frontend</strong>
                <span>Vercel production deployment</span>
              </div>
              <div>
                <strong>Backend</strong>
                <span>Railway API and Socket.IO service</span>
              </div>
              <div>
                <strong>Experience</strong>
                <span>One public app link for visitors</span>
              </div>
            </div>

            <div className="hero-actions">
              <a className="primary-btn" href="https://hamza-discord-clone.vercel.app" target="_blank" rel="noreferrer">
                Open Live App
                <ArrowUpRight size={18} />
              </a>

              <a className="secondary-btn" href="#contact">
                Discuss Similar Work
                <Mail size={18} />
              </a>
            </div>
          </div>

          <a
            className="app-preview"
            href="https://hamza-discord-clone.vercel.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the live Iscord application"
          >
            <div className="preview-sidebar">
              <span className="active-bubble">D</span>
              <span>H</span>
              <span>+</span>
            </div>
            <div className="preview-main">
              <div className="preview-top">
                <strong># general</strong>
                <span>Live</span>
              </div>
              <div className="preview-message">
                <span>H</span>
                <div>
                  <strong>hhamza</strong>
                  <p>Realtime chat, mobile UI, and profile uploads are live.</p>
                </div>
              </div>
              <div className="preview-message compact">
                <span>I</span>
                <div>
                  <strong>Icord</strong>
                  <p>Frontend on Vercel. Backend on Railway.</p>
                </div>
              </div>
              <div className="preview-composer">Message #general</div>
            </div>
          </a>
        </section>

        <section className="featured-app saas-featured">
          <div className="featured-copy">
            <span className="project-type">New AI SaaS deployment</span>
            <h2>LaunchPilot AI - SaaS landing page and dashboard.</h2>
            <p>
              A full-stack MERN SaaS application with public marketing pages,
              demo login, protected dashboard, project workspaces, AI generation,
              billing UI, admin analytics, and MongoDB Atlas-ready persistence.
            </p>

            <div className="deployment-list" aria-label="LaunchPilot deployment details">
              <div>
                <strong>Frontend</strong>
                <span>Responsive React SaaS website</span>
              </div>
              <div>
                <strong>Backend</strong>
                <span>Express API under the same Vercel link</span>
              </div>
              <div>
                <strong>Database</strong>
                <span>MongoDB Atlas integration configured</span>
              </div>
            </div>

            <div className="hero-actions">
              <a className="primary-btn" href="https://launchpilot-ai-saas.vercel.app" target="_blank" rel="noreferrer">
                Open Live SaaS
                <ArrowUpRight size={18} />
              </a>

              <a className="secondary-btn" href="#contact">
                Build Something Like This
                <Mail size={18} />
              </a>
            </div>
          </div>

          <a
            className="app-preview saas-preview"
            href="https://launchpilot-ai-saas.vercel.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the live LaunchPilot AI SaaS application"
          >
            <div className="preview-sidebar">
              <span className="active-bubble">AI</span>
              <span>DB</span>
              <span>$</span>
            </div>
            <div className="preview-main">
              <div className="preview-top">
                <strong>LaunchPilot AI</strong>
                <span>Live</span>
              </div>
              <div className="saas-bars">
                <i style={{ height: "44%" }} />
                <i style={{ height: "68%" }} />
                <i style={{ height: "82%" }} />
                <i style={{ height: "58%" }} />
              </div>
              <div className="preview-message">
                <span>LP</span>
                <div>
                  <strong>AI Studio</strong>
                  <p>Generate SaaS copy, plans, pricing, and launch assets.</p>
                </div>
              </div>
              <div className="preview-composer">Admin, billing, dashboard, and landing pages</div>
            </div>
          </a>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <span>Selected work</span>
            <h2>Projects with real product thinking.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a href={project.link}>
                  Explore
                  <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="skills">
          <div className="section-heading compact">
            <span>Capabilities</span>
            <h2>Full-stack engineering with strong web and mobile focus.</h2>
            <p>
              I work across React, Node.js, MongoDB, and Flutter, with a focus on
              clean interfaces, stable APIs, responsive layouts, authentication,
              and apps that feel professional on desktop and Android.
            </p>
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
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <span>How I work</span>
            <h2>A clear process from idea to deployment.</h2>
          </div>

          <div className="process-grid">
            <div>
              <Layers3 size={24} />
              <strong>Plan the product flow</strong>
              <p>Map the core screens, user actions, states, and data needed before building.</p>
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

        <section className="contact-section" id="contact">
          <div>
            <span>Available for work</span>
            <h2>Let’s build something professional.</h2>
            <p>
              Reach out for portfolios, dashboards, full-stack MERN apps,
              React interfaces, Node.js APIs, Flutter mobile screens, landing
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

          <div className="contact-actions">
            <a className="primary-btn" href={`mailto:${contact.email}`}>
              <Mail size={18} />
              Email Me
            </a>

            <a className="secondary-btn" href={contact.phoneHref}>
              <Phone size={18} />
              Call Me
            </a>

            <a className="secondary-btn" href="https://github.com/hamzahere28">
              <Globe2 size={18} />
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
