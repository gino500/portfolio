import React from "react";
import { ReactTyped } from "react-typed";
import "../../global-bg.css";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <main className="about-wrapper">
      <div className="global-bg">
        <section className="about-section">
          <div className="about-title">
            <h1 className="text-color">About me.. </h1>
          </div>
          <div className="about-text">
            <ReactTyped
              className="typed"
              strings={[
                "A self-taught full-stack developer who's very passionate about building quality and organized applications. My diverse background in construction managing a team, communicating goals, and consulting with client needs are a few attributes I possess. I strive to continue my expansion of knowledge and work with a goal-driven team.",
              ]}
            ></ReactTyped>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutScreen;
// <p>
//   A self-taught full-stack developer who's very passionate about
//   building quality and organized applications. My diverse background
//   in construction managing a team, communicating goals, and
//   consulting with client needs are a few attributes I possess. I
//   strive to continue my expansion of knowledge and work with a
//   goal-driven team.
// </p>
