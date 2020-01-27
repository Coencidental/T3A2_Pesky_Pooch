import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";


export default class loginForm extends Component {
  /* state takes in email and password for a user login */
  state = {
    email: "",
    password: "",
    submit: false
  };

  /* when the user logs in to the site it pulls the email and password from the state */
  onFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    const params = {
      email,
      password
    }
    // HEROKU APP URL: https://peskypoochapi.herokuapp.com

    /* axios posts to the backend and then renders a route to an api */
    axios.post("http://localhost:7002/api/login", params)
    .then(res => {
      this.props.onLogin(res.data.token, res.data.currentuser)
      this.setState({ submit: true })
      })
    .catch(err => console.error(err))
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  handleRemove = (e) => {
    const url =  ``;

  axios.delete(`http://localhost:7002/api/login/users/id/${this.state}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }


  /* form for the login screen */
  render() {
    const { email, password } = this.state;
    return this.state.submit ? (
      <Redirect to="/" />
    ) : (
      <form onSubmit={this.onFormSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={event => this.onInputChange("email", event)}
          />
        </p>
        <p>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            value={password}
            onChange={event => this.onInputChange("password", event)}
          />
        </p>
        <p>
          <input type="submit" value="Login user" />
          <button type="submit" value="logout user" onChange={this.handleRemove}>Logout</button>
        </p>
     </form>
   );
  }
}
