import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import '../styles/global.css';

function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;