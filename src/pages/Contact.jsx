import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("Beirut");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() && email.trim() && message.trim()) {
      setSent(true);
    }
  }

  return (
    <div>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow gold">WE'D LOVE TO HEAR FROM YOU</span>
          <h1>Get in Touch</h1>
          <p>Questions, ideas or a friendly hello.</p>
        </div>
      </section>

      <section className="section container contact-layout">
        <div className="contact-form">
          <span className="eyebrow">SEND A MESSAGE</span>
          <h2>Contact Casa Verde</h2>

          {sent ? (
            <div className="success-message" role="status">
              <h3>Thank you, {name}!</h3>
              <p>This is a demo confirmation. No message was actually sent.</p>
              <button
                type="button"
                className="outline-button"
                onClick={() => setSent(false)}
              >
                Write another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Your Name
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Full name"
                />
              </label>

              <label>
                Email Address
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                />
              </label>

              <label>
                Preferred Branch
                <select
                  value={branch}
                  onChange={(event) => setBranch(event.target.value)}
                >
                  <option>Beirut</option>
                  <option>Dubai</option>
                  <option>Paris</option>
                  <option>London</option>
                  <option>New York</option>
                </select>
              </label>

              <label>
                Your Message
                <textarea
                  required
                  rows="5"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Write your message..."
                />
              </label>

              <button className="btn-green" type="submit">
                Send Demo Message ↗
              </button>
            </form>
          )}
        </div>

        <aside className="contact-aside">
          <span className="eyebrow gold">VISIT US</span>
          <h2>Come Together,<br />Stay Awhile.</h2>
          <p>
            Our locations are fictional and used only for this course prototype.
          </p>
          <div className="contact-detail">
            <b>Concept Location</b>
            <span>Beirut, Lebanon</span>
          </div>
          <div className="contact-detail">
            <b>Sample Opening Hours</b>
            <span>Daily · 12:00 PM – 11:00 PM</span>
          </div>
          <div className="contact-detail">
            <b>Online Orders</b>
            <span>Not available in this prototype</span>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Contact;
