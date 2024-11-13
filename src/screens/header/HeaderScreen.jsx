import React from "react";
import { NavLink } from "react-router-dom";
import LinkedInLogo from "../../assets/linkedin-logo.svg";
import githubLogo from "../../assets/github.svg";
import "./HeaderScreen.css";

const HeaderScreen = () => {
  return (
    <nav className="nav-wrapper">
      <ul className="text-wrapper">
        <div className="homeBtn-wrapper">
          <li>
            <NavLink to={"/"} className="all-text home">
              Home
            </NavLink>
          </li>
        </div>
        <div className="text-group">
          <li>
            <NavLink to={"/about"} className="all-text ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"} className="all-text projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"/resume"} className="all-text ">
              Resume
            </NavLink>
          </li>
        </div>
        <div className="contactBtn-wrapper">
          <li>
            <NavLink to={"/contact"} className="all-text contact">
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
      <ul className="social-wrapper">
        <li className="linkedin">
          <a href="https://www.linkedin.com" target="_blank" className="social">
            <img src={LinkedInLogo} alt="" />
          </a>
        </li>
        <li className="github">
          <a
            href="https://www.github.com"
            target="_blank"
            className="social github"
          >
            <img src={githubLogo} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderScreen;
