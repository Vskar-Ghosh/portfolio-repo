import React from "react";
import ServicesCard from "./ServicesCard";
import { BiCodeAlt } from "react-icons/bi";
import { SiAntdesign } from "react-icons/si";
import { AiTwotoneAppstore } from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa";

const MyServices = () => {
  return (
    <div className=" grid grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web DevelopMent"
        subTitle="Clita dolor clita dolore sea nonumy. Nonumy takimata lorem sed
        consetetur diam erat aliquyam, elitr lorem lorem diam sed gubergren."
      />

      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Clita dolor clita dolore sea nonumy. Nonumy takimata lorem sed
        consetetur diam erat aliquyam, elitr lorem lorem diam sed gubergren."
      />

      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Clita dolor clita dolore sea nonumy. Nonumy takimata lorem sed
        consetetur diam erat aliquyam, elitr lorem lorem diam sed gubergren."
      />

      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Clita dolor clita dolore sea nonumy. Nonumy takimata lorem sed
        consetetur diam erat aliquyam, elitr lorem lorem diam sed gubergren."
      />
    </div>
  );
};

export default MyServices;
