import React from "react";
import SidenavTitle from "./SidenavTitle";

const SideNav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className=" sidenavli">Blog Page</li>
        <li className="sidenavli">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />

      <ul>
        <li className="sidenavli">Web Development</li>
        <li className="sidenavli">E-commerce</li>
        <li className="sidenavli">Chatting Applications</li>
        <li className="sidenavli">Portfolio Websites</li>
        <li className="sidenavli">Backend Setup</li>
        <li className="sidenavli">Amazon Clone</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest-Posts" />

      <ul>
        <li className="sidenavli">UI conference at Lviv 2022</li>
        <li className="sidenavli">How to become creative Designer</li>
        <li className="sidenavli">
          Designer thoughts about mobile UI templets
        </li>
        <li className="sidenavli">Designer conference at Florida, USA </li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />

      <ul>
        <li className="sidenavli">+8801754854694</li>
        <li className="sidenavli">vaskar.ghosh.99.23@gmail.com</li>
      </ul>
    </div>
  );
};

export default SideNav;
