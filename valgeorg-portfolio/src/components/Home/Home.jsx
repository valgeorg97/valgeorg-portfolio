import React from 'react'
import vg from "../../assets/pic.png";
import linkedinIcon from "../../assets/linkedin.svg"
import githubIcon from "../../assets/github.svg"

const Home = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
<img className="d-block mx-auto mb-4 rounded-circle" src={vg} alt="hike" />
<h1 className="display-5 fw-bold text-body-emphasis">Valentin Georgiev</h1>
<div className="col-lg-6 mx-auto">
  <p className="lead mb-4">SOFTWARE DEVELOPER</p>
  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
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
  )
}

export default Home
