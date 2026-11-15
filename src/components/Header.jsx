import React from "react";

import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Rooms', target: 'rooms' },
  { label: 'Experiences', target: 'experiences' },
  { label: 'Contact', target: 'contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <a className="logo" href="#home">
        AURELIA <small>HOTEL & SPA</small>
      </a>

      <nav className={isMenuOpen ? 'show' : ''} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.target} href={`#${link.target}`} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="topbtn" href="#booking">
        BOOK YOUR STAY <ArrowUpRight size={16} />
      </a>

      <button
        type="button"
        className="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
