import React from "react";
import contactPlaceholder from "../assets/contactGif.gif";
import "../styles/Contact.css";

function Contact() {
  document.title = "Portfolio - Contact Me";

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactPlaceholder})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Me</h1>
        <form id="contactForm" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter your name" type="text" />
          <label htmlFor="email">e-mail</label>
          <input name="email" placeholder="Enter your e-mail" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Type your message"
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
