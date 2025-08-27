import React, {useContext} from "react";
import PropTypes from "prop-types";
import {isColorTheme, Theme, ThemeContext} from "../contexts/ThemeContext.js";

function FeatureCard({ title, description }) {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={`${theme === Theme.DARK ? "bg-body-secondary" : "bg-white"} rounded-4 shadow-sm p-4 h-100`}>
        <div className="mb-3" style={{ fontSize: "2rem" }}>
          <i className="bi bi-currency-dollar"></i>
        </div>
        <h5 className={`fw-semibold mb-1 ${isColorTheme(theme) && "text-"+theme} `}>{title}</h5>
        <div className="text-body-tertiary small">{description}</div>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
