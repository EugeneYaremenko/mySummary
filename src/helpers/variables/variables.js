import { v4 as uuidv4 } from 'uuid';

import myPhoto from '../../images/FaceImage.jpg';

const myName = 'Eugene Yaremenko';

const myContacts = {
  phone: '+380684525965',
  email: 'yaremenko.e.s@gmail.com',
  github: 'https://github.com/EugeneYaremenko',
  linkedin: 'https://www.linkedin.com/in/eugene-yaremenko-51b8a3202/',
  location: 'Vinnytsia, Ukraine',
  locationMap: 'https://goo.gl/maps/qgYztW2oB9M5hECAA',
};

const myProf = 'Frontend Developer';

const techSkills = [
  { id: uuidv4(), name: 'GIT' },
  { id: uuidv4(), name: 'HTML5' },
  { id: uuidv4(), name: 'CSS3, SCSS, SASS' },
  { id: uuidv4(), name: 'MDB, MaterialUI' },
  { id: uuidv4(), name: 'JavaScript' },
  { id: uuidv4(), name: 'TypeScript' },
  { id: uuidv4(), name: 'React.js' },
  { id: uuidv4(), name: 'Node.js' },
  { id: uuidv4(), name: 'Mongo DB' },
  { id: uuidv4(), name: 'Next.js' },
  { id: uuidv4(), name: 'Redux, MobX, Akita' },
  { id: uuidv4(), name: 'Figma, Adobe Photoshop' },
  { id: uuidv4(), name: 'WebPack' },
  { id: uuidv4(), name: 'Postman' },
  { id: uuidv4(), name: 'Jira, Trello' },
  { id: uuidv4(), name: 'VS Code, WebStorm' },
  { id: uuidv4(), name: 'Amplify' },
  { id: uuidv4(), name: 'Unisender' },
];

const softSkills = [
  { id: uuidv4(), name: 'Agile' },
  { id: uuidv4(), name: 'Team player' },
  { id: uuidv4(), name: 'Quick learner' },
  { id: uuidv4(), name: 'Problem-solving' },
  { id: uuidv4(), name: 'Stress resistance' },
];

const aboutMe =
  'Hello! I’m a frontend developer and I’m looking for a close-knit team that will give me a chance to improve my ' +
  'programming skills and achieve my full potential. The current knowledge and experience in complex commercial ' +
  'projects will allow me to quickly join the team and become a full member. ' +
  ' I`m not standing still and constantly learning something new, ' +
  'although how could I do without the old (hello jQuery T_T).' +
  ' In short, if you need a reliable person with the desire to learn, do the work ' +
  'qualitatively and on time, then you know what to do (=';

const myProjects = [
  {
    id: uuidv4(),
    name: 'Gmoji - master franchise',
    url: 'https://eugeneyaremenko.github.io/Gmoji-LP/',
    technology: 'HTML5, CSS3',
  },
  {
    id: uuidv4(),
    name: 'HellEN - english school',
    url: 'https://eugeneyaremenko.github.io/My-project/',
    technology: 'HTML5, CSS3',
  },
  {
    id: uuidv4(),
    name: 'Filmoteka - film search platform',
    url: 'https://eugeneyaremenko.github.io/filmoteka/',
    technology: 'JavaScript',
  },
  {
    id: uuidv4(),
    name: 'Slim Mom - weight loss management platform',
    url: 'https://health-fsoff2.netlify.app/',
    technology: 'React.js, Node.js',
  },
  {
    id: uuidv4(),
    name: 'FiveSite - official website of the company',
    url: '#',
    technology: 'HTML, CSS, JS, TS, React, Redux, Next.js',
  },
  {
    id: uuidv4(),
    name: 'Fast Track - shipping and delivery platform',
    url: '#',
    technology: 'HTML, CSS, JS, TS, React, Redux',
  },
  {
    id: uuidv4(),
    name: 'EOSTARTER – token sale platform',
    url: 'https://eostarter.org/',
    technology: 'HTML, CSS, JS, TS, React, Next.js',
  },
  {
    id: uuidv4(),
    name: 'ESTA - management of construction works and contracts',
    url: '#',
    technology: 'JS, TS, React, jQuery, AWS, Akita, MUI, MDB',
  },
];

const myJobs = [
  {
    id: uuidv4(),
    position: 'Frontend Developer',
    company: 'Memcrab',
    start: 'June 2022',
    end: 'up to now',
    country: 'Ukraine',
    description: [
      {
        id: uuidv4(),
        item: 'Development of applications and ensure the quality of the product',
      },
      {
        id: uuidv4(),
        item: 'Use the approaches for further use automated testing',
      },
      {
        id: uuidv4(),
        item: 'Work on improving the software architecture ensuring',
      },
      {
        id: uuidv4(),
        item: 'Commit to high security and data protection standards',
      },
      {
        id: uuidv4(),
        item: 'Continuous development and training in the team',
      },
    ],
  },
  {
    id: uuidv4(),
    position: 'Frontend Developer',
    company: 'Five Systems Development',
    start: 'October 2021',
    end: 'June 2022',
    country: 'Ukraine',
    description: [
      {
        id: uuidv4(),
        item: 'Development and support',
      },
      {
        id: uuidv4(),
        item: 'Code optimization',
      },
      {
        id: uuidv4(),
        item: 'Testing',
      },
    ],
  },
  {
    id: uuidv4(),
    position: 'Content Manager',
    company: 'ItStart',
    start: 'September 2019',
    end: 'September 2021',
    country: 'Ukraine',
    description: [
      {
        id: uuidv4(),
        item: 'Layout and correction of website information',
      },
      {
        id: uuidv4(),
        item: 'SEO optimization',
      },
      {
        id: uuidv4(),
        item: 'Image/video processing and adaptation',
      },
      {
        id: uuidv4(),
        item: 'Layout and distribution of emails through postal services',
      },
    ],
  },
];

const myEducation = [
  {
    id: uuidv4(),
    university: 'GoIT Academy',
    specialty: 'Full Stack Developer',
    start: 'September 2019',
    end: 'March 2021',
    country: 'Ukraine',
  },
  {
    id: uuidv4(),
    university: 'Vinnytsia National Technical University',
    specialty: 'Management',
    start: 'September 2007',
    end: 'September 2012',
    country: 'Ukraine',
  },
];

export {
  myPhoto,
  myName,
  myContacts,
  myProf,
  techSkills,
  softSkills,
  aboutMe,
  myProjects,
  myJobs,
  myEducation,
};
