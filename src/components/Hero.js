import React from 'react'

import Fade from 'react-awesome-reveal/Fade';

//import men img

import WomanImg from '../assets/img/banner-woman2.webp'

const Hero = () => {
  return (
    <section 
      id='home'
      className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg::bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
      >
        <div className='container mx-auto h-full'>
            <div className='flex items-center h-full pt-8'>
            <Fade left>
              <div className='flex-1 flex flex-col items-center lg:items-start'>
                <p className='text-lg text-accent text-md mb-[22px]'>
                  ¡Hola!, Me llamo Fernando Torrez 👋
                </p>
                <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                  Soy Desarrollador<br/> FullStack MERN
                </h1>
                <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                  Estoy buscando una oportunidad para comenzar mi carrera en tecnología. Disponible para nuevos desafíos.
                  ¡Vamos a trabajar juntos!
                </p>
                <a target='_blank' href='https://drive.google.com/file/d/13K1xJOe5CnzqZxEs4VxhdZ3tKAHV_Wzs/view'>
                  <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                    Descargar CV
                  </button>
                </a>
                
              </div>
              </Fade>
              <Fade right>
              <div className='hidden lg:flex flex-1 justify-end items-end'>
                <img className='rounded-full' src={WomanImg}/>
              </div>
              </Fade>
            </div>
        </div>
    </section>
  )
}

export default Hero