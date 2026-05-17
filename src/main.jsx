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
    title: "Iscord",
    type: "Live Full-Stack Product",
    description:
      "A deployed Discord-inspired chat platform with styled authentication, mobile-first chat, direct messages, profile uploads, roles, channels, and realtime messaging.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "Vercel", "Railway"],
    link: "https://hamza-discord-clone.vercel.app"
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
  { icon: Code2, label: "Frontend", detail: "React, responsive UI, polished component systems" },
  { icon: Server, label: "Backend", detail: "Node.js, Express APIs, auth, realtime services" },
  { icon: Database, label: "Data", detail: "MongoDB schemas, relationships, secure persistence" },
  { icon: Rocket, label: "Deployment", detail: "Vercel, Railway, environment setup, production fixes" },
  { icon: ShieldCheck, label: "Quality", detail: "Bug fixing, role access, validation, clean user flows" },
  { icon: Smartphone, label: "Mobile UX", detail: "Android-ready layouts and touch-friendly screens" }
];

const stats = [
  ["3+", "Production-ready apps"],
  ["Full-stack", "Development focus"],
  ["Realtime", "Socket-based features"],
  ["Mobile-first", "Responsive delivery"]
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
              Full-stack React & Node.js developer
            </div>

            <h1>Professional web applications built for real users.</h1>

            <p>
              I help founders, students, and small businesses turn ideas into
              polished digital products using React, Node.js, MongoDB, realtime
              features, responsive UI, and production deployment.
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
                <p className="success">✓ frontend compiled</p>
                <p className="success">✓ backend deployed</p>
                <p className="success">✓ realtime ready</p>
              </div>
            </div>

            <div className="profile-card">
              <div className="avatar-mark">H</div>
              <div>
                <strong>Muhammad Hamza</strong>
                <span>Full-stack web developer</span>
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
            <h2>Reliable engineering with a polished product finish.</h2>
            <p>
              I focus on the details that make an application feel trustworthy:
              readable UI, responsive behavior, secure authentication, stable APIs,
              and a clean launch process.
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
              Reach out for portfolios, dashboards, full-stack apps, realtime
              projects, landing pages, or mobile-responsive UI improvements.
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
