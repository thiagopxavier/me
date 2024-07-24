import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TitleName from '../components/TitleName';
import ButtonNav from '../components/ButtoNav';
import { aboutList } from '../data';
import '../styles/About.css';
import Contact from '../components/Contact';

class About extends Component {
  render() {
    const { history } = this.props;
    return (
      <main className="about-page">
        <div className="about-left">
          <TitleName history={ history } />
          <nav className="main-buttons-nav">
            {aboutList.map((element, index) => (
              <ButtonNav key={ index } list={ element } history={ history } />
            ))}
          </nav>
        </div>
        <div className="about-right">
          <div>
            <img
              className="about-my-picture"
              src="https://i.imgur.com/prbpFVC.jpg"
              alt="Minha Foto"
            />
            <Contact />
          </div>
          <div className="about-txt">
            <h1 className="about-h1">Quem sou eu</h1>
            <p
              className="about-p"
            >
              Meu nome é
              {' '}
              <spam className="spam-strong">Thiago Xavier</spam>
              , tenho 23 anos,
              sou nascido do sangue baiano, mas atualmente moro em São Paulo.
            </p>
            <p
              className="about-p"
            >
              Atualmente estou estudando desenvolvimento web na
              {' '}
              <spam className="spam-strong">Trybe</spam>
              , local onde utilizo constantemente conhecimentos de
              {' '}
              <spam className="spam-strong">JavaSript</spam>
              ,
              <spam className="spam-strong">React</spam>
              ,
              {' '}
              <spam className="spam-strong">CSS</spam>
              , entre outros.
            </p>
            <p
              className="about-p"
            >
              Sou um amante de
              {' '}
              <spam className="spam-strong">música</spam>
              {' '}
              desde pequeno, então me aventuro na
              criação de letras, instrumentais e sons de efeito.
            </p>
            <p
              className="about-p"
            >
              Nos meus momentos livres gosto de jogar, ler e escrever
              minhas próprias histórias. E com esse gosto, acabei cursando
              {' '}
              <spam className="spam-strong">Tecnologia em Jogos Digitais</spam>
              , onde
              tive oportunidade de aprender principalmente utilização das
              linguagens
              {' '}
              <spam className="spam-strong">C#</spam>
              {' '}
              e
              {' '}
              <spam className="spam-strong">GDScript</spam>
              {' '}
              para criação de jogos, e a
              modelagem, animação e texturização de
              {' '}
              <spam className="spam-strong">objetos 3D</spam>
              .
            </p>
            <hr />
            <h1 className="about-h1">
              Formação
            </h1>
            <ul>
              <li>Desenvolvimento Web com HTML - UNINOVE - 2018</li>
              <li>Tecnologia em Jogos Digitais - UNINOVE - 2019</li>
              <li>HTML5 e CSS3 - Curso em Vídeo - 2021</li>
              <li>Desenvolvimento Web - Trybe - *2023</li>
            </ul>
            <hr />
            <h1 className="about-h1">Habilidades</h1>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Jest</li>
              <li>C#</li>
              <li>GDScript</li>
              <li>Game Engine: Unity | Godot | Unreal</li>
              <li>Modelagem 3D: Blender | Maya</li>
              <li>Sonoplastia: Audacity | FL Studio</li>
            </ul>
          </div>

        </div>
      </main>
    );
  }
}

About.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default About;
