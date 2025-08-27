import React, {useContext} from "react";
import {isColorTheme, ThemeContext, Theme} from "../contexts/ThemeContext.js";
import {NavLink, useLocation} from "react-router-dom";

function BottomCTA() {
    const {theme, setTheme} = useContext(ThemeContext)
    const location = useLocation();

    return (<section className={`py-5 waves ${theme}`}>
        <div className="container text-center pt-5">
            <h2 className={`fw-bold display-5 mb-3 ${isColorTheme(theme) && "text-"+theme}`}>
                Ready to transform your fuel station operations?
            </h2>
            <p className="lead text-secondary mb-4">
                Start your free 14-day trial today. No credit card required.
            </p>
            <div className="d-flex justify-content-center gap-3">
                <button className={`btn btn-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} btn-lg px-4 fw-bold`}>
                    Start Free Trial
                </button>
                {location.pathname !== "/pricing" &&
                <NavLink className={`btn btn-outline-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} btn-lg px-4`} to="/pricing">
                    View Pricing
                </NavLink>}
            </div>
        </div>
    </section>);
}

export default BottomCTA;