import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className=" col-span-4">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Web Development</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Web Design</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              Mobile Application
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[50%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">UI Design</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
        {/* coding section start from here */}
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">JavaScript</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Node.js</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">React.js</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MongoDB</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className=" col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Engllish</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Hindi</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Bangla</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Korean</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[10%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>

        {/* Knowledge section start here */}
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
        <div className="py-4">
          <div className="py-2">
            {" "}
            <p className="text-base text-textColor -mb-1.5">
              <span className="flex gap-2">
                <GiCheckMark className=" text-designColor" />
                Website hosting
              </span>
            </p>
          </div>
          <div className="py-2">
            {" "}
            <p className="text-base text-textColor -mb-1.5">
              <span className="flex gap-2">
                <GiCheckMark className=" text-designColor" />
                iOs and andrioid apps
              </span>
            </p>
          </div>
          <div className="py-2">
            {" "}
            <p className="text-base text-textColor -mb-1.5">
              <span className="flex gap-2">
                <GiCheckMark className=" text-designColor" />
                Create logo Design
              </span>
            </p>
          </div>
          <div className="py-2">
            {" "}
            <p className="text-base text-textColor -mb-1.5">
              <span className="flex gap-2">
                <GiCheckMark className=" text-designColor" />
                Design for print
              </span>
            </p>
          </div>
          <div className="py-2">
            {" "}
            <p className="text-base text-textColor -mb-1.5">
              <span className="flex gap-2">
                <GiCheckMark className=" text-designColor" />
                Modern and mobile-ready
              </span>
            </p>
          </div>
          <div className="py-2">
            {" "}
            <p className="text-base text-textColor -mb-1.5">
              <span className="flex gap-2">
                <GiCheckMark className=" text-designColor" />
                Advertisting service
              </span>
            </p>
          </div>
          <div className="py-2">
            {" "}
            <p className="text-base text-textColor -mb-1.5">
              <span className="flex gap-2">
                <GiCheckMark className=" text-designColor" />
                Graphics and animations
              </span>
            </p>
          </div>
          <div className="py-2">
            {" "}
            <p className="text-base text-textColor -mb-1.5">
              <span className="flex gap-2">
                <GiCheckMark className=" text-designColor" />
                Search engine markting
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
