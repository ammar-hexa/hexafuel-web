import onlinePaymentsBg from "../../assets/svg/online_payments.svg";

const plans = [
  {
    name: "Personal",
    price: "Rs.3000/mo",
    description:
      "Perfect for individual owners managing a single fuel station.",
    details: [
      "Manage 1 fuel station",
      "Up to 3 suppliers",
      "Up to 20 employees",
      "Real-time sales tracking",
      "Inventory management",
      "Basic reporting",
      "Expense tracking",
      "Employee management",
      "Email support",
    ],
    button: "Get started",
  },
  {
    name: "Pro",
    price: "Rs.6000/mo",
    description: "For growing businesses managing multiple stations.",
    details: [
      "Manage up to 3 fuel stations",
      "Up to 15 suppliers",
      "Up to 100 employees",
      "Advanced sales analytics",
      "Automated inventory alerts",
      "Supplier management",
      "Credit & salary management",
      "Comprehensive reporting",
      "Priority email support",
    ],
    button: "Get started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large enterprises and complex operations.",
    details: [
      "Unlimited fuel stations",
      "Unlimited suppliers",
      "Unlimited employees",
      "Custom integrations",
      "Dedicated account manager",
      "Role-based access control",
      "API access",
      "Onboarding & training",
      "24/7 premium support",
    ],
    button: "Contact sales",
  },
];

const PricingPage = () => {
  return (
    <div className="pt-5 position-relative">
      <div className="text-center mb-5 bg-info text-info-emphasis py-5">
        <h1 className="fw-bold">
          Our Pricing Plans
        </h1>
        <p className="lead mb-0">
          No guesswork or hidden fees. Just transparent pricing plans for every
          fuel station.
        </p>
      </div>
      <div className="container mx-auto row justify-content-center mb-5">
        {plans.map((plan, idx) => (
          <div className="col-lg-4 col-md-6 mb-4 d-flex z-1" key={plan.name}>
            <div className="card w-100 h-100 shadow-sm ">
              <div className="card-body p-4 text-dark">
                <h2 className="fw-bold mb-1">{plan.name}</h2>
                <div
                  className="mb-2"
                  style={{ fontSize: "2rem", color: "#2d2d2d" }}
                >
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="fs-6 fw-normal">/month</span>
                  )}
                </div>
                <p className="mb-3 text-secondary">{plan.description}</p>
                <hr />
                <ul className="list-unstyled mb-4">
                  {plan.details.map((detail) => (
                    <li className="mb-2" key={detail}>
                      <span className="me-2 text-primary">✔️</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-100">{plan.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Background SVG at bottom right */}
      <img
        src={onlinePaymentsBg}
        alt="Pricing background"
        id="pricing-background"
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
  );
};

export default PricingPage;
