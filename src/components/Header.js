import React, {useState, useEffect} from 'react'

import Logo from '../assets/img/logo.png'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'

import Fade from 'react-reveal/Fade';



const Header = () => {
    const [bg, setBg] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll',()=>{
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        });
    });
  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 
    'h-24'} flex items-center fixed top0 w-full text-white z-10 transition-all duration-300`}>
        
        <div className='container mx-auto h-full flex items-center justify-between '>
            {/* logo */}
            <Fade top>
            <a href='#'>
                <img src={Logo} alt='logo'/>
            </a>
            {/* nav */}
            <div className='hidden lg:block'>
                <Nav/>
            </div>
            {/* social */}
            <div className='hidden lg:block'>
                <Socials/>
            </div>
            </Fade>
            {/* navmobile */}
            <div className='lg:hidden'>
                <NavMobile/>
            </div>
            
        </div>
    </header>
  )
}

export default Header