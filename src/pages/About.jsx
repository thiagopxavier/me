import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TitleName from '../components/TitleName';
import ButtonNav from '../components/ButtoNav';
import { aboutList } from '../data';
import '../styles/About.css';

class About extends Component {
  render() {
    const { history } = this.props;
    return (
      <main className="about-page">
        <div className="about-left">
          <TitleName history={ history } />
          <nav className="main-buttons-nav">
            {aboutList.map((element, index) => (
              <ButtonNav key={ index } list={ element } />
            ))}
          </nav>
        </div>
      </main>
    );
  }
}

About.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default About;
