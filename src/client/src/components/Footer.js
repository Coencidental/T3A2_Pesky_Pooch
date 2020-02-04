import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="admin-login">Admin Login</p>
        <p>
          ©2020 <b>Pesky Pooch</b> Training Ltd.
        </p>
        <p className="social-icons">
          <a href="https://www.facebook.com/PeskyPooch/" alt="pesky pooch facebook" target="_blank" className="social-link">
            <i className="fab fa-facebook"></i>
          </a>
        </p>
      </footer>
    );
  }
}
