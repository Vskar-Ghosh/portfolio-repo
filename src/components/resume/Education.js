import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className=" col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <div>
          <ResumeCard
            badge=""
            title="Wev Developre"
            subtitle="Facebook Inc."
            des="Justo ea sed vero erat rebum gubergren, sit magna tempor dolore nonumy dolore dolore vero. Et aliquyam ea et et."
          />
          <ResumeCard
            badge="2011-2012"
            title="Front-end Developre"
            subtitle="google Inc."
            des="Justo ea sed vero erat rebum gubergren, sit magna tempor dolore nonumy dolore dolore vero. Et aliquyam ea et et."
          />
          <ResumeCard
            badge="2009-2010"
            title="Senior Developre"
            subtitle="ReactBD.com"
            des="Justo ea sed vero erat rebum gubergren, sit magna tempor dolore nonumy dolore dolore vero. Et aliquyam ea et et."
          />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />

        <ResumeCard
          badge="2018-2022"
          title="Varendra University"
          subtitle="Rajshahi"
          des="Sed ut diam invidunt duo lorem, amet sit eirmod et elitr lorem consetetur. Duo amet elitr duo lorem erat sanctus."
        />
        <ResumeCard
          badge="2022"
          title="Programming Course"
          subtitle="UK"
          des="Sed ut diam invidunt duo lorem, amet sit eirmod et elitr lorem consetetur. Duo amet elitr duo lorem erat sanctus."
        />
        <ResumeCard
          badge="2023"
          title="MERN Stack Developer"
          subtitle="Dhaka"
          des="Sed ut diam invidunt duo lorem, amet sit eirmod et elitr lorem consetetur. Duo amet elitr duo lorem erat sanctus."
        />
      </div>
    </div>
  );
};

export default Education;
