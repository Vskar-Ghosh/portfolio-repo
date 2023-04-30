import React from "react";

const AboutMe = () => {
  return (
    <div className="flex pb-6">
      <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
        <div className="py-3">
          <h2 className="font-semibold mb-1 text-lg ">
            Hello I am Vaskar Ghosh
          </h2>
          <p className=" text-base leading-6">
            Web designer from Bangladesh, Dhaka. I have rich experience in web
            site design and building, also I am good at wordpress. I love to
            talk with you about our unique.
          </p>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <ul>
          <li className="aboutRightLi">
            <span className=" aboutRightLiSpan">Age : </span>
            24
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
