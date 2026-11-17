import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/menu", "Menu"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"]
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          ✦ CASA VERDE
          <span>ITALIAN DINING</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          ☰
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([url, label]) => (
            <NavLink
              key={url}
              to={url}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
