import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AboutButton from '../../components/AboutButton';
import ButtonNav from '../../components/ButtoNav';
import ProjectCard from '../../components/ProjectCard';
import TitleName from '../../components/TitleName';
import { projectList, gallery } from '../../data';
import '../../styles/Project.css';

class Gallery extends Component {
  state = {
    hasProject: false,
  };

  componentDidMount() {
    const maxProjects = 7;
    if (gallery.length >= maxProjects) {
      this.setState({
        hasProject: true,
      });
    } else {
      this.setState({
        hasProject: false,
      });
    }
  }

  render() {
    const { history } = this.props;
    const { hasProject } = this.state;
    return (
      <main className={ `project-page ${hasProject ? 'hasProject' : 'notHasProject'}` }>
        <div className="project-left">
          <TitleName history={ history } />
          <nav className="main-buttons-nav">
            {projectList.map((element, index) => (
              <ButtonNav key={ index } list={ element } history={ history } />
            ))}
          </nav>
          <AboutButton />
        </div>
        <div className="project-right">
          <h1 className="h1-project">Galeria</h1>
          <div className="div-card">
            { gallery.map((project) => (
              <ProjectCard
                key={ project.id }
                project={ project }
                history={ history }
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
}

Gallery.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default Gallery;
