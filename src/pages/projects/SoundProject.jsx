import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AboutButton from '../../components/AboutButton';
import ButtonNav from '../../components/ButtoNav';
import TitleName from '../../components/TitleName';
import { projectList, soundDesing } from '../../data';
import '../../styles/Project.css';

class SoundProject extends Component {
  state = {
    hasProject: false,
  };

  componentDidMount() {
    if (soundDesing.length !== 0) {
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
          <h1 className="h1-project">Sonoplastia</h1>
        </div>
      </main>
    );
  }
}

SoundProject.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default SoundProject;
