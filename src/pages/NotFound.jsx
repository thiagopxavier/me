import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ButtonNav from '../components/ButtoNav';
import TitleName from '../components/TitleName';
import '../styles/Main.css';
import { mainList } from '../data';

class NotFound extends Component {
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
              Página não encontrada
            </p>
            <p>
              Talvez você queira visitar uma das páginas ao lado
            </p>
          </div>
        </div>

      </main>
    );
  }
}

NotFound.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default NotFound;
