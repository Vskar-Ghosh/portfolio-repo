import React from "react";
import ServicesCard from "./ServicesCard";
import { BiCodeAlt } from "react-icons/bi";
import { SiAntdesign } from "react-icons/si";
import { AiTwotoneAppstore } from "react-icons/ai";
import {
  FaAlgolia,
  FaAllergies,
  FaAppStore,
  FaAppStoreIos,
  FaFlushed,
  FaFulcrum,
} from "react-icons/fa";
import { BsBack } from "react-icons/bs";

const MyServices = () => {
  return (
    <div className=" w-full">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web DevelopMent"
        subTitle="skilled web developer proficient in HTML, CSS, JavaScript and MERN stack. With a keen eye for design and a knack for problem-solving, they craft engaging and functional websites.."
      />

      <ServicesCard
        icons={<SiAntdesign />}
        title="Frontend Development"
        subTitle="
        As a front-end developer adept in modern technologies, leverages React.js and Tailwind CSS to craft visually stunning and highly responsive web applications. With proficiency in component-based architecture and utility-first styling, they seamlessly integrate user interfaces with dynamic functionalities. From concept to deployment, excels in building scalable and performant projects, pushing the boundaries of creativity and innovation in front-end development.."
      />

      <ServicesCard
        icons={<BsBack />}
        title="Backend Development"
        subTitle="
        In the realm of backend development is a proficient architect, harnessing the power of Node.js, Express.js, and MongoDB to construct robust and scalable server-side solutions. With expertise in RESTful API design and database management, they craft efficient backends that power dynamic web applications. Leveraging JSON Web Tokens (JWT), ensures secure authentication and authorization mechanisms, safeguarding sensitive data and user privacy. With a keen eye for performance optimization and a commitment to best practices, excels in building backend systems that drive seamless and secure interactions between users and applications."
      />

      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Full Stack Development"
        subTitle="
        As a seasoned full stack developer specializing in the MERN stack, [Your Name] brings a wealth of expertise to the table. Proficient in MongoDB, Express.js, React.js, and Node.js, they seamlessly integrate frontend and backend technologies to build comprehensive web solutions. With a keen eye for design and functionality, [Your Name] crafts immersive user experiences while ensuring scalability and performance on the backend. From conceptualization to deployment, they navigate every phase of the development lifecycle with precision and agility, delivering robust applications tailored to client needs. With a deep understanding of the MERN stack ecosystem and a commitment to continuous learning, stands as a beacon of innovation in full stack development."
      />
    </div>
  );
};

export default MyServices;
