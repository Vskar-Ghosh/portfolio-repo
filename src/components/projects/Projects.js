import React from "react";
import {
  workImageFour,
  workImageOne,
  workImageTwo,
  workImageThree,
} from "../../assets";
import Title from "../home/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subtitle="Projects" />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6">
          <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImageThree}
          />

          <ProjectCard
            title="Gusseing Game"
            category="Game Website"
            image={workImageTwo}
          />

          <ProjectCard
            title="Restrurent Website"
            category="Website"
            image={workImageOne}
          />

          <ProjectCard
            title="Mobile Application"
            category="Software"
            image={workImageFour}
          />
        </div>
        <div className="px-6">
          <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImageOne}
          />

          <ProjectCard
            title="Gusseing Game"
            category="Game Website"
            image={workImageFour}
          />

          <ProjectCard
            title="Restrurent Website"
            category="Website"
            image={workImageTwo}
          />

          <ProjectCard
            title="Mobile Application"
            category="Software"
            image={workImageOne}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
