import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Highlights from './components/Highlights.js';
import Testimonials from './components/Testimonials.js';
import About from './components/About.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
