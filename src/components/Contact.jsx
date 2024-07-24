import React, { Component } from 'react';
import linkedin from '../images/icon/icon-linkedin.svg';
import github from '../images/icon/icon-github.svg';
import twitter from '../images/icon/icon-twitter.svg';
import instagram from '../images/icon/icon-instagram.svg';
import whatsapp from '../images/icon/icon-whatsapp.svg';

class Contact extends Component {
  render() {
    return (
      <div className="about-contact">
        <a
          href="https://www.linkedin.com/in/thiagopxavier/"
          target="_blank"
          rel="noreferrer"
          className="link-contact"
        >
          <img className="about-icons" src={ linkedin } alt="Icone do Linkedin" />
        </a>
        <a
          href="https://github.com/thiagopxavier"
          target="_blank"
          rel="noreferrer"
          className="link-contact"
        >
          <img className="about-icons" src={ github } alt="Icone do GitHub" />

        </a>
        <a
          href="https://twitter.com/thiagopxavier"
          target="_blank"
          rel="noreferrer"
          className="link-contact"
        >
          <img className="about-icons" src={ twitter } alt="Icone do Twitter" />

        </a>
        <a
          href="https://www.instagram.com/mushroommxxn/"
          target="_blank"
          rel="noreferrer"
          className="link-contact"
        >
          <img className="about-icons" src={ instagram } alt="Icone do Instagram" />

        </a>
        <a
          href="https://wa.me/5511980481187"
          target="_blank"
          rel="noreferrer"
          className="link-contact"
        >
          <img className="about-icons" src={ whatsapp } alt="Icone do WhatsApp" />

        </a>
      </div>
    );
  }
}

export default Contact;
