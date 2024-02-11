import React from 'react'
import vg from "../../assets/pic.png";
import linkedinIcon from "../../assets/linkedin.svg"
import githubIcon from "../../assets/github.svg"

const Home = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={vg} className="d-block mx-lg-auto img-fluid rounded-circle" alt="valentin-image" width="350" height="150" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Valentin Georgiev</h1>
        <p className="lead">Software Developer</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://www.linkedin.com/in/valentin-georgiev-414950160/" 
               className="btn btn-lg px-4 me-md-2" 
               role="button" 
               aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" height="40" width="40"/> 
            </a>
            <a href="https://github.com/valgeorg97" 
               className="btn btn-lg px-4" 
               role="link" 
               aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" height="40" width="40"/>
            </a>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Home
