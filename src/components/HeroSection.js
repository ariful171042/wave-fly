const data = {
  img: "https://images.pexels.com/photos/4069291/pexels-photo-4069291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const HeroSection = () => {
  return (
    <div className="hero-section  grid grid-cols-2 gap-20 overflow-hidden ">
      <div className="hero">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${data.img})` }}
        >
          <div className="detals text-white container mx-auto flex flex-col items-start justify-center h-full gap-5">
            <p className="font-medium ">WaceFly BroadBand Internet</p>
            <h1 className=" title text-7xl space-font w-3/6">
              Our Plans Give You More Than Ever
            </h1>
            <p className="w-">
              Surf,stream, chat and game with fast speeds. <br /> Equipment
              included and no extra monthly fees.
            </p>
            <p className="flex justify-center items-center">
              <span className="text-2xl">$</span>
              <span className="font-bold text-5xl">39</span>
              <span className="text-3xl">.99/Mo</span>
            </p>
            <button className="btn inline-block bg-cyan-400 py-5 px-6 rounded-full border border-solid border-cyan-500 hover:bg-transparent hover:border border-hover:border-cyan-500 duration-300">
              Request A Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
