import { WiCloudy } from "react-icons/wi";
import { TfiWorld } from "react-icons/tfi";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

const NetworkSolutions = () => {
  return (
    <div className=" flex flex-col items-center">
      <h2 className="mt-20 text-center text-5xl">
        Network Solutions From WaveFly
      </h2>

      <div className="cards mt-20 flex gap-10 mx-auto justify-center ">
        <div className="card w-52 h-52 shadow flex flex-col gap-2 justify-center items-center p-7 ">
          <span className="text-5xl text-cyan-500">
            <WiCloudy />
          </span>
          <h4 className="text-3xl font-extralight text-gray-900">Cloud</h4>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="card w-52 h-52 shadow flex flex-col gap-2 justify-center items-center p-7 ">
          <span className="text-4xl text-cyan-500">
            <TfiWorld />
          </span>
          <h4 className="text-3xl font-extralight">Networking</h4>
          <p className="text-center text-gray-500">
            Adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className="card w-52 h-52 shadow flex flex-col gap-2 justify-center items-center p-7 ">
          <span className="text-4xl text-cyan-500">
            <CiMobile3 />
          </span>
          <h4 className="text-3xl font-extralight">Mobility</h4>
          <p className="text-center text-gray-500">
            Incididunt ut labore et dolore aliqua.
          </p>
        </div>
        <div className="card w-52 h-52 shadow flex flex-col gap-2 justify-center items-center p-7 ">
          <span className="text-4xl text-cyan-500">
            <MdOutlineSecurityUpdateGood />
          </span>
          <h4 className="text-3xl font-extralight">Cybersecurity</h4>
          <p className="text-center text-gray-500">
            Utenim aminim veniam quis nostrud.
          </p>
        </div>
      </div>

      <div className="detals mt-10 flex flex-col items-center">
        <button className="btn bg-cyan-400 py-5 px-6 rounded-full border border-solid border-cyan-500 hover:bg-transparent hover:border border-hover:border-cyan-500 duration-300 align-middle">
          Request A Quote
        </button>
        <p className="mt-5 text-gray-500">
          For more information call us at 800.567.1234 or chat live with WaceFly
          representative.
        </p>
      </div>
    </div>
  );
};

export default NetworkSolutions;
