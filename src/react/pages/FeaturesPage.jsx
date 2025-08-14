import React from "react";
import featuresBg from "../../assets/svg/features_background.svg";

const featuresData = [
  {
    icon: "⛽",
    heading: "Pump & Nozzle Management",
    items: ["Add/manage pumps and nozzles", "Track sales per nozzle"],
  },
  {
    icon: "📦",
    heading: "Inventory Management",
    items: [
      "Real-time fuel stock tracking",
      "Low-stock alerts",
      "Easy arrivals recording",
    ],
  },
  {
    icon: "🤝",
    heading: "Supplier Management",
    items: ["Directory", "Order tracking", "Payments"],
  },
  {
    icon: "💰",
    heading: "Sales Tracking",
    items: ["Cash/credit sales logging", "Daily summaries"],
  },
  {
    icon: "📋",
    heading: "Credit Management",
    items: ["Track receivables/payables", "Reminders", "Ledgers"],
  },
  {
    icon: "🧾",
    heading: "Expense Tracking",
    items: ["Log all business expenses"],
  },
  {
    icon: "👨‍💼",
    heading: "Employee Management",
    items: ["Records", "Roles", "Contacts"],
  },
  {
    icon: "💸",
    heading: "Salary Management",
    items: ["Track salary payments"],
  },
  {
    icon: "📊",
    heading: "Comprehensive Reports",
    items: ["Daily/monthly sales", "P&L", "Stock", "Export to PDF/Excel"],
  },
];

const FeaturesPage = () => {
  return (
    <>
      <div className="pt-5 features-page position-relative">
        <div className="py-5 bg-info mb-5 text-info-emphasis">
          <h1 className="fw-bold">
            Explore the powerful tools inside HexaFuel
          </h1>
          <p className="lead mb-0">
            Unlock the full potential of your fuel station with our
            comprehensive features.
          </p>
        </div>
        <div className="container mx-auto row g-5 justify-content-center">
          {featuresData.map((feature) => (
            <div
              className="col-md-4 col-sm-6 mb-4 d-flex z-1"
              key={feature.heading}
            >
              <div className="card w-100 h-100 shadow-sm p-4 bg-info-subtle border-info">
                <div className="mb-3" style={{ fontSize: "2.5rem" }}>
                  {feature.icon}
                </div>
                <h3 className="h5 fw-bold mb-3">{feature.heading}</h3>
                <ul className="list-unstyled mb-0">
                  {feature.items.map((item) => (
                    <li className="mb-2" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Background SVG at bottom right */}
        <img
          src={featuresBg}
          alt="Features background"
          id="features-background"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "25%",
            maxWidth: "60%",
            pointerEvents: "none",
            userSelect: "none",
            opacity: 0.5,
          }}
          aria-hidden="true"
        />
      </div>
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

export default FeaturesPage;
