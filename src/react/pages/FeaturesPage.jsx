import React from "react";
import analytics from "../../assets/svg/growth-analytics.svg";
import stock from "../../assets/svg/undraw_schedule.svg";
import team from "../../assets/svg/undraw_team.svg";

function FeaturesPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="text-center py-5 mb-5 bg-body-secondary bg-gradient">
        <span
          className="badge bg-body-tertiary text-dark fw-semibold px-3 mt-5 mb-4"
          style={{ fontSize: "1rem" }}
        >
          FEATURES
        </span>
        <h1 className="display-5 fw-bold mb-3">
          Powerful Features for Modern Fuel Stations
        </h1>
        <p className="lead mb-4">
          Everything you need to streamline operations, boost efficiency, and
          grow your business.
        </p>
        <button className="btn btn-dark btn-lg px-4">Request a Demo</button>
      </section>

      {/* Main Features Section */}
      <section className="container py-5 my-5">
        <div className="row g-5 mb-5 align-items-center justify-content-center w-100 mx-auto">
          {/* Feature 1: Analytics Dashboard */}
          <div className="col-md-6 order-md-1 order-2 px-0 px-md-5">
            <div className="d-flex flex-column h-100 justify-content-center align-items-baseline">
              <div className="mb-2" style={{ fontSize: "2rem" }}>
                <i className="bi bi-bar-chart-line"></i>
              </div>
              <h4 className="fw-bold mb-2 text-start">
                Advanced Analytics Dashboard
              </h4>
              <p
                className="text-secondary mb-2 text-start"
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
              src={analytics}
              alt="Analytics Dashboard"
              className="img-fluid rounded-4 .shadow p-2"
              style={{ maxHeight: 250, objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>

        <hr />

        <div className="row g-5 my-5 align-items-center justify-content-center  w-100 mx-auto">
          {/* Feature 2: Inventory Management */}
          <div className="col-md-6 d-flex justify-content-center px-0 px-md-5">
            <img
              src={stock}
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
              <h4 className="fw-bold mb-2 text-start">Inventory Management</h4>
              <p
                className="text-secondary mb-2 text-start"
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

        <div className="row g-5 mt-5 align-items-center justify-content-center  w-100 mx-auto">
          {/* Feature 3: Staff Management */}
          <div className="col-md-6 order-md-1 order-2 px-0 px-md-5">
            <div className="d-flex flex-column h-100 justify-content-center align-items-baseline">
              <div className="mb-2" style={{ fontSize: "2rem" }}>
                <i className="bi bi-people"></i>
              </div>
              <h4 className="fw-bold mb-2 text-start">Staff Management</h4>
              <p
                className="text-secondary mb-2 text-start"
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
              src={team}
              alt="Staff Management"
              className="img-fluid rounded-4 .shadow p-2"
              style={{ maxHeight: 250, objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* More Features Section */}
      <section className="py-5" style={{ background: "#fafbfc" }}>
        <div className="container">
          <h2
            className="text-center fw-bold mb-2"
            style={{ fontSize: "2.2rem" }}
          >
            Plus many more powerful features
          </h2>
          <p
            className="text-center text-secondary mb-5"
            style={{ maxWidth: 600, margin: "0 auto" }}
          >
            Our platform includes everything you need for comprehensive fuel
            station management.
          </p>
          <div className="row g-4 justify-content-center">
            {/* Feature Card 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="mb-3" style={{ fontSize: "2rem" }}>
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <h5 className="fw-semibold mb-1">Financial Management</h5>
                <div className="text-secondary small">
                  Track revenue, expenses, and profitability across all
                  locations
                </div>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="mb-3" style={{ fontSize: "2rem" }}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <h5 className="fw-semibold mb-1">Compliance & Security</h5>
                <div className="text-secondary small">
                  Stay compliant with environmental and safety regulations
                </div>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="mb-3" style={{ fontSize: "2rem" }}>
                  <i className="bi bi-exclamation-triangle"></i>
                </div>
                <h5 className="fw-semibold mb-1">Alert System</h5>
                <div className="text-secondary small">
                  Get instant notifications for critical events and issues
                </div>
              </div>
            </div>
            {/* Feature Card 4 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="mb-3" style={{ fontSize: "2rem" }}>
                  <i className="bi bi-calendar3"></i>
                </div>
                <h5 className="fw-semibold mb-1">Maintenance Scheduling</h5>
                <div className="text-secondary small">
                  Schedule and track equipment maintenance and inspections
                </div>
              </div>
            </div>
            {/* Feature Card 5 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="mb-3" style={{ fontSize: "2rem" }}>
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <h5 className="fw-semibold mb-1">Reporting Suite</h5>
                <div className="text-secondary small">
                  Generate comprehensive reports for stakeholders and regulators
                </div>
              </div>
            </div>
            {/* Feature Card 6 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="mb-3" style={{ fontSize: "2rem" }}>
                  <i className="bi bi-gear"></i>
                </div>
                <h5 className="fw-semibold mb-1">System Integration</h5>
                <div className="text-secondary small">
                  Seamlessly integrate with existing POS and accounting systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container my-5 py-5">
        <div className="text-center">
          <h2 className="fw-bold display-5 mb-3">
            Ready to transform your fuel station operations?
          </h2>
          <p className="lead text-secondary mb-4">
            Start your free 14-day trial today. No credit card required.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-dark btn-lg px-4 fw-bold">
              Start Free Trial
            </button>
            <button className="btn btn-outline-secondary btn-lg px-4">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FeaturesPage;
