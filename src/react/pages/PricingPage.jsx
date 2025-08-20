import React from "react";
import { Accordion } from "react-bootstrap";
import { Check2, X } from "react-bootstrap-icons";

function PricingPage() {
  return (
    <>
      {/* Header Section */}
      <section className="w-100 d-flex align-items-center justify-content-center pt-5 mb-5 bg-body-secondary bg-gradient">
        <div className="container text-center py-5">
          <h1
            className="fw-bold mb-3"
            style={{ fontSize: "3rem", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            Simple, transparent
            <br />
            pricing
          </h1>
          <p className="lead mb-4" style={{ fontSize: "1.15rem" }}>
            Choose the plan that fits your fuel station operations. Start with a
            free trial and scale as you grow.
          </p>
          <span
            className="badge bg-body-tertiary text-dark px-4 py-2 shadow-sm fw-semibold"
            style={{ fontSize: "1rem" }}
          >
            14-day free trial &bull; No credit card required
          </span>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center g-4">

            {/* Starter Plan */}
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div
                className="border rounded-4 p-4 w-100 h-100 bg-white shadow-sm"
                style={{ minWidth: 300, minHeight: 600 }}
              >
                <div className="text-center mb-2">
                  <h4 className="fw-semibold mb-1">Starter</h4>
                  <div className="fs-1 fw-bold mb-0">
                    Rs.3000{" "}
                    <span className="fs-6 fw-normal text-secondary">
                      per/month
                    </span>
                  </div>
                  <div
                    className="lead text-secondary mb-3 ms-2 text-start"
                    style={{ fontSize: "1rem" }}
                  >
                    Perfect for small fuel stations getting started
                  </div>
                </div>
                <ul className="list-unstyled mb-4 text-start">
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Basic analytics dashboard
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Inventory tracking
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Up to 5 staff accounts
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Email support
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Mobile app access
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Standard reporting
                  </li>
                  <li className="mb-2 text-body-tertiary">
                    <X className="me-2" style={{ fontSize: "1.5rem" }} />
                    Advanced analytics
                  </li>
                  <li className="mb-2 text-body-tertiary">
                    <X className="me-2" style={{ fontSize: "1.5rem" }} />
                    Staff scheduling
                  </li>
                  <li className="mb-2 text-body-tertiary">
                    <X className="me-2" style={{ fontSize: "1.5rem" }} />
                    API access
                  </li>
                  <li className="mb-2 text-body-tertiary">
                    <X className="me-2" style={{ fontSize: "1.5rem" }} />
                    Custom integrations
                  </li>
                  <li className="mb-2 text-body-tertiary">
                    <X className="me-2" style={{ fontSize: "1.5rem" }} />
                    Priority support
                  </li>
                </ul>
                <button
                  className="btn btn-outline-dark w-100 fw-semibold"
                  style={{ borderRadius: 8 }}
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Professional Plan (highlighted) */}
            <div className="col-12 col-md-6 col-lg-4 d-flex position-relative">
              <div
                className="border rounded-4 p-4 w-100 h-100 bg-white shadow"
                style={{
                  minWidth: 300,
                  minHeight: 600,
                  borderWidth: 2,
                  borderColor: "#222",
                }}
              >
                <div
                  className="position-absolute top-0 start-50 translate-middle-x"
                  style={{ zIndex: 2, marginTop: "-22px" }}
                >
                  <span
                    className="badge bg-dark text-white px-3 py-2 shadow-sm"
                    style={{ fontSize: "0.95rem" }}
                  >
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-2 mt-3 pt-2">
                  <h4 className="fw-semibold mb-1">Professional</h4>
                  <div className="fs-1 fw-bold mb-0">
                    Rs.5000{" "}
                    <span className="fs-6 fw-normal text-secondary">
                      per/month
                    </span>
                  </div>
                  <div
                    className="lead text-secondary mb-3 ms-2 text-start"
                    style={{ fontSize: "1rem" }}
                  >
                    Ideal for growing fuel station operations
                  </div>
                </div>
                <ul className="list-unstyled mb-4 text-start">
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Advanced analytics dashboard
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Complete inventory management
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Staff scheduling & management
                  </li>
                  <li className="mb-2 text-dark">
                   <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Unlimited staff accounts
                  </li>
                  <li className="mb-2 text-dark">
                     <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Priority email & phone support
                  </li>
                  <li className="mb-2 text-dark">
                <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Mobile app access
                  </li>
                  <li className="mb-2 text-dark">
                 <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Advanced reporting suite
                  </li>
                  <li className="mb-2 text-dark">
                   <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    API access
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Basic integrations
                  </li>
                  <li className="mb-2 text-body-tertiary">
                    <X className="me-2" style={{ fontSize: "1.5rem" }} />
                    Custom integrations
                  </li>
                  <li className="mb-2 text-body-tertiary">
                    <X className="me-2" style={{ fontSize: "1.5rem" }} />
                    Dedicated account manager
                  </li>
                  <li className="mb-2 text-body-tertiary">
                    <X className="me-2" style={{ fontSize: "1.5rem" }} />
                    White-label options
                  </li>
                </ul>
                <button
                  className="btn btn-dark w-100 fw-semibold"
                  style={{ borderRadius: 8 }}
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div
                className="border rounded-4 p-4 w-100 h-100 bg-white shadow-sm"
                style={{ minWidth: 300, minHeight: 600 }}
              >
                <div className="text-center mb-2">
                  <h4 className="fw-semibold mb-1">Enterprise</h4>
                  <div className="fs-1 fw-bold mb-0">
                    Custom{" "}
                    <span className="fs-6 fw-normal text-secondary">
                      contact for pricing
                    </span>
                  </div>
                  <div
                    className="lead text-secondary mb-3 ms-2 text-start"
                    style={{ fontSize: "1rem" }}
                  >
                    For large operations with multiple locations
                  </div>
                </div>
                <ul className="list-unstyled mb-4 text-start">
                  <li className="mb-2 text-dark">
                   <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Everything
                    in Professional
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Multi-location management
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Custom integrations
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Dedicated account manager
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    24/7 priority support
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    White-label options
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Custom reporting
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    Advanced security features
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    SLA guarantees
                  </li>
                  <li className="mb-2 text-dark">
                    <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                    On-premise deployment options
                  </li>
                </ul>
                <button
                  className="btn btn-outline-dark w-100 fw-semibold"
                  style={{ borderRadius: 8 }}
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Features Section */}
      <section className="py-5 bg-body-tertiary bg-gradient">
        <div className="container">
          <h2 className="text-center fw-bold mb-2" style={{ fontSize: "2rem" }}>
            All plans include these core features
          </h2>
          <p
            className="text-center text-secondary mb-5"
            style={{ maxWidth: 600, margin: "0 auto" }}
          >
            Every plan comes with essential tools to manage your fuel station
            effectively.
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <ul className="list-unstyled mb-0 text-start">
                    <li className="mb-3">
                      <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                      Real-time fuel level monitoring
                    </li>
                    <li className="mb-3">
                      <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                      Inventory management tools
                    </li>
                    <li className="mb-3">
                      <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                      Secure data encryption
                    </li>
                    <li className="mb-3">
                      <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                      Basic customer support
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="list-unstyled mb-0 text-start">
                    <li className="mb-3">
                      <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                      Sales analytics and reporting
                    </li>
                    <li className="mb-3">
                      <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                      Mobile app access
                    </li>
                    <li className="mb-3">
                      <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                      Regular software updates
                    </li>
                    <li className="mb-3">
                      <Check2 className="me-2" style={{ fontSize: "1.5rem" }} />
                      Standard API access
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container text-start" style={{ maxWidth: 800 }}>
          <h2 className="text-center fw-bold mb-3" style={{ fontSize: "2rem" }}>
            Frequently asked questions
          </h2>
          <p className="text-center text-secondary mb-4">
            Have questions about our pricing? We have answers.
          </p>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is there a free trial?</Accordion.Header>
              <Accordion.Body>
                Yes! We offer a 14-day free trial with full access to all
                Professional plan features. No credit card required.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can I change plans later?</Accordion.Header>
              <Accordion.Body>
                Absolutely! You can upgrade or downgrade your plan at any time.
                Changes take effect immediately and billing is prorated.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What kind of support do you offer?
              </Accordion.Header>
              <Accordion.Body>
                All plans include email support. Professional and Enterprise
                plans include phone support, with Enterprise getting 24/7
                priority support.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Do you offer discounts for multiple stations?
              </Accordion.Header>
              <Accordion.Body>
                Yes! We offer volume discounts for customers with multiple
                stations. Contact our sales team for custom pricing.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Is my data secure?</Accordion.Header>
              <Accordion.Body>
                Security is our top priority. We use enterprise-grade
                encryption, regular security audits, and comply with industry
                standards.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Can I integrate with my existing systems?
              </Accordion.Header>
              <Accordion.Body>
                Yes! We offer API access and pre-built integrations with popular
                POS systems, accounting software, and fuel management systems.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
    </>
  );
}

export default PricingPage;
