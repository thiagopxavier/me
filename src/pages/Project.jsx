import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ButtonNav from '../components/ButtoNav';
import TitleName from '../components/TitleName';
import '../styles/Project.css';
import { projectList, webProjects } from '../data';
import AboutButton from '../components/AboutButton';

const teste = false;

class Project extends Component {
  state = {
    hasProject: false,
  };

  componentDidMount() {
    this.verifyPage();
    if (teste) {
      this.setState({
        hasProject: true,
      });
    } else {
      this.setState({
        hasProject: false,
      });
    }
  }

  verifyPage = () => {
    const { history, match: { params: { id } } } = this.props;
    const project = webProjects.some((projectObj) => (
      projectObj.id === Number(id)
    ));
    if (!project) {
      history.push('/not-found');
    }
    return project;
  };

  getProjectName = () => {
    const { match: { params: { id } } } = this.props;
    const project = webProjects.find((projectObj) => (
      projectObj.id === Number(id)
    ));
    return project;
  };

  render() {
    const { history } = this.props;
    const { hasProject } = this.state;
    console.log(this.getProjectName());
    const projectState = this.verifyPage() && this.getProjectName();
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
          <h1 className="h1-project">{ projectState.name }</h1>
          <img
            className="image-card"
            src={ projectState.image }
            alt="Captura de tela do projeto"
          />
        </div>
      </main>
    );
  }
}

Project.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default Project;
