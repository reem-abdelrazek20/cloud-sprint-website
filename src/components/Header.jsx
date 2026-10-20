"use client";

import { useState } from "react";
import Brand from "./Brand.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`nav-links${menuOpen ? " open" : ""}`}
        aria-label="Main navigation"
      >
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#why-us" onClick={closeMenu}>
          Why Cloud Sprint
        </a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Start a project 
        </a>
      </nav>
    </header>
  );
}
