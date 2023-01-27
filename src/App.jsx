import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/About';
import Project from './pages/Project';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/about"
          render={ (props) => (<About { ...props } />) }
        />
        <Route
          path="/project"
          render={ (props) => (<Project { ...props } />) }
        />
        <Route
          exact
          path="/"
          render={ (props) => (<Main { ...props } />) }
        />
      </Switch>

    );
  }
}

export default App;
