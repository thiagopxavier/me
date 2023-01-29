const projectRoute = '/project/web';

const defaultImage = 'https://media.discordapp.net/attachments/1040280729801728001/1068687507606229032/No_Image_Available.png?width=452&height=452';

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
    description: 'Aplicação para requisião de CEP',
    image: 'https://media.discordapp.net/attachments/1040280729801728001/1068758462592450620/Captura_de_tela_de_2023-01-28_02-00-59.png?width=811&height=456',
    enable: true,
  },
  {
    id: 2,
    name: '',
    repository: '',
    description: '',
    image: defaultImage,
    enable: false,
  },
  {
    id: 3,
    name: 'Cartão de Crédito',
    repository: 'not yet',
    description: 'Aplicação Todo list',
    image: 'https://media.discordapp.net/attachments/1040280729801728001/1069090050593276064/Captura_de_tela_de_2023-01-29_00-01-33.png?width=810&height=457',
    enable: true,
  },
  {
    id: 4,
    name: 'Gerador de Senhas',
    repository: 'https://github.com/thiagopxavier/gerador-de-senhas',
    description: 'Aplicação Geradora de Senha',
    image: 'https://media.discordapp.net/attachments/1040280729801728001/1069091953305731142/image.png?width=810&height=453',
    enable: true,
  },
];

const gameProjects = [

];

const gallery = [

];

const soundDesing = [

];

export { mainList, aboutList, projectList, webProjects,
  gameProjects, gallery, soundDesing };
