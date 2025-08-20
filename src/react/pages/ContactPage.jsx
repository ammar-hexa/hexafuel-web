import React from "react";
import {
  Envelope,
  Telephone,
  ChatDots,
  GeoAlt,
  Clock,
} from "react-bootstrap-icons";

function ContactPage() {
  return (
    <>
      {/* Header section */}
      <section className="w-100 d-flex align-items-center justify-content-center bg-body-secondary bg-gradient py-5">
        <div className="container text-center py-5">
          <button
            className="badge bg-body-tertiary text-dark mb-3 px-4 py-2 shadow-sm"
            onClick={() => {}}
          >
            Get Started Today
          </button>

          <h1
            className="fw-bold mb-3"
            style={{ fontSize: "3rem", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            Let&apos;s transform your
            <br />
            fuel station operations
          </h1>
          <p
            className="lead mb-0"
            style={{ fontSize: "1.15rem", maxWidth: 700, margin: "0 auto" }}
          >
            Ready to streamline your operations and boost profits? Contact us
            today for a personalized demo and free trial.
          </p>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="row justify-content-center align-items-start g-5 w-100 mx-auto">
            {/* Contact Form Card */}
            <div className="col-12 col-lg-7 mb-4 mb-lg-0 p-0">
              <div className="bg-white rounded-3 shadow p-4 p-md-5">
                <h3 className="fw-bold mb-1">Start Your Free Trial</h3>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.05rem" }}
                >
                  Fill out the form below and we&apos;ll get you set up with a
                  free 14-day trial.
                </p>
                <form autoComplete="off">
                  <div className="row g-3 text-start">
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        className="form-control bg-light"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control bg-light"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Number of Fuel Stations
                      </label>
                      <select className="form-select bg-light">
                        <option value="">Select number of stations</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Message (Optional)
                      </label>
                      <textarea
                        className="form-control bg-light"
                        rows={2}
                        placeholder="Tell us about your current challenges or what you're looking for..."
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark w-100 fw-semibold mt-4"
                    style={{ borderRadius: 8 }}
                  >
                    Start Free Trial
                  </button>
                  <div
                    className="text-center mt-3"
                    style={{ fontSize: "0.95rem" }}
                  >
                    By submitting this form, you agree to our Terms of Service
                    and Privacy Policy.
                  </div>
                </form>
              </div>
            </div>
            {/* Contact Details */}
            <div className="col-12 col-lg-5 p-0">
              <div
                className="ps-lg-4 text-start"
                // style={{ maxWidth: 500, margin: "0 auto" }}
              >
                <h4 className="fw-bold mb-3">Get in Touch</h4>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.05rem" }}
                >
                  Our team is here to help you get the most out of HexaFuel.
                  Contact us through any of these channels.
                </p>
                <ul className="list-unstyled m-0">
                  <li className="m-0 mb-4 d-flex align-items-start">
                    <span className="me-3 fs-4">
                      <Envelope />
                    </span>
                    <div>
                      <div className="fw-semibold">Email Support</div>
                      <div>support@hexafuel.com</div>
                      <div className="text-secondary small">
                        We typically respond within 2 hours
                      </div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-3 fs-4">
                      <Telephone />
                    </span>
                    <div>
                      <div className="fw-semibold">Phone Support</div>
                      <div>+92 (300) 123-4567</div>
                      <div className="text-secondary small">
                        Monday - Friday, 8 AM - 6 PM EST
                      </div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-3 fs-4">
                      <ChatDots />
                    </span>
                    <div>
                      <div className="fw-semibold">Live Chat on What&apos;s App</div>
                      <div>+92 (300) 123-4567</div>
                      <div className="text-secondary small">
                        Monday - Friday, 8 AM - 6 PM EST
                      </div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-3 fs-4">
                      <GeoAlt />
                    </span>
                    <div>
                      <div className="fw-semibold">Office Address</div>
                      <div>
                        123 Business Plaza
                        <br />
                        Suite 456
                        <br />
                        Houston, TX 77002
                      </div>
                    </div>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-3 fs-4">
                      <Clock />
                    </span>
                    <div>
                      <div className="fw-semibold">Business Hours</div>
                      <div>
                        Monday - Friday: 8:00 AM - 6:00 PM EST
                        <br />
                        Saturday: 9:00 AM - 2:00 PM EST
                        <br />
                        Sunday: Closed
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="py-5 bg-body-tertiary bg-gradient">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Why choose HexaFuel?</h2>
            <p
              className="text-secondary mb-0"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              Join the growing community of fuel station operators who trust us
              with their business.
            </p>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="bg-white rounded-3 shadow-sm p-4 w-100 text-center"
                style={{
                  maxWidth: 340,
                  minHeight: 180,
                  border: "1px solid #eee",
                }}
              >
                <div className="mb-3" style={{ fontSize: 40 }}>
                  <i className="bi bi-person-lines-fill"></i>
                </div>
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: "1.15rem" }}
                >
                  Dedicated Support
                </div>
                <div className="text-secondary" style={{ fontSize: "0.98rem" }}>
                  Get personal assistance from our fuel industry experts
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="bg-white rounded-3 shadow-sm p-4 w-100 text-center"
                style={{
                  maxWidth: 340,
                  minHeight: 180,
                  border: "1px solid #eee",
                }}
              >
                <div className="mb-3" style={{ fontSize: 40 }}>
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: "1.15rem" }}
                >
                  Proven Results
                </div>
                <div className="text-secondary" style={{ fontSize: "0.98rem" }}>
                  Join 500+ stations that increased efficiency by 30%
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="bg-white rounded-3 shadow-sm p-4 w-100 text-center"
                style={{
                  maxWidth: 340,
                  minHeight: 180,
                  border: "1px solid #eee",
                }}
              >
                <div className="mb-3" style={{ fontSize: 40 }}>
                  <i className="bi bi-shield"></i>
                </div>
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: "1.15rem" }}
                >
                  Risk-Free Trial
                </div>
                <div className="text-secondary" style={{ fontSize: "0.98rem" }}>
                  14-day free trial with no commitments or setup fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clarification section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center my-5">
            <h2 className="fw-bold mb-2">Still have questions?</h2>
            <p
              className="text-secondary mb-0"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              Here are some common questions about getting started with
              HexaFuel.
            </p>
          </div>
          <div className="row justify-content-center gy-4 gx-5 mt-5 text-start w-100 mx-auto">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="mb-4">
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: "1.08rem" }}
                >
                  How quickly can I get started?
                </div>
                <div className="text-secondary" style={{ fontSize: "0.98rem" }}>
                  Most customers are up and running within 24 hours. Our team
                  handles the setup process for you.
                </div>
              </div>
              <div className="mb-4">
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: "1.08rem" }}
                >
                  What if I need custom features?
                </div>
                <div className="text-secondary" style={{ fontSize: "0.98rem" }}>
                  Our Enterprise plan includes custom development options to
                  meet your specific needs.
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div className="mb-4">
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: "1.08rem" }}
                >
                  Do you provide training?
                </div>
                <div className="text-secondary" style={{ fontSize: "0.98rem" }}>
                  Yes! We provide comprehensive training for you and your staff,
                  plus ongoing support resources.
                </div>
              </div>
              <div className="mb-4">
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: "1.08rem" }}
                >
                  Is there a setup fee?
                </div>
                <div className="text-secondary" style={{ fontSize: "0.98rem" }}>
                  No setup fees for Starter and Professional plans. Enterprise
                  customers get white-glove onboarding included.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
