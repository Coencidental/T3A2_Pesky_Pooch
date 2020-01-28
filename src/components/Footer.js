import React, { Component } from 'react';
import '../styles/styles.scss'

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <div  className="footer">
          <p>Copyright Pesky Pooch ©2020</p>
          <i className="fab fa-facebook" />
        </div>
      </footer>
    )
  }
}
