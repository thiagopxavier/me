import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/About';
import WebProject from './pages/projects/WebProject';
import GameProject from './pages/projects/GameProject';
import Gallery from './pages/projects/Gallery';
import SoundProject from './pages/projects/SoundProject';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about" component={ About } />
        <Route path="/project/web" component={ WebProject } />
        <Route path="/project/games" component={ GameProject } />
        <Route path="/project/gallery" component={ Gallery } />
        <Route path="/project/sound-design" component={ SoundProject } />
        <Route exact path="/" component={ Main } />
      </Switch>

    );
  }
}

export default App;
