import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contacts from '../Contacts/Contacts'

const LandingPage = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
    </>
  );
};

export default LandingPage
