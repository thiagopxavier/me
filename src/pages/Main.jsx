import React, { Component } from 'react';
import ButtonNav from '../components/ButtoNav';
import '../styles/Main.css';
import listOfButtons from '../data';

class Main extends Component {
  render() {
    return (
      <main className="main-page">

        <div className="main-left">
          <h1 className="main-my-name">Thiago X.</h1>
          <div className="main-buttons-nav">
            {listOfButtons.map((element, index) => (
              <ButtonNav key={ index } listName={ element } />
            ))}
          </div>
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
          <img
            className="main-my-picture"
            src="https://media.discordapp.net/attachments/1040280729801728001/1068022512899850260/eu.jpg"
            alt="Minha Foto"
          />
        </div>

      </main>
    );
  }
}

export default Main;
