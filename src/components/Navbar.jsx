import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    ThemeContext,
    Theme,
    isColorTheme, contrastingColor,
} from "../contexts/ThemeContext.tsx";
import {List} from "react-bootstrap-icons"
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const navLinks = [
      {to: "/", label: "Home"},
      {to: "/features", label: "Features"},
      {to: "/pricing", label: "Pricing"},
      {to: "/contact", label: "Contact"},
  ]

  return (
    <nav
      className={`navbar navbar-light bg-${isColorTheme(theme) ? theme : contrastingColor(theme)} shadow-sm w-100 position-fixed z-3`}
      style={{ minHeight: 64 }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink to="/" className={`navbar-brand fw-bold text-bg-${isColorTheme(theme) ? theme : contrastingColor(theme)} fs-3`}>
          HexaFuel
        </NavLink>

        {/* Desktop nav + CTA */}
        <div className="d-none d-lg-flex gap-3 align-items-center">
            {
                navLinks.map((link, i)=>{
                    return <NavLink key={i} to={link.to}
                                    className={({ isActive }) => `nav-link text-bg-${isColorTheme(theme) ? theme : contrastingColor(theme)} 
                                        ${isActive && "active fw-bold border-bottom"}`}
                                    onClick={() => setMenuOpen(false)}>
                        {link.label}
                    </NavLink>;
                })
            }
          <button className={`btn btn-${isColorTheme(theme) ? contrastingColor(theme) : theme}`}>Get a Free Demo</button>
            <Dropdown className={``}>
                <Dropdown.Toggle variant={isColorTheme(theme) ? contrastingColor(theme) : theme} className={``} id="dropdown-basic">
                    Theme
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item ><button className={`btn w-100 ${theme === Theme.LIGHT && "btn-dark" }`} onClick={()=>{setTheme(Theme.LIGHT)}}>Light</button></Dropdown.Item>
                    <Dropdown.Item><button className={`btn w-100 ${theme === Theme.DARK && "btn-secondary"}`} onClick={()=>{setTheme(Theme.DARK)}}>Dark</button></Dropdown.Item>
                    <Dropdown.Item><button className={`btn w-100 ${theme === Theme.SUCCESS && "btn-success"}`} onClick={()=>{setTheme(Theme.SUCCESS)}}>Green</button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        {/* Mobile hamburger + CTA */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          <NavLink to="/contact" className={`btn btn-${isColorTheme(theme) ? contrastingColor(theme) : theme} btn-sm`}>
            Get Demo
          </NavLink>
          <button
            className={`navbar-toggler border-0 bg-transparent text-bg-${isColorTheme(theme) ? theme : contrastingColor(theme)} `}
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(true)}
          >
            <List style={{fontSize: "2rem"}} />
          </button>
        </div>
      </div>
      {/* Fullpage mobile overlay */}
      {menuOpen && (
        <div
          className={`position-fixed top-0 start-0 w-100 h-100 bg-${theme} d-flex flex-column justify-content-center align-items-center p-2`}
          style={{ zIndex: 1050 }}
        >
          <button
            className={`btn text-bg-${theme} position-absolute top-0 end-0 m-4`}
            aria-label="Close menu"
            style={{fontSize: "3rem"}}
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <div className="d-flex flex-column gap-4 fs-3 text-center">
              {
                  navLinks.map((link, i)=>{
                      return <NavLink key={i} to={link.to}
                                      className={({ isActive }) => `nav-link text-${contrastingColor(theme)} 
                                      ${isActive && `active fw-bold border-bottom border-${contrastingColor(theme)}`}`}
                                      onClick={() => setMenuOpen(false)}>
                          {link.label}
                      </NavLink>;
                  })
              }
          </div>
          <NavLink
            to="/contact"
            className={`btn btn-${contrastingColor(theme)} w-100 my-2`}
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Demo
          </NavLink>
            <Dropdown className={`w-100`}>
                <Dropdown.Toggle variant={contrastingColor(theme)} className={`w-100`} id="dropdown-basic">
                    Theme
                </Dropdown.Toggle>
                <Dropdown.Menu className={`w-100 bg-${isColorTheme(theme) ? "light" : "body-secondary"}`}>
                    <Dropdown.Item><button className={`btn w-100 ${theme === Theme.LIGHT && "btn-dark" }`} onClick={()=>{setTheme(Theme.LIGHT)}}>Light</button></Dropdown.Item>
                    <Dropdown.Item><button className={`btn w-100 ${theme === Theme.DARK && "btn-secondary"}`} onClick={()=>{setTheme(Theme.DARK)}}>Dark</button></Dropdown.Item>
                    <Dropdown.Item><button className={`btn w-100 ${theme === Theme.SUCCESS && "btn-success"}`} onClick={()=>{setTheme(Theme.SUCCESS)}}>Green</button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
