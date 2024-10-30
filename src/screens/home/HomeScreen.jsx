import React from "react";
import { Link } from "react-router-dom";
import "../../../src/global-bg.css";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <main className="home-wrapper">
      <div className="global-bg">
        <div className="home-text-wrapper">
          <div className="name-wrapper">
            <h1>
              I'm
              <span className="text-name"> Gino Gallo</span>
            </h1>
            <p>
              A full-stack <span>web developer</span>
            </p>
          </div>
          <div className="projectBtn-wrapper">
            <Link to={"/projects"}>
              <button className="projectBtn">Projects</button>
            </Link>
          </div>
          <div className="quote-wrapper">
            <h2 className="text-quote">Relatable Quotes</h2>
            <p>
              "If, at first, you do not succeed, call it version 1.0." ― Khayri
              R.R. Woulfe
            </p>
            <p>
              "Code is like humor. When you have to explain it, it’s bad." –
              Cory House
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
