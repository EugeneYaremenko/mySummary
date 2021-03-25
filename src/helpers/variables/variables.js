import { v4 as uuidv4 } from 'uuid';

import myPhoto from '../../images/FaceImage.jpg';

const myName = 'Eugene Yaremenko';

const myContacts = {
  phone: '+380684525965',
  email: 'yaremenko.e.s@gmail.com',
  github: 'https://github.com/EugeneYaremenko',
  linkedin: 'https://www.linkedin.com/in/eugene-yaremenko-51b8a3202/',
  location: 'Vinnytsia, Ukraine',
  locationMap: 'https://goo.gl/maps/GwUB6hMXyo6V69iVA',
};

const myProf = 'Frontend Developer';

const techSkills = [
  { id: uuidv4(), name: 'HTML5' },
  { id: uuidv4(), name: 'CSS3' },
  { id: uuidv4(), name: 'Photoshop' },
  { id: uuidv4(), name: 'Figma' },
  { id: uuidv4(), name: 'GIT' },
  { id: uuidv4(), name: 'WebPack' },
  { id: uuidv4(), name: 'JavaScript' },
  { id: uuidv4(), name: 'React.js' },
  { id: uuidv4(), name: 'Node.js' },
  { id: uuidv4(), name: 'Postman' },
  { id: uuidv4(), name: 'Trello' },
  { id: uuidv4(), name: 'Bitrix' },
  { id: uuidv4(), name: 'Unisender' },
];

const softSkills = [
  { id: uuidv4(), name: 'Agile' },
  { id: uuidv4(), name: 'Teamwork' },
  { id: uuidv4(), name: 'Problem-solving' },
  { id: uuidv4(), name: 'Willingness to learn' },
];

const aboutMe =
  'Hello! I’m a frontend developer beginner and I’m looking for a close-knit team that will give me a chance to improve my programming skills and achieve my full potential. By the end of the course GoIT (Full Stack Developer) I have acquired not only friends, but also relevant knowledge that will allow me to join the team quickly and become its full member. In short, if you need a reliable person with the desire to learn, do the work qualitatively and on time, then you know what to do (=';

const myProjects = [
  {
    id: uuidv4(),
    url: 'https://eugeneyaremenko.github.io/Gmoji-LP/',
    technology: 'HTML5, CSS3',
  },
  {
    id: uuidv4(),
    url: 'https://eugeneyaremenko.github.io/My-project/',
    technology: 'HTML5, CSS3',
  },
  {
    id: uuidv4(),
    url: 'https://eugeneyaremenko.github.io/filmoteka/',
    technology: 'JavaScript',
  },
  {
    id: uuidv4(),
    url: 'https://health-fsoff2.netlify.app/',
    technology: 'React.js, Node.js',
  },
];

const myJobs = [
  {
    id: uuidv4(),
    position: 'Content Manager',
    company: 'ItStart',
    start: 'September 2019',
    end: 'up to now',
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
