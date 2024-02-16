import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';
import { VscGithubInverted } from 'react-icons/vsc';
import CV from "../../assets/Valentin-Georgiev-CV.pdf";
import cv from "../../assets/cv2.png";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <h2 className="text-center mb-4">Let's get in touch</h2>
        <div className="row justify-content-between align-items-start">
          <div className="col-sm-6 text-center text-sm-start mb-4 mb-sm-0">
            <h5>Email & Phone</h5>
            <div className="mb-2"><SiMinutemailer size="24" /> valentingg1997@gmail.com</div>
            <div><FiPhoneCall size="24" /> +359898638967</div>
          </div>
          <div className="col-sm-5 text-center text-sm-end">
            <h5>Social & CV</h5>
            <a href="https://www.linkedin.com/in/valentin-georgiev-414950160/" className="text-white me-3">
              <ImLinkedin size="24" className="social-icon" />
            </a>
            <a href="https://github.com/valgeorg97" className="text-white me-3">
              <VscGithubInverted size="24" className="social-icon"/>
            </a>
            <a href={CV} download="Valentin-Georgiev-CV.pdf" className="cv-link mt-1" aria-label="Download CV">
              <img src={cv} alt="Download CV" style={{ width: '35px', height: '35px' }} className="social-icon" />
            </a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <div className="footer-nav mb-3">
              <ScrollLink to="home" smooth={true} duration={200} className="text-white me-3" href="#">Home</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={200} className="text-white me-3" href="#">About</ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={200} className="text-white me-3" href="#">Projects</ScrollLink>
            </div>
            <p>© 2024 VG Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
