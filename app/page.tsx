"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #0a0a0f;
          --paper: #f5f3ee;
          --cream: #ede9e0;
          --accent: #e8572a;
          --accent2: #2a4be8;
          --muted: #7a7670;
          --card: #ffffff;
          --serif: 'Syne', sans-serif;
          --sans: 'DM Sans', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--paper);
          color: var(--ink);
          font-family: var(--sans);
          overflow-x: hidden;
        }

        /* ─── NAVBAR ─── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.2rem 3rem;
          transition: all 0.3s ease;
        }
        .nav.scrolled {
          background: rgba(245,243,238,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .nav-logo {
          font-family: var(--serif);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: -0.02em;
        }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a {
          font-family: var(--sans);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--accent); }
        .nav-cta {
          background: var(--ink);
          color: var(--paper) !important;
          padding: 0.55rem 1.4rem;
          border-radius: 100px;
          transition: background 0.2s !important;
        }
        .nav-cta:hover { background: var(--accent) !important; color: var(--paper) !important; }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block; width: 24px; height: 2px;
          background: var(--ink); border-radius: 2px;
          transition: all 0.3s;
        }

        /* ─── HERO ─── */
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 0 3rem 5rem;
          position: relative;
          overflow: hidden;
          background: var(--ink);
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: 
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(232,87,42,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 10% 80%, rgba(42,75,232,0.2) 0%, transparent 60%),
            var(--ink);
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-tag {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.5);
          margin-bottom: 1.5rem;
          position: relative; z-index: 1;
        }
        .hero-tag::before {
          content: ''; width: 24px; height: 1px; background: var(--accent);
        }
        .hero-headline {
          font-family: var(--serif);
          font-size: clamp(3.5rem, 8vw, 8rem);
          font-weight: 800;
          line-height: 0.95;
          color: var(--paper);
          letter-spacing: -0.03em;
          margin-bottom: 2.5rem;
          position: relative; z-index: 1;
        }
        .hero-headline em {
          font-style: normal;
          color: var(--accent);
          display: block;
        }
        .hero-bottom {
          display: flex; align-items: flex-end;
          justify-content: space-between; gap: 2rem;
          position: relative; z-index: 1;
        }
        .hero-desc {
          max-width: 380px;
          font-size: 1rem; line-height: 1.7;
          color: rgba(255,255,255,0.55);
          font-weight: 300;
        }
        .hero-actions { display: flex; gap: 1rem; align-items: center; flex-shrink: 0; }
        .btn-primary {
          background: var(--accent);
          color: #fff;
          padding: 0.9rem 2rem;
          border-radius: 100px;
          font-size: 0.9rem; font-weight: 500;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-block;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(232,87,42,0.4);
        }
        .btn-ghost {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem; font-weight: 400;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.4rem;
          transition: color 0.2s;
        }
        .btn-ghost:hover { color: #fff; }
        .hero-stats {
          display: flex; gap: 3rem;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          position: relative; z-index: 1;
        }
        .stat-num {
          font-family: var(--serif);
          font-size: 2.2rem; font-weight: 800;
          color: var(--paper); line-height: 1;
        }
        .stat-num span { color: var(--accent); }
        .stat-label {
          font-size: 0.78rem; color: rgba(255,255,255,0.4);
          margin-top: 0.3rem; letter-spacing: 0.06em; text-transform: uppercase;
        }

        /* ─── SECTION COMMON ─── */
        section { padding: 7rem 3rem; }
        .section-tag {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 1rem;
        }
        .section-tag::before {
          content: ''; width: 20px; height: 1.5px; background: currentColor;
        }
        .section-title {
          font-family: var(--serif);
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800; line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--ink);
        }

        /* ─── SERVICES ─── */
        .services { background: var(--paper); }
        .services-header {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem; gap: 2rem;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background: rgba(0,0,0,0.1);
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 16px;
          overflow: hidden;
        }
        .service-card {
          background: var(--card);
          padding: 2.5rem;
          transition: background 0.25s;
          cursor: default;
        }
        .service-card:hover { background: var(--ink); }
        .service-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          transition: background 0.25s;
        }
        .s1 .service-icon { background: #fff0eb; }
        .s2 .service-icon { background: #ebf0ff; }
        .s3 .service-icon { background: #ebfff3; }
        .service-card:hover .service-icon { background: rgba(255,255,255,0.1); }
        .service-name {
          font-family: var(--serif);
          font-size: 1.3rem; font-weight: 700;
          margin-bottom: 0.8rem;
          color: var(--ink);
          transition: color 0.25s;
        }
        .service-card:hover .service-name { color: var(--paper); }
        .service-desc {
          font-size: 0.9rem; line-height: 1.7;
          color: var(--muted);
          transition: color 0.25s;
        }
        .service-card:hover .service-desc { color: rgba(255,255,255,0.55); }
        .service-num {
          font-family: var(--serif);
          font-size: 4rem; font-weight: 800;
          color: rgba(0,0,0,0.04);
          margin-top: 2rem; line-height: 1;
          transition: color 0.25s;
        }
        .service-card:hover .service-num { color: rgba(255,255,255,0.06); }

        /* ─── WORK ─── */
        .work { background: var(--cream); }
        .work-header { margin-bottom: 3.5rem; }
        .work-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          grid-template-rows: auto auto;
          gap: 1.5rem;
        }
        .work-card {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          background: var(--ink);
          aspect-ratio: unset;
          min-height: 280px;
          cursor: pointer;
        }
        .work-card.large { grid-row: span 2; min-height: 580px; }
        .work-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .work-card:hover .work-card-img { transform: scale(1.04); }
        .work-placeholder {
          width: 100%; height: 100%; min-height: inherit;
          display: flex; align-items: center; justify-content: center;
          font-size: 3rem;
          position: relative;
        }
        .work-card:nth-child(1) .work-placeholder { background: linear-gradient(135deg, #1a1a2e, #16213e); }
        .work-card:nth-child(2) .work-placeholder { background: linear-gradient(135deg, #2d1b69, #11998e); }
        .work-card:nth-child(3) .work-placeholder { background: linear-gradient(135deg, #e8572a, #f7941d); }
        .work-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 1.8rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.85));
          transform: translateY(40%);
          transition: transform 0.3s ease;
        }
        .work-card:hover .work-overlay { transform: translateY(0); }
        .work-tag {
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 0.4rem;
        }
        .work-title {
          font-family: var(--serif);
          font-size: 1.3rem; font-weight: 700;
          color: #fff; line-height: 1.2;
        }

        /* ─── PROCESS ─── */
        .process { background: var(--paper); }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 3.5rem;
          position: relative;
        }
        .process-grid::before {
          content: '';
          position: absolute;
          top: 2rem; left: 2rem; right: 2rem;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }
        .process-step { padding: 3rem 2rem 2rem; text-align: center; }
        .process-dot {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--paper);
          border: 2px solid var(--accent);
          margin: 0 auto 1.5rem;
          position: relative; z-index: 1;
          transition: background 0.2s;
        }
        .process-step:hover .process-dot { background: var(--accent); }
        .process-num {
          font-family: var(--serif);
          font-size: 0.7rem; font-weight: 800;
          letter-spacing: 0.1em; color: var(--accent);
          margin-bottom: 0.6rem; text-transform: uppercase;
        }
        .process-name {
          font-family: var(--serif);
          font-size: 1.15rem; font-weight: 700;
          color: var(--ink); margin-bottom: 0.8rem;
        }
        .process-desc {
          font-size: 0.85rem; line-height: 1.7;
          color: var(--muted);
        }

        /* ─── CONTACT ─── */
        .contact { background: var(--ink); }
        .contact-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 6rem; align-items: start;
        }
        .contact-left .section-title { color: var(--paper); }
        .contact-sub {
          font-size: 1rem; line-height: 1.7;
          color: rgba(255,255,255,0.45);
          margin-top: 1.2rem; font-weight: 300;
        }
        .contact-info { margin-top: 3rem; display: flex; flex-direction: column; gap: 1.2rem; }
        .contact-item {
          display: flex; align-items: center; gap: 1rem;
          font-size: 0.9rem; color: rgba(255,255,255,0.5);
        }
        .contact-item-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; flex-shrink: 0;
        }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-label {
          font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .form-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 0.85rem 1rem;
          color: var(--paper);
          font-family: var(--sans);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.2); }
        .form-input:focus {
          border-color: var(--accent);
          background: rgba(255,255,255,0.08);
        }
        textarea.form-input { resize: vertical; min-height: 130px; }
        .form-submit {
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 1rem 2.5rem;
          font-family: var(--sans);
          font-size: 0.95rem; font-weight: 500;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          align-self: flex-start;
          margin-top: 0.5rem;
        }
        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(232,87,42,0.4);
        }
        .form-success {
          background: rgba(42,232,130,0.1);
          border: 1px solid rgba(42,232,130,0.3);
          border-radius: 10px; padding: 1rem;
          color: #4ade80; font-size: 0.9rem; text-align: center;
        }
        .form-error {
          background: rgba(232,42,42,0.1);
          border: 1px solid rgba(232,42,42,0.3);
          border-radius: 10px; padding: 1rem;
          color: #f87171; font-size: 0.9rem; text-align: center;
        }

        /* ─── FOOTER ─── */
        footer {
          background: #050508;
          padding: 2.5rem 3rem;
          display: flex; align-items: center;
          justify-content: space-between; gap: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .footer-logo {
          font-family: var(--serif);
          font-size: 1.1rem; font-weight: 800;
          color: rgba(255,255,255,0.6); text-decoration: none;
        }
        .footer-logo span { color: var(--accent); }
        .footer-copy { font-size: 0.8rem; color: rgba(255,255,255,0.25); }
        .footer-socials { display: flex; gap: 1.5rem; }
        .footer-socials a {
          font-size: 0.8rem; color: rgba(255,255,255,0.3);
          text-decoration: none; transition: color 0.2s;
        }
        .footer-socials a:hover { color: var(--accent); }

        /* ─── MOBILE ─── */
        @media (max-width: 768px) {
          .nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            display: flex; flex-direction: column; gap: 1rem;
            position: fixed; top: 60px; left: 0; right: 0;
            background: var(--paper);
            padding: 2rem 1.5rem;
            border-bottom: 1px solid rgba(0,0,0,0.08);
            z-index: 99;
          }
          .mobile-menu a {
            font-size: 1rem; color: var(--ink);
            text-decoration: none; font-weight: 500;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(0,0,0,0.06);
          }
          .hero { padding: 0 1.5rem 4rem; }
          .hero-bottom { flex-direction: column; align-items: flex-start; }
          .hero-stats { gap: 2rem; flex-wrap: wrap; }
          section { padding: 5rem 1.5rem; }
          .services-header { flex-direction: column; align-items: flex-start; }
          .services-grid { grid-template-columns: 1fr; }
          .work-grid { grid-template-columns: 1fr; }
          .work-card.large { grid-row: span 1; min-height: 280px; }
          .process-grid { grid-template-columns: 1fr 1fr; }
          .process-grid::before { display: none; }
          .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
          .form-row { grid-template-columns: 1fr; }
          footer { flex-direction: column; text-align: center; gap: 1.2rem; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`nav ${scrollY > 50 ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo">Pixel<span>Craft</span></a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact" className="nav-cta">Let's Talk</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Let's Talk</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-tag">Design Agency · Est. 2016</div>
        <h1
