import React from 'react'

import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Fernando Torrez
              </h2>
              <p className='mb-4 text-accent'>
                Desarrollador FullStack MERN
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Soy desarrollador Junior Full Stack MERN & Mobile Apps, me capacité en Mindhub LA (más de 800hs de cursada), mediante el método de enseñanza Learn by doing (LBD) , utilizando metodologías Agile / Scrum simulando un ambiente laboral REAL. Tengo principios básicos muy marcados como la responsabilidad, el respeto, la honestidad, puntualidad y sinceridad. Me gusta desarrollar diseños web (Front-End) aplicando todos los conceptos que aprendí a lo largo de mi experiencia desarrollando apps.<br />
                <br />
                Actualmente me encuentro en busca de mi primer empleo a tiempo completo, para poner en práctica todos mis conocimientos y aptitudes además de seguir aprendiendo y creciendo profesionalmente.
              </p>
            </div>
            <a rel="noopener" href='https://wa.me/5491165665131'>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Contactar
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About