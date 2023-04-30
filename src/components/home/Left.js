import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { bannerimg } from "../../assets";
import CV from "../../assets/vaskar_resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerimg}
          alt="bannerimage"
          loading="priority"
        />
      </div>

      <div className="w-full h-2/5">
        {/* contain the intro */}
        <div className="flex flex-col items-center gap-2 py-6">
          <h1 className=" text-textColor text-3xl font-semibold">
            Vaskar Ghosh
          </h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />{" "}
          </p>

          <div className="flex justify-center gap-2 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiYoutubemusic />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <AiFillTwitterCircle />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
          </div>
        </div>
        {/* button */}
        <div className="flex h-14">
          <a
            className="w-1/2  border-t-[1px] border-t-zinc-800 borderRight text-sm tracking-wide uppercase hover:text-designColor
           duration-200"
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2 ">
              Download CV <BsCloudLightningFill />{" "}
            </button>
          </a>
          <button
            className="w-1/2 h-full flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor
           duration-200 "
          >
            Contact Me <FiSend />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
