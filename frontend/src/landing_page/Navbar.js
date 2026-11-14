import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-navbar">
      <div className="container site-navbar-inner">
        <Link className="brand" to="/" aria-label="Zerodha home">
          <span className="brand-mark" aria-hidden="true">Z</span>
          <span>Zerodha</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`site-navigation${isOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <NavLink to="/signup" onClick={() => setIsOpen(false)}>Signup</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/product" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
          <NavLink to="/support" onClick={() => setIsOpen(false)}>Support</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
