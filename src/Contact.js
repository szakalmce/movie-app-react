import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <form className="contact">
          <div className="input-field">
            <input className="input" type="text" placeholder="Your name" />
          </div>
          <div className="input-field">
            <input className="input" type="email" placeholder="Your email" />
          </div>
          <div className="input-field">
            <textarea
              className="textarea"
              type="text"
              placeholder="Your message"
              rows="10"
            />
          </div>
          <div className="button-field">
            <button className="contact-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
