import './App.css';
import Header from './components/Header.js';
import Hero-section from './components/Hero-section.js';
import Highlights-section from './components/Highlights-section.js';
import Testimonials-section from './components/Testimonials-section.js';
import About-section from './components/About-section.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Hero-section />
        <Highlights-section />
        <Testimonials-section />
        <About-section />
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
