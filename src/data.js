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
    name: 'Todo List',
    repository: 'not yet',
    description: 'not yet',
    image: defaultImage,
  },
  {
    id: 2,
    name: 'Verificador de CEP',
    repository: 'not yet',
    description: 'not yet',
    image: defaultImage,
  },
  {
    id: 3,
    name: 'not yet',
    repository: 'not yet',
    description: 'not yet',
    image: defaultImage,
  },
  {
    id: 4,
    name: 'not yet',
    repository: 'not yet',
    description: 'not yet',
    image: defaultImage,
  },
  {
    id: 5,
    name: 'not yet',
    repository: 'not yet',
    description: 'not yet',
    image: defaultImage,
  },
  {
    id: 6,
    name: 'not yet',
    repository: 'not yet',
    description: 'not yet',
    image: defaultImage,
  },
  {
    id: 7,
    name: 'not yet',
    repository: 'not yet',
    description: 'not yet',
    image: defaultImage,
  },
  {
    id: 8,
    name: 'not yet',
    repository: 'not yet',
    description: 'not yet',
    image: defaultImage,
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
