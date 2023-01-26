import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Main from './pages/Main';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Main } />
      </Switch>

    );
  }
}

export default App;
