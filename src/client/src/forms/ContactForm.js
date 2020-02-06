import React, { Component } from 'react';
import axios from "axios";
import ReactDOM from 'react-dom'
import "../styles/contact.scss";


export default class ContactForm extends Component {

  // ----- DOM Manipulations for the dog animations used after reacts DOM is rendered/loaded ----- //

  componentDidMount() {
    let emailInput = document.querySelector(".email");
    let titleInput = document.querySelector(".title");
    let messageInput = document.querySelector(".message");
    let face = document.querySelector(".face");

    titleInput.addEventListener("focus", event => {
      document.querySelectorAll(".hand").forEach(hand => {
        hand.classList.add("hide");
      });
      document.querySelector(".tongue").classList.remove("breath");
    });

    titleInput.addEventListener("blur", event => {
      document.querySelectorAll(".hand").forEach(hand => {
        hand.classList.remove("hide");
        hand.classList.remove("peek");
      });
      document.querySelector(".tongue").classList.add("breath");
    });

    emailInput.addEventListener("focus", event => {
      let length = Math.min(emailInput.value.length - 16, 19);
      document.querySelectorAll(".hand").forEach(hand => {
        hand.classList.remove("hide");
        hand.classList.remove("peek");
      });

      face.style.setProperty("--rotate-head", `${-length}deg`);
    });

    emailInput.addEventListener("blur", event => {
      face.style.setProperty("--rotate-head", "0deg");
    });

    emailInput.addEventListener("input", event => {
        let length = Math.min(event.target.value.length - 16, 19);
        face.style.setProperty("--rotate-head", `${-length}deg`);
      }, 100 );

    messageInput.addEventListener("input", event => {
      document.querySelectorAll(".hand").forEach(hand => {
        hand.classList.remove("hide");
        hand.classList.remove("peek");
      });
    });
  }

  // ------- react form-functionality -------

  /* takes in props that passes conditions into a state */
constructor(props) {
  super(props);
  this.state = {
    email: "",
    title: "",
    message: ""
    }
  };

/* takes conditions from the state and passes them into events for use in the contact form */

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onTitleChange(event) {
    this.setState({title: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

/* axios posts form to an api in the back end */

  onFormSubmit = event => {
    event.preventDefault()
    const { email, title, message } = this.state;

    const params = {
      email,
      title,
      message
    }

    axios.post(`/contact`, params)
    .then((res) => {
      console.log(res)
      document.getElementById("contact-submit").classList.toggle('successful')
    })
    .catch((err) => console.log(err))
  }

  // HEROKU APP URL: https://peskypoochapi.herokuapp.com

/* Renders a contact form and takes the state props */

  render() {
    return (
    <div className="center">
          <div className="ear ear--left"></div>
          <div className="ear ear--right"></div>
          <div className="face">
            <div className="eyes">
              <div className="eye eye--left">
                <div className="glow"></div>
              </div>
              <div className="eye eye--right">
                <div className="glow"></div>
              </div>
            </div>
            <div className="nose">
              <svg width="38.161" height="22.03">
                <path d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z" fill="#243946"></path>
              </svg>
              <div className="glow"></div>
            </div>
            <div className="mouth">
              <svg className="smile" viewBox="-2 -2 84 23" width="84" height="23">
                <path d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161" fill="none" stroke-width="3" stroke-linecap="square" stroke-miterlimit="3"></path>
              </svg>
              <div className="mouth-hole"></div>
              <div className="tongue breath">
                <div className="tongue-top"></div>
                <div className="line"></div>
                <div className="median"></div>
              </div>
            </div>
          </div>
          <div className="hands">
            <div className="hand hand--left">
              <div className="finger">
                <div className="bone"></div>
                <div className="nail"></div>
              </div>
              <div className="finger">
                <div className="bone"></div>
                <div className="nail"></div>
              </div>
              <div className="finger">
                <div className="bone"></div>
                <div className="nail"></div>
              </div>
            </div>
            <div className="hand hand--right">
              <div className="finger">
                <div className="bone"></div>
                <div className="nail"></div>
              </div>
              <div className="finger">
                <div className="bone"></div>
                <div className="nail"></div>
              </div>
              <div className="finger">
                <div className="bone"></div>
                <div className="nail"></div>
              </div>
            </div>
          </div>

        {/* ------ form-input -------- */}

        <form data-cy="contact-form"onSubmit={this.onFormSubmit}>
          <div className="login">
            <label>
              <div className="fa fa-paper-plane"></div>
              <input className="email" autocomplete="on" placeholder="email" 
              data-cy="email" type="text" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </label>
            <label>
              <div className="fa fa-pencil-alt"></div>
              <input className="title" autocomplete="off" placeholder="title" data-cy="title" 
              type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)}/>
            </label>
            <label className="message-field">
              <div className="fa fa-commenting"></div>
              <textarea autocomplete="off" type="text" contenteditable="true" placeholder="message" data-cy="text" className="message"
              value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </label>
            <button className="login-button" data-cy="submit" type="submit" id="contact-submit">submit</button>
          </div>
        </form>

        {/* ------ social-contact-buttons -------- */}
          <div className="social-buttons">
            <div className="social">
              <a href="tel:+16346553" title="Click To Call" alt="mobile">
                <div className="fas fa-phone"></div></a>
            </div>
            <div className="social">
              <a href="https://www.facebook.com/PeskyPooch/" title="Visit our Facebook" alt="facebook" target="_blank">
              <div className="fab fa-facebook-f"></div></a>
            </div>
            <div className="social">
              <a href="mailtto: nikkilogan1@hotmail.com" title="Redirect to your email provider" 
              subject="website enquiry" alt="email" target="_blank">
              <div className="fa fa-paw"></div></a>
            </div>
          </div>
        </div>
    );
  }
}