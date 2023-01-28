import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ButtonNav from '../components/ButtoNav';
import TitleName from '../components/TitleName';
import '../styles/Main.css';
import { mainList } from '../data';

class Main extends Component {
  render() {
    const { history } = this.props;
    return (
      <main className="main-page">
        <div className="main-left">
          <TitleName history={ history } />
          <nav className="main-buttons-nav">
            {mainList.map((element, index) => (
              <ButtonNav key={ index } list={ element } history={ history } />
            ))}
          </nav>
        </div>

        <div className="main-right">
          <div className="main-div-about">
            <p className="main-p-about">
              Olá, eu sou o Thiago
            </p>
            <p>
              Sou formado em Tecnologia em Jogos Digitais,
              opero na área de modelagem 3D, e desenvolvimento com C#
            </p>
            <br />
            <p>
              Atualmente estudo desenvolvimento web na
              {' '}
              <spam className="spam-strong">Trybe</spam>
            </p>

          </div>
        </div>

      </main>
    );
  }
}

Main.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default Main;
