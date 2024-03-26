import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import FunFact from "./FunFact";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subtitle="Me" />
      <AboutMe />
      <Title title="My" subtitle="Services" />
      <MyServices />
    </section>
  );
};

export default About;
