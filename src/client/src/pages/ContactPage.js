import React, { Component } from "react";
import ContactForm from "../forms/ContactForm";
import { Link } from "react-router-dom";
import "../styles/contactpage.scss";

class ContactPage extends Component {
  render() {
    return (
      <>
          <h1 className="contact-title">We'd love to hear from you</h1>
          <p className="contact-page-subtitle">
            Whether you have an enquiry about our services, events, pricing, or
            anything else, our team is ready to answer all your questions.
          </p>
        <div className="form-container">
          <ContactForm />
        </div>
      </>
    );
  }
}

/* SOLUTION NOTS FOR FORMATTING:

  - **form-container** is the parent block of *center* (the contact form itself)
  - I need to use properties on both of those blocks to center the form!!
*
*/

// Old styling:
{
  /* </section> */
}

{
  /* <h1 className="page-title">Get in contact!</h1>
      <div className="media-links">
        <p>Find me through my social media</p>
        <a href="https://www.facebook.com/PeskyPooch/"><i className="fab fa-facebook facebook" /></a>
      </div>
      <p id="contactlabel">Or send me an email using this handy form</p>
      <ContactForm /> */
}
// </div>

export default ContactPage;
