import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://devendra-portfolio-backend-ew2s.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully ✅");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server connection failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Let's build something <span>great.</span>
          </h2>

          <p className="contact-subtitle">
            Have a project, opportunity or just want to say hello? Feel free to
            reach out.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <a href="mailto:your-email@gmail.com" className="contact-card">
              <div className="contact-icon">✉</div>

              <div>
                <small>Email</small>
                <h3>your-email@gmail.com</h3>
              </div>
            </a>

            <a
              href="https://github.com/devendra381"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">◉</div>

              <div>
                <small>GitHub</small>
                <h3>github.com/devendra381</h3>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">in</div>

              <div>
                <small>LinkedIn</small>
                <h3>Connect with me</h3>
              </div>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message ↗"}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
