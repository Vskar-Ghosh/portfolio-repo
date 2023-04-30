import React from "react";

const SidenavTitle = ({ title, subTitle }) => {
  return (
    <h1 className=" font-titleFont text-xl font-semibold text-zinc-100 tracking-wide relative pb-4 mt-6 border-b-[1px] border-b-zinc-500">
      <span className=" text-designColor">{title}</span>
      {subTitle}{" "}
    </h1>
  );
};

export default SidenavTitle;
