// import React from 'react'
// import vg from "../../assets/pic.png";
import linkedinIcon from "../../assets/linkedin.svg"
import githubIcon from "../../assets/github.svg"
// import test from "../../assets/vg-test.png"

// const Home = () => {
//   return (
//     <div className="px-4 py-5 my-5 text-center">
// <img className="d-block mx-auto mb-4 rounded-circle" src={test} alt="hike" />
// <h1 className="display-5 fw-bold text-body-emphasis">Hey, I'm Valentin Georgiev</h1>
// <div className="col-lg-6 mx-auto">
//   <p className="lead mb-4">SOFTWARE DEVELOPER</p>
//   <div className="d-grid gap-2 d-md-flex justify-content-md-center">
//             <a href="https://www.linkedin.com/in/valentin-georgiev-414950160/" 
//                className="btn btn-lg px-4 me-md-2" 
//                role="button" 
//                aria-label="LinkedIn">
//               <img src={linkedinIcon} alt="LinkedIn" height="40" width="40"/> 
//             </a>
//             <a href="https://github.com/valgeorg97" 
//                className="btn btn-lg px-4 me-md-2" 
//                role="link" 
//                aria-label="GitHub">
//               <img src={githubIcon} alt="GitHub" height="40" width="40"/>
//             </a>
//           </div>
// </div>
// </div>
//   )
// }

// export default Home
import React from 'react';
import vg from "../../assets/pic2.png";
import test from "../../assets/vg-test.png"
import test1 from "../../assets/test1.png"
import { ImLinkedin } from "react-icons/im";
import { VscGithubInverted } from "react-icons/vsc";
import { IoCloudDownloadOutline } from 'react-icons/io5';
import cv from '../../assets/cv.png'

const Home = () => {
  const handleDownloadCV = () => {
    // Logic to download CV
    // Example: window.location.href = 'URL_TO_YOUR_CV.pdf';
  };
  return (
    <>
      <div className="py-3 py-lg-5 py-xl-8">
        <div className="container overflow-hidden">
          <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
            <div className="col-12 col-lg-6 order-1 order-lg-0 justify-content-center text-center ">
              <div className="home-text">
                <h1 className="display-5 mb-3">Hello,</h1>
                <h2 className="display-5 mb-3 home-name">I'm <span className="name-color">Valentin Georgiev.</span></h2>
                <p className="fs-2 mb-5 soft-dev">Software Developer</p>
              </div>
              <div className="d-grid d-md-flex justify-content-center gap-2">
                <a href="https://www.linkedin.com/in/valentin-georgiev-414950160/"
                  className="social-icon btn btn-lg"
                  target="_blank"
                  role="button"
                  aria-label="LinkedIn">
                  <ImLinkedin color="#0d6efd" size="50" />
                </a>
                <a href="https://github.com/valgeorg97"
                  target="_blank"
                  className="social-icon btn btn-lg"
                  role="link"
                  aria-label="GitHub">
                  <VscGithubInverted size="50" />
                </a>
                <a href="URL_TO_YOUR_CV.pdf" target="_blank" className="cv-link social-icon mt-1" aria-label="Download CV">
                  <img src={cv} alt="Download CV" style={{ width: '55px', height: '55px' }} />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-center">
              <div className="position-relative">
                <div className="bsb-circle border border-4 border-warning position-absolute top-50 start-10 translate-middle z-1"></div>
                <div className="bsb-circle bg-primary position-absolute top-50 start-50 translate-middle" style={{ "--bsb-cs": "460px" }}></div>
                <div className="bsb-circle border border-4 border-warning position-absolute top-10 end-0 z-1" style={{ "--bsb-cs": "100px" }}></div>
                <img className="img-fluid position-relative z-2" loading="lazy" src={test1} alt="valentin-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
