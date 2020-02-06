import React, { Component } from "react";
import ContactForm from "../forms/ContactForm";

class ContactPage extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="contact-header-txt">
          <h1 className="contact-title">We'd love to hear from you</h1>
          <p className="contact-page-subtitle">
            Whether you have an enquiry about our services, events, pricing, or
            anything else, our team is ready to answer all your questions.
          </p>
        </div>
        {/* <section className="content-wrapper"> */}
        <ContactForm />
        {/* </section> */}
      </div>
    );
  }
}

export default ContactPage;
