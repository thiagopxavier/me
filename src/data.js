import calculatorImage from './images/project/calculator.png';
import clockImage from './images/project/clock.png';
import passwordImage from './images/project/password-generator.png';
import zipCodeImage from './images/project/zip-code.png';

import turtleRevengeImage from './images/project/turtle-revenge.png';
import cvsImage from './images/project/cvs.png';
import youImage from './images/project/you.png';

import notFoundImage from './images/misc/image-not-found.png';

const projectRoute = '/project/web';

const mainList = [

  {
    name: 'Sobre mim',
    route: '/about',
  },
  {
    name: 'Projetos',
    route: projectRoute,
  },
];

const aboutList = [

  {
    name: 'Projetos',
    route: projectRoute,
  },
];

const projectList = [

  {
    name: 'Web',
    route: projectRoute,
  },
  {
    name: 'Jogos',
    route: '/project/games',
  },
  {
    name: 'Galeria',
    route: '/project/gallery',
  },
  {
    name: 'Sonoplastia',
    route: '/project/sound-design',
  },
];

const webProjects = [
  {
    id: 1,
    name: 'Verificador de CEP',
    repository: 'https://github.com/thiagopxavier/consulta-de-cep',
    link: 'https://consulta-de-cep-thiagopxavier.vercel.app/',
    description: `Aplicação para verificar o CEP de uma localidade,
    utilizando HTML, CSS e JavaScript, fazendo a requisição para a API da viacep.`,
    image: zipCodeImage,
    enable: true,
  },
  // {
  //   id: 2,
  //   name: 'Todo List',
  //   repository: '',
  //   description: '',
  //   image: defaultImage,
  //   enable: false,
  // },
  // {
  //   id: 3,
  //   name: 'Cartão de Crédito',
  //   repository: 'https://github.com/thiagopxavier/cartao-de-credito',
  //   description: `Aplicação simulando um verificador de cartão de cŕedito,
  //    utilizando JavaScript e Regex para as verificações.`,
  //   image: 'https://media.discordapp.net/attachments/1040280729801728001/1069090050593276064/Captura_de_tela_de_2023-01-29_00-01-33.png?width=810&height=457',
  //   enable: true,
  // },
  {
    id: 4,
    name: 'Gerador de Senhas',
    repository: 'https://github.com/thiagopxavier/gerador-de-senhas',
    description: `Aplicação que gera senhas aleatórias, utilizando
    JavaScript com requisição da aplicação  nanoid.`,
    image: passwordImage,
    enable: true,
  },
  {
    id: 5,
    name: 'Relógio',
    repository: 'https://github.com/thiagopxavier/clock-vite-react-js',
    description: `Aplicação de relógio simples com
    horário baseado na maquina do usuário.`,
    image: clockImage,
    enable: true,
  },
  {
    id: 6,
    name: 'Calculadora',
    repository: 'calculator-thiagopxavier.vercel.app',
    description: 'Aplicação de calculadora simples',
    image: calculatorImage,
    enable: true,
  },
];

const gameProjects = [
  {
    id: 10,
    name: 'Turle Revenge',
    repository: '',
    download: 'https://gamejolt.com/games/turtlerevenge/457276',
    description: `Jogo feito em 1 semana para uma gamejam com o tema 'Seus
    inimigos são suas armas', foi feito utilizando a Game Engine Godot, com
    a linguagem GDScript. O jogo conta a história da Taruga, e sua luta
    contra a poluição.`,
    image: turtleRevengeImage,
    enable: true,
  },
  {
    id: 11,
    name: 'Caminhoneiros do Vale do Silício',
    repository: '',
    download: 'https://drive.google.com/file/d/1fcDHDFkWXCRywZm6rCf-4KNHEOoa2kc2/view?usp=share_link',
    description: `Projeto em grupo da Faculdade, desenvolvido no Godot
    Engine, com a linguagem GDScript, meu papel no grupo era toda a questão
    da programação do jogo, fiz participação na idealização e algumas decisões de arte`,
    image: cvsImage,
    enable: true,
  },
  {
    id: 12,
    name: 'You',
    repository: 'https://github.com/thiagopxavier/you',
    download: '',
    description: `O jogo conta a história de 'you', o personagem acorda em
    seu quarto, buscando a razão da existência.`,
    image: youImage,
    enable: true,
  },
  {
    id: 13,
    name: 'Expedição',
    repository: 'https://github.com/thiagopxavier/expedicao',
    download: '',
    description: `O jogo conta uma história curta de terror
    sobre uma pessoa que arranja umnovo emprego em
    uma transportadora amaldiçoada`,
    image: notFoundImage,
    enable: true,
  },
];

const gallery = [
  {
    id: 20,
    name: 'Cursed',
    description: 'Cursed',
    image: 'https://media.discordapp.net/attachments/841726080787677204/1069134103091351592/image.png?width=810&height=495',
    enable: true,
  },
];

const soundDesing = [

];

export { mainList, aboutList, projectList, webProjects,
  gameProjects, gallery, soundDesing };
