import React, { useState, useRef, useEffect } from "react";
import dashboardImg from "../../assets/svg/dashboard.svg";
import manualRecords from "../../assets/svg/manual_records.svg";
import dataLoss from "../../assets/svg/lost_data.svg";
import reports from "../../assets/svg/complex_reports.svg";
import { NavLink } from "react-router-dom";

const testimonials = [
  {
    text: "HexaFuel transformed our daily operations. Our profits are up 15%!",
    author: "- Owner, Shell Petrol Pump",
  },
  {
    text: "The inventory alerts and reporting features are a game changer. Highly recommended!",
    author: "- Manager, PSO Fuel Station",
  },
];

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const timerRef = useRef(null);
  const autoSlideRef = useRef(true);

  // Move to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    autoSlideRef.current = false;
    resetAutoSlide();
  };

  // Move to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    autoSlideRef.current = false;
    resetAutoSlide();
  };

  // Reset auto-slide timer
  const resetAutoSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      autoSlideRef.current = true;
    }, 5000);
  };

  // Auto-slide effect
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (autoSlideRef.current) {
        setCurrentTestimonial((c) =>
          c === testimonials.length - 1 ? 0 : c + 1
        );
      } else {
        autoSlideRef.current = true;
      }
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [currentTestimonial]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-info py-5 vh-100 d-flex align-items-center">
        <div className="container row align-items-center justify-content-center text-center mx-auto text-info-emphasis">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3">
              Modernize Your Pump Management with HexaFuel
            </h1>
            <p className="lead mb-4">
              The all-in-one software to streamline operations, boost profits,
              and secure your data. Built for the modern Pakistani fuel station.
            </p>
            <button className="btn btn-primary btn-lg mb-2">
              Request a Free Demo
            </button>
            <div>
              <NavLink to="/features" className="">
                View All Features
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src={dashboardImg}
              alt="Dashboard Illustration"
              className="img-fluid"
              style={{
                maxHeight: "320px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="text-center mb-4">
        <h2 className="h2 fw-semibold text-dark mb-2 bg-warning p-5">
          Are you facing these challenges?
        </h2>

        <div className="d-flex flex-column align-items-center">
          <div className="container w-100 my-5 row">
            <div className="col-md-6 my-auto">
              <h4>Tired of manual record-keeping?</h4>
              <p>Say goodbye to paper logs and hello to digital efficiency.</p>
            </div>
            <div className="bg-warning-subtle py-5 rounded-5 col-md-6">
              <img
                src={manualRecords}
                alt="Manual Records Keeping"
                className="img-fluid"
                style={{
                  maxHeight: "320px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <hr className="container" />

          <div className="container w-100 my-5 row">
            <div className="col-md-6 my-auto order-md-last">
              <h4>Worried about outdated stock data?</h4>
              <p>Ensure accurate stock levels with automated tracking.</p>
            </div>
            <div className="col-md-6 bg-warning-subtle py-5 rounded-5">
              <img
                src={dataLoss}
                alt="Data Loss"
                className="img-fluid"
                style={{
                  maxHeight: "320px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <hr className="container" />

          <div className="container w-100 my-5 row">
            <div className="col-md-6 my-auto">
              <h4>Struggling with complex reports?</h4>
              <p>Transform data into actionable insights effortlessly.</p>
            </div>
            <div className="col-md-6 bg-warning-subtle py-5 rounded-5">
              <img
                src={reports}
                alt="Complex Reports"
                className="img-fluid"
                style={{
                  maxHeight: "320px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="text-center mb-5">
        <h2 className="h2 fw-semibold text-dark mb-4 bg-warning p-5">
          Key Features
        </h2>
        <div className="py-5 d-flex flex-column justify-content-center align-items-center">
          <div className="container row text-center mx-auto">
            <div className="col-md-4 my-2">
              <div className="card h-100 shadow-sm bg-info-subtle border-info">
                <div className="card-body">
                  <div className="mb-2 text-primary fs-2">📈</div>
                  <h3 className="h5 fw-bold mb-2">Real-time Sales Tracking</h3>
                  <p className="text-muted">
                    Monitor every sale from every nozzle, instantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card h-100 shadow-sm bg-info-subtle border-info">
                <div className="card-body">
                  <div className="mb-2 text-primary fs-2">⛽</div>
                  <h3 className="h5 fw-bold mb-2">Automated Inventory</h3>
                  <p className="text-muted">
                    Eliminate guesswork with live stock levels and alerts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card h-100 shadow-sm bg-info-subtle border-info">
                <div className="card-body">
                  <div className="mb-2 text-primary fs-2">📊</div>
                  <h3 className="h5 fw-bold mb-2">Powerful Reporting</h3>
                  <p className="text-muted">
                    Make informed decisions with daily, weekly, and monthly
                    profit reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-5">
        <h2 className="h2 fw-semibold text-dark mb-4 bg-warning p-5">
          What Our Customers Say
        </h2>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: 180 }}
        >
          <button
            className="btn btn-outline-secondary me-3 fs-3"
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
            style={{ minWidth: 48 }}
          >
            &#8592;
          </button>
          <div
            className="card p-4 mb-3 bg-light flex-grow-1"
            style={{ maxWidth: 500 }}
          >
            <p className="fst-italic text-muted mb-2">
              “{testimonials[currentTestimonial].text}”
            </p>
            <span className="text-secondary">
              {testimonials[currentTestimonial].author}
            </span>
          </div>
          <button
            className="btn btn-outline-secondary ms-3 fs-3 d-flex flex-column justify-content-center align-items-center"
            aria-label="Next testimonial"
            onClick={nextTestimonial}
            style={{ minWidth: 48 }}
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container-fluid row justify-content-center text-center py-5 mx-auto wavy-background">
        <div className="col-md-6">
          <h2 className="h1 fw-bold text-warning mb-4">
            Ready to take control of your fuel station?
          </h2>
          <button className="btn btn-success btn-lg">
            Request a Free Demo
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
