import React from "react";
import aboutStyles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={aboutStyles.about}>
      <h3>Prabin Acharya</h3>
      <p>
        Hey👋 ,I'm <strong>Prabin</strong>
        <br />
        A sophmore pursuing Bachelors in Computer Engineering with a passion for
        <br />
        developing products that are user-friendly and delight to use.
        <br />
        <br />
        In addition to coding and learning new tech, I love stories and
        music♫(Bob Dylan❤️).
        <br />
        If any of these things interest you too, I'd love to chat!
      </p>
    </div>
  );
};

export default About;
