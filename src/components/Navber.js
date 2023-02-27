import React from "react";
import { HashLink } from "react-router-hash-link";

const Navber = () => {
  return (
    <div className="navber flex w-full items-center h-12 bg-white-500">
      <div className="nav flex justify-between container items-center mx-auto">
        <div className="logo text-xl">
          <HashLink smooth to={"#home"}>
            WaveFly
          </HashLink>
        </div>
        <ul className="links flex justify-end gap-10 uppercase text-gray-700 ">
          <li>
            <HashLink
              to={"#home"}
              className="link-item hover:text-red-500 duration-300"
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              to={"#home"}
              className="link-item hover:text-red-500 duration-300"
            >
              All Packages
            </HashLink>
          </li>
          <li>
            <HashLink
              to={"#home"}
              className="link-item hover:text-red-500 duration-300"
            >
              Contact
            </HashLink>
          </li>
          <li>
            <HashLink
              to={"#home"}
              className="link-item hover:text-red-500 duration-300"
            >
              Support
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
