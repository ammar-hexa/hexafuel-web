import React, {useContext} from "react";
import PropTypes from "prop-types";
import {Check2, X} from "react-bootstrap-icons";
import {isColorTheme, Theme, ThemeContext} from "../contexts/ThemeContext.js";

function PricingCard({
  title,
  price,
  description,
  features,
  unavailableFeatures,
  buttonText,
  highlight,
  onButtonClick,
  style
}) {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className={`border rounded-4 p-4 my-1 w-100 h-100 ${theme === Theme.DARK ? "bg-body-secondary" : "bg-white" } ${highlight ? "shadow" : "shadow-sm"}`}
         style={{minWidth: 300, minHeight: 600, ...style}}>
      {highlight && (
        <div className="position-absolute top-0 start-50 translate-middle-x" style={{zIndex: 2, marginTop: "-12px"}}>
          <span className={`badge bg-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} text-bg-secondary px-3 py-2 shadow-sm`} style={{fontSize: "0.95rem"}}>
            ★ Most Popular ★
          </span>
        </div>
      )}
      <div className={`text-center mb-2${highlight ? " mt-3 pt-2" : ""}`}>
        <h4 className={`fw-semibold mb-1`}>{title}</h4>
        <div>
            <span className={`${isColorTheme(theme) && "text-"+theme} fs-1 fw-semibold mb-0`}>{price}</span>
            {" "}
            <span className="fs-6 fw-normal text-secondary">per/month</span>
        </div>
        <div className="lead text-body-secondary mb-3 ms-2 text-start" style={{fontSize: "1rem"}}>
          {description}
        </div>
      </div>
      <ul className="list-unstyled mb-4 text-start">
        {features.map((f, i) => (
          <li className="mb-2" key={"f-"+i}>
            <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
            {f}
          </li>
        ))}
        {unavailableFeatures && unavailableFeatures.map((f, i) => (
          <li className="mb-2 text-body-tertiary" key={"uf-"+i}>
            <X className="me-2" style={{fontSize: "1.5rem"}}/>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`btn btn-${highlight
            ? 
            isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"
            : `outline-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary text-body-emphasis" : "dark"}`
        } w-100 fw-semibold`}
        style={{borderRadius: 8}}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.node.isRequired,
  priceNote: PropTypes.node,
  description: PropTypes.node,
  features: PropTypes.arrayOf(PropTypes.node).isRequired,
  unavailableFeatures: PropTypes.arrayOf(PropTypes.node),
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string,
  highlight: PropTypes.bool,
  highlightText: PropTypes.string,
  highlightClass: PropTypes.string,
  onButtonClick: PropTypes.func,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
};

PricingCard.defaultProps = {
  priceNote: null,
  description: null,
  unavailableFeatures: [],
  buttonVariant: "btn-outline-dark",
  highlight: false,
  highlightText: "",
  highlightClass: "bg-dark text-white",
  onButtonClick: undefined,
  minWidth: 300,
  minHeight: 600,
  className: "",
  style: {}
};

export default PricingCard;

