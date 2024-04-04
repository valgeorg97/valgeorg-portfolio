import React from 'react';
import aboutMePhoto from "../../assets/climb.png";
import { FaReact, FaHtml5, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiChakraui, SiMongodb, SiNodedotjs, SiTailwindcss } from 'react-icons/si';

const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-sm-8 col-lg-6 mx-auto">
          <img src={aboutMePhoto} className="about-me-img d-block mx-auto img-fluid rounded" alt="valentin-image" width="450" height="250" loading="lazy"/>
        </div>
        <div className="col-lg-6 mb-0">
          <h1 className="about-me display-5 fw-bold text-body-emphasis lh-1 mb-4">About me</h1>
          <p className="lead">I'm Valyo, a passionate Fullstack Developer whose journey in tech began more than a year ago at Telerik Academy. 
          It equipped me with a robust understanding of web development principles and ignited my passion for creating dynamic user experiences.</p>
          <p className="lead">I have experience with the following technologies:</p>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td><FaReact /></td>
                  <td>React</td>
                  <td><SiTypescript /></td>
                  <td>TypeScript</td>
                </tr>
                <tr>
                  <td><FaBootstrap /></td>
                  <td>Bootstrap</td>
                  <td><SiTailwindcss /></td>
                  <td>Tailwind CSS</td>
                </tr>
                <tr>
                  <td><SiJavascript /></td>
                  <td>JavaScript</td>
                  <td><SiNodedotjs /></td>
                  <td>Node.js/Express.js</td>
                </tr>
                <tr>
                  <td><SiMongodb /></td>
                  <td>MongoDB</td>
                  <td><FaHtml5 /></td>
                  <td>HTML/CSS</td>
                </tr>
                <tr>
                  <td><FaGitAlt /></td>
                  <td>GIT</td>
                  <td><SiChakraui /></td>
                  <td>Chakra UI</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="lead">
            What sets me apart is my strong work ethic and proactive mindset. 
            I thrive in fast-paced environments, readily embracing challenges and leveraging my ability to quickly adapt to new technologies. 
            This ensures that I stay at the forefront of industry trends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
