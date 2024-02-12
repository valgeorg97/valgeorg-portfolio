import React from 'react'
import aboutMePhoto from "../../assets/climb.png";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiChakraui } from 'react-icons/si';


const About = () => {
    return (
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={aboutMePhoto} className="d-block mx-lg-auto img-fluid rounded" alt="valentin-image" width="400" height="200" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About me</h1>
            <p className="lead" >I'm Valentin, an aspiring Frontend Developer who started his Programming Adventure at Telerik Academy an year ago. My passion for web development has led me to acquire extensive knowledge and hands-on experience in JavaScript, React, GIT, CSS, HTML, Chakra UI, TypeScript and little knowledge in NextJS and Tailwind CSS that I am currently enhancing with an exciting project.My journey of continuous learning extends to TypeScript, where I'm actively expanding my knowledge while working on personal projects to enrich my portfolio.My profound interest lies in Software Development, where I bring creativity,proactiveness, a strong desire to learn, and an openness to opportunities as I embark on my journey to begin a career as a Software Developer.</p>
            <div className="skills-section py-5">
          <h2 className="fw-bold mb-3">Skills:</h2>
          <div className="skills-icons d-flex flex-wrap justify-content-start">
            <div><FaReact /></div>
            <div><SiTypescript /> </div>
            <div><FaBootstrap /></div>
            <div><SiJavascript /> </div>
            <div><FaHtml5 /> </div>
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
