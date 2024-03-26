import React from "react";
import {
  workImageOne,
  workImageFive,
  workImageSix,
  workImageSeven,
} from "../../assets";
import Title from "../home/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subtitle="Projects" />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6">
          <a href="https://my-shop-tan.vercel.app/" target="blank">
            <ProjectCard
              title="Multivendor E-commerce"
              category="Website"
              image={workImageFive}
            />
          </a>
        </div>
        <div className="px-6">
          <ProjectCard
            title="Restrurent Website"
            category="Website"
            image={workImageOne}
          />
        </div>

        <div className="px-6">
          <ProjectCard
            title="Tic Tac Toe"
            category="Online Game"
            image={workImageSix}
          />
        </div>

        <div className="px-6">
          <ProjectCard
            title="Rock-Paper-Scissors"
            category="Online Game"
            image={workImageSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
