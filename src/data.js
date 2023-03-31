const projectRoute = '/project/web';

// const defaultImage = 'https://media.discordapp.net/attachments/1040280729801728001/1068687507606229032/No_Image_Available.png?width=452&height=452';

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
    description: `Aplicação para verificar o CEP de uma localidade,
    utilizando HTML, CSS e JavaScript, fazendo a requisição para a API da viacep.`,
    image: 'https://media.discordapp.net/attachments/841726080787677204/1069137438523535441/image.png?width=810&height=456',
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
    image: 'https://media.discordapp.net/attachments/1040280729801728001/1069091953305731142/image.png?width=810&height=453',
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
    image: 'https://media.discordapp.net/attachments/1040280729801728001/1069116794519949332/image.png?width=810&height=455',
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
    image: 'https://media.discordapp.net/attachments/841726080787677204/1069363691088265246/image.png?width=834&height=451',
    enable: true,
  },
  {
    id: 12,
    name: 'You',
    repository: 'https://github.com/thiagopxavier/you',
    download: '',
    description: `O jogo conta a história de 'you', o personagem acorda em
    seu quarto, buscando a razão da existência.`,
    image: 'https://media.discordapp.net/attachments/1040280729801728001/1069133552043692102/image.png?width=810&height=456',
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
