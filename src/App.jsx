import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/About';
// import Project from './pages/Project';
import WebProject from './pages/projects/WebProject';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about" component={ About } />
        <Route path="/project/web" component={ WebProject } />
        {/* <Route path="/project/web" component={ GameProject } />
        <Route path="/project/web" component={ Gallery } />
        <Route path="/project/web" component={ SoundProject } />
        <Route path="/project" component={ Project } /> */}
        <Route exact path="/" component={ Main } />
      </Switch>

    );
  }
}

export default App;
