import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

class ProjectCard extends Component {
  render() {
    const { project: { id, name, image } } = this.props;
    return (
      <div className="card">
        <h1 className="h1-card">{name}</h1>
        <Link to={ `/project/${id}` }>
          <img
            className="image-card"
            src={ image }
            alt="Captura de tela do projeto"
          />
        </Link>
        {/* <h1 className="h1-card">{description}</h1> */}
      </div>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.any,
}.isRequired;

export default ProjectCard;
