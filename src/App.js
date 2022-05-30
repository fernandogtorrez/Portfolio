import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';

const App = () => {
  return <div>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Footer/>
    <BackTopBtn/>
  </div>;
};

export default App;
