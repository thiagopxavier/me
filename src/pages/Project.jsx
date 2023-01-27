import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ButtonNav from '../components/ButtoNav';
import TitleName from '../components/TitleName';
import { projectList } from '../data';

class Project extends Component {
  render() {
    const { history } = this.props;
    return (
      <main className="about-page">
        <div className="about-left">
          <TitleName history={ history } />
          <nav className="main-buttons-nav">
            {projectList.map((element, index) => (
              <ButtonNav key={ index } list={ element } />
            ))}
          </nav>
        </div>
      </main>
    );
  }
}

Project.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default Project;
