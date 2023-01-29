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

  getProjectName = () => {
    const { match: { params: { id } } } = this.props;
    const project = webProjects.find((projectObj) => (
      projectObj.id === Number(id)
    ));
    return project;
  };

  render() {
    const { history, match: { params: { id } } } = this.props;
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
          <h1 className="h1-project">{`Projetos ${id}`}</h1>
        </div>
        <h4>{ this.getProjectName().name }</h4>
      </main>
    );
  }
}

Project.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default Project;
