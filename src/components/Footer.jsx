import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {isColorTheme, ThemeContext} from "../contexts/ThemeContext.js";

function Footer() {
    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <footer
      className={`bg-${isColorTheme(theme) ? `${theme}-subtle` : "body-secondary"} pb-2 mt-auto`}
    >
        <hr className="mt-0 mb-5 text-secondary" />
      <div className="container">
        <div className="row text-start text-md-left align-items-start mb-4">
          {/* Logo and description */}
          <div className="col-md-5 mb-4 mb-md-0 d-flex flex-column align-items-md-start align-items-baseline">
            <div className="d-flex align-items-center mb-2">
              {/* <span className="me-2" style={{ fontSize: "2rem" }}>
                // Logo SVG 
              </span> */}
              <span className="fw-bold fs-5">HexaFuel</span>
            </div>
            <div
              className="text-secondary"
              style={{ fontSize: "1rem", maxWidth: 340 }}
            >
              The complete solution for modern fuel station management.
              <br />
              Streamline operations, boost efficiency, and maximize profits.
            </div>
          </div>
          {/* Product */}
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="fw-bold mb-2">Product</div>
            <ul className="list-unstyled text-secondary">
              <li>
                <NavLink
                  to="/features"
                  className="text-secondary text-decoration-none"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className="text-secondary text-decoration-none"
                >
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div className="col-md-3">
            <div className="fw-bold mb-2">Support</div>
            <ul className="list-unstyled text-secondary">
              <li>
                <NavLink
                  to="/contact"
                  className="text-secondary text-decoration-none"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="http://hexalogicx.com"
                  className="text-secondary text-decoration-none"
                  target="_blank"
                >
                  Company
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center text-secondary small pb-2">
          &copy; {new Date().getFullYear()} FuelManager Pro. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
