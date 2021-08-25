import React from "react";
import aboutStyles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className={aboutStyles.about}>
        <div>
          <h1>Hey👋 ,I&apos; Prabin!</h1>
          <br />
          A sophmore pursuing Bachelors in Computer Engineering with a passion
          for
          <br /> developing products that are user-friendly and delight to use.
          <br />
          <br />
          I am passionate about Full Stack and I enjoy learning new things.
          Right now,
          <br />I am enjoying JavaScript and Python and learning Java.
          <br />
          <br />
          In addition to coding and learning new tech, I love learning about
          different Businesses,
          <br />
          stories and music♫(Bob Dylan❤️).
          <br />
          <br />
          If any of these things interests you too, I&apos;d love to chat!
        </div>
        <Image
          className={aboutStyles.img}
          src="/../public/assets/prabinphoto1.jpg"
          alt="Prabin's photo with branches of tree in background."
          width={204}
          height={228}
          quality={100}
        />
      </div>
    </>
  );
};

export default About;
