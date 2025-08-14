import contactUsBg from "../../assets/svg/contact_us.svg";

const ContactPage = () => {
  return (
    <div className="position-relative pt-5">
      <div className="bg-info py-5 text-info-emphasis mb-2">
        <h1 className="fw-bold">Get in Touch</h1>
        <p className="lead mb-0">
          We&apos;re here to help you with any questions or concerns you may have.
        </p>
      </div>
      <div className="container py-5">
        <form className="mb-4 mx-auto col-md-6 card p-0 z-1">
          <legend className="bg-primary text-light py-5 rounded-top">
            Contact Us With Your Queries
          </legend>
          <section className="px-4 pb-4 pt-3">
            <fieldset className="mb-3">
              <label
                htmlFor="name"
                className="form-label w-100 text-start fw-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Mr. ABC"
                required
              />
            </fieldset>
            <fieldset className="mb-3">
              <label
                htmlFor="phone"
                className="form-label w-100 text-start fw-semibold"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="0300-XXXXXXX"
                required
              />
            </fieldset>
            <fieldset className="mb-3">
              <label
                htmlFor="email"
                className="form-label w-100 text-start fw-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="mail@example.com"
                required
              />
            </fieldset>
            <fieldset className="mb-3">
              <label
                htmlFor="fuelStation"
                className="form-label w-100 text-start fw-semibold"
              >
                Fuel Station Name
              </label>
              <input
                type="text"
                id="fuelStation"
                name="fuelStation"
                className="form-control"
                placeholder="XYZ Pump"
              />
            </fieldset>
            <fieldset className="mb-3">
              <label
                htmlFor="message"
                className="form-label w-100 text-start fw-semibold"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Your message goes here..."
                rows={4}
                required
              />
            </fieldset>
            <button
              type="submit"
              className="btn btn-primary .btn-lg form-control"
            >
              Send Message
            </button>
          </section>
        </form>
        <div className="text-secondary">
          <p>
            <strong>Email:</strong> sales@hexafuel.com, support@hexafuel.com
          </p>
          <p>
            <strong>Phone:</strong> +92 XXX XXXXXXX (WhatsApp enabled)
          </p>
        </div>
      </div>
      {/* Background SVG at bottom right */}
      <img
        src={contactUsBg}
        alt="Contact background"
        id="contact-background"
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

export default ContactPage;
