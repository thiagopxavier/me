import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutButton extends Component {
  render() {
    return (
      <Link className="link link-about" to="/about">
        <button
          className="button-nav button-about"
          type="button"
        >
          <hr />
          Sobre mim
        </button>
      </Link>
    );
  }
}

export default AboutButton;
