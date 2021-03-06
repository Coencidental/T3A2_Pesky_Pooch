import React, { Component } from 'react';
import axios from 'axios';

export default class EventForm extends Component {
  state = {
    name: "",
    location: "",
    description: ""
  };

  onFormSubmit = event => {
    event.preventDefault()
    const { name, location, description } = this.state;

    const params = {
      name,
      location,
      description
    }
    // HEROKU APP URL: https://peskypoochapi.herokuapp.com
    let token = sessionStorage.getItem('token')
    axios.post(`${process.env.BASE_URL}events/new`, params, {
    headers: {
    'Authorization': token
    }})
    .then(res => console.log)
    .catch(err => console.log)
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onLocationChange(event) {
    this.setState({location: event.target.value})
  }

  onDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  handleSubmit(event) {
  }

  render() {
    return(
      <form data-cy="event-form" id="event-form" onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <div>
            <input data-cy="name" type="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
      </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <div>
            <input data-cy="location" type="location" value={this.state.location} onChange={this.onLocationChange.bind(this)} />
          </div>
      </div>
        <div className="form-group">
          <label htmlfor="description">Description:</label>
          <div>
            <textarea data-cy="text" value={this.state.description} onChange={this.onDescriptionChange.bind(this)} />
          </div>
        </div>
          <button data-cy="submit" type="submit" className="btn-primary">Submit</button>
      </form>
    );
  }
}
