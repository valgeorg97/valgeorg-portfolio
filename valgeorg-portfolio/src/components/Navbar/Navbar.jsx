import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logoV2.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home"><img src={logo} alt="logo" height={60}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <GiHamburgerMenu color="white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="home" smooth={true} duration={200}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" smooth={true} duration={200}>About</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="projects" smooth={true} duration={200}>Projects</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;