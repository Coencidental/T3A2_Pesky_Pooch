import React, { Component } from 'react';
import '../styles/global.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="/login">
          <p className="admin-login">Admin Login</p>
        </a>
        <p>
          ©2020 <b>Pesky Pooch</b> Training Ltd.
        </p>
        <p className="social-icons">
          <a href="https://www.facebook.com/PeskyPooch/" alt="pesky pooch facebook" target="_blank"><i className="fab fa-facebook"></i></a>
          </p>
      </footer>
    );
  }
}
