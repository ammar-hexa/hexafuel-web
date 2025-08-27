import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {isColorTheme, Theme, ThemeContext} from "../contexts/ThemeContext.js";
import FeatureCard from "../components/FeatureCard.jsx";
import BottomCTA from "../components/BottomCTA.jsx";

function FeaturesPage() {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <main>
      {/* Header Section */}
      <section className="text-center py-5 mb-5 bg-gradient">
        <span
          className={`badge ${isColorTheme(theme) ? `bg-${theme}-subtle` : theme === Theme.LIGHT ? 'bg-body-tertiary' : 'bg-body-secondary'} text-body-secondary fw-semibold px-3 mt-5 mb-4`}
          style={{ fontSize: "1rem" }}
        >
          FEATURES
        </span>
        <h1 className={`display-5 fw-bold mb-3 ${isColorTheme(theme) && "text-"+theme}`}>
          Powerful Features for Modern Fuel Stations
        </h1>
        <p className="lead mb-4">
          Everything you need to streamline operations, boost efficiency, and
          grow your business.
        </p>
        <button className={`btn btn-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} btn-lg px-4`}>Request a Demo</button>
      </section>

      {/* Main Features Section */}
      <section className="container py-5 my-5">
          {/* Feature 1: Analytics Dashboard */}
        <div className="row g-5 mb-5 align-items-center justify-content-center w-100 mx-auto">
          <div className="col-md-6 order-md-1 order-2 px-0 px-md-5">
            <div className="d-flex flex-column h-100 justify-content-center align-items-baseline">
              <div className="mb-2" style={{ fontSize: "2rem" }}>
                <i className="bi bi-bar-chart-line"></i>
              </div>
              <h4 className={`fw-bold mb-2 text-start ${isColorTheme(theme) && "text-"+theme}`}>
                Advanced Analytics Dashboard
              </h4>
              <p
                className="text-body-secondary mb-2 text-start"
                style={{ maxWidth: 420 }}
              >
                Get real-time insights into your fuel station performance with
                comprehensive dashboards.
              </p>
              <ul className="list-unstyled ms-2 mb-0 text-start">
                <li className="mb-1">
                  •{" "}
                  <span className="fw-semibold">
                    Real-time sales monitoring
                  </span>
                </li>
                <li className="mb-1">• Fuel level tracking</li>
                <li className="mb-1">• Customer traffic analytics</li>
                <li className="mb-1">• Revenue forecasting</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 d-flex justify-content-center  px-0 px-md-5 .border">
            <img
              src={`src/assets/images/${theme}/analytics.svg`}
              alt="Analytics Dashboard"
              className="img-fluid rounded-4 .shadow p-2"
              style={{ maxHeight: 250, objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>
        <hr />
          {/* Feature 2: Inventory Management */}
        <div className="row g-5 my-5 align-items-center justify-content-center  w-100 mx-auto">
          <div className="col-md-6 d-flex justify-content-center px-0 px-md-5">
            <img
              src={`src/assets/images/${theme}/scheduling.svg`}
              alt="Inventory Management"
              className="img-fluid rounded-4 .shadow p-2"
              style={{ maxHeight: 250, objectFit: "contain", width: "100%" }}
            />
          </div>
          <div className="col-md-6 px-0 px-md-5">
            <div className="d-flex flex-column h-100 justify-content-center align-items-baseline">
              <div className="mb-2" style={{ fontSize: "2rem" }}>
                <i className="bi bi-fuel-pump"></i>
              </div>
              <h4 className={`fw-bold mb-2 text-start ${isColorTheme(theme) && "text-"+theme } `}>Inventory Management</h4>
              <p
                className="text-body-secondary mb-2 text-start"
                style={{ maxWidth: 420 }}
              >
                Track fuel levels, manage deliveries, and prevent stockouts with
                automated inventory control.
              </p>
              <ul className="list-unstyled ms-2 mb-0 text-start">
                <li className="mb-1 fw-semibold">
                  • Automated fuel level monitoring
                </li>
                <li className="mb-1">• Low stock alerts</li>
                <li className="mb-1">• Delivery scheduling</li>
                <li className="mb-1">• Supplier management</li>
                <li>• Waste tracking and reporting</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
          {/* Feature 3: Staff Management */}
        <div className="row g-5 mt-5 align-items-center justify-content-center  w-100 mx-auto">
          <div className="col-md-6 order-md-1 order-2 px-0 px-md-5">
            <div className="d-flex flex-column h-100 justify-content-center align-items-baseline">
              <div className="mb-2" style={{ fontSize: "2rem" }}>
                <i className="bi bi-people"></i>
              </div>
              <h4 className={`fw-bold mb-2 text-start ${isColorTheme(theme) && "text-"+theme}`}>Staff Management</h4>
              <p
                className="text-body-secondary mb-2 text-start"
                style={{ maxWidth: 420 }}
              >
                Efficiently manage your team with scheduling, performance
                tracking, and payroll integration.
              </p>
              <ul className="list-unstyled ms-2 mb-0 text-start">
                <li className="mb-1 fw-semibold">• Employee scheduling</li>
                <li className="mb-1">• Time clock integration</li>
                <li className="mb-1">• Performance analytics</li>
                <li className="mb-1">• Payroll management</li>
                <li>• Training modules</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 d-flex justify-content-center  px-0 px-md-5">
            <img
              src={`src/assets/images/${theme}/team.svg`}
              alt="Staff Management"
              className="img-fluid rounded-4 .shadow p-2"
              style={{ maxHeight: 250, objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* More Features Section */}
      <section className="py-5 bg-body-tertiary">
        <div className="container">
          <h2
            className={`text-center fw-bold mb-2 ${isColorTheme(theme) && "text-"+theme}`}
            style={{ fontSize: "2.2rem" }}
          >
            Plus many more powerful features
          </h2>
          <p
            className="text-center text-body-secondary mb-5"
            style={{ maxWidth: 600, margin: "0 auto" }}
          >
            Our platform includes everything you need for comprehensive fuel
            station management.
          </p>
          <div className="row g-4 justify-content-center">
            {/* Feature Card 1 */}
              <FeatureCard title="Financial Management" description="Track revenue, expenses, and profitability across all locations" />
            {/* Feature Card 2 */}
              <FeatureCard
                title="Compliance & Security"
                description="Stay compliant with environmental and safety regulations"
              />
            {/* Feature Card 3 */}
              <FeatureCard
                title="Alert System"
                description="Get instant notifications for critical events and issues"
              />
            {/* Feature Card 4 */}
              <FeatureCard
                title="Maintenance Scheduling"
                description="Schedule and track equipment maintenance and inspections"
              />
            {/* Feature Card 5 */}
              <FeatureCard
                title="Reporting Suite"
                description="Generate comprehensive reports for stakeholders and regulators"
              />
            {/* Feature Card 6 */}
              <FeatureCard
                title="System Integration"
                description="Seamlessly integrate with existing POS and accounting systems"
              />
          </div>
        </div>
      </section>

        {/* CTA Section */}
    <BottomCTA />

    </main>
  );
}

export default FeaturesPage;
