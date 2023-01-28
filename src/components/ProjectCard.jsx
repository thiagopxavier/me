import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/ProjectCard.css';

class ProjectCard extends Component {
  render() {
    const { project: { name, repository, description, image } } = this.props;
    return (
      <div className="card">
        <h1 className="h1-card">{name}</h1>
        <h1 className="h1-card">{repository}</h1>
        <h1 className="h1-card">{description}</h1>
        <img className="image-card" src={ image } alt="Captura de tela do projeto" />
      </div>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.any,
}.isRequired;

export default ProjectCard;
