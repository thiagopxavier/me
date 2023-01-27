import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ButtonNav from '../components/ButtoNav';
import TitleName from '../components/TitleName';
import '../styles/Project.css';
import { projectList } from '../data';

class Project extends Component {
  render() {
    const { history } = this.props;
    return (
      <main className="project-page">
        <div className="project-left">
          <TitleName history={ history } />
          <nav className="main-buttons-nav">
            {projectList.map((element, index) => (
              <ButtonNav key={ index } list={ element } />
            ))}
          </nav>
        </div>
        <div className="project-right">
          <h1>Direita</h1>
        </div>
      </main>
    );
  }
}

Project.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default Project;
