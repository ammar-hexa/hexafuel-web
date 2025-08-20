import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `nav-link text-dark${isActive ? " active fw-bold text-primary" : ""}`
        }
        onClick={() => setMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/features"
        className={({ isActive }) =>
          `nav-link text-dark${isActive ? " active fw-bold text-primary" : ""}`
        }
        onClick={() => setMenuOpen(false)}
      >
        Features
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          `nav-link text-dark${isActive ? " active fw-bold text-primary" : ""}`
        }
        onClick={() => setMenuOpen(false)}
      >
        Pricing
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `nav-link text-dark${isActive ? " active fw-bold text-primary" : ""}`
        }
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <nav
      className="navbar navbar-light bg-white shadow-sm w-100 position-fixed z-3"
      style={{ minHeight: 64 }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink to="/" className="navbar-brand fw-bold text-dark fs-3">
          HexaFuel
        </NavLink>
        {/* Desktop nav + CTA */}
        <div className="d-none d-lg-flex gap-3 align-items-center">
          {navLinks}
          <button className="btn btn-dark text-white">Get a Free Demo</button>
        </div>
        {/* Mobile hamburger + CTA */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          <NavLink to="/contact" className="btn btn-dark btn-sm text-white">
            Get Demo
          </NavLink>
          <button
            className="navbar-toggler border-0 bg-transparent"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      {/* Fullpage mobile overlay */}
      {menuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
        >
          <button
            className="btn btn-link position-absolute top-0 end-0 m-4 fs-1 text-dark"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: "none" }}
          >
            &times;
          </button>
          <div className="d-flex flex-column gap-4 fs-3 text-center mb-4">
            {navLinks}
          </div>
          <NavLink
            to="/contact"
            className="btn btn-dark btn-lg text-white"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Demo
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
