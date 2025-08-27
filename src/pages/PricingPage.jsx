import React, {useContext} from "react";
import {Accordion} from "react-bootstrap";
import {Check2} from "react-bootstrap-icons";
import {isColorTheme, Theme, ThemeContext} from "../contexts/ThemeContext.js";
import PricingCard from "../components/PricingCard.jsx";
import BottomCTA from "../components/BottomCTA.jsx";

function PricingPage() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <>
            {/* Header Section */}
            <section className="w-100 d-flex align-items-center justify-content-center pt-5 mb-5 bg-gradient">
                <div className="container text-center py-5">
                    <h1
                        className={`fw-bold mb-3 ${isColorTheme(theme) && "text-" + theme}`}
                        style={{fontSize: "3rem", letterSpacing: "-1px", lineHeight: 1.1}}
                    >
                        Simple, transparent
                        <br/>
                        pricing
                    </h1>
                    <p className="lead mb-4" style={{fontSize: "1.15rem"}}>
                        Choose the plan that fits your fuel station operations. Start with a
                        free trial and scale as you grow.
                    </p>
                    <span
                        className={`badge ${isColorTheme(theme) ? `bg-${theme}-subtle` : theme === Theme.LIGHT ? 'bg-body-tertiary' : 'bg-body-secondary'} text-body-secondary px-4 py-2 shadow-sm fw-semibold`}
                        style={{fontSize: "1rem"}}
                    >
            14-day free trial &bull; No credit card required
          </span>
                </div>
            </section>

            {/* Pricing Tiers Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center g-4">
                        {/* Starter Plan Pricing Card */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                            <PricingCard
                                title="Starter"
                                price="Rs.3000"
                                description="Perfect for small fuel stations getting started"
                                features={[
                                    "Basic analytics dashboard",
                                    "Inventory tracking",
                                    "Up to 5 staff accounts",
                                    "Email support",
                                    "Mobile app access",
                                    "Standard reporting"
                                ]}
                                unavailableFeatures={[
                                    "Advanced analytics",
                                    "Staff scheduling",
                                    "API access",
                                    "Custom integrations",
                                    "Priority support"
                                ]}
                                buttonText="Start Free Trial"
                            />
                        </div>

                        {/* Professional Plan (highlighted) Pricing Card */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex position-relative">
                            <PricingCard
                                title="Professional"
                                price="Rs.5000"
                                description="Ideal for growing fuel station operations"
                                features={[
                                    "Advanced analytics dashboard",
                                    "Complete inventory management",
                                    "Staff scheduling & management",
                                    "Unlimited staff accounts",
                                    "Priority email & phone support",
                                    "Mobile app access",
                                    "Advanced reporting suite",
                                    "API access",
                                    "Basic integrations"
                                ]}
                                unavailableFeatures={[
                                    "Custom integrations",
                                    "Dedicated account manager",
                                    "White-label options"
                                ]}
                                buttonText="Start Free Trial"
                                highlight={true}
                                highlightText="Most Popular"
                                style={{borderWidth: 2, borderColor: "#222"}}
                            />
                        </div>

                        {/* Enterprise Plan Pricing Card*/}
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                            <PricingCard
                                title="Enterprise"
                                price="Custom"
                                priceNote="contact for pricing"
                                description="For large operations with multiple locations"
                                features={[
                                    "Everything in Professional",
                                    "Multi-location management",
                                    "Custom integrations",
                                    "Dedicated account manager",
                                    "24/7 priority support",
                                    "White-label options",
                                    "Custom reporting",
                                    "Advanced security features",
                                    "SLA guarantees",
                                    "On-premise deployment options"
                                ]}
                                buttonText="Contact Sales"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Included Features Section */}
            <section className="py-5 bg-body-tertiary">
                <div className="container">
                    <div>
                        <h2 className={`text-center fw-bold mb-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "2rem"}}>
                            All plans include these core features
                        </h2>
                        <p
                            className="text-center text-body-secondary mb-5"
                            style={{maxWidth: 600, margin: "0 auto"}}
                        >
                            Every plan comes with essential tools to manage your fuel station
                            effectively.
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                <div className="col d-flex flex-column justify-content-center align-items-center">
                                    <div className="">
                                        <ul className="list-unstyled mb-0 text-start">
                                            <li className="mb-3">
                                                <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
                                                Real-time fuel level monitoring
                                            </li>
                                            <li className="mb-3">
                                                <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
                                                Inventory management tools
                                            </li>
                                            <li className="mb-3">
                                                <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
                                                Secure data encryption
                                            </li>
                                            <li className="mb-3">
                                                <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
                                                Basic customer support
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col d-flex flex-column justify-content-center align-items-center">
                                    <div className="">
                                        <ul className="list-unstyled mb-0 text-start">
                                            <li className="mb-3">
                                                <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
                                                Sales analytics and reporting
                                            </li>
                                            <li className="mb-3">
                                                <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
                                                Mobile app access
                                            </li>
                                            <li className="mb-3">
                                                <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
                                                Regular software updates
                                            </li>
                                            <li className="mb-3">
                                                <Check2 className={`me-2 ${isColorTheme(theme) && "text-"+theme}`} style={{fontSize: "1.5rem"}}/>
                                                Standard API access
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-5">
                <div className="container text-start" style={{maxWidth: 800}}>
                    <h2 className={`text-center fw-bold mb-3 ${isColorTheme(theme) && "text-" + theme}`}
                        style={{fontSize: "2rem"}}>
                        Frequently asked questions
                    </h2>
                    <p className="text-center text-body-secondary mb-4">
                        Have questions about our pricing? We have answers.
                    </p>

                    {/*start: accordion react-bootstrap*/}
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
                    {/*end: accordion react-bootstrap*/}


                </div>
            </section>

            {/* CTA Section */}
            <BottomCTA/>
        </>
    );
}

export default PricingPage;
