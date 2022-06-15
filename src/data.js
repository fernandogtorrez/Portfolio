//  icons
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone
} from 'react-icons/fi';

import {
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';

// projects images
import Project1 from './assets/img/projects/amazingevent.png';
import Project2 from './assets/img/projects/petshop.png';
import Project3 from './assets/img/projects/mytinerary.png';
import Project4 from './assets/img/projects/astronft.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nodejs.png';
import SkillImg6 from './assets/img/skills/ex.png'
import SkillImg7 from './assets/img/skills/mongo.png';
import SkillImg8 from './assets/img/skills/git.png';
import SkillImg9 from './assets/img/skills/github.png';

// navigation
export const navigation = [
  {
    name: 'Inicio',
    href: 'home',
  },
  {
    name: 'Sobre mi',
    href: 'about',
  },
  {
    name: 'Proyectos',
    href: 'portfolio',
  },
  {
    name: 'Contacto',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: 'mailto:fernandogtorrez@gmail.com',
  },
  {
    icon: <FiPhone />,
    href: 'https://wa.me/5491165665131',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/fernandogtorrez',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/fernando-torrez/',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Amazing Event',
    category: 'web development',
    demo: <FaExternalLinkAlt />,
    repo:<FaGithub />,
    linkdemo:'https://amazing-event.vercel.app/',
    linkrepo:'https://github.com/fernandogtorrez/AmazingEvent',
    description: 'Proyecto individual de sítio web orientado al muestreo dinámico de eventos y encuentros, haciendo uso de una API externa.'
  },
  {
    id: '2',
    image: Project2,
    name: 'Franco PetShop',
    category: 'web development',
    demo: <FaExternalLinkAlt />,
    repo:<FaGithub />,
    linkdemo:'https://francopetshop.vercel.app/',
    linkrepo:'https://github.com/fernandogtorrez/PetShop',
    description: 'Durante este proyecto trabajamos en equipo realizando un E-commerce para un Pet Shop utilizando 100% HTML5, CSS3 y JavaScript.'
  },
  {
    id: '3',
    image: Project3,
    name: 'MyTinerary',
    category: 'web development',
    demo: <FaExternalLinkAlt />,
    repo:<FaGithub />,
    linkdemo:'https://mytinerary-torrez-fernando.herokuapp.com/',
    linkrepo:'https://github.com/fernandogtorrez/mytinerary-fernando-torrez',
    description: 'Mi primera aplicación web con React realizada de manera individual haciendo uso de todos los conceptos aprendidos en el Stack MERN.'
  },
  {
    id: '4',
    image: Project4,
    name: 'AstroNFT',
    category: 'web development',
    demo: <FaExternalLinkAlt />,
    repo:<FaGithub />,
    linkdemo:'https://astronft.herokuapp.com/',
    linkrepo:'https://github.com/fernandogtorrez/AstroNFT',
    description: 'Challenge final realizado en grupo. Consiste en un E-commerce de NFT, con proceso de compra de principio a fin.'
  },
];

// projects
export const projectsNav = [
  {
    name: 'web development',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
];
