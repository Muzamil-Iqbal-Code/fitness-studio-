import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="section-label">
        <span>07 / GET IN TOUCH</span>
        <span>YOUR NEXT CHAPTER STARTS HERE</span>
      </div>

      <div className="contact-grid">
        <div>
          <h2 className="section-heading">
            LET'S GET
            <br />
            <span>TO WORK.</span>
          </h2>

          <p className="large-copy">
            Have questions about membership or training? Get in touch with us.
          </p>

          <a href="mailto:info@irondistrict.com" className="underlined-link">
            INFO@IRONDISTRICT.COM ↗
          </a>
        </div>

        <div className="contact-form">
          {submitted ? (
            <div className="success-message">
              <h3>MESSAGE RECEIVED.</h3>
              <p>Thank you for contacting IRON DISTRICT.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Tell us how we can help"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn-primary">
                SEND MESSAGE ↗
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}