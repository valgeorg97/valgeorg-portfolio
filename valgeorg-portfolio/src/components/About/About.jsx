import React from 'react'
import aboutMePhoto from "../../assets/climb.png";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiChakraui } from 'react-icons/si';


const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-sm-8 col-lg-6 mx-auto">
          <img src={aboutMePhoto} className="about-me-img d-block mx-auto img-fluid rounded" alt="valentin-image" width="450" height="250" loading="lazy"/>
        </div>
        <div className="col-lg-6 mb-0">
          <h1 className="about-me display-5 fw-bold text-body-emphasis lh-1 mb-4">About me</h1>
          <p className="lead">I'm Valyo, a passionate Front-end Web Developer whose journey in tech began more than a year ago at Telerik Academy. It equipped me with a robust understanding of web development principles and ignited my passion for creating dynamic user experiences.</p>
          <p className="lead">My expertise mainly lies in developing Single Page Applications that are efficient, visually appealing, and ahead of the curve. I have experience with React, TypeScript, Bootstrap, JavaScript, HTML, CSS, GIT, and Chakra UI. What sets me apart is my strong work ethic, unwavering dedication to exceeding client expectations, and proactive mindset. I thrive in fast-paced environments, readily embracing challenges and leveraging my ability to quickly adapt to new technologies. This ensures that I stay at the forefront of industry trends.</p>
          <div className="skills-section py-3">
            <h2 className="fw-bold mb-3">Skills:</h2>
            <div className="skills-icons d-flex flex-wrap justify-content-start">
              <div><FaReact /></div>
              <div><SiTypescript /></div>
              <div><FaBootstrap /></div>
              <div><SiJavascript /></div>
              <div><FaHtml5 /></div>
              <div><FaCss3Alt /></div>
              <div><FaGitAlt /></div>
              <div><SiChakraui /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

