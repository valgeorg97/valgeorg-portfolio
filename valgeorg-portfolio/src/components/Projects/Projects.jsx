import React from 'react'
import energize from "../../assets/Energize2.png"
import c4u from "../../assets/c4u2.png"
import evalue from "../../assets/e-value.png"
import meteoMate from "../../assets/MeteoMate.png"
import coming_soon from "../../assets/coming_soon.jpg"

const Projects = () => {
  return (
    <div class="container">
      <div className="content-section-heading text-center">
        <h3 className="text-secondary mb-0">Portfolio</h3>
        <h2 className="mb-5">Recent Projects</h2>
      </div>
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-5">
        <div class="col">
          <div class="card shadow-md">
            <img src={evalue} alt="full-stack e-commerce" height={300} width="100%" />
            <div class="card-body">
              <p class="card-text">Responsive Full-stack E-commerce website. Built with TypeScript, React, CSS, and Firebase.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="https://e-value-37653.web.app/" target="_blank" className="btn btn-sm btn-outline-secondary">Go to project</a>
                </div>
                <div className="btn-group">
                  <a href="https://github.com/valgeorg97/E-Value" target="_blank" className="btn btn-sm btn-outline-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-md">
            <img src={meteoMate} alt="meteoApp" height={300} width="100%" className='custom-image' />
            <div class="card-body">
              <p class="card-text">Weather app that allows you to search for a specific location and retrieve weather information.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="https://meteo-mate.web.app/current-weather" target="_blank" className="btn btn-sm btn-outline-secondary">Go to project</a>
                </div>
                <div className="btn-group">
                  <a href="https://github.com/valgeorg97/meteo-mate/tree/main/meteo-mate" target="_blank" className="btn btn-sm btn-outline-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-md">
            <img src={c4u} alt="e-commerce app" height={300} width="100%" />
            <div class="card-body">
              <p class="card-text">C4U is a mobile-compatible product-listing application built with TypeScript, React and Chakra UI.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="https://product-listing-c4u.web.app/women/show%20all" target="_blank" className="btn btn-sm btn-outline-secondary">Go to project</a>
                </div>
                <div className="btn-group">
                  <a href="https://github.com/valgeorg97/c-4-u-product-listing-" target="_blank" className="btn btn-sm btn-outline-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-md">
            <img src={energize} alt="fitness app" height={300} width="100%" />
            <div class="card-body">
              <p class="card-text">Full-stack Fitness Tracker App, built with React, Chakra UI and Firebase.(Final project at Telerik)</p>
              <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="https://energize-57e14.web.app" target="_blank" className="btn btn-sm btn-outline-secondary">Go to project</a>
                </div>
                <div className="btn-group">
                  <a href="https://github.com/valgeorg97/enrgz-fit-tracker-app" target="_blank" className="btn btn-sm btn-outline-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-md">
            <img src={coming_soon} alt="fitness app" height={300} width="100%" />
            <div class="card-body">
              <p class="card-text">Music app built with NextJS and Tailwind CSS. Currently working on it, stay tuned..</p>
              <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="https://your-project-url.com" target="_blank" className="btn btn-sm btn-outline-secondary">Go to project</a>
                </div>
                <div className="btn-group">
                  <a href="https://github.com/your-github-url" target="_blank" className="btn btn-sm btn-outline-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
