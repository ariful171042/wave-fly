import { HashLink } from "react-router-hash-link";

const Navber = () => {
  return (
    <div className="navber flex w-full items-center h-12 bg-cyan-500 text-white shadow">
      <div className="nav flex justify-between container items-center mx-auto ">
        <div className="logo text-xl">
          <HashLink smooth to={"#home"}>
            WaveFly
          </HashLink>
        </div>
        <ul className="links flex justify-end gap-10 uppercase text-white ">
          <li>
            <HashLink
              to={"#home"}
              className="link-item hover:text-cyan-300 duration-300"
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              to={"#home"}
              className="link-item hover:text-cyan-300 duration-300"
            >
              All Packages
            </HashLink>
          </li>
          <li>
            <HashLink
              to={"#home"}
              className="link-item hover:text-cyan-300 duration-300"
            >
              Contact
            </HashLink>
          </li>
          <li>
            <HashLink
              to={"#solutions"}
              className="link-item hover:text-cyan-300 duration-300"
            >
              Solutions
            </HashLink>
          </li>
        </ul>
        <button className="btn text-sm bg-white text-cyan-500 py-2 px-4 rounded-full border border-solid border-cyan-500 hover:bg-transparent hover:border hover:border-white hover:text-white duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Navber;
