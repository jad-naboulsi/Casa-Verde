import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>✦ CASA VERDE</h3>
          <p>Where Italian tradition meets modern elegance.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/menu">Our Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">Our Story</Link>
        </div>

        <div>
          <h4>Visit Us</h4>
          <p>Beirut, Lebanon (fictional demonstration)</p>
          <p>Daily · 12:00 PM – 11:00 PM (sample hours)</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Casa Verde · Student website prototype
      </div>
    </footer>
  );
}

export default Footer;
