import React, {useContext} from 'react'
import PropTypes from "prop-types";
import {isColorTheme, ThemeContext} from "../contexts/ThemeContext.js";

function HighlightCard({icon, title, description}) {
    const {theme, setTheme} = useContext(ThemeContext)

    return (<div className="col-md-4 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-start bg-body-tertiary">
            <div
                className={`mb-3 ${isColorTheme(theme) ? "text-"+theme : "text-body-secondary" }`}
                style={{ fontSize: "2.5rem" }}
            >
                <span role="img" aria-label="analytics">
                  {icon}
                </span>
            </div>
            <h5 className={`fw-bold mb-1 ${isColorTheme(theme) && ".text-"+theme}`}>{title}</h5>
            <p className="text-body-secondary mb-0">
                {description}
            </p>
        </div>
    </div>);
}

// prop types
HighlightCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default HighlightCard;