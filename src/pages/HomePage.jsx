import React, {useState, useEffect, useRef, useContext} from "react";
import {NavLink} from "react-router-dom";
import {
    BarChart,
    People,
    GraphUpArrow,
    Shield,
    Alarm,
    Phone,
} from "react-bootstrap-icons";
import {isColorTheme, Theme, ThemeContext} from "../contexts/ThemeContext";
import HighlightCard from "../components/HighlightCard.jsx";
import BottomCTA from "../components/BottomCTA.jsx";

const testimonialsData = [
    {
        text: "The ease of use and powerful features are unmatched. Our staff loves it, and our operations have never been smoother.",
        name: "Mike Chen",
        role: "Manager, City Petro",
    },
    {
        text: "We deployed HexaFuel across all 50 of our locations. The transition was seamless, and the ROI was immediate. Highly recommended.",
        name: "David Rodriguez",
        role: "CEO, Apex Fuels Group",
    },
];

function HomePage() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const timerRef = useRef(null);
    const fadeTimeoutRef = useRef(null);
    const {theme, setTheme} = useContext(ThemeContext);

    const triggerFade = (nextIdx) => {
        setFade(false);
        if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = setTimeout(() => {
            setTestimonialIndex(nextIdx);
            setFade(true);
        }, 200); // fade out duration
    };

    const nextTestimonial = () => {
        triggerFade((testimonialIndex + 1) % testimonialsData.length);
        resetTimer();
    };
    const prevTestimonial = () => {
        triggerFade(
            (testimonialIndex - 1 + testimonialsData.length) % testimonialsData.length
        );
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            triggerFade((testimonialIndex + 1) % testimonialsData.length);
        }, 5000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            timerRef.current && clearTimeout(timerRef.current);
            fadeTimeoutRef.current && clearTimeout(fadeTimeoutRef.current);
        };
        // eslint-disable-next-line
    }, [testimonialIndex]);

    return (
        <>
            {/* Hero section */}
            <section className="container-fluid min-vh-100 d-flex align-items-center mb-5 bg-gradient">
                <div className="container py-5 my-bg">
                    <div className="row align-items-center justify-content-center g-5 pt-5">
                        {/* Left: Text Block */}
                        <div className="col-lg-6 mb-lg-0 d-flex flex-column align-items-baseline">
              <span className={`badge ${isColorTheme(theme) ? `bg-${theme}-subtle` : theme === Theme.LIGHT ? 'bg-body-tertiary' : 'bg-body-secondary'} text-body-secondary fw-semibold mb-3 px-3 py-2 fs-6 shadow-sm`}>
                Trusted by 500+ fuel stations
              </span>
                            <h1 className={`fw-bold mb-4 lh-sm text-start ${isColorTheme(theme) && "text-"+theme}`}>
                                Manage Your Pump
                                <br/>
                                Maximize Your Profits
                            </h1>
                            <p className="lead mb-4 text-start">
                                The complete SaaS solution for modern fuel station management.
                                Monitor sales, manage inventory, schedule staff, and optimize
                                operations from one powerful platform.
                            </p>
                            <div className="d-flex gap-3">
                                <button
                                    className={`btn btn-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} btn-lg px-4 shadow`}>
                                    Start Free Trial
                                </button>
                                <NavLink
                                    className={`btn btn-outline-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} btn-lg px-4 shadow`}
                                    to="/features">
                                    View Features
                                </NavLink>
                            </div>
                        </div>
                        {/* Right: Card with Image */}
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div
                                className="rounded-4 overflow-hidden"
                                style={{width: "100%"}}
                            >
                                <img
                                    src={`src/assets/images/${theme}/dashboard.svg`}
                                    alt="Fuel Station Dashboard"
                                    className="img-fluid p-0 m-0"
                                    style={{
                                        height: "100%",
                                        objectFit: "contain",
                                        width: "100%",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="container mb-5">
                <div className="text-center mb-5">
                    <h2 className={`fw-bold display-5 mb-3 ${isColorTheme(theme) && "text-"+theme}`}>
                        Everything you need to manage your fuel stations
                    </h2>
                    <p
                        className="lead text-body-secondary mx-auto"
                        style={{maxWidth: "700px"}}
                    >
                        Our comprehensive platform provides all the tools and insights you
                        need to run efficient, profitable fuel stations.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    {/* Card 1 */}
                    <HighlightCard icon={<BarChart/>} title={"Real-time Analytics"}
                                   description={"Monitor sales, inventory, and performance with live dashboards"}/>
                    {/* Card 2 */}
                    <HighlightCard icon={<People/>} title={"Staff Management"}
                                   description={"Schedule shifts, track performance, and manage payroll efficiently"}/>
                    {/* Card 3 */}
                    <HighlightCard icon={<GraphUpArrow/>} title={"Sales Optimization"}
                                   description={"AI-powered insights to maximize revenue and reduce costs"}/>
                    {/* Card 4 */}
                    <HighlightCard icon={<Shield/>} title={"Compliance & Security"}
                                   description={"Stay compliant with regulations and protect sensitive data"}/>
                    {/* Card 5 */}
                    <HighlightCard
                        icon={<Alarm/>}
                        title="24/7 Monitoring"
                        description="Round-the-clock system monitoring and automated alerts"
                    />
                    {/* Card 6 */}
                    <HighlightCard
                        icon={<Phone/>}
                        title="Mobile Access"
                        description="Manage your stations from anywhere with our mobile app"
                    />
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="container-fluid py-5 mb-5">
                <div className="container py-4">
                    <div className="row align-items-center justify-content-center g-5">
                        {/* Left: Image Card */}
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div
                                className="rounded-4 .shadow-lg overflow-hidden .bg-white border"
                                style={{width: "100%"}}
                            >
                                <img
                                    src={`src/assets/images/${theme}/benefits.svg`}
                                    alt="Business Outcomes"
                                    className="img-fluid p-5"
                                    style={{height: "100%", objectFit: "cover", width: "100%"}}
                                />
                            </div>
                        </div>
                        {/* Right: Text Content */}
                        <div className="col-lg-6 d-flex flex-column align-items-baseline text-start">
                            <h2 className={`fw-bold display-5 mb-3 ${isColorTheme(theme) && "text-"+theme}`}>
                                Proven results for fuel station owners
                            </h2>
                            <p className="lead text-body-secondary mb-4">
                                Join hundreds of successful fuel station operators who have
                                transformed their business with FuelManager Pro.
                            </p>
                            <ul className="list-unstyled mb-4 fs-5">
                                <li className="mb-2">
                                    <span className={`me-2 ${isColorTheme(theme) && "text-"+theme}`}>&#10003;</span>Reduce operational costs
                                    by up to 30%
                                </li>
                                <li className="mb-2">
                                    <span className={`me-2 ${isColorTheme(theme) && "text-"+theme}`}>&#10003;</span>Increase revenue through
                                    data-driven decisions
                                </li>
                                <li className="mb-2">
                                    <span className={`me-2 ${isColorTheme(theme) && "text-"+theme}`}>&#10003;</span>Streamline inventory
                                    management
                                </li>
                                <li className="mb-2">
                                    <span className={`me-2 ${isColorTheme(theme) && "text-"+theme}`}>&#10003;</span>Improve customer
                                    satisfaction
                                </li>
                                <li className="mb-2">
                                    <span className={`me-2 ${isColorTheme(theme) && "text-"+theme}`}>&#10003;</span>Ensure regulatory
                                    compliance
                                </li>
                                <li className="mb-2">
                                    <span className={`me-2 ${isColorTheme(theme) && "text-"+theme}`}>&#10003;</span>Scale your business
                                    efficiently
                                </li>
                            </ul>
                            <NavLink to="/features" className={`btn btn-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} btn-lg px-4`}>
                                Learn More <span className="ms-2">&#8594;</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={`pt-5 bg-${isColorTheme(theme) ? `body-tertiary` : "body-tertiary"}`}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className={`fw-bold display-4 mb-2 ${isColorTheme(theme) && "text-"+theme}`}>
                            Trusted by Industry Leaders
                        </h2>
                        <p className="lead mb-0">
                            Hear what our partners have to say about{" "}
                            <span className={`fw-semibold ${isColorTheme(theme) && "text-"+theme}`}>HexaFuel</span>.
                        </p>
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {/* Testimonial Card */}
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div
                                    className={`card border-0 shadow-sm h-100 p-4 text-center testimonial-fade${
                                        fade ? " testimonial-fade-in" : " testimonial-fade-out"
                                    }`}
                                    style={{transition: "opacity 0.2s"}}
                                >
                                    <p className="fs-4 fst-italic text-secondary mb-4">
                                        &quot;{testimonialsData[testimonialIndex].text}&quot;
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
                                        <div className="text-start">
                                            <div className={`fw-bold fs-5 ${isColorTheme(theme) && "text-"+theme} `}>
                                                {testimonialsData[testimonialIndex].name}
                                            </div>
                                            <div className="text-secondary">
                                                {testimonialsData[testimonialIndex].role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Fade animation styles */}
                        <style>{`
        .testimonial-fade { opacity: 1; }
        .testimonial-fade-in { opacity: 1; transition: opacity 0.2s; }
        .testimonial-fade-out { opacity: 0; transition: opacity 0.2s; }
      `}</style>
                        <div className="col-12 col-lg-8 d-flex justify-content-evenly align-items-center my-3">
                            {/* Left Arrow */}
                            <div className="col-1 d-flex justify-content-center align-items-center flex-wrap">
                                <button
                                    className={`btn btn-outline-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} rounded-circle shadow-sm p-3 d-flex flex-column justify-content-center align-items-center`}
                                    style={{width: 56, height: 56}}
                                    aria-label="Previous testimonial"
                                    onClick={prevTestimonial}
                                >
                                    <span style={{fontSize: "1.5rem"}}>&#8592;</span>
                                </button>
                            </div>
                            {/* Right Arrow */}
                            <div className="col-1 d-flex justify-content-start align-items-center align-content-center">
                                <button
                                    className={`btn btn-outline-${isColorTheme(theme) ? theme : theme === Theme.DARK ? "secondary" : "dark"} rounded-circle shadow-sm p-3 d-flex flex-column justify-content-center align-items-center`}
                                    style={{width: 56, height: 56}}
                                    aria-label="Next testimonial"
                                    onClick={nextTestimonial}
                                >
                                    <span style={{fontSize: "1.5rem"}}>&#8594;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <BottomCTA />
        </>
    );
}

export default HomePage;
