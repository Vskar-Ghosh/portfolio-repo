import React from "react";

const AboutMe = () => {
  return (
    <div className=" pb-6">
      <div className="w-full text-zinc-400 p-6 flex flex-col">
        <div className="py-3">
          <h2 className="font-semibold mb-1 text-lg ">
            Hello I am Vaskar Ghosh
          </h2>
          <p className=" text-base leading-6">
            I am a dynamic full stack developer specializing in the MERN stack.
            With a passion for technology ignited at a young age, they excel in
            MongoDB, Express.js, React.js, and Node.js, crafting robust web
            applications from backend to frontend. Meticulous attention to
            detail and collaborative spirit drive them to deliver innovative
            solutions, whether it's e-commerce platforms, social networking
            sites, or productivity tools. Continuously learning and adapting to
            industry trends, they stand at the forefront of digital innovation,
            poised to shape the future of full stack development with creativity
            and technical expertise.
          </p>
        </div>
      </div>
      <div className="w-full p-6">
        <ul>
          <li className="aboutRightLi">
            <span className=" aboutRightLiSpan">Age : </span>
            25
          </li>

          <li className="aboutRightLi">
            <span className=" aboutRightLiSpan">Residence : </span>
            Bangladesh
          </li>

          <li className="aboutRightLi">
            <span className=" aboutRightLiSpan">Freelance : </span>
            Available
          </li>

          <li className="aboutRightLi">
            <span className=" aboutRightLiSpan">Address : </span>
            Dhaka,
            <br />
            Bangladesh
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
