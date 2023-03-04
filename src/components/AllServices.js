const AllServices = () => {
  return (
    <div className="services-wraper mt-20" id="allPacage">
      <div className="section-title text-center flex flex-col ">
        <p className="font-medium">NEW INTERNET PACKAGES ARE HERE!</p>
        <h2 className="text-5xl">Better-Than-Ever Offers</h2>
      </div>
      <div className="services mt-20 flex justify-center gap-10">
        <div className="service w-72 h-[570px] flex flex-col shadow-md rounded">
          <div className="service-name h-16 flex justify-center items-center text-white uppercase text-center bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t">
            <h3 className="font-semibold tracking-widest">basic</h3>
          </div>
          <div className="card ">
            <div className="detals-phots grid grid-col grid-cols-3 bg-gray-200 relative">
              <div className="mbps col-span-2 px-5 py-4">
                <p className="uppercase text-cyan-500/90 font-light text-sm">
                  Internet
                </p>
                <h4 className="text-2xl font-medium">80 Mbps</h4>
                <p className="font-light text-sm text-gray-500">
                  Download speeds
                </p>
                <p className="text-xl font-light text-cyan-500">TV</p>
                <p className="text-3xl font-medium">125+</p>
                <span className="text-gray-500">Chanels</span>
              </div>
              <div className="phto col-span-1 absolute right-3 top-5">
                <img src="https://webdesign-finder.com/jelyco/wp-content/uploads/2019/07/price-img1-1.png" />
              </div>
            </div>
            <div className="description mt-5">
              <ul class="list-disc list-inside px-5 flex flex-col gap-2 text-gray-700">
                <li>Multi-device streaming</li>
                <li>Download shows quickly</li>
                <li>Download large files</li>
              </ul>
              <p className="px-5 flex items-center">
                <span className="text-xl">$</span>
                <span className="text-4xl font-medium">39</span>
                <span className="text-xl font-normal">.99/Mo</span>
              </p>
            </div>
            <div className="btn mt-3 px-5">
              <button
                className=" inline-block  bg-cyan-400 py-2  px-5 text-white rounded-full border border-solid border-cyan-500 hover:bg-transparent hover:border
                hover:text-cyan-500 
                border-hover:border-cyan-500 duration-300"
              >
                Shop Now ➤
              </button>
            </div>
            {/* -----------// PREMIUM ---------------*/}
          </div>
        </div>
        <div className="service w-72 h-[570px] flex flex-col shadow-md rounded">
          <div className="service-name h-16 flex justify-center items-center text-white uppercase text-center bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t">
            <h3 className="font-semibold tracking-widest">PREMIUM</h3>
          </div>
          <div className="card ">
            <div className="detals-phots grid grid-col grid-cols-3 bg-gray-200 relative">
              <div className="mbps col-span-2 px-5 py-4">
                <p className="uppercase text-cyan-500/90 font-light text-sm">
                  Internet
                </p>
                <h4 className="text-2xl font-medium">160 Mbps</h4>
                <p className="font-light text-sm text-gray-500">
                  Download speeds
                </p>
                <p className="text-xl font-light text-cyan-500">TV</p>
                <p className="text-3xl font-medium">200+</p>
                <span className="text-gray-500">Chanels</span>
              </div>
              <div className="phto col-span-1 absolute right-3 top-5">
                <img src="https://webdesign-finder.com/jelyco/wp-content/uploads/2019/07/price-img2-1.png" />
              </div>
            </div>
            <div className="description mt-5">
              <ul class="list-disc list-inside px-5 flex flex-col gap-2 text-gray-700">
                <li>Multi-device streaming</li>
                <li>Download shows quickly</li>
                <li>Download large files</li>
              </ul>
              <p className="px-5 flex items-center">
                <span className="text-xl">$</span>
                <span className="text-4xl font-medium">89</span>
                <span className="text-xl font-normal">.99/Mo</span>
              </p>
            </div>
            <div className="btn mt-3 px-5">
              <button
                className=" inline-block  bg-cyan-400 py-2  px-5 text-white rounded-full border border-solid border-cyan-500 hover:bg-transparent hover:border
                hover:text-cyan-500 
                border-hover:border-cyan-500 duration-300"
              >
                Shop Now ➤
              </button>
            </div>
          </div>
        </div>

        {/*---------------- ULTRA -------------*/}

        <div className="service w-72 h-[570px] flex flex-col shadow-md rounded">
          <div className="service-name h-16 flex justify-center items-center text-white uppercase text-center bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t">
            <h3 className="font-semibold tracking-widest">ULTRA</h3>
          </div>
          <div className="card ">
            <div className="detals-phots grid grid-col grid-cols-3 bg-gray-200 relative">
              <div className="mbps col-span-2 px-5 py-4">
                <p className="uppercase text-cyan-500/90 font-light text-sm">
                  Internet
                </p>
                <h4 className="text-2xl font-medium">300 Mbps</h4>
                <p className="font-light text-sm text-gray-500">
                  Download speeds
                </p>
                <p className="text-xl font-light text-cyan-500">TV</p>
                <p className="text-3xl font-medium">280+</p>
                <span className="text-gray-500">Chanels</span>
              </div>
              <div className="phto col-span-1 absolute right-3 top-5">
                <img src="https://webdesign-finder.com/jelyco/wp-content/uploads/2019/07/price-img3-1.png" />
              </div>
            </div>
            <div className="description mt-5">
              <ul class="list-disc list-inside px-5 flex flex-col gap-2 text-gray-700">
                <li>Multi-device streaming</li>
                <li>Download shows quickly</li>
                <li>Download large files</li>
              </ul>
              <p className="px-5 flex items-center">
                <span className="text-xl">$</span>
                <span className="text-4xl font-medium">139</span>
                <span className="text-xl font-normal">.99/Mo</span>
              </p>
            </div>
            <div className="btn mt-3 px-5">
              <button
                className=" inline-block  bg-cyan-400 py-2  px-5 text-white rounded-full border border-solid border-cyan-500 hover:bg-transparent hover:border
                hover:text-cyan-500 
                border-hover:border-cyan-500 duration-300"
              >
                Shop Now ➤
              </button>
            </div>
          </div>
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

export default AllServices;
